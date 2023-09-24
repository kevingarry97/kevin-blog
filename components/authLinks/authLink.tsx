"use client";
import Link from "next/link";
import styles from "./authLink.module.css";
import { useState } from "react";

type Status = 'authenticated' | 'unauthenticated' | 'notauthenticated';

const status: Status = "unauthenticated"

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} >
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        {!open ? (
          <>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </>
        ) : (
          <div style={{fontSize: 28, fontWeight: 'bolder', marginTop: -10, marginLeft: 10}}>X</div>
        )}
        
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
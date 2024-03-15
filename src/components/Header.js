import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="https://fermion.in/images/logo.svg"
            width={130}
            height={40}
          />
        </Link>
        <div className={styles.navigation}>
          <Link href="/about" className={styles.text}>
            About us
          </Link>
          <Link href="/careers" className={styles.text}>
            Careers
          </Link>
          <Link href="/blog" className={styles.text}>
            Blog
          </Link>
          <Link href="/services" className={styles.text}>
            Services
          </Link>
          <Link href="/caseStudies" className={styles.text}>
            Case Studies
          </Link>
          <Link href="/caseStudies" className={styles.text}>
            Get In Touch
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;

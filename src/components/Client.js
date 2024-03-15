"use client";
import React from "react";
import styles from "@/styles/client.module.css";

import MultipleItems from "./MultipleItems";
export const Client = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
          Become a part of our esteemed clientele to achieve digital Supermacy
        </div>
        <div className={styles.list}>
          <MultipleItems />
        </div>
      </div>
    </main>
  );
};
export default Client;

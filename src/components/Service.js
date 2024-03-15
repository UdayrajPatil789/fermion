// import React from 'react'
// import styles from '@/styles/home.module.css'
// import Image from 'next/image'

// export const Service = () => {
//   return (
//     <div className={styles.container}>
//     <div className={styles.title}>Services we offer</div>
//     <div className={styles.serviceplot}>
//       <div className={styles.imgwrap}>
//         <div className={styles.imgplot}>
//           <div className={styles.swiper}>
//             <div>
//               {/* <img src="https://fermion.in/images/E-commerce-Development.jpg" /> */}
//               <Image
//                 src="https://fermion.in/images/E-commerce-Development.jpg"
//                 alt="img"
//                 height={500}
//                 width={700}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }
// export default  Service;
"use client";
import React, { useState } from "react";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://fermion.in/images/E-commerce-Development.jpg",
    "https://fermion.in/images/web-development.jpg",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= images.length ? images.length - 1 : nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className={styles.serviceplot}>
        <div className={styles.imgwrap}>
          <div className={styles.imgplot}>
            <div className={styles.swiper}>
              <div>
                <Image
                  src={images[currentIndex]}
                  alt="img"
                  height={500}
                  width={700}
                />
              </div>
              {/* <div className={styles.arrowButtons}>
                <button onClick={handlePrev}>&#8249;</button>
                <button onClick={handleNext}>&#8250;</button>
              </div> */}
            </div>
          </div>
        </div>
        <div className={styles.serviceblock}>
          <div className={styles.serviceoffers}>
            <div className={styles.servicewrapper}>
              <div className={styles.blockContent}>
                <div className={styles.blocktitle}>E-commerce Development</div>
                <div className={styles.blocktext}>
                  Fermion is a one of the leading e-commerce development
                  companies in India that delivers comprehensive e-commerce
                  website development solutions to its clients, spread across
                  the world.{" "}
                </div>
                <CustomButton title="Know more" className='bg-white' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

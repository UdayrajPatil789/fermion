import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "@/styles/client.module.css";

function MultipleItems() {
  
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return <div onClick={onClick} className={styles.CustomPrevArrow}></div>;
  };
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return <div onClick={onClick} className="custom-next-arrow"></div>;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image
            src="https://fermion.in/images/client/timesnow-h.jpg"
            alt="logo"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div>
          <Image
            src="https://fermion.in/images/client/Isha-foundations-h.jpg"
            alt="logo"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div>
          <Image
            src="https://fermion.in/images/client/nykaa-fashion.jpg"
            alt="logo"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div>
          <Image
            src="https://fermion.in/images/client/utkarsh-bank-h.jpg"
            alt="logo"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div>
          <Image
            src="https://fermion.in/images/client/aza-h.jpg"
            alt="logo"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div>
          <Image
            src="https://fermion.in/images/client/sony-h.jpg"
            alt="logo"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div>
          <Image
            src="https://fermion.in/images/client/india-circus-h.jpg  "
            alt="logo"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div>
          <Image
            src="https://fermion.in/images/client/myitReturn-h.jpg"
            alt="logo"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div>
          <Image
            src="https://fermion.in/images/client/vkaao-h.jpg"
            alt="logo"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;

import styles from "./Dropdown.module.sass";
import React, { useState } from "react";
import { category } from "../../data/category";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function Dropdown({
  filterProducts,
  products,
  indexItem,
  button,
  setButtonList,
  buttonList,
}) {
  const [isActive, setIsActive] = useState(false);

  function resetButtonList(index) {
    if (button !== index) setButtonList("");
    else return;s
  }
  return (
    <>
      <Swiper
        modules={[Navigation]}
        className={styles.Swiper}
        spaceBetween={20}
        slidesPerView={6}
        navigation
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        // scrollbar={{ draggable: true }}
      >
        {category.map((i) => (
          <SwiperSlide className={styles.SwiperSlide}>{i.name}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

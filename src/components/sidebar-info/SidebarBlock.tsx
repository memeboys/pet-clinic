import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/swiper.scss';
import classes from './SidebarInfo.module.scss';

type PropTypes = {
  header: string;
  text: string;
};
const SidebarBlock: React.FC<PropTypes> = ({ header, text }) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <div className={classes.block}>
      <header className={classes.header}>{header}</header>
      <Swiper
        tag="main"
        className={classes.swiper}
        modules={[Navigation]}
        loop
        speed={500}
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={1}
        simulateTouch={false}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={(swiper) => {
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide className={classes.span} tag="span">{text}</SwiperSlide>
        <SwiperSlide className={classes.span} tag="span">{text}</SwiperSlide>
        <SwiperSlide className={classes.span} tag="span">{text}</SwiperSlide>
        <div className={classes.swiperNavPrev} ref={navigationPrevRef} />
        <div className={classes.swiperNavNext} ref={navigationNextRef} />
      </Swiper>
    </div>
  );
};

export default SidebarBlock;

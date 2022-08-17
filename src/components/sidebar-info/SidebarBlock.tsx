/* eslint-disable @typescript-eslint/no-non-null-assertion, no-param-reassign */
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
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
  SwiperCore.use([Navigation]);

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
          nextEl: navigationPrevRef.current,
        }}
        onInit={(swiper: SwiperCore) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation!.prevEl = navigationPrevRef.current;
            swiper.params.navigation!.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
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

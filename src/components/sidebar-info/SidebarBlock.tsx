import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/swiper.scss';
import { Navigation } from 'swiper';
import classes from './SidebarInfo.module.scss';

type PropTypes = {
  header: string;
  text: string;
};

const SidebarBlock: React.FC<PropTypes> = ({ header, text }) => (
  <div className={classes.block}>
    <header className={classes.header}>{header}</header>
    <Swiper
      tag="main"
      style={{ width: 240 }}
      modules={[Navigation]}
      navigation
      loop
      speed={500}
      spaceBetween={0}
      slidesPerView={1}
      slidesPerGroup={1}
      simulateTouch={false}
    >
      <SwiperSlide className={classes.span} tag="span">{text}</SwiperSlide>
      <SwiperSlide className={classes.span} tag="span">{text}</SwiperSlide>
      <SwiperSlide className={classes.span} tag="span">{text}</SwiperSlide>
    </Swiper>
  </div>
);

export default SidebarBlock;

import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setIndex } from '../../redux/slices/reportSlice';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';

import img1 from '../../assets/images/true-photo/2024-04-02_Z5Z_7450.jpg';
import img2 from '../../assets/images/true-photo/2024-04-02_Z5Z_7458.jpg';
import img3 from '../../assets/images/true-photo/2024-04-02_Z5Z_7459.jpg';
import img4 from '../../assets/images/true-photo/2024-04-02_Z5Z_7482.jpg';

export const data = [img1, img2, img3, img4];

const Slider = (props) => {
  const { data } = props;
  // const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const index = useSelector((state) => state.report.index);
  const images = useSelector((state) => state.report.byImage);
  // if (!images.length) return [];
  console.log(JSON.stringify(images));

  // Обработчики
  // const handlePrevClick = () => {
  //   if (index > 0) {
  //     dispatch(setIndex(index - 1));
  //   }
  // };

  // const handleNextClick = () => {
  //   if (index < images.length - 1) {
  //     dispatch(setIndex(index + 1));
  //   }
  // };

  const handlePrevClick = () => {
    dispatch(setIndex(index > 0 ? index - 1 : images.length - 1));
  };

  const handleNextClick = () => {
    dispatch(setIndex(index < images.length - 1 ? index + 1 : 0));
  };

  const items = images.map((item, i) => {
    return (
      <SwiperSlide key={i}>
        <div className="slider__img">
          <div className="slider__number">{`Дом ${i + 1}`}</div>
          <img
            src={
              `https://msi.stage-detection.contextmachine.cloud/get_predicted_images?uid=${item.predicted_image}` ||
              null
            }
            // src={item}
            alt="photo"
          />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="slider">
      <Swiper
        className="swiper"
        slidesPerView={1}
        loop={true}
        autoHeight={false}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation, Pagination]}
        // breakpoints={{
        //   320: {
        //     slidesPerView: 1,
        //     spaceBetween: 20
        //   },
        //   480: {
        //     slidesPerView: 1,
        //     spaceBetween: 30
        //   },
        // }}
      >
        {items}
      </Swiper>
      <button className="swiper-button-prev" onClick={handlePrevClick}>
        <VscChevronLeft className="swiper-button-icon" />
      </button>
      <button className="swiper-button-next" onClick={handleNextClick}>
        <VscChevronRight className="swiper-button-icon" />
      </button>
    </div>
  );
};

export default Slider;

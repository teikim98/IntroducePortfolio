import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Img from "img/HomeImg.webp";
import Img2 from "img/HomeImg3.webp";
import Img3 from "img/HomeImg2.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

//전체 컨테이너
const Container = styled.main`
  position: absolute;
  top: 70px;
  bottom: 70px;
  left: 70px;
  right: 70px;
  overflow: hidden;

  & > div {
    height: 100%;
    display: flex;
  }
`;
//사진 구역
const Picture = styled.div`
  
    .bgCover{

        background-size: cover;
        height: 650px;
        border-radius: 3vmin;
        
    }
    
  
  &.active {
    width: 30%;
    margin-right: 25px;
  }
  position: relative;
  & > img {
    width: auto;
    height: 100%;
    object-fit: fill;
  }
  width: 0%;
  transition: 0.5s;
`;
//컨텐츠
const Contents = styled.div`
  border: 4px solid ;
  border-radius: 3vmin;
  width: 100%;
  box-shadow: -5px -5px 5px 5px rgba(163,163,163,0.6) inset; 
  background-color: #fff;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &.onActive {
    width: calc(100%-35%);
  }
  transition: 0.5s;
`;

function Layout() {
  const location = useLocation().pathname;

  return (
    <Container>
      <div>
        <Picture
          className={location === "Home" || location === "/" ? "active" : ""}
        >
          <Swiper
            modules={ [Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
          >
            <SwiperSlide className='bgCover' style={{backgroundImage : `url(${Img})`}}>
            </SwiperSlide>
            <SwiperSlide  className='bgCover' style={{backgroundImage : `url(${Img2})`}}>
            </SwiperSlide>
            <SwiperSlide  className='bgCover' style={{backgroundImage : `url(${Img3})`}}>
            </SwiperSlide>
          </Swiper>
        </Picture>
        <Contents
          className={location === "Home" || location === "/" ? "onActive" : ""}
        >
          <Outlet />
        </Contents>
      </div>
    </Container>
  );
}

export default Layout;

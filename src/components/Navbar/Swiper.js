import React from "react";
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, {
    Pagination
} from 'swiper';

SwiperCore.use([Pagination]);


export default function App() {



    return (
        <>
            <>
                <Swiper  freeMode={true}

                    breakpoints={{
                        "220": {
                            "slidesPerView": 2,
                            "spaceBetween": 10
                        },
                        "359": {
                            "slidesPerView": 3,
                            "spaceBetween": 20
                        },
                        "640": {
                            "slidesPerView": 4,
                            "spaceBetween": 40
                        },
                        "768": {
                            "slidesPerView": 5,
                            "spaceBetween": 50
                        }
                    }}

                    className="mySwiper">
                    <SwiperSlide><Link className="nav-link active" to="/">Home</Link></SwiperSlide>
                    {/* <SwiperSlide><Link className="nav-link" to="/national">National</Link></SwiperSlide> */}
                    <SwiperSlide><Link className="nav-link" to="/international">World</Link></SwiperSlide>
                    <SwiperSlide><Link className="nav-link" to="/science">Science</Link></SwiperSlide>
                    <SwiperSlide><Link className="nav-link" to="/technology">Tech</Link></SwiperSlide>
                    <SwiperSlide><Link className="nav-link" to="/business">business</Link></SwiperSlide>
                    <SwiperSlide><Link className="nav-link" to="/sports">Sports</Link></SwiperSlide>
                    <SwiperSlide><Link className="nav-link" to="/health">health</Link></SwiperSlide>
                    <SwiperSlide><Link className="nav-link" to="/entertainment">entertainment</Link></SwiperSlide>

                </Swiper>
            </>
        </>
    )
}
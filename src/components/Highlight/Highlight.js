import React from 'react'
import "./Highlight.css"

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, {
    Pagination
} from 'swiper';

SwiperCore.use([Pagination]);




export default function App({ data }) {



    return (
        Object.keys(data).length ?
            <>
            <div className="highlightHeading">
            <h3 >Highlights</h3>
            </div>
                <Swiper slidesPerView={1} spaceBetween={10} pagination={{
                    "clickable": true
                }} breakpoints={{
                    "640": {
                        "slidesPerView": 2,
                        "spaceBetween": 10
                    },
                    "768": {
                        "slidesPerView": 3,
                        "spaceBetween": 10
                    },
                    "1024": {
                        "slidesPerView": 3,
                        "spaceBetween": 10
                    }
                }} className="mySwiper2">
                    <SwiperSlide>
                        <div className="highlight" style={{ backgroundImage: `url(${data[19].urlToImage})` }} >
                            <a href={data[19].url} target="_blank" rel="noreferrer" className="text-center" style={{ padding: "3px" }}>{data[19].title}</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="highlight" style={{ backgroundImage: `url(${data[18].urlToImage})` }} >
                            <a href={data[18].url} target="_blank" rel="noreferrer"  className="text-center" style={{ padding: "3px" }}>{data[18].title}</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="highlight" style={{ backgroundImage: `url(${data[17].urlToImage})` }} >
                            <a href={data[17].url} target="_blank" rel="noreferrer" className="text-center" style={{ padding: "3px" }}>{data[17].title}</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="highlight" style={{ backgroundImage: `url(${data[16].urlToImage})` }} >
                            <a href={data[16].url} target="_blank" rel="noreferrer" className="text-center" style={{ padding: "3px" }}>{data[16].title}</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="highlight" style={{ backgroundImage: `url(${data[15].urlToImage})` }} >
                            <a href={data[15].url} target="_blank" rel="noreferrer" className="text-center" style={{ padding: "3px" }}>{data[15].title}</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
            : "Loading"
    )
}
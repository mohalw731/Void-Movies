import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import MovieBanner from './ui/MovieBanner';

function BannerSwiper({ popularMovie }) {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                popularMovie.map(data =>
                    <SwiperSlide key={data?.id}>
                        <MovieBanner data={data}/>
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}

export default BannerSwiper

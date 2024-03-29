import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";

SwiperCore.use([Pagination, Autoplay]);
function Brand({ brandItems }) {
  const brandImage = `relative opacity-40 grayscale-[100px] transition duration-500 hover:grayscale-[0] hover:opacity-100`;
  return (
    <div className="brand-area bg-azure">
      <div className="container">
        <div className="columns-1 border-[#dfdfdf]">
          <Swiper
            // autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="bg-zinc-700 bg-opacity-50 "
            pagination={false}
            spaceBetween={30}
            loop={false}
            breakpoints={{
              1200: {
                slidesPerView: 5,
              },
              992: {
                slidesPerView: 4,
              },
              576: {
                slidesPerView: 3,
              },
              480: {
                slidesPerView: 2,
              },
            }}
          >
            {brandItems?.map((brandItem, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="brand-item">
                    <div className={brandImage}>
                      <div className="absolute inset-0 bg-gray-700 bg-opacity-50">
                        <Link href="#">
                          <Image
                            src={brandItem?.clientimage}
                            alt={brandItem?.title}
                            width={210}
                            height={90}
                            layout="responsive"
                            quality={70}
                            className="bg-gradient-to-r from-zinc-800 to-zinc-900"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Brand;

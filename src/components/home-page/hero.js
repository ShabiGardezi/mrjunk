import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import * as FaIcons from "react-icons/fa";
// import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Hero({ heroItems }) {
  const heroImage = `relative w-full md:h-[750px] h-[725px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-30 before:z-[1] before:pointer-events-none overflow-hidden`;
  const heroContent = `absolute sm:w-[calc(100%_-_100px)] left-auto top-1/2 transform translate-y-[-50%] z-[2]`;
  return (
    <Swiper
      className="hero-area"
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      speed={1000}
      pagination={{ clickable: true, type: "bullets" }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
    >
      {heroItems?.map((heroItem, i) => {
        const TwitterIcon = FaIcons[heroItem?.twitterIcon];
        const FacebookIcon = FaIcons[heroItem?.facebookIcon];
        const GoogleIcon = FaIcons[heroItem?.googleIcon];
        return (
          <SwiperSlide
            className="hero-item  absolute inset-0 bg-gray-700 bg-opacity-50"
            key={i}
          >
            <div className={heroImage}>
              <Image
                src={heroItem?.image}
                alt={heroItem?.title}
                layout="fill"
                objectFit="cover"
                quality={70}
                priority
              />
            </div>
            <div className="absolute inset-0 bg-zinc-900 bg-opacity-[0.40]">
              <div className="container custom-container">
                <div className={heroContent}>
                  <div className="hero-inner grid grid-cols-12">
                    <div className="hero-year col-span-2 text-white md:block hidden">
                      <div className="social-holder flex flex-col justify-between h-full">
                        <ul className="social-box mb-[-140px]">
                          <li className="mb-[25px]">
                            <a
                              href="https://m.me/danny.charles.7568"
                              aria-label="Facebook"
                            >
                              <FacebookIcon />
                            </a>
                          </li>
                          <li className="mb-[25px]">
                            <a
                              href="https://m.me/danny.charles.7568"
                              aria-label="Facebook"
                            >
                              <GoogleIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:col-span-10 col-span-12">
                      <h2
                        className="md:text-[80px] md:leading-[80px] text-[40px] leading-[1.2] text-white mb-[40px] hero-slidedown delay-[600ms]"
                        // dangerouslySetInnerHTML={{
                        //   __html: heroItem?.heroTitle,
                        // }}
                      ></h2>
                      {/* {i % 2 === 1 && (
                        <div className="hero-slidedown delay-[1500ms] mt-6">
                          <Link href="tel:+1(509) 475-8228">
                            <span className="boxed-btn text-white text-[18px] leading-[30px]">
                              Call Now for a free, no obligation quote!
                            </span>
                          </Link>
                        </div>
                      )} */}
                      <div className="hero-slidedown delay-[1500ms] mt-6">
                        <Link href="tel:+1(509) 475-8228">
                          <span className="boxed-btn text-white text-[18px] leading-[30px]">
                            Call Now for a free, no obligation quote!
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info text-white font-semibold flex flex-col transition-all text-xl absolute bottom-[100px] sm:right-[70px] right-auto z-[2]">
                  <Link href="tel:+contact@Rustictudio.co">
                    <span className="hover:text-primary">
                      {heroItem?.heroContactInfo}
                    </span>
                  </Link>
                  <Link href="tel:+0084-912-3548-073">
                    <span className="hover:text-primary text-white font-semibold transition-all mb-2">
                      {heroItem?.heroNumber}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mouse-btn-wrap absolute bottom-[30px] left-1/2 -translate-x-1/2">
              <Link href="#about" passHref>
                <ul className="mouse-btn-down">
                  <li className="chevron animate-move"></li>
                  <li className="chevron animate-move2"></li>
                  <li className="chevron animate-move3"></li>
                </ul>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Hero;

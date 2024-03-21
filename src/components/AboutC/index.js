import React from "react";
import Link from "next/link";
import Image from "next/image";
import junkremoval from "../../../public/couch-removal.png";


const AboutC = () => {
  return (
    <>
    <div id="about" className="about-area md:pt-[150px] pt-[50px]">
      <div className="container max-lg:max-w-full fixed-lg:pr-0">
        <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse items-center justify-center">
          <div className="about-content text-center lg:text-left max-md:pt-10">
            <h2 className="lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]">
              About Us
            </h2>
            <p className="text-[14px] leading-[25px] mb-[15px] lg:max-w-[490px] text-black">
              My name is Dan Collins, proprietor of Mr. Junkaway. The company
              began in 2017 to fill a niche that seemed promising and fun. After
              40 some years in construction I had found a type of service that
              was in perpetual demand, improved my physical condition and held
              the potential for building a strong family of loyal customers.
            </p>
            <p className="text-[14px] leading-[25px] mb-[15px] lg:max-w-[490px] text-black">
              We feel that the services we provide contribute a little something
              toward improving life quality within the communities we serve.
              That is something we truly enjoy. After 6 years in this business
              our company now receives around 30% of new work orders from
              customers we’ve previously served. We hope you will allow us to
              show you why!
            </p>
            <Link
              href="/aboutus"
              className="boxed-btn text-[18px] leading-[30px] mt-20"
            >
              More About Us
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-[590px] h-[460px] relative">
              <Image
                src={junkremoval}
                alt="Service Image"
                className="absolute inset-0 object-cover"
                layout="fill"
                quality={70}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default AboutC;

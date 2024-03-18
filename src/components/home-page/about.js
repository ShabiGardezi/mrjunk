// import { urlFor } from "@/lib/sanityImgUrl";
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

const builder = imageUrlBuilder(client); //image from sanity
function urlFor(source) {
  return builder.image(source);
}

function About(props) {
  const { about } = props;
  let info = about[0];
  console.log(info);

  const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
  const desc = `text-[14px] leading-[25px] mb-[15px] lg:max-w-[490px] text-black`;
  const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;
  return (
    <div id="about" className="about-area md:pt-[150px] pt-[50px]">
      <div className="container max-lg:max-w-full fixed-lg:pr-0">
        <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse">
          <div className="about-content max-md:pt-10">
            <h2 className={title}>{info?.title}</h2>
            <PortableText
              value={info.body}
              // components={PortableTextComponent}
            />
            {/* <p className={desc}>
              My name is Dan Collins, proprietor of Mr. Junkaway. The company
              began in 2017 to fill a niche that seemed promising and fun. After
              40 some years in construction I had found a type of service that
              was in perpetual demand, improved my physical condition and held
              the potential for building a strong family of loyal customers.
            </p>
            <p className={desc}>
              The satisfaction of a job well done is a win for the customers and
              for our service team. The community benefits from tidier yards and
              alleyways. People who’ve been living in substandard conditions for
              a variety of reasons get to enjoy a healthier environment. Elderly
              and disabled folks get things done without hurting themselves or
              living in a mess they can’t change. And, everyone benefits by
              checking a big item off their “To Do” list.
            </p>
            <p className={desc}>
              We feel that the services we provide contribute a little something
              toward improving life quality within the communities we serve.
              That is something we truly enjoy. After 5 years in this business
              our company now enjoys around 30% of new work orders from
              customers we’ve previously served. We hope you will allow us to
              show you why!
            </p> */}
            <Link
              href="/about"
              className="boxed-btn text-[18px] leading-[30px] mt-20"
            >
              More About Us
            </Link>
          </div>
          <div className={aboutImage}>
            <Image
              // src="/images/about/img-six.jpg"
              src={urlFor(info.mainImage).url()}
              alt="Service Image"
              className="z-[1]"
              width={390}
              height={760}
              quality={70}
              // layout="fixed"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

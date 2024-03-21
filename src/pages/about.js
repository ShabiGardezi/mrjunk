import Head from "next/head";
import { Fragment } from "react";
import HeaderOne from "../components/header/header-1";
import Services from "../components/home-page/services";
import About from "../components/home-page/about";
import Testimonial from "../components/home-page/testimonial";
import { getAllItems } from "../lib/items-util";
import Brand from "../components/home-page/brand";
import PageBanner from "../components/page-banner/index";
import Team from "../components/team";
import { createClient } from "next-sanity";
import TitleWithText from "@/components/TitleWithText";
import backgroundImage from '../../public/images/service/img-seven.jpg'


const client = createClient({
  projectId: "3ykwrou0",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-08-31", // use a UTC date string
});

function AboutPage(props) {
  return (
    <Fragment>
      <Head>
        <title>About</title>
      </Head>
      <HeaderOne />
      <TitleWithText 
      title='About'
      backgroundImage={backgroundImage.src} />
      <About about={props.logo} />
      <Services services={props.services} />
      <Testimonial testimonialItems={props.testimonialItems} />
      <Brand brandItems={props.brandItems} />
      <Team teamItems={props.teamItems} />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const services = getAllItems("services");
  const testimonialItems = getAllItems("testimonial");
  const brandItems = getAllItems("brands");
  const teamItems = getAllItems("teams");
  const logo = await client.fetch(`*[_type == "about"]`);

  return {
    props: {
      services,
      testimonialItems,
      brandItems,
      teamItems,
      logo,
    },
  };
}

export default AboutPage;

// pages/services/residential.js

import React, { Fragment } from "react";
import TitleWithText from "@/components/TitleWithText";
import backgroundImage from "../../../public/images/service/img-seven.jpg";
import HeaderOne from "@/components/header/header-1";
import RealtorServicesCards from "@/components/RealtorServicesCards";

const RealtorServicesPage = () => {
  return (
    <Fragment>
      <HeaderOne />
      <div>
        <TitleWithText
          title="Realtor Services"
          // text={`Services`}
          // text2={`Residential Services`}
          backgroundImage={backgroundImage.src} // Access the URL of the image
        />
      </div>
      <RealtorServicesCards />
    </Fragment>
  );
};

export default RealtorServicesPage;

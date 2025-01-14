import React from "react";
import Subheads from "../../global-components/subheads";
import ServiceCard from "../serviceCard";

const ServicesSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 lg:gap-20">
      <Subheads
        title={"Services"}
        id={"services"}
        desc={
          "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        }
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <ServiceCard
          title={"Search Engine Optimization"}
          theme={"light"}
          image={"/assets/seo.svg"}
        />
        <ServiceCard
          title={"Pay-per-click Advertising"}
          theme={"green"}
          image={"/assets/ppc.svg"}
        />
        <ServiceCard
          title={"Social Media Marketing"}
          theme={"dark"}
          image={"/assets/ssm.svg"}
        />
        <ServiceCard
          title={"Email Marketing"}
          theme={"light"}
          image={"/assets/em.svg"}
        />
        <ServiceCard
          title={"Content Creation"}
          theme={"green"}
          image={"/assets/cc.svg"}
        />
        <ServiceCard
          title={"Analytics and Tracking"}
          theme={"dark"}
          image={"/assets/at.svg"}
        />
      </div>
    </div>
  );
};

export default ServicesSection;

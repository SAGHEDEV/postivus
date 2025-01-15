import React from "react";
import Header from "../../../components/reusable-components/Header";
import { logos } from "../../../components/global-components/data";
import LandingWelcomeComponent from "./../../../components/reusable-components/landingComponents/landingWelcomeComponent";
import ImageSlider from "./../../../components/reusable-components/imageSlide";
import ServicesSection from "./../../../components/reusable-components/landingComponents/servicesSection";
import LandingRequest from "./../../../components/reusable-components/landingRequest";
import LandingCaseStudy from "./../../../components/reusable-components/landingComponents/landingCaseStudy";
import LandingWorkProcess from "./../../../components/reusable-components/landingComponents/landignWorkProcess";
import TeamSection from "./../../../components/reusable-components/landingComponents/TeamSection";
import TestimonialSection from "./../../../components/reusable-components/landingComponents/testimonialSection";
import ContactSection from "../../../components/reusable-components/landingComponents/contactSection";
import Footer from "../../../components/reusable-components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <div className="lg:container m-auto w-full p-3 md:p-0 flex flex-col gap-10 lg:gap-24 md:mb-20">
        <LandingWelcomeComponent />
        <ImageSlider images={logos} />
        <ServicesSection />
        <LandingRequest />
        <LandingCaseStudy />
        <LandingWorkProcess />
        <TeamSection />
        <TestimonialSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
};

export default Index;

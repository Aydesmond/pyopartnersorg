import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Text, Box, Center } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Volunteer from "../../components/Volunteer";
import NewsLetter from "../../components/NewsLetter";
import newBg from "../../assets/images/newBg.jpg";

const About = () => {
  const navigate = useNavigate();
  const donateSection = useRef(null);
  const aboutSection = useRef(null);
  const homeSection = useRef(null);
  const contactSection = useRef(null);

  const handleDonateNavigate = () => {
    navigate("/");
  };

  const handleAboutNavigate = (ref) => {
    navigate("/about");
  };

  const handleHomeNavigate = (ref) => {
    navigate("/");
  };

  const handleContactNavigate = (ref) => {
    navigate("/");
  };

  const handleMissionNavigate = () => {
    navigate("/ourmission");
  };

  return (
    <>
      <Flex w="100%" direction="column" h="auto">
        {/* <CallModal /> */}
        <Flex
          bgImage={newBg}
          backgroundSize={{ base: "scale-down", md: "cover" }}
          w="100%"
          h={{ base: "auto", md: "auto" }}
          direction="column"
          bgRepeat="no-repeat"
          ref={homeSection}
        >
          <Navbar
            click={handleDonateNavigate}
            about={handleAboutNavigate}
            home={handleHomeNavigate}
            contact={handleContactNavigate}
            ourmission={handleMissionNavigate}
          />
        </Flex>
      </Flex>

      <div className="flex items-center flex-col py-20">
        <h1 className="max-w-lg text-3xl font-bold text-center md:text-4xl md:text-left">
          Who we are
        </h1>
      </div>

      <div className="bg-lightMilk">
        {/* Container On1 */}
        <div className="flex items-center flex-row space-x-5 px-20">
          {/* Item One */}
          <div className="py-5 px-3 w-1/2">
            <p className="max-w-xl text-justify text-lg space-y-1 mt-10">
              PYO Global Partners is a civic organization dedicated to the
              attainment of good governance in Nigeria. We are inspired and
              encouraged by the demonstration of that potential as viewed in the
              public service record of the Vice President of the Federal
              Republic of Nigeria, Professor Yemi Osinbajo. It is for this
              reason we are supporting his presidential aspiration.
            </p>
          </div>

          {/* Item Two */}
          <div className="px-3 w-1/2">
            <p className="max-w-xl text-justify text-lg space-y-1">
              We believe Prof. Osinbajo is an exemplar of good governance and
              his public spirit tallies with our objective to work for and
              ensure the attainment of good in Nigeria and for Nigerians at all
              levels of government.
            </p>
          </div>
        </div>

        {/* Container Two */}
        <div className="flex items-center flex-row space-x-5 px-20">
          {/* Item One */}
          <div className="flex flex-col py-5 px-3 w-1/2 space-x-3">
            <p className="max-w-xl text-justify text-lg mt-10">
              The organization is made up of patriotic Nigerians from all walks
              of life, spread out across the country and dispersed throughout
              the diaspora, who have committed to invest their time and
              resources to ensure a victory for the Vice President both at the
              party primaries and in the general elections. We will also
              identify and support similar public spirited aspirants to other
              elective posts in the country wherever we find such.
            </p>
          </div>

          {/* Item Two */}
          <div className="px-3 w-1/2">
            <p className="max-w-xl text-justify text-lg">
              PYO Global Partners is spearheaded by men and women of renown,
              integrity, young and old Nigerians well-known to the public and
              whose records in the public and private sectors are without
              blemish.
            </p>
          </div>
        </div>

        {/* Container Three */}
        <div className="px-20 py-10">
          <p className="w-3xl text-justify text-lg">
            PYO GLOBAL PARTNERS invite you and all Nigerians of good will to
            join hands to change Nigeria's story and set this country on the
            path to greatness. Become a PYO Global Partner today. Follow the
            instructions on the home page to make your donation.
          </p>
        </div>
      </div>

      <Flex
        bg="white"
        w="100%"
        px={{ base: "20px", md: "150px" }}
        py={{ base: "15px", md: "120px" }}
      >
        <Volunteer />
      </Flex>

      <Flex
        bg="background"
        w="100%"
        px={{ base: "20px", md: "150px" }}
        py={{ base: "10px", md: "80px" }}
        ref={contactSection}
      >
        <NewsLetter />
      </Flex>
      <>
        <Footer />
      </>
    </>
  );
};

export default About;

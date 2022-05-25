import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Text, Box, Center } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Volunteer from "../../components/Volunteer";
import NewsLetter from "../../components/NewsLetter";
import newBg from "../../assets/images/newBg.jpg";
import ProfImage from "../../assets/images/profImage.jpeg";

const OurMission = () => {
  const navigate = useNavigate();
  const donateSection = useRef(null);
  const aboutSection = useRef(null);
  const homeSection = useRef(null);
  const contactSection = useRef(null);
  const volunteer = useRef(null);
  
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

  const handleBoardNavigate = () => {
    navigate("/our-board");
  };

  const handleFaqNavigate = () => {
    navigate("/faq");
  };

  const handleVolunteerNavigate = (ref) => {
    if (ref !== null) {
      window.scrollTo({
        top: volunteer.current.offsetTop,
        behavior: "smooth",
      });
    }
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
            ourboard={handleBoardNavigate}
            faq={handleFaqNavigate}
            volunteer={handleVolunteerNavigate}
          />
        </Flex>
      </Flex>

      <div className="flex items-center flex-col py-20">
        <h1 className="max-w-lg text-3xl font-bold text-center md:text-4xl md:text-left">
          Our Mission
        </h1>
      </div>

      <div className="bg-lightMilk">
        {/* Container On1 */}
        <div className="flex flex-col items-center space-x-5 md:px-20 md:flex-row">
          {/* Item One */}
          <div className="py-5 px-5 md:w-1/2">
            <p className="max-w-xl text-justify text-lg space-y-1">
              PYO Global Partners believe that government belongs to the people
              and not to the individuals who have found their ways to elected or
              appointive positions. Over the years, Nigerians have come to
              perceive elected and appointed officials in high positions and
              offices as Lords and Rulers.
            </p>

            <p className="py-3 max-w-xl text-justify text-lg space-y-1 mt-10">
              PYO GLOBAL PARTNERS are committed to changing the paradigm and the
              presidential aspiration of a genuine servant-leader like Prof.
              Osinbajo, SAN creates the opportunity.
            </p>

            <p className="py-3 max-w-xl text-justify text-lg space-y-1">
              To that end, the group is organizing a mass fund-raising exercise
              for the PYO campaign ---- one in which every Nigerian will be
              presented with an opportunity to play a substantive role in
              determining who becomes the next President of the Federal Republic
              of Nigeria, not simply by voting on election day by which time
              voters are restricted to limited choices, but by being involved
              from the very beginning of the process. It's about an opportunity
              to realise a true leadership transformation.
            </p>
          </div>

          <div className="pr-5 md:px-3 md:w-1/2">
            <img src={ProfImage} alt="prof" />
          </div>
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

export default OurMission;

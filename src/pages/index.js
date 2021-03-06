import React, { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Donate from "../components/Donate";
import Volunteer from "../components/Volunteer";
// import bgPng from "../assets/images/background1.png";
import newBg from "../assets/images/newBg.jpg";

import profPng from "../assets/images/speech.png";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import CallModal from "../components/CallModal";

const Home = () => {
  const navigate = useNavigate();
  const donateSection = useRef(null);
  const aboutSection = useRef(null);
  const homeSection = useRef(null);
  const contactSection = useRef(null);
  const volunteer = useRef(null);

  const handleDonateNavigate = (ref) => {
    if (ref !== null) {
      window.scrollTo({
        top: donateSection.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleVolunteerNavigate = (ref) => {
    if (ref !== null) {
      window.scrollTo({
        top: volunteer.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleAboutNavigate = (ref) => {
    // if (ref !== null) {
    //   window.scrollTo({
    //     top: aboutSection.current.offsetTop,
    //     behavior: "smooth",
    //   });
    // }

    navigate("/about");
  };

  const handleHomeNavigate = (ref) => {
    if (ref !== null) {
      window.scrollTo({
        top: homeSection.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleContactNavigate = (ref) => {
    if (ref !== null) {
      window.scrollTo({
        top: contactSection.current.offsetTop,
        behavior: "smooth",
      });
    }
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

  return (
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

        <Hero click={handleDonateNavigate} />
      </Flex>

      <Flex
        h="auto"
        bg="white"
        px={{ base: "20px", md: "150px" }}
        pt={{ base: "15px", md: "60px" }}
        w="100%"
        ref={aboutSection}
      >
        <AboutUs />
      </Flex>

      <Flex
        bg="background"
        w="100%"
        px={{ base: "20px", md: "150px" }}
        py={{ base: 3, md: 12 }}
        ref={donateSection}
      >
        <Donate />
      </Flex>

      <Flex
        bg="white"
        w="100%"
        px={{ base: "20px", md: "150px" }}
        py={{ base: "15px", md: "120px" }}
        ref={volunteer}
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
    </Flex>
  );
};

export default Home;

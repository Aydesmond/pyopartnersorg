import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { Flex, Text, Box, Center } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Volunteer from "../../components/Volunteer";
import NewsLetter from "../../components/NewsLetter";
import newBg from "../../assets/images/newBg.jpg";

const Ourboard = () => {
  const s = `Maryam Bukar Hassan is an internationally renowned poet, gender
    advocate, wellness enthusiast, and one of the new voices of
    young emerging Africans; she has a bachelor's degree in
    Information Technology (BSC) from the Radford university college
    Accra, Ghana. Maryam is an inspiring leader, a social media
    influencer, and a brand advocate. Through her platforms, she
    provides visibility for brands and promotes their essence to the
    hundreds of thousands of her followers - the demography of the
    followers is spread across Nigeria - particularly young women
    from Northern Nigeria who challenging the status quo and seeking
    for better opportunities for Nigerian women. She has worked with
    multinationals, government, and international NGOs such as Malta
    Guinness, UNICEF, UNFPA, AFRICAN UNION, Jobberman, Global envoy
    initiative, AsRoma Academy, Global citizen, change.org, DFID,
    VLISCO and Nigeria Government. Maryam's work has received
    several awards including Gwen Luminary Awards, the Royal African
    Young leadership Award, The global womanity award 2021 in Dubai,
    she bagged leadership artiste of the year 2021 and recognition
    from Special Envoy on Youth from the African Union Commission
    and enlisted as one of the 100 most inspiring women on global
    leadership magazine 2021 ,Also decorated by the district
    Governor of the lions club new York as an honorary member of the
    Lions club in recognition for her selfless service towards
    humanity , Her story continues to inspire other Africans and is
    a regular feature across BBC, Arise TV, Channels ,TVC and NTA.
    She has shared stages and platforms with the likes of Saul
    Williams, Femi Kuti, Made Kuti, 2face, Davido, Jessica Bongos,
    Nana of Ghana, dbiyounganitaafrika, Jennifer Lopez… to mention a
    few Maryam's poetry, Her Varieatea's wellness products and Her
    NGO "THE CREATIVE CULTURAL REVIVAL " symbolizes her belief in
    the human spirit and the need to heal the earth, the mind and
    drive social consciousness. She uses her spoken word to inspire
    the idea of a world of equality and justice where every voice is
    heard`;
  const [lineValue, setLineValue] = useState(23);
  const navigate = useNavigate();
  const more = useRef(null);
  const donateSection = useRef(null);
  const aboutSection = useRef(null);
  const homeSection = useRef(null);
  const contactSection = useRef(null);

  const changeLineValue = (ref) => {
    setLineValue(50);
    if (ref !== null) {
      window.scrollTo({
        bottom: homeSection.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

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
          />
        </Flex>
      </Flex>

      <div className="flex items-center flex-col py-10">
        <h1 className="max-w-lg text-3xl font-bold text-center md:text-4xl md:text-left">
          Our Board
        </h1>
      </div>

      {/* Parent Container */}
      <div className="bg-lightMilk">
        <div className="flex flex-col items-center justify-around  py-10 px-5 md:flex-row">
          {/* First Container */}
          <div className="flex flex-col space-y-10">
            {/* Item Two */}
            <div className="flex flex-col px-3 space-y-3">
              <div className="flex flex-row pl-3 py-2 space-y-2 rounded-full  bg-green-400">
                <p className="bg-green-200 rounded-full p-5">01</p>

                <p className="max-w-lg font-bold pl-20 pt-2 text-white text-justify text-lg ">
                  Dr. (Mrs.) Chinwe Azuka Onwudiegwu
                </p>
              </div>

              <p className="max-w-xl text-justify text-lg">
                Dr. (Mrs.) Chinwe Azuka Onwudiegwu M.Sc. (Environmental Control
                and Management) PhD (Ecology and Environmental Science) MTech
                (Technology Management). A researcher/lecturer at the African
                Institute for Science Policy and Innovation, Faculty of
                Technology. Obafemi Awolowo University, Ile-Ife.
              </p>
            </div>

            {/* Item Two */}
            <div className="flex flex-col px-3 space-y-3">
              <div className="flex flex-row pl-3 py-2 space-y-2 rounded-full  bg-green-400">
                <p className="bg-green-200 rounded-full p-5">02</p>

                <p className="max-w-lg font-bold pl-20 pt-2 text-white text-justify text-lg ">
                  Maryam Bukar Hassan
                </p>
              </div>

              <p
                className="text-ellipsis max-w-xl text-justify text-lg"
                style={{ flexShrink: 3 }}
              >
                <TextTruncate
                  line={lineValue}
                  element="span"
                  truncateText="…"
                  text={s}
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  textTruncateChild={
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={changeLineValue}
                      className="text-green-500"
                    >
                      Read on
                    </span>
                  }
                  ref={more}
                />
              </p>
            </div>
          </div>

          {/* Second container */}
          <div className="flex flex-col space-y-10">
            {/* Item Two */}
            <div className="flex flex-col px-3 space-y-3">
              <div className="flex flex-row pl-3 py-2 space-y-2 rounded-full  bg-green-400">
                <p className="bg-green-200 rounded-full p-5">03</p>

                <p className="max-w-lg font-bold pl-20 pt-2 text-white text-justify text-lg ">
                  Mrs. Martha O. Omoigui
                </p>
              </div>

              <p className="max-w-xl text-justify text-lg">
                Mrs. Martha O. Omoigui is an alumna of Trent, Manchester and
                Ado-Ekiti. She has worked in Management in the last 30 years and
                her illustrious career has seen her rise to the post of the
                Chief Executive Officer. Mrs. Omoigui is a problem-solver with
                excellent team-building abilities.
              </p>
            </div>

            {/* Item Two */}
            <div className="flex flex-col px-3 space-y-3">
              <div className="flex flex-row pl-3 py-2 space-y-2 rounded-full  bg-green-400">
                <p className="bg-green-200 rounded-full p-5">04</p>

                <p className="max-w-lg font-bold pl-20 pt-2 text-white text-justify text-lg ">
                  Temi Okesanjo
                </p>
              </div>

              <p className="max-w-xl text-justify text-lg">
                Temi Okesanjo Managing Director at Woodford Consulting Company,
                a leading global project communication services consultancy
                based in Lagos Nigeria. With more than 10 years of experience
                helping several companies realize business benefits through
                strategic communication, her focus areas include Political
                Communication, Business Strategy, Crises Management Project
                Management, Brand Positioning, and Media. She held senior
                management positions under the ministry of information, at The
                National Troupe of Nigeria, where she resigned as a principal
                public relations officer Temi helps organizations achieve their
                short and long term sale and financial goal, she has a proven
                track record of helping businesses drive significant growth and
                savings. Temi earned a bachelor’s degree in Mass Communication
                and Media Technology from the Lead City University with a second
                class Upper She is a Project / business Consultant, she has
                managed several projects for companies and individuals in both
                private and public sector. Temi, an active sponsor of the Voice
                of Naija an initiative that supports and educate Nigerian youth
                She started her career in the brand and communication department
                at Ecobank Nigeria Temi currently seats on the board of
                Curtysark Waste, a company she owns 30% shares, She has built
                Woodford Consulting into a highly profitable network consulting
                firm focused primarily on global management consulting with
                large investment companies and Governmental Organizations,
                providing strategy, direction and counsel to her existing and
                potential Clients. Temi also works with business leaders to
                create smart growth strategies with her consulting practice
              </p>
            </div>
          </div>
        </div>
      </div>

      <Flex
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

export default Ourboard;

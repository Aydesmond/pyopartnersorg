import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";
import newBg from "../../assets/images/newBg.jpg";

export default function FAQ() {
  const navigate = useNavigate();

  const more = useRef(null);
  const donateSection = useRef(null);
  const aboutSection = useRef(null);
  const homeSection = useRef(null);
  const contactSection = useRef(null);
  const volunteer = useRef(null);

  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);

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
      <div>
        <h1>
          <title>FAQ</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </h1>
        <div>
          <div className="absolute w-full h-64 md:h-96 object-center object-fit z-0 bg-lightMilk" />
          <div className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-32">
            <div className="md:py-36 py-20">
              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <h1
                role="heading"
                className="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-green-400"
              >
                Frequently asked questions
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
              <div className="bg-white shadow rounded p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold leading-none text-gray-800">
                      Who are PYO Global Partners?
                    </h2>
                  </div>
                  <button
                    onClick={() => setBox1(!box1)}
                    class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                  >
                    {box1 ? (
                      <svg
                        role="button"
                        aria-label="close dropdown"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L5 1L9 5"
                          stroke="#4B5563"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="10"
                        role="button"
                        aria-label="open dropdown"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="#4B5563"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {box1 && (
                  <ul class="">
                    <li>
                      <p className="max-w-3xl text-base text-justify leading-normal text-gray-600 mt-4">
                        PYO Global Partners believe that government belongs to
                        the people and not to the leaders as has been obtained
                        in every political dispensation since the country's
                        independence. To that end, the group is organizing a
                        mass fund-raising exercise for the PYO campaign ---- one
                        in which every Nigerian will be presented with an
                        opportunity to play a substantive role in determining
                        who becomes the next President of the Federal Republic
                        of Nigeria, not simply by voting on election day by
                        which time voters are restricted to limited choices, but
                        by being involved from the very beginning of the process
                        by having a stake in the candidate's campaign.
                      </p>
                    </li>
                  </ul>
                )}
              </div>
              <div className="bg-white shadow rounded p-8 mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold leading-none text-gray-800">
                      Why should I donate?
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setBox2(!box2);
                    }}
                    data-menu
                    className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                  >
                    {box2 ? (
                      <svg
                        role="button"
                        aria-label="close dropdown"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L5 1L9 5"
                          stroke="#4B5563"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="10"
                        role="button"
                        aria-label="open dropdown"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="#4B5563"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {box2 && (
                  <ul>
                    <li>
                      <p className="max-w-3xl text-base text-justify leading-normal text-gray-600 mt-4">
                        By donating, you are affording the most capable and
                        integrous candidate the opportunity to win his party
                        ticket. This will in turn enable him to represent his
                        party at the general elections. Thus, giving the
                        Nigerian people the opportunity to vote for the right
                        candidate of their choice.
                      </p>
                    </li>
                  </ul>
                )}
              </div>
              <div className="bg-white shadow rounded p-8 mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold leading-none text-gray-800">
                      How does this benefit me?
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setBox3(!box3);
                    }}
                    data-menu
                    className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                  >
                    {box3 ? (
                      <svg
                        role="button"
                        aria-label="close dropdown"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L5 1L9 5"
                          stroke="#4B5563"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="10"
                        role="button"
                        aria-label="open dropdown"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="#4B5563"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {box3 && (
                  <ul>
                    <li>
                      <p className="max-w-3xl text-base text-justify leading-normal text-gray-600 mt-4">
                        - You will get the opportunity to contribute to the
                        control of the narrative and the political climate of
                        our country nigeria
                      </p>
                    </li>

                    <li>
                      <p className="max-w-3xl text-base text-justify leading-normal text-gray-600 mt-4">
                        - You will have the opportunity to take back the power
                        of your PVC by getting the right and most capable
                        candidate on his party ticket. Therefore, enabling th
                        Nigerian people to vote for the candidate of their
                        choice at the general elections.
                      </p>
                    </li>

                    <li>
                      <p className="max-w-3xl text-base text-justify leading-normal text-gray-600 mt-4">
                        - You will create an opportunity for yourself that will
                        enable you to acquire a vested interest in your
                        country’s leadership. This empower you with the ability
                        to hold your candidate accountable.
                      </p>
                    </li>
                  </ul>
                )}
              </div>
              <div className="bg-white shadow rounded p-8 mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold leading-none text-gray-800">
                      How much can I donate?
                    </h2>
                  </div>
                  <button
                    onClick={() => setBox4(!box4)}
                    data-menu
                    className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                  >
                    {box4 ? (
                      <svg
                        role="button"
                        aria-label="close dropdown"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L5 1L9 5"
                          stroke="#4B5563"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="10"
                        role="button"
                        aria-label="open dropdown"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="#4B5563"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {box4 && (
                  <ul>
                    <li>
                      <p className="max-w-3xl text-base text-justify leading-normal text-gray-600 mt-4">
                        The donations are open to all and people from all
                        backgrounds. From A generous N100 to a grand
                        N100,000,000,000, donations of all amounts are deeply
                        appreciated and will go a very long way.
                      </p>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

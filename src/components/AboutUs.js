import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import profPng from "../assets/images/speech.png";

const AboutUs = () => {
  return (
    <>
      <Flex gap={{ base: 1, md: 12 }} direction={{ base: "column", md: "row" }}>
        <Flex w={{ base: "100%", md: "45%" }}>
          <Box
            h={{ base: "420px", md: "800px" }}
            w="100%"
            // mx="auto"
            // bg="green"
            bgImage={profPng}
            backgroundSize={"contain"}
            bgRepeat="no-repeat"
            mt={{ base: "0", md: "18%" }}
          ></Box>
        </Flex>
        <Flex direction="column" w={{ base: "100%", md: "55%" }} gap={3}>
          <Flex direction="column" gap={2}>
            <Text
              fontSize={{ base: "14px", md: "25px" }}
              fontWeight="600"
              color="green"
            >
              Why you should donate
            </Text>
            <Text
              fontSize={{ base: "24px", md: "34px" }}
              fontWeight="600"
              color="darkgreen"
              w="100%"
            >
              <strong>
                There's nothing more powerful than a consensus of the Nigerian
                people.
              </strong>
            </Text>
            <Text
              fontSize={{ base: "18px", md: "20px" }}
              fontWeight="400"
              color="darkgreen"
              w={{ base: "100%", md: "95%" }}
              mb={4}
            >
              And there are several things we agree on Osinbajo:
            </Text>

            <ul>
              <li>
                <Text
                  fontSize={{ base: "18px", md: "20px" }}
                  textAlign="justify"
                  fontWeight="400"
                  color="darkgreen"
                  w={{ base: "100%", md: "95%" }}
                >
                  <strong>
                    Governance is the super-structure on which other structures
                    thrive:
                  </strong>{" "}
                  The quality of people governing a nation is directly
                  proportional to the way the country will turn out. Hence, we
                  need to give a hand to empower the right people.
                </Text>
              </li>
              <br />
              <li>
                <Text
                  fontSize={{ base: "18px", md: "20px" }}
                  textAlign="justify"
                  fontWeight="400"
                  color="darkgreen"
                  w={{ base: "100%", md: "95%" }}
                >
                  <strong>
                    Need to secure the future of your children through
                    purposeful leadership:
                  </strong>{" "}
                  Millennials and Gen Zs population only hear tales of a
                  once-great nation. We need to get that nation back by
                  supporting PYO at the BANK and at the POLLS
                </Text>
              </li>
              <br />
              <li>
                <Text
                  fontSize={{ base: "18px", md: "20px" }}
                  textAlign="justify"
                  fontWeight="400"
                  color="darkgreen"
                  w={{ base: "100%", md: "95%" }}
                >
                  <strong>
                    {" "}
                    Domicile power with the people by taking it away from
                    moneybags:
                  </strong>{" "}
                  For so long, godfathers have determined who gets what and how.
                  In the interest of the majority, we must take power back by
                  empowering worthy leaders. The godfathers can be richer than
                  some of us but cannot be richer than all of us.
                </Text>
              </li>
              <br />
              <li>
                <Text
                  textAlign="justify"
                  fontSize={{ base: "18px", md: "20px" }}
                  fontWeight="400"
                  color="darkgreen"
                  w={{ base: "100%", md: "95%" }}
                  mb={{ base: "30px", md: "0px" }}
                >
                  <strong>He who pays the piper dictates the tune:</strong> The
                  tune money bags have played in the last 50 years is now sour
                  to our eyes. We need a new melody that resonates with joy and
                  hope for a better Nigeria.
                </Text>
              </li>
              <br />
              <li>
                <Text
                  textAlign="justify"
                  fontSize={{ base: "18px", md: "20px" }}
                  fontWeight="400"
                  color="darkgreen"
                  w={{ base: "100%", md: "95%" }}
                  mb={{ base: "30px", md: "0px" }}
                >
                  <strong>Breaking the cycle:</strong>and expects a different
                  result. We need to refuse handouts that we have to pay back
                  for 4 to 8 years of our lives. Rather than handouts, invest in
                  a future you can be proud about. Let’s have a 360 degrees
                  reorientation.
                </Text>
              </li>
              <br />
              <li>
                <Text
                  textAlign="justify"
                  fontSize={{ base: "18px", md: "20px" }}
                  fontWeight="400"
                  color="darkgreen"
                  w={{ base: "100%", md: "95%" }}
                  mb={{ base: "30px", md: "0px" }}
                >
                  <strong>
                    Do away with stomach infrastructure for real infrastructure:
                  </strong>
                  Rome, Dubai, Hong Kong, Singapore etc. were not built on
                  stomach infrastructure but purposeful leadership. You can bank
                  on PYO to engineer the LEAP FORWARD.
                </Text>
              </li>

              <br />
              <li>
                <Text
                  textAlign="justify"
                  fontSize={{ base: "18px", md: "20px" }}
                  fontWeight="400"
                  color="darkgreen"
                  w={{ base: "100%", md: "95%" }}
                  mb={{ base: "30px", md: "0px" }}
                >
                  <strong>To empower the best CEO:</strong>
                  remuneration to get the best hands to manage his company.
                  Nigeria is our commonwealth; we must empower the RIGHT MAN for
                  the JOB
                </Text>
              </li>
              <br />
            </ul>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default AboutUs;

import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ingila from '../images/ingila.jpg';

const greeting = "Hello, I am Ingila!";
const bio1 = "A full stack developer";
const bio2 = "You can use this portfolio template for your UI/UX profile";
const bio3 = "";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack spacing={16}>
      <VStack spacing={4}>
      <Avatar size="xl" name="Pete" src={ingila} />
      <Heading as="h6" size="sm" color="white">
        {greeting}
        </Heading>
      </VStack>
        <VStack spacing={6}>
      <Heading as="h1" size="2xl" color="white">
        {bio1}
      </Heading>
      <Heading as="h1" size="1xl" color="white">
        {bio2}
      </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

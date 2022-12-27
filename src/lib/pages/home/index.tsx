import {
  Flex,
  Box,
  Text,
  HStack,
  Image,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Hero from "./Hero";
import Services from "./Services";
import Faq from "./Faq";
import Footer from "lib/layout/Footer";
import Header from "lib/layout/Header";
// import { Button } from "lib/styles/theme/components/button";

const Home = () => {
  return (
    <>
      <NextSeo title="Home" />
      {/* <Header name={name} /> */}
      <Hero />
      <Services />
      <Faq />
      {/* <Footer name={name} /> */}
    </>
  );
};

export default Home;

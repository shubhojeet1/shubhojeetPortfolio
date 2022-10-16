import React from 'react';
// import Navbar from './Components/Navbar'
// import Title from './Components/Title'
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
// import Title from "./components/Title";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  HStack,
  Button,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
     <ChakraProvider theme={theme}>
      {/* <Navbar/>
     <Title/>  */}
      <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="cyan.400">Shubhojeet</Heading>
        <HStack spacing="12" marginBottom="20px" marginLeft="20px">
        <a href=""><Text color="white" fontWeight="380"  _hover={{color: '#3399ff' }} >Home</Text></a>
  <a href=""> <Text  color="white" fontWeight="380"  _hover={{color: '#3399ff' }}>About Me</Text></a>
  <a href=""><Text  color="white" fontWeight="380"  _hover={{color: '#3399ff' }}>Skills</Text></a> 
  <a href=""><Text  color="white" fontWeight="380"  _hover={{color: '#3399ff' }}>Projects</Text></a>
   <a href=""><Text  color="white" fontWeight="380"  _hover={{color: '#3399ff' }}>Contact</Text> </a>
   <a href=""><Text  color="white" fontWeight="380"  _hover={{color: '#3399ff' }}>Resume</Text></a>
        </HStack>
        <Spacer></Spacer>
        
        
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
      {/* <Title/> */}
    </VStack>
     
   </ChakraProvider>
  );
}

export default App;

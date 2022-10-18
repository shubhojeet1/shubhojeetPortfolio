import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter,  DiWebplatform } from 'react-icons/di'
import { HStack, Container , Button ,Image} from "@chakra-ui/react";


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    15+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Skills</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' fontSize="2xl">Web App Developer, specialised in MERN stack.</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end"   _hover={{ bg: "orange", }}>
                        <Image h="124" w="100" p="4"  src="https://seeklogo.com/images/L/lifestyle-logo-07AC8D4FDE-seeklogo.com.png"/>
                        {/* <Icon color="white" p="4"  w="24" h="24" /> */}
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                          Clone of  Lifestylestores.com
                        </Text>
                       
                    </Flex>
                   
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                            <Image w="50" p="4" src='https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png'/>
                        {/* <Icon color="black" p="4" as={DiCodeigniter} w="24" h="24" /> */}
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                           Clone of Sephora.nnow.com
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}

                    >
                        {/* <Icon as={DiWebplatform} p="4" w="24" h="24" color="black" /> */}
                       <Image src='https://i.pinimg.com/originals/79/35/fd/7935fdf1fe2c5dd8205de03a214befb0.gif'/>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Weather App
                        </Text>
                    </Flex>
                    
                </Flex>
                <Flex  rounded="xl" direction="rows"  ml={isNotSmallerScreen ? 4 : 0}>
                <a href="https://github.com/shubhojeet1/tested-bulb-6829"><Button bg="red" mt="5">Source Code</Button></a> <a href="https://splendorous-duckanoo-ae27f9.netlify.app/"><Button bg="green" mt="5" ml="8">Live</Button></a> 
                <a href="https://github.com/shubhojeet1/deserted-linen-2376"><Button bg="red" mt="5" ml="10">Source Code</Button></a>  <a href="https://scintillating-dango-a969f1.netlify.app/"><Button bg="green" mt="5" ml="8">Live</Button></a>
                <a href="https://github.com/masai-course/SHUBHOJEET_fp03_002/tree/master/unit-3/sprint-2/day-1/assignments/weatherApp"><Button bg="red"  mt="5" ml="10">Source Code</Button></a>  <a href="https://inquisitive-starship-8df0a6.netlify.app"><Button bg="green" mt="5" ml="8">Live</Button></a>

                </Flex>
               
                

            </Box>
        </Flex>
    )
}


export default Profile
import { HStack,Box, Container ,Text, Button ,Image} from "@chakra-ui/react";
import "./Home.css"

export default function  Title(){
    return<Container maxW="10xl" p='4' maxH="55px">
        <HStack>
        <Text fontSize="4xl" marginLeft="90px" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >About Me</Text>
        </HStack>
        <HStack>
            <Text marginLeft="90px" letterSpacing={2}>
            Innovative Web Developer with a passion to implement and launch new projects. <br></br>Detail oriented professional with the ability to translate business requirements into technical solutions. <br></br> Looking to start a career as an entry-level software engineer with a firm driven by technology.
            </Text>
        </HStack>
      


    </Container>
}
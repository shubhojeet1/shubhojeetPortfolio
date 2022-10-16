import { HStack,Box, Container ,Text, Button ,Image} from "@chakra-ui/react";
import "./Home.css"

export default function  Title(){
    return<Container maxW="10xl" p='4' maxH="55px">
        <HStack>
    
            <Text color="orange.500"  fontSize={45}>Hi , I am Shubhojeet Chatterjee</Text>
          
            
          
        </HStack>
        <HStack>
            <Text>
            Innovative Web Developer with a passion to implement and launch new projects. Detail oriented professional with the ability to translate business requirements into technical solutions. Looking to start a career as an entry-level software engineer with a firm driven by technology.
            </Text>
        </HStack>
      


    </Container>
}
import { HStack,Box, Container ,Text, Button ,Image} from "@chakra-ui/react";
import "./Home.css"

export default function  Title(){
    return<Container maxW="10xl" p='4' maxH="55px">
        <HStack>
    
            <Text color="orange.500"  fontSize={45}>Hi , I am Shubhojeet Chatterjee</Text>
            <Image sizes="20" borderRadius="50%" src="https://avatars.githubusercontent.com/u/103964132?v=4"/>
            
          
        </HStack>
        <HStack paddingBottom="100px">
            <Text>

            <Text  color="orange.500"  fontSize={45}>Full Stack Web Developer</Text>
            </Text>
        </HStack>
      


    </Container>
}
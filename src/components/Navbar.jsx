import { HStack,Box, Container ,Text, Button ,Image} from "@chakra-ui/react";
 export default  function Navbar(){
    return <Container maxW="10xl" p='4' maxH="55px" backgroundImage="https://i.pinimg.com/originals/04/e4/7e/04e47e2855c78b802b523ff6d1357b25.gif" >
   <HStack justifyContent="end" maxH="55px" spacing={10}>
    <a href=""><Text color="white" fontWeight="380"  _hover={{color: '#3399ff' }} >Home</Text></a>
  <a href=""> <Text  color="white" fontWeight="380"  _hover={{color: '#3399ff' }}>About Me</Text></a>
  <a href=""><Text  color="white" fontWeight="380"  _hover={{color: '#3399ff' }}>Skills</Text></a> 
  <a href=""><Text  color="white" fontWeight="380"  _hover={{color: '#3399ff' }}>Projects</Text></a>
   <a href=""><Text  color="white" fontWeight="380"  _hover={{color: '#3399ff' }}>Contact</Text> </a>
   <a href=""><Text  color="white" fontWeight="380"  _hover={{color: '#3399ff' }}>Resume</Text></a>
    </HStack>
   
    </Container>
    
  
 }
 <Image src="https://i.pinimg.com/originals/b0/10/73/b01073ee5ba725fc48c2e831b9e22a09.gif"/>
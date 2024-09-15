// SignIn.js
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  VStack,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  useColorMode
} from "@chakra-ui/react";
import { useState } from "react";
import { FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { Link as RouterLink } from 'react-router-dom';

const api = "http://localhost:5000/api/auth"; // Your backend URL

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { colorMode } = useColorMode();

  const handleSignIn = async () => {
      try {
          const response = await axios.post(`${api}/signin`, { email, password });
          alert(response.data.message || "Sign-In Successful");
      } catch (error) {
          console.error("Error during sign-in:", error);
          alert("Error during sign-in");
      }
  };

  return (
      <Box p={4} maxW="md" mx="auto" bg={colorMode === "dark" ? "gray.800" : "gray.100"} borderRadius="md" boxShadow="lg">
          <IconButton
              aria-label="Go back"
              icon={<FaArrowLeft />}
              as={RouterLink}
              to="/"
              mb={6}
              colorScheme="gray"
              variant="outline"
          />
          <VStack spacing={6} align="stretch">
              <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                  Sign In
              </Text>
              <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                      <InputRightElement children={<FaEnvelope />} />
                      <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                  </InputGroup>
              </FormControl>
              <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                      <InputRightElement children={<FaLock />} />
                      <Input
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                      />
                  </InputGroup>
              </FormControl>
              <Button onClick={handleSignIn} colorScheme="teal">
                  Sign In
              </Button>
          </VStack>
      </Box>
  );
};

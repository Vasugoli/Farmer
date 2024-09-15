// SignUp.js
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
import { FaUser, FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { Link as RouterLink } from 'react-router-dom';

const api = "http://localhost:5000/api/auth"; // Your backend URL

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const { colorMode } = useColorMode();

  const handleSignUp = async () => {
      if (password !== reenterPassword) {
          alert("Passwords do not match");
          return;
      }

      try {
          const response = await axios.post(`${api}/signup`, { email, name, password, reenterPassword });
          alert(response.data.message || "Sign-Up Successful");
      } catch (error) {
          console.error("Error during sign-up:", error);
          alert("Error during sign-up");
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
                  Sign Up
              </Text>
              <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <InputGroup>
                      <InputRightElement children={<FaUser />} />
                      <Input
                          type="text"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                      />
                  </InputGroup>
              </FormControl>
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
              <FormControl id="reenter-password">
                  <FormLabel>Re-enter Password</FormLabel>
                  <InputGroup>
                      <InputRightElement children={<FaLock />} />
                      <Input
                          type="password"
                          placeholder="Re-enter your password"
                          value={reenterPassword}
                          onChange={(e) => setReenterPassword(e.target.value)}
                      />
                  </InputGroup>
              </FormControl>
              <Button onClick={handleSignUp} colorScheme="teal">
                  Sign Up
              </Button>
          </VStack>
      </Box>
  );
};

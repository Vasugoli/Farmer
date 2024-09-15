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
  useColorMode,
  Link,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const api = "http://localhost:5000/api/auth"; // Replace with your actual backend URL

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    setLoading(true); // Show loading state
    try {
      const response = await axios.post(`${api}/signin`, { email, password });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Save JWT token to localStorage
        alert("Sign-In Successful");
        navigate("/dashboard"); // Redirect after successful sign-in
      } else {
        alert(response.data.message || "Error during sign-in");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Error during sign-in. Please check your credentials.");
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <Center minH="100vh">
      <Box
        p={6}
        maxW="md"
        w="100%"
        mx="auto"
        bg={colorMode === "dark" ? "gray.800" : "gray.100"}
        borderRadius="md"
        boxShadow="lg"
      >
        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Sign In
          </Text>

          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Sign In Button */}
          <Button onClick={handleSignIn} colorScheme="teal" isLoading={loading}>
            Sign In
          </Button>

          {/* Links for Forgot Password and Sign Up */}
          <VStack spacing={4} align="center">
            <Link as={RouterLink} to="/forgot" color="teal.500">
              Forgot Password?
            </Link>
            <Link as={RouterLink} to="/sign-up" color="teal.500">
              Don't have an account? Sign Up
            </Link>
          </VStack>
        </VStack>
      </Box>
    </Center>
  );
};

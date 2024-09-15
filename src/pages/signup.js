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
    Center,
    IconButton,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { FaUser, FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa";
  import axios from "axios";
  import { Link as RouterLink, useNavigate } from 'react-router-dom';
  
  const api = "http://localhost:5000/api/auth"; // Replace with your actual backend URL
  
  export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [reenterPassword, setReenterPassword] = useState("");
    const [loading, setLoading] = useState(false); // New state for loading
    const { colorMode } = useColorMode();
    const navigate = useNavigate();
  
    const handleSignUp = async () => {
      if (password !== reenterPassword) {
        alert("Passwords do not match");
        return;
      }
  
      setLoading(true); // Show loading state
      try {
        const response = await axios.post(`${api}/signup`, {
          email,
          name,
          password,
        });
        alert(response.data.message || "Sign-Up Successful");
        navigate("/signin"); // Redirect after successful sign-up
      } catch (error) {
        console.error("Error during sign-up:", error);
        alert("Error during sign-up. Please try again.");
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
  
            {/* Name Input */}
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
  
            {/* Reenter Password Input */}
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
  
            {/* Sign Up Button */}
            <Button onClick={handleSignUp} colorScheme="teal" isLoading={loading}>
              Sign Up
            </Button>
          </VStack>
        </Box>
      </Center>
    );
  };
  
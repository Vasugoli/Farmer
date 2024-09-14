import React, { useState } from "react";
import { Box, Input, Button, Select, FormControl, FormLabel, Heading, Text } from "@chakra-ui/react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    city: "",
    area: "",
    sports: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit form logic here (e.g., API call)
  };

  return (
    <Box 
      maxWidth="500px" 
      margin="50px auto" 
      padding="30px" 
      border="2px solid" 
      borderColor="blue.600" // Set outline color
      boxShadow="lg" // Shadow effect
      borderRadius="md" 
      backgroundColor="white"
      color="gray.700" // Text color
    >
      <Heading as="h1" size="xl" textAlign="center" marginBottom="20px" color="blue.600">
        Signup Page
      </Heading>
      
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <Heading as="h2" size="md" marginBottom="8px" color="blue.500">
          Personal Information
        </Heading>
        <FormControl marginBottom="20px">
          <FormLabel color="gray.600">Name</FormLabel>
          <Input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Enter your name"
            focusBorderColor="blue.400"
            isRequired 
          />
        </FormControl>

        {/* Email */}
        <FormControl marginBottom="20px">
          <FormLabel color="gray.600">Email</FormLabel>
          <Input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter your email"
            focusBorderColor="blue.400"
            isRequired 
          />
        </FormControl>

        {/* Mobile Number */}
        <FormControl marginBottom="20px">
          <FormLabel color="gray.600">Mobile Number</FormLabel>
          <Input 
            type="text" 
            name="mobile" 
            value={formData.mobile} 
            onChange={handleChange} 
            placeholder="Enter your mobile number"
            focusBorderColor="blue.400"
            isRequired 
          />
        </FormControl>

        {/* Account Information */}
        <Heading as="h2" size="md" marginBottom="8px" color="blue.500">
          Account Information
        </Heading>
        <FormControl marginBottom="20px">
          <FormLabel color="gray.600">Password</FormLabel>
          <Input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="Enter your password"
            focusBorderColor="blue.400"
            isRequired 
          />
        </FormControl>

        {/* Location Details */}
        <Heading as="h2" size="md" marginBottom="8px" color="blue.500">
          Location Details
        </Heading>
        <FormControl marginBottom="20px">
          <FormLabel color="gray.600">City</FormLabel>
          <Input 
            type="text" 
            name="city" 
            value={formData.city} 
            onChange={handleChange} 
            placeholder="Enter your city"
            focusBorderColor="blue.400"
            isRequired 
          />
        </FormControl>

        <FormControl marginBottom="20px">
          <FormLabel color="gray.600">Area</FormLabel>
          <Input 
            type="text" 
            name="area" 
            value={formData.area} 
            onChange={handleChange} 
            placeholder="Enter your area"
            focusBorderColor="blue.400"
            isRequired 
          />
        </FormControl>

        {/* Sports Preferences */}
        <Heading as="h2" size="md" marginBottom="8px" color="blue.500">
          Sports Preferences
        </Heading>
        <FormControl marginBottom="20px">
          <FormLabel color="gray.600">Sports</FormLabel>
          <Select 
            name="sports" 
            value={formData.sports} 
            onChange={handleChange} 
            placeholder="Select your sport"
            focusBorderColor="blue.400"
            isRequired
          >
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="tennis">Tennis</option>
            <option value="cricket">Cricket</option>
            <option value="swimming">Swimming</option>
          </Select>
        </FormControl>

        {/* Submit Button */}
        <Button 
          colorScheme="blue" 
          type="submit" 
          width="100%" 
          backgroundColor="blue.600" 
          _hover={{ backgroundColor: "blue.700" }} 
          color="white"
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignupPage;
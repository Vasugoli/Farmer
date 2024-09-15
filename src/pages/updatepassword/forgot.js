// ForgotPassword.js
<<<<<<< HEAD
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

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const { colorMode } = useColorMode();

    const handleSendOtp = async () => {
        try {
            const response = await axios.post(`${api}/forgot-password`, { email });
            if (response.status === 200) {
                setOtpSent(true);
                alert("OTP sent to your email.");
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            alert("Error sending OTP");
        }
    };

    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const response = await axios.put(`${api}/reset-password`, { email, newPassword });
            alert(response.data.message || "Password reset successful");
        } catch (error) {
            console.error("Error resetting password:", error);
            alert("Error resetting password");
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
                    Forgot Password
                </Text>
                {!otpSent ? (
                    <>
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
                        <Button onClick={handleSendOtp} colorScheme="teal">
                            Send OTP
                        </Button>
                    </>
                ) : (
                    <>
                        <FormControl id="otp">
                            <FormLabel>OTP</FormLabel>
                            <InputGroup>
                                <InputRightElement children={<FaLock />} />
                                <Input
                                    type="text"
                                    placeholder="Enter the OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="new-password">
                            <FormLabel>New Password</FormLabel>
                            <InputGroup>
                                <InputRightElement children={<FaLock />} />
                                <Input
                                    type="password"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="confirm-password">
                            <FormLabel>Confirm New Password</FormLabel>
                            <InputGroup>
                                <InputRightElement children={<FaLock />} />
                                <Input
                                    type="password"
                                    placeholder="Confirm new password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </InputGroup>
                        </FormControl>
                        <Button onClick={handleResetPassword} colorScheme="teal">
                            Reset Password
                        </Button>
                    </>
                )}
            </VStack>
        </Box>
    );
};
=======
import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text, useToast, Spinner } from '@chakra-ui/react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/auth/send-otp', { email });
      toast({
        title: 'OTP sent successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setStep(2);
    } catch (error) {
      toast({
        title: 'Error sending OTP.',
        description: error.response.data.error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp });
      setStep(3);
    } catch (error) {
      toast({
        title: 'Invalid OTP.',
        description: error.response.data.error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  const handleResetPassword = async () => {
    setLoading(true);
    try {
      await axios.put('http://localhost:5000/api/auth/reset-password', { email, newPassword });
      toast({
        title: 'Password reset successful.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setEmail('');
      setOtp('');
      setNewPassword('');
      setStep(1);
    } catch (error) {
      toast({
        title: 'Error resetting password.',
        description: error.response.data.error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  return (
    <Box p={6} maxW="md" mx="auto" bg="gray.100" borderRadius="md" boxShadow="lg">
      {loading && <Spinner size="xl" />}
      {step === 1 && (
        <>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Forgot Password</Text>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Button onClick={handleSendOtp} colorScheme="teal" isDisabled={!email}>Send OTP</Button>
        </>
      )}
      {step === 2 && (
        <>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Verify OTP</Text>
          <FormControl id="otp" mb={4}>
            <FormLabel>OTP</FormLabel>
            <Input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </FormControl>
          <Button onClick={handleVerifyOtp} colorScheme="teal" isDisabled={!otp}>Verify OTP</Button>
        </>
      )}
      {step === 3 && (
        <>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Reset Password</Text>
          <FormControl id="new-password" mb={4}>
            <FormLabel>New Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormControl>
          <Button onClick={handleResetPassword} colorScheme="teal" isDisabled={!newPassword}>Reset Password</Button>
        </>
      )}
    </Box>
  );
};

export default ForgotPassword;
>>>>>>> backend

<<<<<<< HEAD
// src/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css'; // Ensure this CSS file is imported

const LandingPage = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle navigation to the login page
  const handleLearnMoreClick = () => {
    navigate('/l');// Redirect to the login page
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Button, Container, Flex, Heading, Text, VStack,Input,Textarea, useBreakpointValue, useColorMode
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next'; // Import translation hook

const LandingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize translation hook
  const { colorMode } = useColorMode();

  // Function to handle navigation to the login page
  const handleLearnMoreClick = () => {
    navigate('/signin');
>>>>>>> backend
  };

  // Function to handle login/sign-up button click
  const handleLoginClick = () => {
<<<<<<< HEAD
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="landing-container">
      <header className="header">
        <nav className="navbar">
          <div className="logo">Sustainable Fertilizer Optimizer</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="login-btn" onClick={handleLoginClick}>
            Login / Sign Up
          </button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Optimize Fertilizer Usage for Higher Yield</h1>
          <p>Our sustainable fertilizer optimizer helps you maximize crop yield while reducing environmental impact.</p>
          <button className="cta-btn" onClick={handleLearnMoreClick}>
            Learn More
          </button>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Our Solution</h2>
        <p>We provide an intelligent system that recommends the optimal amount of fertilizer based on crop type, soil conditions, and environmental factors. Our solution is eco-friendly, ensuring the best balance between productivity and sustainability.</p>
      </section>

      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Smart Recommendations</h3>
            <p>Get precise fertilizer recommendations for each crop.</p>
          </div>
          <div className="feature-item">
            <h3>Eco-friendly</h3>
            <p>Minimize environmental impact while improving yield.</p>
          </div>
          <div className="feature-item">
            <h3>Real-time Analysis</h3>
            <p>Analyze soil data and conditions in real-time for optimal fertilization.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Have any questions? Reach out to us for more information.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Sustainable Fertilizer Optimizer. All Rights Reserved.</p>
      </footer>
    </div>
=======
    navigate('/signin');
  };

  return (
    <Box>
      {/* Header */}
      <Flex
        as="header"
        bg={colorMode === "dark" ? "teal.500" : "teal.500"}
        color="white"
        py={4}
        px={6}
        align="center"
        justify="space-between"
      >
        <Heading as="h1" size="lg">{t("landing.headerTitle")}</Heading>
        <Button colorScheme="teal" variant="outline" onClick={handleLoginClick}>
          {t("landing.loginSignUpButton")}
        </Button>
      </Flex>

      {/* Hero Section */}
      <Box bg="teal.600" color="white" py={16} px={6}>
        <Container maxW="container.lg">
          <VStack spacing={8} align="center">
            <Heading as="h2" size="2xl" textAlign="center">
              {t("landing.heroTitle")}
            </Heading>
            <Text fontSize="lg" textAlign="center">
              {t("landing.heroSubtitle")}
            </Text>
            <Button colorScheme="teal" size="lg" rightIcon={<ArrowForwardIcon />} onClick={handleLearnMoreClick}>
              {t("landing.learnMoreButton")}
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxW="container.md" py={16} px={6}>
        <VStack spacing={6} align="start">
          <Heading as="h2" size="xl">{t("landing.aboutTitle")}</Heading>
          <Text>{t("landing.aboutDescription")}</Text>
        </VStack>
      </Container>

      {/* Features Section */}
      <Box bg="gray.100" py={16} px={6}>
        <Container maxW="container.lg">
          <VStack spacing={8} align="center">
            <Heading as="h2" size="xl">{t("landing.featuresTitle")}</Heading>
            <VStack spacing={8}>
              <Box p={6} bg="white" shadow="md" borderRadius="md" maxW="300px" w="full">
                <Heading as="h3" size="lg" mb={4}>{t("landing.feature1.title")}</Heading>
                <Text>{t("landing.feature1.description")}</Text>
              </Box>
              <Box p={6} bg="white" shadow="md" borderRadius="md" maxW="300px" w="full">
                <Heading as="h3" size="lg" mb={4}>{t("landing.feature2.title")}</Heading>
                <Text>{t("landing.feature2.description")}</Text>
              </Box>
              <Box p={6} bg="white" shadow="md" borderRadius="md" maxW="300px" w="full">
                <Heading as="h3" size="lg" mb={4}>{t("landing.feature3.title")}</Heading>
                <Text>{t("landing.feature3.description")}</Text>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxW="container.md" py={16} px={6}>
        <VStack spacing={6} align="start">
          <Heading as="h2" size="xl">{t("landing.contactTitle")}</Heading>
          <Text>{t("landing.contactDescription")}</Text>
          <Box as="form" w="full" maxW="lg">
            <VStack spacing={4}>
              <Input placeholder={t("landing.contactName")} isRequired />
              <Input placeholder={t("landing.contactEmail")} type="email" isRequired />
              <Textarea placeholder={t("landing.contactMessage")} isRequired />
              <Button colorScheme="teal" type="submit">{t("landing.sendMessageButton")}</Button>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="teal.500" color="white" py={4} textAlign="center">
        <Text>{t("landing.footerText")}</Text>
      </Box>
    </Box>
>>>>>>> backend
  );
};

export default LandingPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Heading,
  Flex,
  Text,
  VStack,
  Button,
  Image,
  Link,
  Grid,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const HomePage = () => {
  const navigate = useNavigate();

  const handleBoxClick = (path) => {
    navigate(`/${path}`);
  };

  const boxData = [
    {
      title: 'Data-driven Solution for Optimal Fertilizer Use',
      description: 'Utilizes agricultural data to recommend suitable fertilizer types and quantities based on soil health, crop type, and weather conditions.',
      imageUrl: 'https://via.placeholder.com/150', // Replace with the appropriate image URL
      path: 'data-driven-solution',
    },
    {
      title: 'Innovative Machine Learning Analysis',
      description: 'Employs machine learning algorithms to process data and deliver personalized fertilizer recommendations for efficient agricultural practices.',
      imageUrl: 'https://via.placeholder.com/150', // Replace with the appropriate image URL
      path: 'machine-learning-analysis',
    },
    {
      title: 'Enhanced Crop Yield and Farmer Income',
      description: 'Results in increased crop productivity and improved farmer earnings through optimized fertilizer application.',
      imageUrl: 'https://via.placeholder.com/150', // Replace with the appropriate image URL
      path: 'crop-yield',
    },
    {
      title: 'Promotion of Sustainable Agriculture',
      description: 'Encourages environmentally-friendly farming methods by reducing fertilizer waste and supporting sustainable agricultural practices.',
      imageUrl: 'https://via.placeholder.com/150', // Replace with the appropriate image URL
      path: 'sustainable-agriculture',
    },
  ];

  const teamData = [
    {
      name: 'Frontend',
      role: 'Lead Agronomist',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      role: 'Soil Scientist',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Emily Johnson',
      role: 'Water Conservation Specialist',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <Box minHeight="100vh" background="linear-gradient(to right, #f0f4c3, #c5e1a5)" fontFamily="Roboto, sans-serif">
      {/* Header */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="1rem 2rem"
        backgroundColor="white"
        boxShadow="sm"
        fontFamily="Poppins, sans-serif"
      >
        <Image src="your-logo-url.png" alt="Logo" height="50px" />
        <Flex gap="1.5rem" fontWeight="bold">
          <Link href="/about" color="green.600" _hover={{ color: 'green.800' }}>
            About
          </Link>
          <Link href="/projects" color="green.600" _hover={{ color: 'green.800' }}>
            Projects
          </Link>
          <Link href="/news" color="green.600" _hover={{ color: 'green.800' }}>
            News
          </Link>
        </Flex>
        <Flex alignItems="center" gap="1rem" fontSize="sm">
          <Text color="gray.600">Mon - Sat: 8:00 - 6:30</Text>
          <Text color="gray.600">Call Anytime: 012345678910</Text>
        </Flex>
      </Flex>

      {/* Hero Section with Auto-Slideshow */}
<Box height="500px" position="relative" overflow="hidden">
  <Swiper
    spaceBetween={0}
    slidesPerView={1}
    loop={true}
    autoplay={{ delay: 2000 }} // Change delay to 2000ms for 2-second interval
  >
    <SwiperSlide>
      <Box
        height="500px"
        backgroundImage="url('https://sigmaearth.com/wp-content/uploads/2023/09/word-image-54719-1-1024x574.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        zIndex="1"
      >
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          spacing={4}
          color="white"
          textAlign="center"
        >
          {/* Content can be added here if needed */}
        </VStack>
      </Box>
    </SwiperSlide>
    <SwiperSlide>
      <Box
        height="500px"
        backgroundImage="url('https://emergingindiagroup.com/wp-content/uploads/2023/09/Copy-of-Sections-12.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        zIndex="1"
      >
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          spacing={1}
          color="white"
          textAlign="center"
        >
          {/* Content can be added here if needed */}
        </VStack>
      </Box>
    </SwiperSlide>
  </Swiper>
</Box>


      {/* Services Grid with Boxes in Two Rows */}
      <Box padding="70px" marginTop="70px">
        <Heading as="h2" size="xl" textAlign="center" marginBottom="2rem" fontFamily="Poppins, sans-serif" color="green.700">
          Our Services
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {boxData.map((box, index) => (
            <Box
              key={index}
              backgroundColor="white"
              padding="50px"
              borderRadius="lg"
              boxShadow="lg"
              _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              textAlign="center"
            >
              <Image
                src={box.imageUrl}
                alt={box.title}
                borderRadius="lg"
                marginBottom="1rem"
                boxSize="150px"
                objectFit="cover"
              />
              <Heading as="h3" size="md" fontFamily="Poppins, sans-serif" marginBottom="1rem" color="green.800">
                {box.title}
              </Heading>
              <Text color="gray.600" marginBottom="1rem">
                {box.description}
              </Text>
              <Button
                colorScheme="green"
                onClick={() => handleBoxClick(box.path)}
                borderRadius="lg"
                size="md"
              >
                Learn More
              </Button>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* Team Members Flex */}
      <Box padding="2rem" marginTop="2rem" backgroundColor="gray.100">
        <Heading as="h2" size="xl" textAlign="center" marginBottom="2rem" fontFamily="Poppins, sans-serif" color="green.700">
          Meet Our Team
        </Heading>
        <Flex justifyContent="space-between" wrap="nowrap" overflowX="auto">
          {teamData.map((member, index) => (
            <Box
              key={index}
              backgroundColor="white"
              padding="2rem"
              borderRadius="lg"
              boxShadow="lg"
              textAlign="center"
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
              flex="auto"
              marginRight="1rem"
              minWidth="200px"
            >
              <Image
                src={member.imageUrl}
                alt={member.name}
                borderRadius="full"
                boxSize="100px"
                objectFit="cover"
                marginBottom="1rem"
              />
              <Heading as="h3" size="md" fontFamily="Poppins, sans-serif" color="green.800">
                {member.name}
              </Heading>
              <Text color="gray.600">{member.role}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default HomePage;

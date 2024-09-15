<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Icon,
  Heading,
  Text,
  Grid,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { MdWork } from 'react-icons/md'; // Profession icon
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import translation hook

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize translation

  const [userData, setUserData] = useState({
    email: '',
    profession: 'Agronomist',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await new Promise((resolve) =>
        setTimeout(() => resolve({ email: 'johndoe@example.com' }), 1000)
      );
      setUserData(data);
    };

    fetchUserData();
  }, []);

  const boxData = [
    {
      title: t('box1.title'),
      description: t('box1.description'),
      imageUrl: 'https://via.placeholder.com/150',
      path: 'data-driven-solution',
    },
    {
      title: t('box2.title'),
      description: t('box2.description'),
      imageUrl: 'https://via.placeholder.com/150',
      path: 'machine-learning-analysis',
    },
    {
      title: t('box3.title'),
      description: t('box3.description'),
      imageUrl: 'https://via.placeholder.com/150',
      path: 'crop-yield',
    },
    {
      title: t('box4.title'),
      description: t('box4.description'),
      imageUrl: 'https://via.placeholder.com/150',
>>>>>>> backend
      path: 'sustainable-agriculture',
    },
  ];

  const teamData = [
    {
<<<<<<< HEAD
      name: 'Frontend',
=======
      name: 'John Doe',
>>>>>>> backend
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

<<<<<<< HEAD
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
=======
  const handleBoxClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <Box minHeight="100vh" backgroundColor="gray.50" fontFamily="Roboto, sans-serif">
      {/* Navbar */}
      <Flex
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        padding="1rem 2rem"
        backgroundColor="teal.500"
        color="white"
        boxShadow="md"
        position="sticky"
        top="0"
        zIndex="1000"
      >
        <Flex alignItems="center" gap="2rem" fontWeight="bold">
          <Link href="/about" _hover={{ color: 'yellow.300' }} transition="color 0.3s">
            {t('navbar.about')}
          </Link>
          <Link href="/contacts" _hover={{ color: 'yellow.300' }} transition="color 0.3s">
            {t('navbar.contacts')}
          </Link>
          <Link href="/help" _hover={{ color: 'yellow.300' }} transition="color 0.3s">
            {t('navbar.help')}
          </Link>
        </Flex>

        <Flex alignItems="center">
          <Image
            src="your-logo-url.png"
            alt="Logo"
            height="50px"
            marginRight="1.5rem"
            cursor="pointer"
            _hover={{ transform: 'scale(1.1)' }}
            transition="transform 0.3s ease"
          />

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar size="sm" name="John Doe" src="https://via.placeholder.com/100" />
            </MenuButton>
            <MenuList>
              <MenuItem>{userData.email}</MenuItem>
              <MenuItem>
                <Icon as={MdWork} marginRight="1rem" />
                {userData.profession}
              </MenuItem>
              <MenuItem>{t('profile')}</MenuItem>
              <MenuItem>{t('logout')}</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box
        backgroundImage="url('https://source.unsplash.com/1600x900/?agriculture,farming')"
        backgroundSize="cover"
        backgroundPosition="center"
        height="450px"
        position="relative"
      >
        <Box position="absolute" top="0" left="0" right="0" bottom="0" backgroundColor="rgba(0, 0, 0, 0.6)">
          <Flex justify="center" height="100%" alignItems="center" color="white" textAlign="center">
            <Heading size="2xl" fontFamily="Poppins, sans-serif">
              {t('hero.title')}
            </Heading>
          </Flex>
        </Box>
      </Box>

      {/* Services Grid */}
      <Box padding="60px 20px">
        <Heading as="h2" size="xl" textAlign="center" marginBottom="4rem" fontFamily="Poppins, sans-serif">
          {t('services.title')}
>>>>>>> backend
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
<<<<<<< HEAD
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
=======
              cursor="pointer"
              onClick={() => handleBoxClick(box.path)}
            >
              <Image src={box.imageUrl} alt={box.title} borderRadius="lg" marginBottom="1rem" boxSize="150px" objectFit="cover" />
              <Heading as="h3" size="md" fontFamily="Poppins, sans-serif">
                {box.title}
              </Heading>
              <Text>{box.description}</Text>
              <Button colorScheme="green" borderRadius="lg">
                {t('learn_more')}
>>>>>>> backend
              </Button>
            </Box>
          ))}
        </Grid>
      </Box>

<<<<<<< HEAD
      {/* Team Members Flex */}
      <Box padding="2rem" marginTop="2rem" backgroundColor="gray.100">
        <Heading as="h2" size="xl" textAlign="center" marginBottom="2rem" fontFamily="Poppins, sans-serif" color="green.700">
          Meet Our Team
=======
      {/* Team Members */}
      <Box padding="2rem" marginTop="2rem" backgroundColor="gray.100">
        <Heading as="h2" size="xl" textAlign="center" marginBottom="2rem" fontFamily="Poppins, sans-serif">
          {t('team.title')}
>>>>>>> backend
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
<<<<<<< HEAD
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
=======
              _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
              transition="transform 0.3s ease, box-shadow 0.3s ease"
>>>>>>> backend
              flex="auto"
              marginRight="1rem"
              minWidth="200px"
            >
<<<<<<< HEAD
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
=======
              <Avatar src={member.imageUrl} name={member.name} borderRadius="full" boxSize="100px" objectFit="cover" marginBottom="1rem" />
              <Heading as="h3" size="md">
                {member.name}
              </Heading>
              <Text>{member.role}</Text>
>>>>>>> backend
            </Box>
          ))}
        </Flex>
      </Box>
<<<<<<< HEAD
=======

      {/* Footer */}
      <Box backgroundColor="gray.900" color="white" padding="40px 20px" textAlign="center">
        <Text>&copy; 2024 AgriTech. {t('footer.copyright')}</Text>
        <Flex justifyContent="center" gap={6} fontSize="lg" marginTop="1rem">
          <Link href="/privacy" _hover={{ color: 'gray.400' }}>
            {t('footer.privacy')}
          </Link>
          <Link href="/terms" _hover={{ color: 'gray.400' }}>
            {t('footer.terms')}
          </Link>
          <Link href="/contact" _hover={{ color: 'gray.400' }}>
            {t('footer.contact')}
          </Link>
        </Flex>
      </Box>
>>>>>>> backend
    </Box>
  );
};

export default HomePage;

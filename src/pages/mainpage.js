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
      path: 'sustainable-agriculture',
    },
  ];

  const teamData = [
    {
      name: 'John Doe',
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
              </Button>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* Team Members */}
      <Box padding="2rem" marginTop="2rem" backgroundColor="gray.100">
        <Heading as="h2" size="xl" textAlign="center" marginBottom="2rem" fontFamily="Poppins, sans-serif">
          {t('team.title')}
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
              _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              flex="auto"
              marginRight="1rem"
              minWidth="200px"
            >
              <Avatar src={member.imageUrl} name={member.name} borderRadius="full" boxSize="100px" objectFit="cover" marginBottom="1rem" />
              <Heading as="h3" size="md">
                {member.name}
              </Heading>
              <Text>{member.role}</Text>
            </Box>
          ))}
        </Flex>
      </Box>

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
    </Box>
  );
};

export default HomePage;

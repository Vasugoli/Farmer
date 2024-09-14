import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  NumberInput,
  NumberInputField,
  Heading,
  useToast
} from '@chakra-ui/react';
import { FaTemperatureHigh, FaTint } from 'react-icons/fa';

const SoilTestForm = () => {
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    moisture: '',
    soilType: 'clay',
    cropType: ''
  });

  const [result, setResult] = useState(null);
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/soil-analysis', formData);
      setResult(response.data);
      toast({
        title: 'Analysis Successful.',
        description: "We've received your input and processed the data.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error fetching ML results:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch the analysis results.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="500px" mx="auto" p="5" style={{ backgroundColor: '#f0f4f8', borderRadius: '10px' }}>
      <Heading as="h2" size="lg" mb="5" textAlign="center">
        Soil Test Input
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
          <FormLabel>
            Temperature (°C) <FaTemperatureHigh />
          </FormLabel>
          <NumberInput min={20} max={50} step={1}>
            <NumberInputField name="temperature" value={formData.temperature} onChange={handleChange} required />
          </NumberInput>
        </FormControl>

        <FormControl mb="4">
          <FormLabel>
            Humidity (%) <FaTint />
          </FormLabel>
          <Input type="number" name="humidity" value={formData.humidity} onChange={handleChange} required />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>
            Moisture (%)
          </FormLabel>
          <Input type="number" name="moisture" value={formData.moisture} onChange={handleChange} required />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Soil Type</FormLabel>
          <Select name="soilType" value={formData.soilType} onChange={handleChange}>
            <option value="clay">Clay</option>
            <option value="sandy">Sandy</option>
            <option value="loamy">Loamy</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
          </Select>
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Crop Type</FormLabel>
          <NumberInput min={1} max={10} step={1}>
            <NumberInputField name="cropType" value={formData.cropType} onChange={handleChange} required />
          </NumberInput>
          <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
            Enter a number from 1 to 10 (1: Cotton, 2: Groundnuts, 3: Maize, 4: Millets, 5: Oilseeds, 6: Paddy, 7: Pulses, 8: Sugarcane, 9: Tobacco, 10: Wheat)
          </p>
        </FormControl>

        <Button colorScheme="blue" type="submit" width="100%" mt="4">
          Submit
        </Button>
      </form>

      {result && (
        <Box mt="6" p="4" style={{ backgroundColor: '#e0ffe0', borderRadius: '8px' }}>
          <Heading as="h3" size="md" mb="3">Fertilizer Recommendation</Heading>
          <p>{result.recommendation}</p>
        </Box>
      )}
    </Box>
  );
};

export default SoilTestForm;

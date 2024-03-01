import React, { useState } from "react";
import { Box, Grid, Button, Text, Image, useToast } from "@chakra-ui/react";
import { FaDice } from "react-icons/fa";

const Index = () => {
  const [diceRoll, setDiceRoll] = useState(1);
  const toast = useToast();

  const handleDiceRoll = () => {
    const newRoll = Math.ceil(Math.random() * 6);
    setDiceRoll(newRoll);
    toast({
      title: `You rolled a ${newRoll}!`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Text fontSize="2xl" mb={4}>
          Snakes and Ladders
        </Text>
        <Image src="https://images.unsplash.com/photo-1528164344705-47542687000d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxKYXBhbmVzZSUyMG1vdW50YWluJTIwdmlsbGFnZSUyMHZpZXd8ZW58MHx8fHwxNzA5MzI4NjUwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Japanese mountain village" mb={4} />
        <Grid templateColumns="repeat(10, 1fr)" gap={2}>
          {[...Array(100)].map((_, i) => (
            <Box w="40px" h="40px" bg="teal.500" key={i} display="flex" alignItems="center" justifyContent="center" color="white">
              {100 - i}
            </Box>
          ))}
        </Grid>
        <Button leftIcon={<FaDice />} colorScheme="pink" mt={6} onClick={handleDiceRoll}>
          Roll Dice
        </Button>
        <Text fontSize="3xl" mt={2}>
          {diceRoll}
        </Text>
      </Grid>
    </Box>
  );
};

export default Index;

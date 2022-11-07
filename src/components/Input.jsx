import { Input, Box, Flex, Button } from "@chakra-ui/react";
import React, { useState } from "react";

export const Task = () => {
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <Box justify="center" wrap="wrap" marginTop="1.5em">
          <Input
            placeholder="Enter your task"
            width="75%"
            onChange={(e) => setValue(e.target.value)}
          ></Input>
          <Button
            width="20%"
            marginLeft="1em"
            padding="1em 2em"
            borderRadius="0.5em"
            colorScheme="green"
            type="submit"
          >
            Add task
          </Button>
        </Box>
      </Flex>
    </form>
  );
};

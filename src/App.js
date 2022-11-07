import { Flex, Box } from '@chakra-ui/react';
import { Header } from "./components/Header";
import { Task } from "./components/Input";


function App() {
  return (
    <Flex align="center" justify="center" wrap="wrap">
      <Box w="100%" align="center" justify="center"><Header></Header></Box>
      <Task></Task>

    </Flex >
  );
}

export default App;

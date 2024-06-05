import { Container, Text, VStack, Heading, Box, Image, Link, IconButton, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box boxSize="150px">
          <Image src="https://images.unsplash.com/photo-1603415526960-f8f8d6e4b1d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW58ZW58MHx8fHwxNjE2NjYxMjQw&ixlib=rb-1.2.1&q=80&w=1080" alt="Profile Picture" borderRadius="full" />
        </Box>
        <Heading as="h1" size="2xl">
          Kord Campbell
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm Kord Campbell, a passionate software developer specializing in Python and web development. Welcome to my personal website!
        </Text>
        <HStack spacing={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://twitter.com/johndoe" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;

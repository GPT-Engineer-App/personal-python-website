import { useState } from "react";
import { Container, VStack, Heading, Input, Button } from "@chakra-ui/react";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      console.log("File uploaded:", file);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          Upload Image
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input type="file" onChange={handleFileChange} />
            <Button type="submit" colorScheme="blue">
              Upload
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;

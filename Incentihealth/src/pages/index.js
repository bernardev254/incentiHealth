import { VStack, Button, Heading, Image, Text, HStack } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons"; // Importing Chakra UI icon
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  // Handler for login button click
  const handleLogin = () => {
    router.push("/VerificationPage/SignIn"); // Navigate to the sign-in page
  };

  return (
    <VStack
      h="100vh"
      justify="center"
      align="center"
      spacing={8}
      bg="black"
      color="white"
      padding={8}
    >
      {/* Info Section with Icon */}
      <HStack spacing={2}>
        <InfoIcon color="blue.400" boxSize="20px" /> {/* Info icon from Chakra UI */}
        <Text fontSize="lg" color="gray.300" textAlign="center">
          Securely manage and consent on your health data Usage by Researchers and lower your medical costs  
        </Text>
      </HStack>

      {/* Logo at the top */}
      <Image
        src="/logo.jpeg" // Ensure the path to the logo is correct
        alt="Incentihealth Logo"
        boxSize="150px"
        objectFit="cover"
        borderRadius="full" // Make the logo round
      />

      {/* Main heading */}
      <Heading size="2xl" color="blue.400" textAlign="center">
        Welcome to Incentihealth
      </Heading>

      {/* Login button */}
      <Button
        colorScheme="blue"
        size="lg"
        width="200px"
        _hover={{ bg: "blue.500" }} // Hover effect on button
        _focus={{ bg: "blue.600" }} // Focus effect on button
        onClick={handleLogin} // Button click handler
        leftIcon={
          <Image
            src="/loginlogo.png" // Image icon for the login button
            alt="Login Logo"
            boxSize="24px" // Adjust the size as needed
          />
        }
      >
        Log In
      </Button>
    </VStack>
  );
};

export default LoginPage;


import {
	VStack,
	Text,
	HStack,
	Heading,
	Box,
	Image,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalCloseButton,
	useDisclosure,
	List,
	ListItem,
	ListIcon,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { CheckCircleIcon } from "@chakra-ui/icons";
  
  const ResearchOrganizationPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI modal state
	const [selectedOrg, setSelectedOrg] = useState(null); // Track selected organization
	const [dataUsages, setDataUsages] = useState([]); // Track data usage points
  
	// Extended list of research organizations
	const organizations = [
	  "IQVIA",
	  "Optum (UnitedHealth Group)",
	  "Cerner Corporation",
	  "Flatiron Health",
	  "IBM Watson Health",
	  "Verily (Alphabet Inc.)",
	  "Tempus",
	  "OM1",
	  "TriNetX",
	  "Health Catalyst",
	  "Mayo Clinic",
	  "Johns Hopkins Medicine",
	  "Cleveland Clinic",
	  "Epic Systems",
	  "Medidata Solutions",
	  "Allscripts Healthcare Solutions",
	  "Premier Inc.",
	  "Aetna (CVS Health)",
	  "Pfizer",
	  "Genentech",
	];
  
	// Data usage information (you can modify or fetch this dynamically)
	const dataUsageInfo = {
	  IQVIA: [
		"Conducts research on treatment outcomes.",
		"Improves drug development and testing.",
		"Aggregates anonymized health data for population-level studies."
	  ],
	  Optum: [
		"Enhances predictive modeling for healthcare costs.",
		"Develops personalized healthcare solutions.",
		"Uses data to improve patient care coordination."
	  ],
	  Pfizer: [
		"Supports vaccine research and development.",
		"Analyzes clinical trial data for new medications.",
		"Uses anonymized patient data for drug safety assessments."
	  ],
	  default: ["This organization uses your health data for general research and healthcare improvements."],
	};
  
	// Handle "Data Usage" button click
	const handleDataUsageClick = (org) => {
	  setSelectedOrg(org); // Set the selected organization
	  setDataUsages(dataUsageInfo[org] || dataUsageInfo.default); // Set data usage points
	  onOpen(); // Open the modal
	};
  
	return (
	  <VStack
		h="100vh"
		justify="center"
		align="center"
		bg="black"
		color="white"
		spacing={8}
		p={4}
	  >
		{/* Header Section */}
		<VStack w="100%" maxW="800px" spacing={4}>
		  <Heading color="blue.400" size="lg" textAlign="center">
			Research Organizations
		  </Heading>
		  <Heading color="gray.300" size="md" textAlign="center">
			Choose the research organizations you want to give access to your
			health data in exchange to lowering your health bills via Mpesa.
		  </Heading>
		</VStack>
  
		{/* Scrollable Organization Bars */}
		<Box
		  w="100%"
		  maxW="800px"
		  h="60vh"
		  overflowY="auto"
		  bg="gray.800"
		  borderRadius="lg"
		  p={4}
		  border="1px solid"
		  borderColor="gray.600"
		>
		  <VStack w="100%" spacing={4}>
			{organizations.map((org, index) => (
			  <HStack
				key={index}
				bg="gray.700"
				w="100%"
				justifyContent="space-between"
				border="1px"
				borderRadius="md"
				p={4}
				_hover={{ bg: "gray.600" }}
				borderColor="gray.600"
			  >
				<VStack align="start" spacing={0}>
				  <Text fontSize="18px" fontWeight="bold" color="blue.400">
					{org} {/* Organization name */}
				  </Text>
				  <Text fontSize="12px" color="gray.300">
					Research Organization
				  </Text>
				</VStack>
  
				<HStack spacing={4}>
				  {/* Payment logo */}
				  <Image
					src="/payment-method.png" // Image path
					alt="Payment Integration"
					boxSize="40px" // Adjust the size accordingly
					objectFit="contain"
				  />
				  {/* Data Usage Button */}
				  <Button colorScheme="blue" size="sm" onClick={() => handleDataUsageClick(org)}>
					Data Usage
				  </Button>
				</HStack>
			  </HStack>
			))}
		  </VStack>
		</Box>
  
		{/* Modal for Data Usage */}
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
		  <ModalOverlay />
		  <ModalContent>
			<ModalHeader>Data Usage by {selectedOrg}</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
			  <List spacing={3}>
				{dataUsages.map((usage, index) => (
				  <ListItem key={index}>
					<ListIcon as={CheckCircleIcon} color="green.500" />
					{usage}
				  </ListItem>
				))}
			  </List>
			</ModalBody>
			<ModalFooter>
			  <Button colorScheme="blue" mr={3} onClick={onClose}>
				Close
			  </Button>
			</ModalFooter>
		  </ModalContent>
		</Modal>
	  </VStack>
	);
  };
  
  export default ResearchOrganizationPage;
  
import { VStack, HStack, Heading, Button, Input, Text, useToast, Image } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
const { useState } = React;

const ProfileEntryPage = (props) => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const router = useRouter();
	const toast = useToast(); // Chakra UI toast hook

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		switch (name) {
			case "fullName":
				setFullName(value);
				break;
			case "email":
				setEmail(value);
				break;
			case "phoneNumber":
				setPhoneNumber(value);
				break;
			default:
				break;
		}
	};

	const handleConsent = () => {
		// Verify the user's information
		if (fullName === "" || email === "" || phoneNumber === "") {
			toast({
				title: "Incomplete information.",
				description: "Please fill in all fields.",
				status: "warning", // Set status to 'warning' for yellow color
				duration: 3000,    // Toast will auto-close after 3 seconds
				isClosable: true,  // Allow the toast to be closed manually
				position: "top",   // Show the toast at the top
			});
			return;
		}
		if (!email.includes("@") || !email.includes(".")) {
			toast({
				title: "Invalid email.",
				description: "Please enter a valid email address.",
				status: "error",   // Set status to 'error' for red color
				duration: 3000,
				isClosable: true,
				position: "top",
			});
			return;
		}
		if (phoneNumber.length !== 10) {
			toast({
				title: "Invalid phone number.",
				description: "Phone number must be exactly 10 digits.",
				status: "error",
				duration: 3000,
				isClosable: true,
				position: "top",
			});
			return;
		}

		try {
			// Save user info in local storage and redirect to Verification Page
			localStorage.setItem("fullName", fullName);
			localStorage.setItem("email", email);
			localStorage.setItem("phoneNumber", phoneNumber);

			router.push("/VerificationPage/ProveGraduate");
		} catch (error) {
			toast({
				title: "Error occurred.",
				description: `Error: ${error.message}`,
				status: "error",
				duration: 3000,
				isClosable: true,
				position: "top",
			});
		}
	};

	return (
		<VStack
			h="100vh"
			justify="center"
			align="center"
			spacing={8}
			bg="black"
			color="white"
		>
			{/* Proof of Consent Header */}
			

			<VStack>
				{/* HStack to add the logo next to Profile Details */}
				<HStack>
					<Image
						src="/verified.png" // Path to the verified logo
						alt="Verified Logo"
						boxSize="30px" // Adjust the size of the logo
					/>
					<Heading size="lg" color="blue.400">
						Profile Details
					</Heading>
				</HStack>

				<Text color="gray.400">
					Enter your information to give consent for the utilization of your private information in Research
				</Text>
			</VStack>

			<VStack spacing={4} w="100%" maxW="400px">
				<Input
					placeholder="Full Name"
					onChange={handleChange}
					name="fullName"
					value={fullName}
					bg="gray.700"
					color="white"
				/>
				<Input
					placeholder="Email"
					onChange={handleChange}
					name="email"
					value={email}
					bg="gray.700"
					color="white"
				/>
				<Input
					placeholder="Phone Number"
					onChange={handleChange}
					name="phoneNumber"
					value={phoneNumber}
					bg="gray.700"
					color="white"
				/>

				{/* Consent Button */}
				<Button
					colorScheme="blue"
					size="lg"
					onClick={handleConsent}
					bg="blue.600"
					_hover={{ bg: "blue.700" }}
				>
					Consent
				</Button>
			</VStack>
		</VStack>
	);
};

export default ProfileEntryPage;

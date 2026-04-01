import React from "react";
import { Box, SporProvider, Text, VStack } from "@vygruppen/spor-react";
import Nav from "./Nav";
import AprilFoolsBanner from "./AprilFoolsBanner";

interface IndexPageProps {
  currentPath: string;
}

export default function IndexPage({ currentPath }: IndexPageProps) {
  return (
    <SporProvider>
      <Box bg="bg" color="text" display="flex" flexDirection="column" minH="100vh">
        <Box as="header" pt={6}>
          <Nav currentPath={currentPath} />
        </Box>

        <Box as="main" flex={1} display="flex" alignItems="center" justifyContent="center">
          <VStack gap={4} textAlign="center" px={6}>
            <Text as="h1" fontSize="4xl" fontWeight="bold" color="text.highlight">
              Ringeriksbanen
            </Text>
            <Text fontSize="xl" color="text.secondary">
              Jernbane mellom Oslo og Hønefoss
            </Text>
            <Text fontSize="lg" color="text.tertiary" maxW="md">
              Prosjektet er i planleggingsfasen. Stortinget har ikke vedtatt finansiering, og det
              foreligger ingen bekreftet dato for byggestart.
            </Text>
            <AprilFoolsBanner />
          </VStack>
        </Box>

        <Box as="footer" pb={6} textAlign="center" fontSize="xs" color="text.tertiary">
          <p>Ringeriksbanen • jernbane mellom Oslo og Hønefoss</p>
        </Box>
      </Box>
    </SporProvider>
  );
}

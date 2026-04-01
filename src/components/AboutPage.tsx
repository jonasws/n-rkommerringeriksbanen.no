import React from "react";
import { Box, SporProvider } from "@vygruppen/spor-react";
import Nav from "./Nav";
import AboutContent from "./AboutContent";

interface AboutPageProps {
  currentPath: string;
}

export default function AboutPage({ currentPath }: AboutPageProps) {
  return (
    <SporProvider>
      <Box bg="bg" color="text" display="flex" flexDirection="column" minH="100vh">
        <Box as="header" pt={6}>
          <Nav currentPath={currentPath} />
        </Box>

        <AboutContent />

        <Box as="footer" pb={6} textAlign="center" fontSize="xs" color="text.tertiary">
          <p>Ringeriksbanen • jernbane mellom Oslo og Hønefoss</p>
        </Box>
      </Box>
    </SporProvider>
  );
}

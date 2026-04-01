import React from "react";
import { Box, SporProvider } from "@vygruppen/spor-react";
import Nav from "./Nav";

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

        <Box as="main" flex={1} display="flex" alignItems="center" justifyContent="center" />

        <Box as="footer" pb={6} textAlign="center" fontSize="xs" color="text.tertiary">
          <p>Ringeriksbanen • jernbane mellom Oslo og Hønefoss</p>
        </Box>
      </Box>
    </SporProvider>
  );
}

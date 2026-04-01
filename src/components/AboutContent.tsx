import React from "react";
import { Box, VStack, HStack, Text } from "@vygruppen/spor-react";

export default function AboutContent() {
  return (
    <Box as="main" maxW="2xl" mx="auto" px={6} py={16}>
      <Text as="h1" fontSize="4xl" fontWeight="bold" mb={8} color="text.highlight">
        Om Ringeriksbanen
      </Text>

      <VStack gap={6} align="start" lineHeight="tall">
        <Text>
          Ringeriksbanen er en planlagt jernbane mellom Sandvika og Hønefoss.
          Banen vil korte ned reisetiden mellom Oslo og Bergen med omtrent én
          time, og gi en ny og raskere forbindelse til Ringerike.
        </Text>

        <Text>
          Prosjektet har vært planlagt i flere tiår og har gjennomgått tallrike
          utredninger, konsekvensanalyser og politiske behandlinger. Nye Veier
          overtok planlegging og bygging i 2021.
        </Text>

        <Text as="h2" fontSize="2xl" fontWeight="semibold" mt={10} mb={4} color="text.secondary">
          Status (2026)
        </Text>

        <Text>
          Prosjektet er i planleggingsfasen. Stortinget har ikke vedtatt
          finansiering, og det foreligger ingen bekreftet dato for byggestart.
          Ringeriksbanen inngår i Nasjonal transportplan frem til 2033, men
          dette innebærer ikke at bygging vil starte innen den tid.
        </Text>

        <Text as="h2" fontSize="2xl" fontWeight="semibold" mt={10} mb={4} color="text.secondary">
          Nøkkelfakta
        </Text>

        <VStack as="ul" gap={2} align="start" listStyleType="none" p={0}>
          {[
            "Strekning: Jong (Sandvika) – Hønefoss (ca. 40 km)",
            "23 km tunnel mellom Sandvika og Sundvollen",
            "3 km tunnel mellom Hole og Hønefoss",
            "Nye stasjoner: Sundvollen og oppgradert Hønefoss",
            "Reduserer reisetiden Oslo–Bergen med ~60 minutter",
            "Finansiering ikke vedtatt av Stortinget",
          ].map((fact) => (
            <HStack as="li" key={fact} gap={3}>
              <Text color="text.secondary" aria-hidden>→</Text>
              <Text>{fact}</Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}

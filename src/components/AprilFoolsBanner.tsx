import React, { useState, useEffect } from "react";
import { Box, Text, VStack, HStack } from "@vygruppen/spor-react";

function isAprilFools2026(): boolean {
  const now = new Date();
  return now.getFullYear() === 2026 && now.getMonth() === 3 && now.getDate() === 1;
}

export default function AprilFoolsBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isAprilFools2026());
  }, []);

  if (!show) return null;

  return (
    <Box
      border="2px solid"
      borderColor="text.highlight"
      borderRadius="lg"
      p={6}
      bg="bg"
      maxW="2xl"
      mx="auto"
      mt={6}
    >
      <VStack gap={4} textAlign="center">
        <Text fontSize="sm" fontWeight="bold" color="text.secondary" letterSpacing="widest" textTransform="uppercase">
          🚨 Pressemelding • 1. april 2026 🚨
        </Text>

        <Text as="h2" fontSize="3xl" fontWeight="bold" color="text.highlight" lineHeight="tight">
          Det skjer. Det skjer faktisk.
        </Text>

        <Text fontSize="xl" fontWeight="semibold" color="text.secondary">
          Stortinget vedtar enstemmig finansiering av Ringeriksbanen
        </Text>

        <Text color="text.tertiary" maxW="lg" textAlign="left">
          I en historisk avstemning tidlig i dag morges vedtok Stortinget enstemmig å bevilge
          {" "}54,7 milliarder kroner til bygging av Ringeriksbanen. Samferdselsminister
          Kari Transportsen beskriver vedtaket som «en ny æra for norsk jernbane».
        </Text>

        <Box
          borderLeft="3px solid"
          borderColor="text.secondary"
          pl={4}
          textAlign="left"
          alignSelf="stretch"
        >
          <Text fontStyle="italic" color="text.secondary">
            «Vi har ventet lenge på denne dagen – egentlig altfor lenge. Men nå er vi klare.
            Norges mest omtalte jernbaneprosjekt gjennom tidene starter byggearbeid allerede
            i morgen, 2. april, kl. 09:00. Første tog mellom Oslo og Hønefoss er planlagt å
            gå 1. desember 2026.»
          </Text>
          <Text fontSize="sm" color="text.tertiary" mt={2}>
            — Samferdselsminister Kari Transportsen, Stortinget, 1. april 2026
          </Text>
        </Box>

        <VStack gap={1} textAlign="left" alignSelf="stretch">
          {[
            "Byggestart: 2. april 2026",
            "Ventet ferdigstilt: 1. desember 2026 (8 måneder)",
            "Budsjett: 54,7 milliarder kroner (forventes ikke å overskrides)",
            "Anbudsrunde: allerede gjennomført (i løpet av natten)",
          ].map((item) => (
            <HStack key={item} gap={3}>
              <Text color="text.highlight" aria-hidden>✓</Text>
              <Text fontSize="sm" color="text.tertiary">{item}</Text>
            </HStack>
          ))}
        </VStack>

        <Text fontSize="xs" color="text.tertiary" borderTop="1px solid" borderColor="text.tertiary" pt={4} maxW="lg">
          Dette er en aprilsnarr. Ringeriksbanen er fortsatt i planleggingsfasen og Stortinget
          har fortsatt ikke vedtatt finansiering. Men håpet lever!
        </Text>
      </VStack>
    </Box>
  );
}

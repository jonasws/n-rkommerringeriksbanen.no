import React from "react";
import { Box, HStack, TextLink } from "@vygruppen/spor-react";

const links = [
  { href: "/", label: "Hjem" },
  { href: "/om", label: "Om prosjektet" },
];

interface NavProps {
  currentPath: string;
}

export default function Nav({ currentPath }: NavProps) {
  return (
    <Box as="nav" display="flex" justifyContent="center" py={4}>
      <HStack gap={6}>
        {links.map(({ href, label }) => (
          <TextLink
            key={href}
            href={href}
            variant={currentPath === href ? "primary" : "secondary"}
            fontWeight={currentPath === href ? "bold" : "normal"}
          >
            {label}
          </TextLink>
        ))}
      </HStack>
    </Box>
  );
}

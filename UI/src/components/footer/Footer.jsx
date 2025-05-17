import React, { useContext } from "react";
import { Box, Typography, Link, Container, Stack } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContextProvider";

const Footer = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const borderColor = isDarkMode
    ? "rgba(255, 255, 255, 0.12)"
    : "rgba(0, 0, 0, 0.12)";
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: "auto",

        borderTop: "1px solid",
        borderColor: { borderColor },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#home" color="inherit" underline="hover">
              Home
            </Link>
            <Link href="#education" color="inherit" underline="hover">
              Education
            </Link>
            <Link href="#projects" color="inherit" underline="hover">
              Projects
            </Link>
            <Link href="#contact" color="inherit" underline="hover">
              Contact
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

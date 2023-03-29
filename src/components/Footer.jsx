import { Box, Stack, Typography } from "@mui/material";
import FooterLogo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mx="40px" bgColor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" py="24px">
        <img src={FooterLogo} alt="Logo" width="200px" height="40px" />
        <Typography variant="h5" color="#ff2526">
          Made by {"<Beethoven />"}{" "}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;

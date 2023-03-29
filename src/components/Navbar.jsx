import { Link, NavLink } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Home"
          //   className="w-[48px] h-[48px] mx-[20px] my-0"
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <NavLink
          to="/"
          className="text-[#3A1212] border-b-[3px] border-b-[#FF2625]"
        >
          Home
        </NavLink>
        <a href="/exercise/:id" className="text-[#3A1212]">
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;

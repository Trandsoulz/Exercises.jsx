import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { BodyContext } from "../App";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item }) => {
  const { bodyPart, setBodyPart } = useContext(BodyContext);
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      m="5px"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#FFFDD0",
        // borderBottomLeftRadius: "20px",
        // width: "270px",
        height: "280px",
        cursor: "pointer",
        // gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        // console.log(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbell photos"
        style={{ height: "40px", width: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;

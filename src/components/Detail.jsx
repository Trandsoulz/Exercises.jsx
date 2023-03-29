import { Button, Stack, Typography } from "@mui/material";

import BodyPartIMG from "../assets/icons/body-part.png";
import TargetIMG from "../assets/icons/target.png";
import EquipmentIMG from "../assets/icons/equipment.png";
import { ImSpinner2 } from "react-icons/im";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, id, name, target } = exerciseDetail;
  const extraExerciseDetail = [
    {
      icon: BodyPartIMG,
      name: bodyPart,
    },
    {
      icon: TargetIMG,
      name: target,
    },
    {
      icon: EquipmentIMG,
      name: equipment,
    },
  ];
  if (!(bodyPart, equipment, gifUrl, id, name, target))
    return (
      <ImSpinner2 className="animate-spin mx-auto text-6xl text-[#ff2625]" />
    );
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} loading="lazy" alt="name" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h4" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises Keep you strong. {name}
          is one of the best exercises to target your {target}. It will help
          improve your mood and gain energy
        </Typography>
        {extraExerciseDetail.map(({ icon, name, id }) => (
          <Stack key={id} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={icon}
                loading="lazy"
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize">
              {/* {name.charAt(0).toUpperCase() + name.slice(1)} */}
              {name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;

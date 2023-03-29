import { Button, Stack, Typography } from "@mui/material";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { BodyContext } from "../App";

const ExerciseCard = ({ exercise }) => {
  // const { exercises } = useContext(BodyContext);

  return (
    <Link className="exercise-card" to={`/exercise/${exercise?.id}`}>
      <img src={exercise?.gifUrl} alt={exercise?.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise?.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise?.target}
        </Button>
      </Stack>

      <Typography
        ml="21px"
        pb="10px"
        color="000"
        fontWeight="bold"
        mt="11px"
        textTransform="capitalize"
        fontSize="1.5em"
      >
        {exercise?.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;

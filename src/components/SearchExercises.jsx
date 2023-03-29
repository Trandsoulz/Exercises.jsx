import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { BodyContext } from "../App";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = () => {
  const { bodyPart, setBodyPart, exercises, setExercises } =
    useContext(BodyContext);

  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);
  const handleSubmit = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name?.toLowerCase().includes(search) ||
          exercise.bodyPart?.toLowerCase().includes(search) ||
          exercise.target?.toLowerCase().includes(search) ||
          exercise.equipments?.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
      // console.log(["all", ...bodyPartsData]);
    };
    fetchExerciseData();
  }, []);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        textAlign="center"
        mb="50px"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: { fontWeight: " 700", border: "none", borderRadius: "4px" },
            width: {
              lg: "800px",
              sx: "350px",
            },
            backgroundColor: "#FFF",
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            textTransform: "none",
            color: "#FFF",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSubmit}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollBar data={bodyParts} isBodyPart />
      </Box>
    </Stack>
  );
};

export default SearchExercises;

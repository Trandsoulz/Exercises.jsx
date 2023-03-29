import { Suspense } from "react";
import { Box, Button } from "@mui/material";
import Exercises from "../components/Exercises";
import HeroSection from "../components/HeroSection";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Box>
        <HeroSection />
        <SearchExercises />
        <Exercises />
        {/* You can always click here, to reload */}
        <Button onClick={() => location.reload()}>Reload</Button>
        <Button
          variant="contained"
          sx={{ position: "fixed", bottom: 0, right: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          To top
        </Button>
      </Box>
    </Suspense>
  );
};

export default Home;

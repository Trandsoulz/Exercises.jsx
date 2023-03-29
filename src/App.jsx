import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

export const BodyContext = createContext();

const App = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <BodyContext.Provider
      value={{ bodyPart, setBodyPart, exercises, setExercises }}
    >
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route
            path="/"
            fallbackElement={<h1>Loading...</h1>}
            element={<Home />}
          />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="*" element={<h1>404 Page</h1>} />
        </Routes>
        <Footer />
      </Box>
    </BodyContext.Provider>
  );
};

export default App;

import { Box, Typography } from "@mui/material";
import { Suspense, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);
  const { id } = useParams();

  const effectRan = useRef(false);

  useEffect(() => {
    const fetchExerciseData = async () => {
      // Exercise Detail
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      // console.log(exerciseDetailData);
      setExerciseDetail(exerciseDetailData);
      // Youtube Detail
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=/${exerciseDetailData.name}`,
        youtubeOptions
      );
      // console.log(exerciseVideoData.contents);
      setExerciseVideo(exerciseVideoData.contents);

      // Target Muscle Exercise Data
      const targetMuscleData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercise(targetMuscleData);
      // console.log(targetMuscleData);

      // Equipment Exercise Data
      if (effectRan.current === true) {
        const equipmentExerciseData = await fetchData(
          `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
          exerciseOptions
        );
        console.log(equipmentExerciseData);
        setEquipmentExercise(equipmentExerciseData);
      }
    };

    fetchExerciseData();

    return () => {
      effectRan.current = true;
    };
  }, [id]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Box>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos
          exerciseVideo={exerciseVideo}
          exerciseDetail={exerciseDetail}
        />
        <SimilarExercises
          targetMuscleExercise={targetMuscleExercise}
          equipmentExercise={equipmentExercise}
        />
      </Box>
    </Suspense>
  );
};

export default ExerciseDetail;

import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { ImSpinner2 } from "react-icons/im";
import { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";

const SimilarExercises = ({ targetMuscleExercise, equipmentExercise }) => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    rtl: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Box>
      <Stack mt="5">
        <Typography variant="h5" textTransform="capitalize">
          Exercises that target thesame{" "}
          <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
            Muscle
          </span>{" "}
          group
        </Typography>
        <img
          src={leftArrow}
          className=" w-[3rem] hover:scale-125 duration-300 cursor-pointer"
          onClick={previous}
          alt="leftArrow"
        />
        <Slider ref={sliderRef} {...settings}>
          {/* <BodyPart item={"All"} />
        <BodyPart item={"back"} />
        <BodyPart item={"cardio"} />
        <BodyPart item={"chest"} />
        <BodyPart item={"lower arms"} />
        <BodyPart item={"lower legs"} />
        <BodyPart item={"neck"} />
        <BodyPart item={"upper arms"} />
        <BodyPart item={"upper legs"} />
        <BodyPart item={"waist"} /> */}
          {targetMuscleExercise.length ? (
            targetMuscleExercise.map((item) => (
              <Box key={item.id} m="0 40px">
                <ExerciseCard
                  exercise={item}
                  onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
                />
              </Box>
            ))
          ) : (
            <ImSpinner2 className="animate-spin mx-auto text-6xl text-[#ff2625]" />
          )}
        </Slider>
        <img
          src={rightArrow}
          className=" w-[3rem] hover:scale-125 duration-300 cursor-pointer"
          onClick={next}
          alt="RightArrow"
        />
      </Stack>

      <Stack mt="5">
        <Typography variant="h5" textTransform="capitalize">
          Exercises that use thesame{" "}
          <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
            Equipment
          </span>
        </Typography>
        <img
          src={leftArrow}
          className=" w-[3rem] hover:scale-125 duration-300 cursor-pointer"
          onClick={previous}
          alt="leftArrow"
        />
        <Slider ref={sliderRef} {...settings}>
          {/* <BodyPart item={"All"} />
        <BodyPart item={"back"} />
        <BodyPart item={"cardio"} />
        <BodyPart item={"chest"} />
        <BodyPart item={"lower arms"} />
        <BodyPart item={"lower legs"} />
        <BodyPart item={"neck"} />
        <BodyPart item={"upper arms"} />
        <BodyPart item={"upper legs"} />
        <BodyPart item={"waist"} /> */}
          {equipmentExercise.length ? (
            equipmentExercise.map((item) => (
              <Box key={item.id} m="0 40px">
                <ExerciseCard
                  exercise={item}
                  onclick={window.scrollTo({ top: 0, behavior: "smooth" })}
                />
              </Box>
            ))
          ) : (
            <ImSpinner2 className="animate-spin mx-auto text-6xl text-[#ff2625]" />
          )}
        </Slider>
        <img
          src={rightArrow}
          className=" w-[3rem] hover:scale-125 duration-300 cursor-pointer"
          onClick={next}
          alt="RightArrow"
        />
      </Stack>
    </Box>
  );
};

export default SimilarExercises;

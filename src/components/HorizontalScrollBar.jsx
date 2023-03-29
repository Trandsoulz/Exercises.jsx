import { useRef } from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// import Carousel from "nuka-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";

const HorizontalScrollBar = ({ data, isBodyPart }) => {
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
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <img
        src={leftArrow}
        className="left-arrow"
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
        {data.map((item) => (
          <Box key={item.id} m="0 40px">
            {isBodyPart ? (
              <BodyPart item={item} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </Slider>
      <img
        src={rightArrow}
        className="right-arrow"
        onClick={next}
        alt="RightArrow"
      />
    </>
  );
};

export default HorizontalScrollBar;

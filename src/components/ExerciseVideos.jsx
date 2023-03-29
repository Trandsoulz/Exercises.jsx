import { Box, Stack, Typography } from "@mui/material";

import { ImSpinner2 } from "react-icons/im";

const ExerciseVideos = ({ exerciseVideo, exerciseDetail }) => {
  const { name } = exerciseDetail;
  if (!exerciseVideo.length) {
    return (
      <Box
        sx={{ marginTop: { lg: "200px", xs: "20px" } }}
        p="20px"
        justifyContent="center"
      >
        <ImSpinner2 className="animate-spin mx-auto text-6xl text-[#ff2625]" />
      </Box>
    );
  }
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h5">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent={"flex-start"}
        flexWrap="flex-wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideo.slice(0, 3).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6">
                Video by {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;

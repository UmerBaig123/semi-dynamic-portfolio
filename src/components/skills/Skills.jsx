import React, { useContext, useEffect, useState } from "react";
import { LinearProgress, Typography, Box, Stack } from "@mui/material";
import { ThemeContext } from "../../ThemeContextProvider";

const Skills = ({ skills }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [progressColors, setProgressColors] = useState({});
  useEffect(() => {
    const progressColors = {
      light: {
        backgroundColor: "#e0e0e0",
        barColor: "#4caf50",
      },
      dark: {
        backgroundColor: "#232323",
        barColor: "#a62dc2",
      },
    };
    setProgressColors(progressColors[isDarkMode ? "dark" : "light"]);
  }, [isDarkMode]);

  return (
    <div className="item-box" style={{ marginBottom: "100px" }}>
      <div className="heading">Skills</div>
      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <Stack spacing={3}>
          {skills.map((skill, index) => (
            <Box key={index}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="subtitle1">{skill.skill_name}</Typography>
                <Typography variant="body2">{skill.skill_progress}%</Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.skill_progress}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: progressColors.barColor, // Filled part (progress)
                  },
                  backgroundColor: progressColors.backgroundColor, // Unfilled track
                }}
              />
            </Box>
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default Skills;

import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const SkillProgress = ({
  skill,
  index,
  progressColors,
  deleteSkill,
  updateSkill,
}) => {
  const [progress, setProgress] = useState(skill.skill_progress);
  const barRef = useRef(null);
  const isDragging = useRef(false);
  const setTimeoutForUpdate = (current_progress) => {
    console.log("Setting timeout for update with progress:", current_progress);
    setTimeout(async () => {
      if (Math.round(progress) == Math.round(current_progress)) {
        let new_skill = {
          ...skill,
          skill_progress: Math.round(current_progress),
        };
        console.log("Updating skill:", new_skill);
        (await updateSkill) && updateSkill(new_skill);
        if (progress == 0) {
          deleteSkill(new_skill._id);
        }
      } else {
        const c_progress = Math.round(progress);
        setTimeoutForUpdate(c_progress);
      }
    }, 100);
  };
  useEffect(() => {
    if (progress !== skill.skill_progress) {
      console.log("Progress changed:", progress);
      const current_progress = skill.skill_progress;
      setTimeoutForUpdate(current_progress);
    }
  }, [progress]);
  const handleMouseDown = () => {
    isDragging.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event) => {
    if (!isDragging.current || !barRef.current) return;

    const rect = barRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const newProgress = Math.min(
      100,
      Math.max(0, (offsetX / rect.width) * 100)
    );
    setProgress(newProgress);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <Box key={index} sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="subtitle1">{skill.skill_name}</Typography>
        <Typography variant="body2">{Math.round(progress)}%</Typography>
      </Box>

      <Box
        ref={barRef}
        onMouseDown={handleMouseDown}
        sx={{ position: "relative", cursor: "pointer" }}
      >
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            "& .MuiLinearProgress-bar": {
              backgroundColor: progressColors.barColor,
            },
            backgroundColor: progressColors.backgroundColor,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
};

export default SkillProgress;

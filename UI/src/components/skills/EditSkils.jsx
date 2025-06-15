import React, { useContext, useEffect, useRef, useState } from "react";
import { LinearProgress, Typography, Box, Stack } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContextProvider";
import "./skills.css"; // Assuming you have a CSS file for styles
import SkillProgress from "./DraggableSkill";
import { createSkill, getSkills, updateSkill } from "../../api/Skills";
import { set } from "mongoose";
const EditSkills = () => {
  const new_skill = useRef();
  const [skills, setSkills] = useState([]);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [progressColors, setProgressColors] = useState({});
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsData = await getSkills();
        console.log("Fetched skills:", skillsData);
        setSkills(skillsData);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);
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
          {skills?.map((skill, index) => (
            <SkillProgress
              skill={skill}
              index={index}
              key={`${skill}-${index}`}
              deleteSkill={(id) => {
                setTimeout(() => {
                  window.location.reload();
                }, 200);
              }}
              updateSkill={async (skill) => {
                const updatedSkill = await updateSkill(skill);
                setSkills(
                  skills.map((s) => (s._id === skill._id ? updatedSkill : s))
                );
              }}
              progressColors={progressColors}
            />
          ))}
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <input
            type="text"
            ref={new_skill}
            placeholder="Enter skill name"
            className="skill-name-input"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <button
            style={{
              padding: "8px 24px",
              borderRadius: "6px",
              border: "none",
              background: isDarkMode ? "#a62dc2" : "#4caf50",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              transition: "background 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            onClick={async () => {
              const n_skill = {
                skill_name: new_skill.current.value,
                skill_progress: 50,
              };
              const created = await createSkill(n_skill);
              setSkills([...skills, created]);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
            Add Skill
          </button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "12px",
          }}
        >
          <p>Drag skill progress to 0 to remove</p>
        </Box>
      </Box>
    </div>
  );
};

export default EditSkills;

import { Box, Typography, Grid, useTheme, Tooltip } from "@mui/material";

/* ── Skill data with devicon SVG logos ─────────────────────────────────── */
const skillGroups = [
  {
    title: "Languages",
    emoji: "💻",
    color: "#7c3aed",
    bgFrom: "rgba(124,58,237,0.12)",
    bgTo: "rgba(124,58,237,0.04)",
    skills: [
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Java",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "SQL",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Frontend",
    emoji: "🎨",
    color: "#06b6d4",
    bgFrom: "rgba(6,182,212,0.12)",
    bgTo: "rgba(6,182,212,0.04)",
    skills: [
      { name: "React.js",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML5",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    color: "#10b981",
    bgFrom: "rgba(16,185,129,0.12)",
    bgTo: "rgba(16,185,129,0.04)",
    skills: [
      { name: "Node.js",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "REST APIs",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    ],
  },
  {
    title: "Database & Tools",
    emoji: "🗄️",
    color: "#f59e0b",
    bgFrom: "rgba(245,158,11,0.12)",
    bgTo: "rgba(245,158,11,0.04)",
    skills: [
      { name: "MongoDB",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Git",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
];

/* ── Single skill pill ──────────────────────────────────────────────────── */
function SkillPill({ skill, color, dark }) {
  return (
    <Tooltip title={skill.name} placement="top" arrow>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.75,
          p: { xs: "10px 12px", md: "12px 14px" },
          borderRadius: 2.5,
          border: "1px solid",
          borderColor: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
          background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)",
          cursor: "default",
          transition: "transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease",
          minWidth: { xs: 64, md: 72 },
          "@media (hover: hover)": {
            "&:hover": {
              transform: "translateY(-5px) scale(1.06)",
              borderColor: `${color}55`,
              boxShadow: `0 8px 24px ${color}30`,
              background: dark ? `${color}15` : `${color}10`,
            },
          },
        }}
      >
        <Box
          component="img"
          src={skill.logo}
          alt={skill.name}
          loading="lazy"
          sx={{
            width: { xs: 30, md: 36 },
            height: { xs: 30, md: 36 },
            objectFit: "contain",
            /* invert GitHub logo in light mode so it stays visible */
            filter: skill.name === "GitHub" && !dark ? "invert(1)" : "none",
            /* soften Express logo (it's black) in dark mode */
            ...(skill.name === "Express.js" && dark && { filter: "invert(1) brightness(0.85)" }),
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: "0.68rem", md: "0.72rem" },
            fontWeight: 600,
            color: "text.secondary",
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: 1.2,
          }}
        >
          {skill.name}
        </Typography>
      </Box>
    </Tooltip>
  );
}

/* ── Main component ─────────────────────────────────────────────────────── */
export default function Skills() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  return (
    <Box
      id="skills"
      sx={{ maxWidth: 1100, mx: "auto", px: { xs: 2.5, sm: 3, md: 4 }, py: { xs: 7, md: 10 } }}
    >
      <div className="section-label">My toolkit</div>

      <Typography
        variant="h3"
        sx={{ mb: { xs: 4, md: 6 }, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" } }}
      >
        Skills &{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Technologies
        </Box>
      </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {skillGroups.map((group) => (
          <Grid item xs={12} sm={6} md={3} key={group.title}>
            <Box
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 3,
                height: "100%",
                background: dark
                  ? `linear-gradient(145deg, ${group.bgFrom}, ${group.bgTo})`
                  : `linear-gradient(145deg, ${group.bgFrom}, rgba(255,255,255,0.7))`,
                border: "1px solid",
                borderColor: dark
                  ? `${group.color}25`
                  : `${group.color}20`,
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(12px)",
                /* top accent bar */
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${group.color}, transparent)`,
                  borderRadius: "3px 3px 0 0",
                },
              }}
            >
              {/* Card header */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 2.5 }}>
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: `${group.color}22`,
                    border: `1px solid ${group.color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  {group.emoji}
                </Box>
                <Typography
                  fontWeight={800}
                  fontSize={{ xs: "0.88rem", md: "0.95rem" }}
                  sx={{ color: group.color }}
                >
                  {group.title}
                </Typography>
              </Box>

              {/* Skill pills grid */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {group.skills.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} color={group.color} dark={dark} />
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

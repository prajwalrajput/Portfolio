import { Box, Typography, Grid, useTheme } from "@mui/material";
import { Code, Lightbulb, RocketLaunch, EmojiEvents } from "@mui/icons-material";

const highlights = [
  { icon: <Code />, title: "Full-Stack Dev", desc: "React + Node.js + MongoDB" },
  { icon: <Lightbulb />, title: "Problem Solver", desc: "Competitive programmer" },
  { icon: <RocketLaunch />, title: "Fast Learner", desc: "Adapts to new tech quickly" },
  { icon: <EmojiEvents />, title: "Top Ranker", desc: "CGPA 9.22 · First Rank" },
];

export default function About() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  return (
    <Box
      id="about"
      sx={{ maxWidth: 1100, mx: "auto", px: { xs: 2.5, sm: 3, md: 4 }, py: { xs: 7, md: 10 } }}
    >
      <div className="section-label">About me</div>

      <Typography
        variant="h3"
        sx={{ mb: 2, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" } }}
      >
        A little{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          about me
        </Box>
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          maxWidth: 680,
          mb: 5,
          fontSize: { xs: "0.93rem", md: "1.05rem" },
          lineHeight: 1.85,
        }}
      >
        I'm a Computer Engineering graduate from{" "}
        <Box component="span" sx={{ color: "text.primary", fontWeight: 600 }}>
          Gokhale Education Society's R. H. Sapat College of Engineering, Nashik
        </Box>
        . I enjoy building web applications, exploring new technologies, and
        solving real-world problems through clean, efficient code. My goal is to
        contribute to impactful software projects and grow as a full-stack developer.
      </Typography>

      {/* Highlight cards — 2 cols on mobile, 4 on desktop */}
      <Grid container spacing={{ xs: 2, md: 2.5 }}>
        {highlights.map((item) => (
          <Grid item xs={6} sm={6} md={3} key={item.title}>
            <Box
              className="glass-card"
              sx={{
                p: { xs: 2, sm: 2.5, md: 3 },
                borderRadius: 3,
                height: "100%",
                background: dark ? "rgba(255,255,255,0.03)" : "rgba(124,58,237,0.04)",
                border: "1px solid",
                borderColor: dark ? "rgba(255,255,255,0.07)" : "rgba(124,58,237,0.12)",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: { xs: 38, md: 44 },
                  height: { xs: 38, md: 44 },
                  borderRadius: 2,
                  background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "primary.main",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </Box>
              <Typography fontWeight={700} fontSize={{ xs: "0.85rem", md: "0.95rem" }}>
                {item.title}
              </Typography>
              <Typography color="text.secondary" fontSize={{ xs: "0.78rem", md: "0.85rem" }}>
                {item.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

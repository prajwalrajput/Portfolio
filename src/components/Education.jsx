import { Box, Typography, Grid, useTheme } from "@mui/material";
import { School, Work, EmojiEvents, Code } from "@mui/icons-material";

const details = [
  {
    icon: <School />,
    title: "B.E. Computer Engineering",
    subtitle: "R. H. Sapat College of Engineering, Nashik · 2026",
    description: "CGPA: 9.22 · First Class with Distinction",
    color: "#7c3aed",
  },
  {
    icon: <Work />,
    title: "Web Development Internship",
    subtitle: "NetLeap IT Training and Solutions · Jan–Mar 2025",
    description: "Worked on responsive websites and a dealership enquiry system.",
    color: "#06b6d4",
  },
  {
    icon: <EmojiEvents />,
    title: "Academic Excellence Award",
    subtitle: "2022–2023",
    description: "First Rank in First Year Engineering.",
    color: "#f59e0b",
  },
  {
    icon: <Code />,
    title: "TCS CodeVita Season 13",
    subtitle: "Global Rank 12,632",
    description: "Participated in a competitive programming challenge.",
    color: "#10b981",
  },
];

export default function Education() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  return (
    <Box
      id="education"
      sx={{ maxWidth: 1100, mx: "auto", px: { xs: 2.5, sm: 3, md: 4 }, py: { xs: 7, md: 10 } }}
    >
      <div className="section-label">My journey</div>

      <Typography
        variant="h3"
        sx={{ mb: { xs: 4, md: 6 }, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" } }}
      >
        Education &{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Achievements
        </Box>
      </Typography>

      {/* 1 col on mobile, 2 col on tablet and up */}
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {details.map((item) => (
          <Grid item xs={12} sm={6} key={item.title}>
            <Box
              className="glass-card"
              sx={{
                p: { xs: 2.5, md: 3.5 },
                borderRadius: 3,
                height: "100%",
                display: "flex",
                gap: { xs: 2, md: 2.5 },
                alignItems: "flex-start",
                background: dark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)",
                border: "1px solid",
                borderColor: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: { xs: 42, md: 48 },
                  height: { xs: 42, md: 48 },
                  minWidth: { xs: 42, md: 48 },
                  borderRadius: 2.5,
                  background: `linear-gradient(135deg, ${item.color}25, ${item.color}10)`,
                  border: `1px solid ${item.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: item.color,
                  mt: 0.25,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </Box>

              {/* Content */}
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  fontWeight={800}
                  fontSize={{ xs: "0.92rem", md: "1rem" }}
                  mb={0.5}
                  sx={{ lineHeight: 1.4 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  fontSize={{ xs: "0.8rem", md: "0.85rem" }}
                  fontWeight={600}
                  sx={{ color: item.color, mb: 0.75, lineHeight: 1.5, wordBreak: "break-word" }}
                >
                  {item.subtitle}
                </Typography>
                <Typography
                  color="text.secondary"
                  fontSize={{ xs: "0.83rem", md: "0.88rem" }}
                  lineHeight={1.7}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

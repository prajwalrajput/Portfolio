import {
  Box,
  Typography,
  Grid,
  Button,
  Stack,
  Tooltip,
  useTheme,
} from "@mui/material";
import { GitHub, OpenInNew, ArrowForward } from "@mui/icons-material";

/* ── Tech logo map (devicons CDN) ──────────────────────────────────────── */
const TECH_LOGOS = {
  "Node.js":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Express.js":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "MongoDB":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "EJS":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React.js":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Material UI":  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  "Weather API":  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML5":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "MySQL":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Git":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Postman":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
};

/* ── Tech badge with logo ───────────────────────────────────────────────── */
function TechBadge({ name, accentColor, dark }) {
  const logo = TECH_LOGOS[name];
  const isGitHub  = name === "GitHub";
  const isExpress = name === "Express" || name === "Express.js";

  return (
    <Tooltip title={name} placement="top" arrow>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.6,
          px: 1.1,
          py: 0.55,
          borderRadius: 1.5,
          border: "1px solid",
          borderColor: `${accentColor}30`,
          background: `${accentColor}12`,
          cursor: "default",
          transition: "all 0.2s ease",
          "@media (hover: hover)": {
            "&:hover": {
              borderColor: `${accentColor}60`,
              background: `${accentColor}22`,
              transform: "translateY(-2px)",
            },
          },
        }}
      >
        {logo && (
          <Box
            component="img"
            src={logo}
            alt={name}
            loading="lazy"
            sx={{
              width: 15,
              height: 15,
              objectFit: "contain",
              flexShrink: 0,
              filter:
                isGitHub && !dark
                  ? "invert(1)"
                  : isExpress && dark
                  ? "invert(1) brightness(0.85)"
                  : "none",
            }}
          />
        )}
        <Typography
          sx={{
            fontSize: "0.72rem",
            fontWeight: 600,
            color: accentColor,
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Typography>
      </Box>
    </Tooltip>
  );
}

/* ── Project data ───────────────────────────────────────────────────────── */
const projects = [
  {
    title: "Wanderlust — Stay Explorer",
    description:
      "A full-featured travel-stay application with listing management, reviews, authentication, and authorization. Inspired by Airbnb.",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    github: "https://github.com/prajwalrajput/wanderlust",
    demo: "",
    gradient: "linear-gradient(135deg, #7c3aed22, #06b6d422)",
    accentColor: "#7c3aed",
    number: "01",
  },
  {
    title: "Weather Forecast App",
    description:
      "A responsive React app that displays real-time city weather, temperature, humidity, and current conditions via a public API.",
    tech: ["React.js", "Material UI", "Weather API"],
    github: "https://github.com/prajwalrajput/weather-app-react",
    demo: "",
    gradient: "linear-gradient(135deg, #06b6d422, #10b98122)",
    accentColor: "#06b6d4",
    number: "02",
  },
  {
    title: "Irrigation Company Website",
    description:
      "A professional business website for showcasing company info, products, careers, and an enquiry system.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/prajwalrajput/agri_based_wesite_project",
    demo: "",
    gradient: "linear-gradient(135deg, #10b98122, #f59e0b22)",
    accentColor: "#10b981",
    number: "03",
  },
  {
    title: "Daily Production Tracker",
    description:
      "A MERN stack application to manage and maintain daily stock and production records, enabling efficient inventory tracking and reporting.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/prajwalrajput/daily-production-mern",
    demo: "",
    gradient: "linear-gradient(135deg, #6366f122, #8b5cf622)",
    accentColor: "#6366f1",
    number: "04",
  },
  {
    title: "QR Code Generator",
    description:
      "A web app that instantly generates a downloadable QR code for any text or URL entered by the user.",
    tech: ["HTML5", "CSS3"],
    github: "https://github.com/prajwalrajput/QrCodeGenerator",
    demo: "",
    gradient: "linear-gradient(135deg, #06b6d422, #10b98122)",
    accentColor: "#06b6d4",
    number: "05",
  },
  {
    title: "Amazon Clone",
    description:
      "A pixel-perfect front-end clone of the Amazon homepage built with pure HTML and CSS, replicating the layout, navbar, and product grid.",
    tech: ["HTML5", "CSS3"],
    github: "https://github.com/prajwalrajput/amezon_clone",
    demo: "",
    gradient: "linear-gradient(135deg, #f59e0b22, #ef444422)",
    accentColor: "#f59e0b",
    number: "06",
  },
  {
    title: "Spotify Clone",
    description:
      "A front-end clone of the Spotify web player built with pure HTML and CSS, replicating the sidebar, music player UI, and playlist layout.",
    tech: ["HTML5", "CSS3"],
    github: "https://github.com/prajwalrajput/Soptify_clone",
    demo: "",
    gradient: "linear-gradient(135deg, #1db95422, #22c55e22)",
    accentColor: "#1db954",
    number: "07",
  },
];

/* ── Main component ─────────────────────────────────────────────────────── */
export default function Projects() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  return (
    <Box
      id="projects"
      sx={{ maxWidth: 1100, mx: "auto", px: { xs: 2.5, sm: 3, md: 4 }, py: { xs: 7, md: 10 } }}
    >
      <div className="section-label">Selected work</div>

      <Typography
        variant="h3"
        sx={{ mb: { xs: 4, md: 6 }, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" } }}
      >
        My{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Projects
        </Box>
      </Typography>

      <Grid container spacing={{ xs: 2.5, md: 3 }}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <Box
              className="glass-card"
              sx={{
                p: { xs: 3, md: 3.5 },
                borderRadius: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: dark
                  ? `${project.gradient}, rgba(255,255,255,0.02)`
                  : `${project.gradient}, rgba(255,255,255,0.9)`,
                border: "1px solid",
                borderColor: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Watermark number */}
              <Typography
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 16,
                  fontSize: "3.5rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  color: project.accentColor,
                  opacity: 0.08,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {project.number}
              </Typography>

              {/* Accent line */}
              <Box
                sx={{
                  width: 36,
                  height: 3,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
                  mb: 2.5,
                  flexShrink: 0,
                }}
              />

              <Typography
                variant="h6"
                fontWeight={800}
                mb={1.5}
                fontSize={{ xs: "1rem", md: "1.05rem" }}
                lineHeight={1.4}
              >
                {project.title}
              </Typography>

              <Typography
                color="text.secondary"
                mb={2.5}
                fontSize={{ xs: "0.875rem", md: "0.9rem" }}
                lineHeight={1.75}
                sx={{ flexGrow: 1 }}
              >
                {project.description}
              </Typography>

              {/* Tech badges with logos */}
              <Stack direction="row" flexWrap="wrap" gap={0.75} mb={3}>
                {project.tech.map((tech) => (
                  <TechBadge
                    key={tech}
                    name={tech}
                    accentColor={project.accentColor}
                    dark={dark}
                  />
                ))}
              </Stack>

              {/* Action buttons */}
              <Stack
                direction="row"
                spacing={0.5}
                mt="auto"
                flexWrap="wrap"
                useFlexGap
                alignItems="center"
              >
                <Button
                  size="small"
                  startIcon={<GitHub />}
                  href={project.github}
                  target="_blank"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.8rem",
                    minWidth: 0,
                    "&:hover": { color: project.accentColor },
                  }}
                >
                  Code
                </Button>

                {project.demo && (
                  <Button
                    size="small"
                    startIcon={<OpenInNew />}
                    href={project.demo}
                    target="_blank"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.8rem",
                      minWidth: 0,
                      "&:hover": { color: project.accentColor },
                    }}
                  >
                    Demo
                  </Button>
                )}

                <Button
                  size="small"
                  endIcon={<ArrowForward sx={{ fontSize: "0.8rem !important" }} />}
                  href={project.github}
                  target="_blank"
                  sx={{
                    ml: "auto !important",
                    color: project.accentColor,
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    "&:hover": { background: `${project.accentColor}12` },
                  }}
                >
                  View
                </Button>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

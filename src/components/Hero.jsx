import { Box, Typography, Button, Stack, Chip, useTheme } from "@mui/material";
import { GitHub, LinkedIn, Download, ArrowForward } from "@mui/icons-material";

export default function Hero() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background glow blobs */}
      <Box
        className="hero-glow"
        sx={{
          width: { xs: 280, sm: 380, md: 600 },
          height: { xs: 280, sm: 380, md: 600 },
          top: "-10%",
          left: "-10%",
          background: "rgba(124, 58, 237, 0.18)",
        }}
      />
      <Box
        className="hero-glow"
        sx={{
          width: { xs: 180, sm: 260, md: 400 },
          height: { xs: 180, sm: 260, md: 400 },
          bottom: "5%",
          right: "-5%",
          background: "rgba(6, 182, 212, 0.12)",
          animationDelay: "-4s",
        }}
      />

      {/* Dot grid */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)"} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          mx: "auto",
          px: { xs: 2.5, sm: 3, md: 4 },
          py: { xs: 14, md: 0 },
          width: "100%",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Badge */}
        <Box className="fade-in-up fade-in-up-delay-1">
          <Chip
            label="🎓 2026 Computer Engineering Graduate"
            sx={{
              background: dark ? "rgba(124,58,237,0.15)" : "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.35)",
              color: "#7c3aed",
              fontWeight: 600,
              fontSize: { xs: "0.72rem", sm: "0.8rem" },
              mb: 3,
              maxWidth: "100%",
              height: "auto",
              "& .MuiChip-label": { whiteSpace: "normal", py: 0.5 },
            }}
          />
        </Box>

        {/* Main heading */}
        <Box className="fade-in-up fade-in-up-delay-2">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3.2rem", md: "5rem", lg: "5.5rem" },
              lineHeight: 1.1,
              mb: 0.5,
              wordBreak: "break-word",
            }}
          >
            Hi, I'm{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #7c3aed 20%, #06b6d4 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Prajwal
            </Box>
            .
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3.2rem", md: "5rem", lg: "5.5rem" },
              lineHeight: 1.1,
              mb: 3,
              color: "text.secondary",
              fontWeight: 800,
              wordBreak: "break-word",
            }}
          >
            I build for the web.
          </Typography>
        </Box>

        {/* Subtitle */}
        <Box className="fade-in-up fade-in-up-delay-3">
          <Typography
            sx={{
              maxWidth: { xs: "100%", md: 580 },
              mx: { xs: "auto", md: 0 },
              mb: 4,
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.12rem" },
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            A full-stack developer passionate about building{" "}
            <Box component="span" sx={{ color: "text.primary", fontWeight: 600 }}>
              responsive, performant web apps
            </Box>{" "}
            using React, Node.js, Express, and MongoDB.
          </Typography>
        </Box>

        {/* CTA Buttons */}
        <Box className="fade-in-up fade-in-up-delay-4">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            flexWrap="wrap"
            useFlexGap
            alignItems={{ xs: "stretch", sm: "center" }}
            justifyContent={{ xs: "center", md: "flex-start" }}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              variant="contained"
              href="#projects"
              endIcon={<ArrowForward />}
              fullWidth={false}
              sx={{
                background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                boxShadow: "0 8px 32px rgba(124,58,237,0.4)",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  background: "linear-gradient(135deg, #6d28d9, #5b21b6)",
                  boxShadow: "0 12px 40px rgba(124,58,237,0.55)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.25s ease",
              }}
            >
              View Projects
            </Button>

            <Button
              variant="outlined"
              href="/resume.pdf"
              target="_blank"
              startIcon={<Download />}
              sx={{
                borderColor: "rgba(124,58,237,0.5)",
                color: "primary.main",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  borderColor: "primary.main",
                  background: "rgba(124,58,237,0.08)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.25s ease",
              }}
            >
              Resume
            </Button>

            {/* Social buttons — row always */}
            <Stack direction="row" spacing={1} justifyContent={{ xs: "center", md: "flex-start" }}>
              <Button
                href="https://github.com/prajwalrajput"
                target="_blank"
                startIcon={<GitHub />}
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "text.primary", background: "rgba(255,255,255,0.05)", transform: "translateY(-2px)" },
                  transition: "all 0.25s ease",
                }}
              >
                GitHub
              </Button>
              <Button
                href="https://www.linkedin.com/in/prajwalrajput05"
                target="_blank"
                startIcon={<LinkedIn />}
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "text.primary", background: "rgba(255,255,255,0.05)", transform: "translateY(-2px)" },
                  transition: "all 0.25s ease",
                }}
              >
                LinkedIn
              </Button>
            </Stack>
          </Stack>

          {/* Scroll indicator */}
          <Box
            sx={{
              mt: { xs: 8, md: 10 },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 26,
                height: 40,
                border: "2px solid",
                borderColor: "divider",
                borderRadius: "13px",
                display: "flex",
                justifyContent: "center",
                pt: "6px",
              }}
            >
              <Box
                sx={{
                  width: 4,
                  height: 8,
                  borderRadius: "2px",
                  background: "linear-gradient(180deg, #7c3aed, #06b6d4)",
                  animation: "scrollDot 1.6s ease-in-out infinite",
                  "@keyframes scrollDot": {
                    "0%": { opacity: 1, transform: "translateY(0)" },
                    "100%": { opacity: 0, transform: "translateY(14px)" },
                  },
                }}
              />
            </Box>
            <Typography variant="caption" color="text.disabled">
              scroll down
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

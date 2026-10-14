import { Box, Typography, Button, Stack, useTheme } from "@mui/material";
import { Email, GitHub, LinkedIn, ArrowForward, Phone } from "@mui/icons-material";

export default function Contact() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  return (
    <Box
      id="contact"
      sx={{ maxWidth: 1100, mx: "auto", px: { xs: 2.5, sm: 3, md: 4 }, py: { xs: 7, md: 10 } }}
    >
      <Box
        sx={{
          borderRadius: { xs: 3, md: 4 },
          p: { xs: 3.5, sm: 5, md: 7 },
          textAlign: "center",
          background: dark
            ? "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.08) 100%)"
            : "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(6,182,212,0.05) 100%)",
          border: "1px solid",
          borderColor: dark ? "rgba(124,58,237,0.25)" : "rgba(124,58,237,0.18)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "80%",
            height: "80%",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="section-label" style={{ justifyContent: "center" }}>
          Let's connect
        </div>

        <Typography
          variant="h3"
          sx={{
            my: { xs: 1.5, md: 2 },
            fontSize: { xs: "1.6rem", sm: "2rem", md: "2.8rem" },
            position: "relative",
            lineHeight: 1.25,
          }}
        >
          Got an opportunity?{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let's talk.
          </Box>
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            maxWidth: 520,
            mx: "auto",
            mb: { xs: 3.5, md: 4 },
            fontSize: { xs: "0.93rem", md: "1.05rem" },
            lineHeight: 1.8,
            position: "relative",
          }}
        >
          I'm actively looking for entry-level software development and full-stack
          opportunities. If you have a role or project in mind, reach out — I'd love to chat.
        </Typography>

        {/* Contact info chips */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: { xs: 3, md: 4 }, position: "relative" }}
        >
          <Box
            component="a"
            href="mailto:prajwalrajput05@gmail.com"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 2.5,
              py: 1.1,
              borderRadius: 50,
              border: "1px solid",
              borderColor: dark ? "rgba(124,58,237,0.35)" : "rgba(124,58,237,0.25)",
              background: dark ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.06)",
              textDecoration: "none",
              color: "text.primary",
              fontSize: { xs: "0.85rem", md: "0.92rem" },
              fontWeight: 600,
              transition: "all 0.22s ease",
              "&:hover": {
                borderColor: "#7c3aed",
                background: "rgba(124,58,237,0.14)",
                transform: "translateY(-2px)",
              },
            }}
          >
            <Email sx={{ fontSize: "1rem", color: "#7c3aed" }} />
            prajwalrajput05@gmail.com
          </Box>

          <Box
            component="a"
            href="tel:+918007270161"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 2.5,
              py: 1.1,
              borderRadius: 50,
              border: "1px solid",
              borderColor: dark ? "rgba(16,185,129,0.35)" : "rgba(16,185,129,0.25)",
              background: dark ? "rgba(16,185,129,0.1)" : "rgba(16,185,129,0.06)",
              textDecoration: "none",
              color: "text.primary",
              fontSize: { xs: "0.85rem", md: "0.92rem" },
              fontWeight: 600,
              transition: "all 0.22s ease",
              "&:hover": {
                borderColor: "#10b981",
                background: "rgba(16,185,129,0.14)",
                transform: "translateY(-2px)",
              },
            }}
          >
            <Phone sx={{ fontSize: "1rem", color: "#10b981" }} />
            +91 8007270161
          </Box>
        </Stack>

        {/* Buttons — stack vertically on small mobile, row on sm+ */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          flexWrap="wrap"
          useFlexGap
          justifyContent="center"
          alignItems={{ xs: "stretch", sm: "center" }}
          sx={{ position: "relative", width: { xs: "100%", sm: "auto" }, mx: "auto" }}
        >
          <Button
            variant="contained"
            component="a"
            startIcon={<Email />}
            endIcon={<ArrowForward />}
            href="mailto:prajwalrajput05@gmail.com"
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
            Email Me
          </Button>

          <Button
            variant="outlined"
            startIcon={<LinkedIn />}
            href="https://www.linkedin.com/in/prajwalrajput05"
            target="_blank"
            sx={{
              borderColor: "rgba(6,182,212,0.5)",
              color: "#06b6d4",
              width: { xs: "100%", sm: "auto" },
              "&:hover": {
                borderColor: "#06b6d4",
                background: "rgba(6,182,212,0.08)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.25s ease",
            }}
          >
            LinkedIn
          </Button>

          <Button
            variant="outlined"
            component="a"
            startIcon={<Phone />}
            href="tel:+918007270161"
            sx={{
              borderColor: "rgba(16,185,129,0.5)",
              color: "#10b981",
              width: { xs: "100%", sm: "auto" },
              "&:hover": {
                borderColor: "#10b981",
                background: "rgba(16,185,129,0.08)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.25s ease",
            }}
          >
            +91 8007270161
          </Button>

          <Button
            variant="outlined"
            startIcon={<GitHub />}
            href="https://github.com/prajwalrajput"
            target="_blank"
            sx={{
              borderColor: "divider",
              color: "text.secondary",
              width: { xs: "100%", sm: "auto" },
              "&:hover": {
                borderColor: "text.secondary",
                background: "rgba(255,255,255,0.05)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.25s ease",
            }}
          >
            GitHub
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

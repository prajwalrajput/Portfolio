import { Box, Typography, Stack, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        py: { xs: 3.5, md: 4 },
        px: { xs: 2.5, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 1.5, sm: 2 },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {/* Logo */}
        <Typography
          fontWeight={900}
          fontSize={{ xs: "1rem", md: "1.1rem" }}
          letterSpacing="-0.02em"
          color="text.secondary"
        >
          Prajwal
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            .
          </Box>
        </Typography>

        <Typography
          variant="caption"
          color="text.disabled"
          sx={{ fontSize: { xs: "0.72rem", md: "0.75rem" } }}
        >
          © {new Date().getFullYear()} Prajwal Rajput · Built with React &amp; MUI
        </Typography>

        {/* Social icons */}
        <Stack direction="row" spacing={0.5}>
          {[
            { icon: <GitHub fontSize="small" />, href: "https://github.com/prajwalrajput", label: "GitHub" },
            { icon: <LinkedIn fontSize="small" />, href: "https://www.linkedin.com/in/prajwalrajput05", label: "LinkedIn" },
            { icon: <Email fontSize="small" />, href: "mailto:prajwalrajput05@gmail.com", label: "Email" },
          ].map(({ icon, href, label }) => (
            <IconButton
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              aria-label={label}
              size="small"
              sx={{
                color: "text.disabled",
                "&:hover": {
                  color: "primary.main",
                  background: "rgba(124,58,237,0.1)",
                },
                transition: "all 0.2s ease",
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

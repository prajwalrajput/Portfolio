import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  useScrollTrigger,
} from "@mui/material";
import { LightMode, DarkMode, Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  const links = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Education", "education"],
    ["Contact", "contact"],
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && scrollTop >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setDrawerOpen(false);
    // small timeout so drawer closes before scroll
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: trigger
            ? darkMode ? "rgba(5,8,22,0.88)" : "rgba(240,244,255,0.88)"
            : "transparent",
          backdropFilter: trigger ? "blur(20px)" : "none",
          borderBottom: trigger ? 1 : 0,
          borderColor: "divider",
          transition: "background 0.3s",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            px: { xs: 2, sm: 3, md: 4 },
            minHeight: { xs: 60, md: 68 },
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            component="a"
            href="#home"
            sx={{
              fontWeight: 900,
              flexGrow: 1,
              textDecoration: "none",
              color: "text.primary",
              fontSize: { xs: "1.15rem", md: "1.3rem" },
              letterSpacing: "-0.02em",
            }}
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

          {/* Desktop nav links — hidden below md */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: "center" }}>
            {links.map(([label, id]) => (
              <Button
                key={id}
                href={`#${id}`}
                sx={{
                  color: activeSection === id ? "primary.main" : "text.secondary",
                  fontWeight: activeSection === id ? 700 : 500,
                  fontSize: "0.875rem",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 6,
                    left: "50%",
                    transform: activeSection === id
                      ? "translateX(-50%) scaleX(1)"
                      : "translateX(-50%) scaleX(0)",
                    width: "60%",
                    height: "2px",
                    borderRadius: "2px",
                    background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover::after": { transform: "translateX(-50%) scaleX(1)" },
                  "&:hover": { color: "primary.main" },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Theme toggle */}
          <IconButton
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            size="small"
            sx={{
              ml: 1,
              border: 1,
              borderColor: "divider",
              borderRadius: "50%",
              width: 36,
              height: 36,
              "&:hover": {
                background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.15))",
              },
            }}
          >
            {darkMode ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
          </IconButton>

          {/* Hamburger — visible below md */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            size="small"
            sx={{
              ml: 1,
              display: { xs: "flex", md: "none" },
              border: 1,
              borderColor: "divider",
              borderRadius: "50%",
              width: 36,
              height: 36,
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            background: darkMode ? "rgba(5,8,22,0.97)" : "rgba(240,244,255,0.97)",
            backdropFilter: "blur(20px)",
            borderLeft: "1px solid",
            borderColor: "divider",
            pt: 2,
          },
        }}
      >
        {/* Drawer header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2.5,
            pb: 2,
          }}
        >
          <Typography
            fontWeight={900}
            fontSize="1.15rem"
            letterSpacing="-0.02em"
            color="text.primary"
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
          <IconButton
            onClick={() => setDrawerOpen(false)}
            size="small"
            aria-label="Close menu"
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "divider", mb: 1 }} />

        <List sx={{ px: 1.5 }}>
          {links.map(([label, id]) => (
            <ListItemButton
              key={id}
              onClick={() => handleNavClick(id)}
              selected={activeSection === id}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&.Mui-selected": {
                  background: "rgba(124,58,237,0.12)",
                  color: "primary.main",
                },
                "&.Mui-selected:hover": { background: "rgba(124,58,237,0.18)" },
              }}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontWeight: activeSection === id ? 700 : 500,
                  fontSize: "0.95rem",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}

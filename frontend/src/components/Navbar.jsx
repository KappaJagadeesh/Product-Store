import * as React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = ({ toggleColorMode, mode }) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            background: "linear-gradient(to right, #06b6d4, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Product Store 🛒
          </Link>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: { xs: 2, sm: 0 } }}>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="primary">
              <AddBoxIcon />
            </Button>
          </Link>

          <IconButton onClick={toggleColorMode} color="inherit">
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

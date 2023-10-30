import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";

const drawerWidth = 240;

const navItems = [
  { label: "Home", path: "/" },
  { label: "Login", path: "/login" },
  { label: "Signup", path: "/signup" },
  { label: "My PC", path: "/my-pc" },
  { label: "Wishlist", path: "/wishlist" },
  { label: "Cart", path: "/cart" },
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography className="nav_cross_per" variant="h6" sx={{ my: 2 }}>
        <CloseIcon className="nav_cross" />
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink key={item.label} className="nav-links" to={item.path}>
                {item.label !== "Wishlist" &&
                  item.label !== "Cart" &&
                  item.label}
                {item.label === "Wishlist" && <FavoriteIcon />}
                {item.label === "Cart" && <ShoppingCartIcon />}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            <figure className="nav_logo">
              <Link to="/">
                <h2>Logo</h2>
              </Link>
            </figure>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <NavLink key={item.label} className="nav-links" to={item.path}>
                {item.label !== "Wishlist" &&
                  item.label !== "Cart" &&
                  item.label}
                {item.label === "Wishlist" && <FavoriteIcon />}
                {item.label === "Cart" && <ShoppingCartIcon />}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;

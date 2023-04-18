import { Typography, AppBar, Toolbar, Box, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Header = () => {
  return (
    <>
      <AppBar
        sx={{ backgroundColor: "#000", display: "block" }}
        position="relative"
      >
        <Toolbar
          sx={{
            maxWidth: "md",
            justifyContent: "space-between",
            margin: "0 auto",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              alt="home"
              class="logoimage"
              src="https://daks2k3a4ib2z.cloudfront.net/55e66dd8b5daada24f333566/560dc3d501b66e250aca54d7_webflow-white.svg"
              width="87"
            />
            <Typography variant="div" sx={{ pl: "10px" }}>
              Forum
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
            <MenuIcon />
          </Box>
          <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                gap: "15px",
              }}
            >
              <Link
                sx={{
                  color: "#fff",
                  opacity: ".5",
                  textDecoration: "none",
                  "&:hover": {
                    opacity: "1",
                    cursor:"pointer"
                  },
                }}
              >
                Community
              </Link>
              <Link
                sx={{
                  color: "#fff",
                  opacity: ".5",
                  textDecoration: "none",
                  "&:hover": {
                    opacity: "1",
                    cursor:"pointer"
                  },
                }}
              >
                University
              </Link>
              <Link
                sx={{
                  color: "#fff",
                  opacity: ".5",
                  textDecoration: "none",
                  "&:hover": {
                    opacity: "1",
                    cursor:"pointer"
                  },
                }}
              >
                Support
              </Link>
              <Link
                sx={{display:"flex",
                  color: "#fff",
                  opacity: ".5",
                  textDecoration: "none",
                  "&:hover": {
                    opacity: "1",
                    cursor:"pointer"
                  },
                }}
              >
                More <KeyboardArrowDownIcon sx={{p:"0"}} />
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;

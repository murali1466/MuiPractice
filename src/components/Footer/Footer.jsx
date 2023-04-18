import { Container, Box, Typography, TextField } from "@mui/material";
const Footer = () => {
  return (
    <Box className="footer" sx={{ backgroundColor: "#36275d" }}>
      <Container sx={{ color: "#fff" }}>
        <Box className="website-accounts-downloads-products">
          <Box>
            <Typography variant="h4">
              <b>2,184,524</b>
            </Typography>
            <Typography>accounts</Typography>
          </Box>
          <Box>
            <Typography variant="h4">
              <b>3,965,715</b>
            </Typography>
            <Typography>downloads</Typography>
          </Box>
          <Box>
            <Typography variant="h4">
              <b>277</b>
            </Typography>
            <Typography>products</Typography>
          </Box>
        </Box>
        <Box className="join-newsletter">
          <Typography>Join our newsletter</Typography>
          <Box>
            <TextField
              id="outlined-email-input"
              type="email"
              autoComplete="current-email"
              placeholder="Enter Email"
            />
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "#0bf",
                height: "50px",
                width: "60px",
                borderStyle: "none"
                borderRadius:"200px"
              }}
            > 
              <i class="fa-regular fa-paper-plane"></i>
              <Typography>join</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;

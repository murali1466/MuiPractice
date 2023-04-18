import { Typography, Container, Button, Stack } from "@mui/material";
import "./index.css";
const HeroSection = () => {
  return (
    <section>
      <Container maxWidth="sm" sx={{pt: 10,pb: 4}} gutterBottom>
        <Typography variant="h5" className="hero-heading" aligin="center" >Album Layout</Typography>
        <Typography align="center">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Typography>
        <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
      </Container>
    </section>
  );
};
export default HeroSection;
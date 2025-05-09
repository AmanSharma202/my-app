import {
  Card,
  Avatar,
  CardContent,
  Typography,
  Stack,
  Box,
  Container,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Aboutus = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(to right, #e0f7fa, #ffffff)",
        pt: 10,
        pb: 5,
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 2, color: "#2e7d32" }}
        >
          Our Team
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "#424242", maxWidth: "900px", mx: "auto", mb: 5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus odio pariatur eos cumque amet quidem repellat, autem temporibus repellendus commodi, placeat asperiores illo, provident incidunt quasi alias dignissimos nisi adipisci!
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          flexWrap="wrap"
        >
          {/* Team Member 1 */}
          <Card
            sx={{
              width: 250,
              borderRadius: "15px",
              boxShadow: 4,
              textAlign: "center",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
              padding: 2,
            }}
          >
            <Avatar
              alt="Abhishek yadav"
             //src="../src/"
            
            src="https://drive.google.com/uc?export=view&id=18wLESVFLGEGlMhp5-eCKP4wvmpBMYuR_"
            // herf="https://drive.google.com/file/d/18wLESVFLGEGlMhp5-eCKP4wvmpBMYuR_/view?usp=drive_link"
           
            sx={{
                width: 120,
                height: 120,
                margin: "0 auto",
                border: "4px solid #fff",
                boxShadow: 3,
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                ABHISHEK YADAV
              </Typography>
              <Typography variant="body2" color="text.secondary">
                FRONTEND
              </Typography>
              <Stack direction="row" spacing={0} justifyContent="center" mt={1}>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                >
                  <LinkedInIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                   sx={{ color: '#E1306C' }}
                >
                  <FaInstagram />
                </IconButton>

                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="error"
                >
                  <FaYoutube />
                </IconButton>

              </Stack>
            </CardContent>
          </Card>

          {/* Team Member 2 */}
          <Card
            sx={{
              width: 250,
              borderRadius: "15px",
              boxShadow: 4,
              textAlign: "center",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
              padding: 2,
            }}
          >
            <Avatar
              alt="Aman sharma"
              src="/src/Assets/Abhishek.jpg"
              sx={{
                width: 120,
                height: 120,
                margin: "0 auto",
                border: "4px solid #fff",
                boxShadow: 3,
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                AMAN SHARMA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                BACKEND
              </Typography>
              <Stack direction="row" spacing={0} justifyContent="center" mt={1}>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                >
                  <LinkedInIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                   sx={{ color: '#E1306C' }}
                >
                  <FaInstagram />
                </IconButton>

              </Stack>
            </CardContent>
          </Card>

          {/* Team Member 3 */}
          <Card
            sx={{
              width: 250,
              borderRadius: "15px",
              boxShadow: 4,
              textAlign: "center",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
              padding: 2,
            }}
          >
            <Avatar
              alt="Anjali pal"
              src="/src/assets/Project.jpeg"
              sx={{
                width: 120,
                height: 120,
                margin: "0 auto",
                border: "4px solid #fff",
                boxShadow: 3,
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                ANJALI PAL
              </Typography>
              <Typography variant="body2" color="text.secondary">
                DATABASE
              </Typography>

              <Stack direction="row" spacing={0} justifyContent="center" mt={1}>
                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                >
                  <LinkedInIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: '#E1306C' }}
                >
                  <FaInstagram />
                </IconButton>
              </Stack>

            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default Aboutus;
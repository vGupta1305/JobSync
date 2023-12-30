// Import React and Material-UI components
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import Nav from '../../components/Nav';
import { NavLink } from 'react-router-dom';

// Define the About component
const About = () => {
  return (
    <>
      <Nav />

      <Container style={{ marginTop: '64px', marginBottom: '64px' }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={8} lg={6}>
            <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'white', color: 'black' }}>
              <Typography variant="h4" gutterBottom>
                About JobSync AI
              </Typography>
              <Typography paragraph>
                Welcome to JobSync AI, where innovation meets opportunity! At JobSync AI, we're committed to revolutionizing the job-seeking process by harnessing the power of cutting-edge artificial intelligence.
              </Typography>
              <Typography paragraph>
                <strong>Our Mission:</strong> At JobSync AI, our mission is to empower individuals in their career journeys. We understand the challenges job seekers face in today's dynamic employment landscape. That's why we've developed JobSync AI, a state-of-the-art bot designed to streamline the job search experience, making it more efficient, personalized, and successful.
              </Typography>
              {/* Add more content as needed */}
              <Typography paragraph>
                <strong>Join Us on Your Career Journey</strong>
              </Typography>
              <Typography paragraph>
                Whether you're a recent graduate, a seasoned professional, or someone exploring new opportunities, JobSync AI is here to support you. Join us on your career journey, and let's redefine the way you search for and secure your dream job.
              </Typography>
              <Typography paragraph>
                <strong>Contact Us</strong>
              </Typography>
              <Typography paragraph>
                Have questions or suggestions? We'd love to hear from you! Reach out to our team at <NavLink to={"/contact"}>contact</NavLink> for inquiries, feedback, or collaboration opportunities.
              </Typography>
              <Typography paragraph>
                <strong>Thank you for choosing JobSync AI. Your success is our priority!</strong>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

// Export the About component
export default About;

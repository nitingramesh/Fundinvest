import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, Typography, Button, Box, Card, 
  CardContent, AppBar, Toolbar, Stack, useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PlatformIllustration from '../components/common/PlatformIllustration';

const GradientSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(10, 0),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(6),
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[4],
  },
}));

// Create a simple column-based layout
const Column = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
}));

const Row = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: theme.spacing(-2),
}));

const LandingPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Header */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Questomer
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button component={Link} to="/login" variant="text">Login</Button>
            <Button component={Link} to="/register" variant="contained" color="primary">Sign Up</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <GradientSection>
        <Container maxWidth="lg">
          <Row>
            <Column sx={{ width: { xs: '100%', md: '50%' } }}>
              <Typography variant="h2" component="h1" gutterBottom>
                Connect Startups with the Right Investors
              </Typography>
              <Typography variant="h5" paragraph>
                Finding the perfect match for your startup or investment portfolio has never been easier.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                <Button 
                  component={Link} 
                  to="/register?role=startup" 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                >
                  I'm a Startup
                </Button>
                <Button 
                  component={Link} 
                  to="/register?role=investor" 
                  variant="outlined" 
                  sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', borderColor: 'white' }} 
                  size="large"
                >
                  I'm an Investor
                </Button>
              </Stack>
            </Column>
            <Column sx={{ width: { xs: '100%', md: '50%' } }}>
              <Box sx={{ 
                borderRadius: '20px', 
                overflow: 'hidden', 
                boxShadow: theme.shadows[5],
                height: '400px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <PlatformIllustration />
              </Box>
            </Column>
          </Row>
        </Container>
      </GradientSection>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Why Choose Questomer
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Revolutionizing the way startups and investors connect
        </Typography>
        
        <Row sx={{ mt: 4 }}>
          {[
            {
              title: 'Smart Matching Algorithm',
              description: 'Our AI-powered matching algorithm connects startups with investors based on industry, stage, investment criteria, and more.'
            },
            {
              title: 'Secure Communications',
              description: 'Encrypted, in-platform messaging system to facilitate discussions and share confidential documents.'
            },
            {
              title: 'Comprehensive Profiles',
              description: 'Detailed profiles for both startups and investors to ensure quality connections and transparency.'
            },
            {
              title: 'Deal Management',
              description: 'Track investments, monitor deal progress, and manage your portfolio all in one place.'
            }
          ].map((feature, index) => (
            <Column key={index} sx={{ width: { xs: '100%', sm: '50%', md: '25%' } }}>
              <FeatureCard>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Column>
          ))}
        </Row>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            Ready to Transform Your Fundraising Journey?
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            Join thousands of successful startups and investors on our platform
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button component={Link} to="/register" variant="contained" color="primary" size="large">
              Get Started Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'grey.100', py: 6 }}>
        <Container maxWidth="lg">
          <Row>
            <Column sx={{ width: { xs: '100%', md: '33.33%' } }}>
              <Typography variant="h6" gutterBottom>
                Questomer
              </Typography>
              <Typography variant="body2" color="textSecondary">
                The bridge between innovative startups and forward-thinking investors.
              </Typography>
            </Column>
            <Column sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' } }}>
              <Typography variant="h6" gutterBottom>
                Resources
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {['How It Works', 'Pricing', 'Success Stories', 'Blog'].map((item) => (
                  <Box component="li" key={item} sx={{ py: 0.5 }}>
                    <Link to="/" style={{ color: theme.palette.text.secondary, textDecoration: 'none' }}>
                      {item}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Column>
            <Column sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' } }}>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {['About Us', 'Contact', 'Careers', 'Privacy Policy'].map((item) => (
                  <Box component="li" key={item} sx={{ py: 0.5 }}>
                    <Link to="/" style={{ color: theme.palette.text.secondary, textDecoration: 'none' }}>
                      {item}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Column>
          </Row>
          <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              © {new Date().getFullYear()} Questomer. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage; 
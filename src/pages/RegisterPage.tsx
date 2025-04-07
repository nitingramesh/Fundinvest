import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Card,
  CardContent,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress,
  Divider,
  Stack,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControl,
  Checkbox,
  useTheme
} from '@mui/material';
import { Visibility, VisibilityOff, Google, LinkedIn, Check } from '@mui/icons-material';
import { useAppContext } from '../context/AppContext';
import { UserRole } from '../types';

// Step titles
const steps = ['Choose Role', 'Basic Info', 'Account Setup'];

const RegisterPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useAppContext();
  
  // Get role from URL query parameter if present
  const queryParams = new URLSearchParams(location.search);
  const roleFromQuery = queryParams.get('role') as UserRole | null;
  
  const [activeStep, setActiveStep] = useState(roleFromQuery ? 1 : 0);
  const [formData, setFormData] = useState({
    role: roleFromQuery || 'startup',
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
    industry: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const role = e.target.value as UserRole;
    setFormData(prev => ({
      ...prev,
      role
    }));
  };
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const validateCurrentStep = (): boolean => {
    setError(null);
    
    switch (activeStep) {
      case 0:
        // Role selection - always valid as we have a default
        return true;
      case 1:
        // Basic info
        if (!formData.name.trim()) {
          setError('Name is required');
          return false;
        }
        if (!formData.email.trim()) {
          setError('Email is required');
          return false;
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          setError('Please enter a valid email');
          return false;
        }
        if (!formData.phoneNumber.trim()) {
          setError('Phone number is required');
          return false;
        }
        return true;
      case 2:
        // Account setup
        if (!formData.password) {
          setError('Password is required');
          return false;
        }
        if (formData.password.length < 8) {
          setError('Password must be at least 8 characters');
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return false;
        }
        if (!formData.agreeToTerms) {
          setError('You must agree to the terms and conditions');
          return false;
        }
        return true;
      default:
        return true;
    }
  };
  
  const handleStepAction = () => {
    if (validateCurrentStep()) {
      if (activeStep === steps.length - 1) {
        handleSubmit();
      } else {
        handleNext();
      }
    }
  };
  
  const handleSubmit = async () => {
    setIsLoading(true);
    
    try {
      const { confirmPassword, agreeToTerms, company, ...userData } = formData;
      
      // Add role-specific fields
      if (formData.role === 'startup') {
        const startupData = {
          ...userData,
          role: 'startup' as const, // Use const assertion for specific string literal type
          linkedinProfile: '',
          startupName: company, 
          businessModel: 'Not specified',
          headquarters: 'Not specified',
          operationalRegions: [] as string[],
          yearFounded: new Date().getFullYear(),
          industry: [formData.industry], // Convert to array for consistency
        };
        await register(startupData, 'startup');
        navigate('/startup/dashboard');
      } else {
        const investorData = {
          ...userData,
          role: 'investor' as const, // Use const assertion for specific string literal type
          linkedinProfile: '',
          investorType: company, 
          industry: [formData.industry],
          investmentStage: ['Seed'],
          ticketSize: { min: 0, max: 0 },
          dealType: [] as string[],
          geographicPreferences: [] as string[],
          riskAppetite: 'Not specified',
        };
        await register(investorData, 'investor');
        navigate('/investor/dashboard');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = async (provider: 'google' | 'linkedin') => {
    if (activeStep === 0 && !formData.role) {
      setError('Please select a role first');
      return;
    }

    setSocialLoading(provider);
    try {
      // In a real app, this would open the OAuth flow
      // For now, simulate a delay then redirect
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (formData.role === 'startup') {
        navigate('/startup/dashboard');
      } else {
        navigate('/investor/dashboard');
      }
    } catch (error) {
      setError(`Failed to sign up with ${provider}. Please try again.`);
    } finally {
      setSocialLoading(null);
    }
  };
  
  // Content for each step
  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ py: 3 }}>
            <Typography variant="h6" align="center" gutterBottom>
              I am registering as a:
            </Typography>
            
            <FormControl component="fieldset" sx={{ width: '100%', mt: 3 }}>
              <RadioGroup
                aria-label="role"
                name="role"
                value={formData.role}
                onChange={handleRoleChange}
              >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <Box sx={{ width: '100%' }}>
                    <Card 
                      sx={{ 
                        p: 3, 
                        height: '100%',
                        border: formData.role === 'startup' 
                          ? `2px solid ${theme.palette.primary.main}` 
                          : '1px solid #e0e0e0',
                        position: 'relative'
                      }}
                    >
                      {formData.role === 'startup' && (
                        <Box 
                          sx={{ 
                            position: 'absolute', 
                            top: 10, 
                            right: 10,
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Check sx={{ color: 'white', fontSize: 16 }} />
                        </Box>
                      )}
                      <FormControlLabel
                        value="startup"
                        control={<Radio color="primary" />}
                        label={
                          <Box>
                            <Typography variant="h6">Startup</Typography>
                            <Typography variant="body2" color="textSecondary">
                              Find investors, secure funding, and grow your business
                            </Typography>
                          </Box>
                        }
                        sx={{ alignItems: 'flex-start' }}
                      />
                    </Card>
                  </Box>
                  
                  <Box sx={{ width: '100%' }}>
                    <Card 
                      sx={{ 
                        p: 3, 
                        height: '100%',
                        border: formData.role === 'investor' 
                          ? `2px solid ${theme.palette.secondary.main}` 
                          : '1px solid #e0e0e0',
                        position: 'relative'
                      }}
                    >
                      {formData.role === 'investor' && (
                        <Box 
                          sx={{ 
                            position: 'absolute', 
                            top: 10, 
                            right: 10,
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            bgcolor: 'secondary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Check sx={{ color: 'white', fontSize: 16 }} />
                        </Box>
                      )}
                      <FormControlLabel
                        value="investor"
                        control={<Radio color="secondary" />}
                        label={
                          <Box>
                            <Typography variant="h6">Investor</Typography>
                            <Typography variant="body2" color="textSecondary">
                              Discover promising startups and investment opportunities
                            </Typography>
                          </Box>
                        }
                        sx={{ alignItems: 'flex-start' }}
                      />
                    </Card>
                  </Box>
                </Stack>
              </RadioGroup>
            </FormControl>

            <Box sx={{ display: 'flex', alignItems: 'center', my: 4 }}>
              <Divider sx={{ flexGrow: 1 }} />
              <Typography variant="body2" color="text.secondary" sx={{ px: 2 }}>
                OR SIGN UP WITH
              </Typography>
              <Divider sx={{ flexGrow: 1 }} />
            </Box>
            
            <Stack spacing={2} sx={{ mt: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<Google />}
                onClick={() => handleSocialSignup('google')}
                disabled={isLoading || !!socialLoading}
                sx={{ 
                  py: 1.5,
                  borderColor: socialLoading === 'google' ? theme.palette.grey[400] : '#4285F4',
                  color: socialLoading === 'google' ? theme.palette.grey[500] : '#4285F4',
                  '&:hover': {
                    borderColor: '#4285F4',
                    backgroundColor: 'rgba(66, 133, 244, 0.04)',
                  }
                }}
              >
                {socialLoading === 'google' ? <CircularProgress size={24} /> : 'Sign up with Google'}
              </Button>
              
              <Button
                fullWidth
                variant="outlined"
                startIcon={<LinkedIn />}
                onClick={() => handleSocialSignup('linkedin')}
                disabled={isLoading || !!socialLoading}
                sx={{ 
                  py: 1.5,
                  borderColor: socialLoading === 'linkedin' ? theme.palette.grey[400] : '#0077B5',
                  color: socialLoading === 'linkedin' ? theme.palette.grey[500] : '#0077B5',
                  '&:hover': {
                    borderColor: '#0077B5',
                    backgroundColor: 'rgba(0, 119, 181, 0.04)',
                  }
                }}
              >
                {socialLoading === 'linkedin' ? <CircularProgress size={24} /> : 'Sign up with LinkedIn'}
              </Button>
            </Stack>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ py: 2 }}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                required
                id="name"
                name="name"
                label="Full Name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading || !!socialLoading}
              />
              
              <TextField
                fullWidth
                required
                id="email"
                name="email"
                label="Email Address"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading || !!socialLoading}
              />
              
              <TextField
                fullWidth
                required
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                variant="outlined"
                value={formData.phoneNumber}
                onChange={handleChange}
                disabled={isLoading || !!socialLoading}
              />
              
              <TextField
                fullWidth
                required
                id="company"
                name="company"
                label={formData.role === 'startup' ? 'Startup Name' : 'Company/Fund Name'}
                variant="outlined"
                value={formData.company}
                onChange={handleChange}
                disabled={isLoading || !!socialLoading}
              />
              
              <TextField
                fullWidth
                required
                id="industry"
                name="industry"
                label="Primary Industry"
                variant="outlined"
                value={formData.industry}
                onChange={handleChange}
                disabled={isLoading || !!socialLoading}
              />
            </Stack>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ py: 2 }}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                required
                id="password"
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading || !!socialLoading}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        disabled={isLoading || !!socialLoading}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              
              <TextField
                fullWidth
                required
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="outlined"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={isLoading || !!socialLoading}
              />
              
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeToTerms"
                    color="primary"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    disabled={isLoading || !!socialLoading}
                  />
                }
                label={
                  <Typography variant="body2">
                    I agree to the{' '}
                    <Link to="/terms" style={{ textDecoration: 'none', color: 'primary.main' }}>
                      Terms of Service
                    </Link>
                    {' '}and{' '}
                    <Link to="/privacy" style={{ textDecoration: 'none', color: 'primary.main' }}>
                      Privacy Policy
                    </Link>
                  </Typography>
                }
              />
            </Stack>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };
  
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Join Questomer
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Create your account to connect with the ecosystem
        </Typography>
      </Box>
      
      <Card elevation={3}>
        <CardContent sx={{ p: 4 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}
          
          {getStepContent(activeStep)}
          
          <Divider sx={{ my: 3 }} />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              color="inherit"
              disabled={activeStep === 0 || isLoading || !!socialLoading}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color={formData.role === 'startup' ? 'primary' : 'secondary'}
              onClick={handleStepAction}
              disabled={isLoading || !!socialLoading}
            >
              {isLoading ? (
                <CircularProgress size={24} />
              ) : (
                activeStep === steps.length - 1 ? 'Create Account' : 'Continue'
              )}
            </Button>
          </Box>
        </CardContent>
      </Card>
      
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Typography variant="body2">
          Already have an account?{' '}
          <Link to="/login" style={{ textDecoration: 'none', color: 'primary.main' }}>
            Sign in
          </Link>
        </Typography>
        
        <Button 
          component={Link} 
          to="/" 
          color="primary" 
          sx={{ textTransform: 'none', mt: 2 }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default RegisterPage; 
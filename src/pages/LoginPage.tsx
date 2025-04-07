import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress,
  Divider,
  Stack,
  useTheme
} from '@mui/material';
import { Visibility, VisibilityOff, Google, LinkedIn } from '@mui/icons-material';
import { useAppContext } from '../context/AppContext';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { login } = useAppContext();
  
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rememberMe' ? checked : value
    }));
    
    // Clear error when user types
    if (error) setError(null);
  };
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const validateForm = (): boolean => {
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }
    
    if (!formData.password) {
      setError('Password is required');
      return false;
    }
    
    return true;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { email, password } = formData;
      // Assuming the login function expects only email and password
      const success = await login(email, password);
      
      if (success) {
        // Redirect based on user role (will come from context later)
        navigate('/startup/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'linkedin') => {
    setSocialLoading(provider);
    try {
      // This would normally integrate with the actual OAuth providers
      // For now, just simulate a login delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect based on user role (will come from context later)
      navigate('/startup/dashboard');
    } catch (error) {
      setError(`Failed to sign in with ${provider}. Please try again.`);
    } finally {
      setSocialLoading(null);
    }
  };
  
  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Sign in to access your Questomer account
        </Typography>
      </Box>
      
      <Card elevation={3}>
        <CardContent sx={{ p: 4 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}
          
          <form onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
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
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="rememberMe"
                      color="primary"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      disabled={isLoading || !!socialLoading}
                    />
                  }
                  label="Remember me"
                />
                
                <Link 
                  to="/forgot-password" 
                  style={{ 
                    textDecoration: 'none', 
                    color: theme.palette.primary.main,
                    fontSize: '0.875rem' 
                  }}
                >
                  Forgot password?
                </Link>
              </Box>
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                disabled={isLoading || !!socialLoading}
                sx={{ py: 1.5 }}
              >
                {isLoading ? <CircularProgress size={24} /> : 'Sign In'}
              </Button>
            </Stack>
          </form>
          
          <Box sx={{ display: 'flex', alignItems: 'center', my: 3 }}>
            <Divider sx={{ flexGrow: 1 }} />
            <Typography variant="body2" color="text.secondary" sx={{ px: 2 }}>
              OR
            </Typography>
            <Divider sx={{ flexGrow: 1 }} />
          </Box>
          
          <Stack spacing={2}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Google />}
              onClick={() => handleSocialLogin('google')}
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
              {socialLoading === 'google' ? <CircularProgress size={24} /> : 'Sign in with Google'}
            </Button>
            
            <Button
              fullWidth
              variant="outlined"
              startIcon={<LinkedIn />}
              onClick={() => handleSocialLogin('linkedin')}
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
              {socialLoading === 'linkedin' ? <CircularProgress size={24} /> : 'Sign in with LinkedIn'}
            </Button>
          </Stack>
        </CardContent>
      </Card>
      
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Typography variant="body2">
          Don't have an account yet?{' '}
          <Link to="/register" style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
            Create an account
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
      
      {/* Demo hint - would be removed in production */}
      <Box sx={{ mt: 4, p: 2, bgcolor: 'rgba(0, 0, 0, 0.02)', borderRadius: 1 }}>
        <Typography variant="caption" color="text.secondary">
          <strong>Demo Accounts:</strong> <br />
          Startup: startup@example.com / password123 <br />
          Investor: investor@example.com / password123
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage; 
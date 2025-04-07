import React from 'react';
import { Box, useTheme } from '@mui/material';

const PlatformIllustration: React.FC = () => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width="80%"
        height="80%"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Elements */}
        <circle cx="300" cy="200" r="150" fill={theme.palette.primary.light} fillOpacity="0.2" />
        <circle cx="150" cy="100" r="50" fill={theme.palette.secondary.light} fillOpacity="0.2" />
        <circle cx="450" cy="300" r="50" fill={theme.palette.success.light} fillOpacity="0.2" />
        
        {/* Startup Building */}
        <rect x="100" y="150" width="150" height="150" rx="10" fill={theme.palette.primary.main} />
        <rect x="125" y="180" width="30" height="30" rx="2" fill="white" />
        <rect x="165" y="180" width="30" height="30" rx="2" fill="white" />
        <rect x="205" y="180" width="30" height="30" rx="2" fill="white" />
        <rect x="125" y="220" width="30" height="30" rx="2" fill="white" />
        <rect x="165" y="220" width="30" height="30" rx="2" fill="white" />
        <rect x="205" y="220" width="30" height="30" rx="2" fill="white" />
        <rect x="150" y="260" width="50" height="40" rx="2" fill="white" />
        
        {/* Connection Line */}
        <path 
          d="M250 200 C 300 100, 300 300, 350 200" 
          stroke={theme.palette.success.main} 
          strokeWidth="5" 
          strokeDasharray="10 5"
        />
        
        {/* Money Symbol */}
        <circle cx="300" cy="200" r="30" fill={theme.palette.success.main} />
        <text 
          x="300" 
          y="215" 
          textAnchor="middle" 
          fontSize="30" 
          fontWeight="bold" 
          fill="white"
        >
          $
        </text>
        
        {/* Investor Building */}
        <rect x="350" y="150" width="150" height="150" rx="10" fill={theme.palette.secondary.main} />
        <rect x="375" y="180" width="100" height="20" rx="2" fill="white" />
        <rect x="375" y="210" width="100" height="20" rx="2" fill="white" />
        <rect x="375" y="240" width="100" height="20" rx="2" fill="white" />
        <rect x="385" y="270" width="80" height="20" rx="10" fill="white" />
        
        {/* Startup Text */}
        <text 
          x="175" 
          y="130" 
          textAnchor="middle" 
          fontSize="18" 
          fontWeight="bold" 
          fill={theme.palette.primary.dark}
        >
          Startup
        </text>
        
        {/* Investor Text */}
        <text 
          x="425" 
          y="130" 
          textAnchor="middle" 
          fontSize="18" 
          fontWeight="bold" 
          fill={theme.palette.secondary.dark}
        >
          Investor
        </text>
        
        {/* Matching Lines */}
        <line x1="220" y1="140" x2="270" y2="170" stroke={theme.palette.info.main} strokeWidth="2" />
        <line x1="330" y1="170" x2="380" y2="140" stroke={theme.palette.info.main} strokeWidth="2" />
        
        {/* Growth Chart */}
        <path 
          d="M50 350 L 550 350" 
          stroke={theme.palette.grey[300]} 
          strokeWidth="2"
        />
        <path 
          d="M50 350 L 50 50" 
          stroke={theme.palette.grey[300]} 
          strokeWidth="2"
        />
        <path 
          d="M50 350 L 150 300 L 250 320 L 350 250 L 450 200 L 550 150" 
          stroke={theme.palette.success.main} 
          strokeWidth="3"
          fill="none"
        />
        <circle cx="150" cy="300" r="5" fill={theme.palette.success.main} />
        <circle cx="250" cy="320" r="5" fill={theme.palette.success.main} />
        <circle cx="350" cy="250" r="5" fill={theme.palette.success.main} />
        <circle cx="450" cy="200" r="5" fill={theme.palette.success.main} />
        <circle cx="550" cy="150" r="5" fill={theme.palette.success.main} />
      </svg>
    </Box>
  );
};

export default PlatformIllustration; 
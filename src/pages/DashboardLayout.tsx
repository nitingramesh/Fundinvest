import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import {
  AppBar as MuiAppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Tooltip,
  styled,
  useTheme
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  AutoGraph as AnalyticsIcon,
  People as PeopleIcon,
  Message as MessageIcon,
  AttachMoney as MoneyIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
  ChevronLeft as ChevronLeftIcon,
  Logout as LogoutIcon,
  Article as ArticleIcon,
  BusinessCenter as BusinessIcon,
  AccountBalance as InvestorIcon
} from '@mui/icons-material';

const drawerWidth = 260;

// Define prop types for the AppBar component
interface AppBarProps {
  open?: boolean;
}

// Styled components for the drawer
const openedMixin = (theme: any) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: any) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 0,
  [theme.breakpoints.up('sm')]: {
    width: 64,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }: any) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

interface NavItem {
  text: string;
  icon: React.ReactNode;
  path: string;
  role: 'startup' | 'investor' | 'both';
}

// Navigation items
const navItems: NavItem[] = [
  {
    text: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard',
    role: 'both'
  },
  {
    text: 'Investor Matches',
    icon: <PeopleIcon />,
    path: '/investor-matches',
    role: 'startup'
  },
  {
    text: 'Startup Matches',
    icon: <BusinessIcon />,
    path: '/startup-matches',
    role: 'investor'
  },
  {
    text: 'Communications',
    icon: <MessageIcon />,
    path: '/communications',
    role: 'both'
  },
  {
    text: 'Funding & Deals',
    icon: <MoneyIcon />,
    path: '/funding',
    role: 'both'
  },
  {
    text: 'Analytics',
    icon: <AnalyticsIcon />,
    path: '/analytics',
    role: 'both'
  },
  {
    text: 'Documents',
    icon: <ArticleIcon />,
    path: '/documents',
    role: 'both'
  },
  {
    text: 'Startup Profile',
    icon: <AccountCircle />,
    path: '/startup-profile',
    role: 'startup'
  },
  {
    text: 'Investor Profile',
    icon: <InvestorIcon />,
    path: '/investor-profile',
    role: 'investor'
  },
  {
    text: 'Settings',
    icon: <SettingsIcon />,
    path: '/settings',
    role: 'both'
  },
];

interface DashboardLayoutProps {
  children?: React.ReactNode;
  userRole?: 'startup' | 'investor';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userRole = 'startup' }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState<null | HTMLElement>(null);

  // Get current page title
  const getCurrentPageTitle = () => {
    const path = location.pathname;
    const currentNavItem = navItems.find(item => 
      path.endsWith(item.path) || 
      (item.path !== '/dashboard' && path.includes(item.path))
    );
    return currentNavItem?.text || 'Dashboard';
  };

  // Filter navigation items based on user role
  const filteredNavItems = navItems.filter(item => 
    item.role === 'both' || item.role === userRole
  );

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNotifications = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleCloseNotifications = () => {
    setAnchorElNotifications(null);
  };

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/login');
    handleCloseUserMenu();
  };

  const handleNavigation = (path: string) => {
    const basePath = userRole === 'startup' ? '/startup' : '/investor';
    navigate(`${basePath}${path}`);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default" elevation={1}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {getCurrentPageTitle()}
          </Typography>

          {/* Notifications */}
          <Tooltip title="Notifications">
            <IconButton 
              onClick={handleOpenNotifications}
              size="large"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="notifications-menu"
            anchorEl={anchorElNotifications}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNotifications)}
            onClose={handleCloseNotifications}
          >
            <MenuItem onClick={handleCloseNotifications}>
              <Typography textAlign="center">New investor match</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNotifications}>
              <Typography textAlign="center">Meeting request</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNotifications}>
              <Typography textAlign="center">Document shared</Typography>
            </MenuItem>
          </Menu>

          {/* User Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User">
                  {userRole === 'startup' ? 'S' : 'I'}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => { handleNavigation('/profile'); handleCloseUserMenu(); }}>
                <ListItemIcon>
                  <AccountCircle fontSize="small" />
                </ListItemIcon>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={() => { handleNavigation('/settings'); handleCloseUserMenu(); }}>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                <Typography textAlign="center">Settings</Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: [1],
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="primary"
            sx={{ fontWeight: 'bold', my: 2 }}
          >
            {open ? 'Questomer' : 'Q'}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {filteredNavItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  borderRadius: '0 24px 24px 0',
                  mr: 1,
                  ml: 0,
                  bgcolor: location.pathname.includes(item.path) ? 
                    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' 
                    : 'transparent',
                  '&:hover': {
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
                  },
                }}
                onClick={() => handleNavigation(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: location.pathname.includes(item.path) ? 'primary.main' : 'inherit',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  sx={{ 
                    opacity: open ? 1 : 0,
                    color: location.pathname.includes(item.path) ? 'primary.main' : 'inherit',
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {children || <Outlet />}
      </Box>
    </Box>
  );
};

export default DashboardLayout; 
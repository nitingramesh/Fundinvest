import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid as MuiGrid,
  Paper,
  Avatar,
  Button,
  Chip,
  Divider,
  List,
  LinearProgress,
  Stack,
  useTheme
} from '@mui/material';
import {
  TrendingUp,
  VisibilityOutlined,
  HandshakeOutlined,
  GroupAdd,
  CalendarMonth,
  KeyboardArrowRight,
  EmojiEvents,
  VideoCall,
  LocationOn,
  BusinessCenter
} from '@mui/icons-material';

// Demo data for the dashboard
const demoInvestorMatches = [
  {
    id: 1,
    name: 'Venture Partners',
    logo: 'VP',
    matchScore: 92,
    industry: 'Technology',
    investmentRange: '$500K - $2M',
    location: 'San Francisco, CA',
    matchReasons: ['Industry alignment', 'Growth stage', 'Market focus']
  },
  {
    id: 2,
    name: 'Growth Capital Fund',
    logo: 'GC',
    matchScore: 87,
    industry: 'Technology, Healthcare',
    investmentRange: '$1M - $5M',
    location: 'Boston, MA',
    matchReasons: ['Industry alignment', 'Revenue model']
  },
  {
    id: 3,
    name: 'Impact Ventures',
    logo: 'IV',
    matchScore: 76,
    industry: 'Sustainability, Technology',
    investmentRange: '$250K - $1M',
    location: 'Austin, TX',
    matchReasons: ['Sustainability focus', 'Team experience']
  }
];

const demoMeetings = [
  {
    id: 1,
    investorName: 'Venture Partners',
    logo: 'VP',
    date: '2023-07-15T14:00:00',
    isVirtual: true,
    status: 'confirmed'
  },
  {
    id: 2,
    investorName: 'Growth Capital Fund',
    logo: 'GC',
    date: '2023-07-17T10:30:00',
    isVirtual: false,
    location: 'GCF Office, Boston',
    status: 'pending'
  }
];

const demoMetrics = {
  profileViews: 124,
  investorMatches: 8,
  meetings: 3,
  fundingProgress: 35, // percentage
  targetAmount: 1500000,
  raisedAmount: 525000
};

// Use Grid without 'item' prop for TypeScript compatibility
const Grid = (props: any) => <MuiGrid {...props} />;

const StartupDashboard: React.FC = () => {
  const theme = useTheme();
  const founderName = 'Founder';

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/* Welcome Section */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: theme.palette.background.default, borderRadius: 2 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="space-between">
              <Box>
                <Typography variant="h4" gutterBottom>
                  Welcome back, {founderName}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Here's what's happening with your startup today
                </Typography>
              </Box>
              <Button variant="contained" color="primary">
                Complete your profile
              </Button>
            </Stack>
          </Paper>
        </Grid>

        {/* Stats Cards */}
        <Grid item xs={12} md={3}>
          <Card elevation={1} sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.light' }}>
                  <VisibilityOutlined />
                </Avatar>
                <Typography variant="h6">Profile Views</Typography>
              </Stack>
              <Typography variant="h3" component="div" sx={{ mb: 1 }}>
                {demoMetrics.profileViews}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +12% from last week
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card elevation={1} sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <Avatar sx={{ bgcolor: 'secondary.light' }}>
                  <HandshakeOutlined />
                </Avatar>
                <Typography variant="h6">Investor Matches</Typography>
              </Stack>
              <Typography variant="h3" component="div" sx={{ mb: 1 }}>
                {demoMetrics.investorMatches}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                3 new matches this week
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card elevation={1} sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <Avatar sx={{ bgcolor: 'info.light' }}>
                  <CalendarMonth />
                </Avatar>
                <Typography variant="h6">Meetings</Typography>
              </Stack>
              <Typography variant="h3" component="div" sx={{ mb: 1 }}>
                {demoMetrics.meetings}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2 scheduled for next week
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card elevation={1} sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <Avatar sx={{ bgcolor: 'success.light' }}>
                  <TrendingUp />
                </Avatar>
                <Typography variant="h6">Funding Progress</Typography>
              </Stack>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="h5" component="div">
                  ${formatNumber(demoMetrics.raisedAmount)}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ alignSelf: 'center' }}>
                  of ${formatNumber(demoMetrics.targetAmount)}
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={demoMetrics.fundingProgress} 
                sx={{ height: 10, borderRadius: 5, mb: 1 }}
              />
              <Typography variant="body2" color="text.secondary">
                {demoMetrics.fundingProgress}% of goal reached
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Investor Matches */}
        <Grid item xs={12} md={8}>
          <Card elevation={1}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Typography variant="h5">Top Investor Matches</Typography>
                <Button endIcon={<KeyboardArrowRight />} size="small">View all matches</Button>
              </Stack>

              <Stack spacing={2}>
                {demoInvestorMatches.map((investor) => (
                  <Paper 
                    key={investor.id} 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={7}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Avatar 
                            sx={{ 
                              bgcolor: 'primary.main', 
                              width: 50, 
                              height: 50,
                              fontSize: '1.2rem'
                            }}
                          >
                            {investor.logo}
                          </Avatar>
                          <Box>
                            <Typography variant="h6">{investor.name}</Typography>
                            <Stack direction="row" spacing={1} alignItems="center">
                              <LocationOn fontSize="small" color="action" />
                              <Typography variant="body2" color="text.secondary">
                                {investor.location}
                              </Typography>
                            </Stack>
                          </Box>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start', sm: 'center' } }}>
                        <Box sx={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          alignItems: 'center',
                          bgcolor: 'success.light', 
                          color: 'success.dark',
                          p: 1, 
                          borderRadius: 2, 
                          minWidth: 70
                        }}>
                          <Typography variant="h5">{investor.matchScore}%</Typography>
                          <Typography variant="caption">Match</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start', sm: 'flex-end' } }}>
                        <Button variant="outlined" color="primary">View Profile</Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider sx={{ my: 1 }} />
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                          <Chip 
                            label={investor.industry} 
                            size="small" 
                            sx={{ bgcolor: 'primary.light', color: 'primary.dark' }} 
                          />
                          <Chip 
                            label={investor.investmentRange} 
                            size="small" 
                            sx={{ bgcolor: 'secondary.light', color: 'secondary.dark' }} 
                          />
                          {investor.matchReasons.map((reason, index) => (
                            <Chip 
                              key={index}
                              label={reason} 
                              size="small" 
                              sx={{ bgcolor: 'success.light', color: 'success.dark' }} 
                            />
                          ))}
                        </Stack>
                      </Grid>
                    </Grid>
                  </Paper>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Meetings */}
        <Grid item xs={12} md={4}>
          <Card elevation={1} sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Typography variant="h5">Upcoming Meetings</Typography>
                <Button endIcon={<KeyboardArrowRight />} size="small">View calendar</Button>
              </Stack>

              {demoMeetings.length > 0 ? (
                <List sx={{ px: 0 }}>
                  {demoMeetings.map((meeting) => (
                    <Paper
                      key={meeting.id}
                      elevation={0}
                      sx={{
                        mb: 2,
                        p: 2,
                        bgcolor: 'background.default',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2
                      }}
                    >
                      <Stack spacing={2}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Avatar sx={{ bgcolor: 'primary.main' }}>{meeting.logo}</Avatar>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6">{meeting.investorName}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {formatDate(meeting.date)}
                            </Typography>
                          </Box>
                          {meeting.status === 'confirmed' ? (
                            <Chip
                              size="small"
                              label="Confirmed"
                              sx={{ bgcolor: 'success.light', color: 'success.dark' }}
                            />
                          ) : (
                            <Chip
                              size="small"
                              label="Pending"
                              sx={{ bgcolor: 'warning.light', color: 'warning.dark' }}
                            />
                          )}
                        </Stack>
                        
                        <Stack direction="row" spacing={1} alignItems="center">
                          {meeting.isVirtual ? (
                            <><VideoCall fontSize="small" color="primary" /> 
                            <Typography variant="body2">Virtual Meeting</Typography></>
                          ) : (
                            <><LocationOn fontSize="small" color="primary" /> 
                            <Typography variant="body2">{meeting.location}</Typography></>
                          )}
                        </Stack>
                        
                        <Stack direction="row" spacing={1}>
                          <Button variant="outlined" size="small" fullWidth>
                            Reschedule
                          </Button>
                          <Button variant="contained" size="small" fullWidth>
                            Join
                          </Button>
                        </Stack>
                      </Stack>
                    </Paper>
                  ))}
                </List>
              ) : (
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    bgcolor: 'background.default',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2
                  }}
                >
                  <Typography variant="body1" gutterBottom>No upcoming meetings</Typography>
                  <Button variant="outlined" startIcon={<CalendarMonth />} sx={{ mt: 1 }}>
                    Schedule Meeting
                  </Button>
                </Paper>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* To-Do / Action Items */}
        <Grid item xs={12}>
          <Card elevation={1}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Complete Your Profile</Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Finish these items to improve your matches and visibility to investors
              </Typography>
              
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      height: '100%',
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <BusinessCenter color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">Business Plan</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2, flexGrow: 1 }}>
                      Upload your business plan document to share with potential investors
                    </Typography>
                    <Button variant="outlined" fullWidth>Upload</Button>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      height: '100%',
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <GroupAdd color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">Team Members</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2, flexGrow: 1 }}>
                      Add your team members and their roles to showcase your talent
                    </Typography>
                    <Button variant="outlined" fullWidth>Add Team</Button>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      height: '100%',
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <TrendingUp color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">Financial Projections</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2, flexGrow: 1 }}>
                      Add your financial projections to demonstrate growth potential
                    </Typography>
                    <Button variant="outlined" fullWidth>Add Projections</Button>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      height: '100%',
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <EmojiEvents color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">Achievements</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2, flexGrow: 1 }}>
                      Highlight your milestones, awards, and key achievements
                    </Typography>
                    <Button variant="outlined" fullWidth>Add Achievements</Button>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StartupDashboard; 
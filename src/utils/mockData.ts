import { StartupUser, InvestorUser, InvestorMatch, StartupMatch, Meeting, Deal, Message } from '../types';

// Mock Startup Users
export const mockStartups: StartupUser[] = [
  {
    id: 'startup-1',
    questId: 'Q-1234',
    name: 'John Doe',
    email: 'john@techinnovate.com',
    phoneNumber: '+1-555-123-4567',
    linkedinProfile: 'https://linkedin.com/in/johndoe',
    role: 'startup',
    level: 'L2',
    startupName: 'TechInnovate',
    logo: '/images/logos/techinnovate.png',
    industry: ['Artificial Intelligence', 'SaaS'],
    businessModel: 'B2B SaaS',
    website: 'https://techinnovate.com',
    socialLinks: {
      twitter: 'https://twitter.com/techinnovate',
      facebook: 'https://facebook.com/company/techinnovate',
    },
    headquarters: 'San Francisco, USA',
    operationalRegions: ['North America', 'Europe'],
    yearFounded: 2020,
    coFounders: [
      {
        name: 'Jane Smith',
        role: 'CTO',
        linkedin: 'https://linkedin.com/in/janesmith',
        email: 'jane@techinnovate.com',
      }
    ],
    traction: {
      revenueStatus: '$100K-$500K ARR',
      monthlyActiveUsers: 2500,
      totalPayingCustomers: 50,
      yoyGrowthRate: 120,
      keyMilestones: ['Product launch', 'First enterprise customer', 'Series A funding'],
    },
    funding: {
      totalRaised: 1500000,
      currentRound: 'Series A',
      targetAmount: 5000000,
      equityOffered: 15,
      useOfFunds: ['Product development', 'Team expansion', 'Marketing'],
      idealInvestorType: ['VC funds', 'Angel investors with industry expertise'],
    },
    preferences: {
      preferredInvestorRegion: ['US', 'Europe'],
      mentorshipNeeded: ['Sales strategy', 'Enterprise scaling'],
      industryConnectionsNeeded: ['Enterprise SaaS', 'AI'],
      openToCoInvestment: true,
    },
    documents: {
      pitchDeck: '/documents/techinnovate-deck.pdf',
      businessPlan: '/documents/techinnovate-plan.pdf',
      financialProjections: '/documents/techinnovate-financials.xlsx',
    },
    privacy: {
      isPublic: true,
      showFinancials: false,
      allowDirectMessaging: true,
    },
    createdAt: new Date('2023-01-15'),
  },
  {
    id: 'startup-2',
    questId: 'Q-5678',
    name: 'Sarah Johnson',
    email: 'sarah@healthwave.com',
    phoneNumber: '+1-555-987-6543',
    linkedinProfile: 'https://linkedin.com/in/sarahjohnson',
    role: 'startup',
    level: 'L1',
    startupName: 'HealthWave',
    logo: '/images/logos/healthwave.png',
    industry: ['Health Tech', 'Mobile Apps'],
    businessModel: 'B2C Subscription',
    website: 'https://healthwave.com',
    socialLinks: {
      twitter: 'https://twitter.com/healthwave',
      facebook: 'https://facebook.com/healthwave',
    },
    headquarters: 'Boston, USA',
    operationalRegions: ['North America'],
    yearFounded: 2022,
    coFounders: [
      {
        name: 'Michael Chen',
        role: 'CTO',
        linkedin: 'https://linkedin.com/in/michaelchen',
        email: 'michael@healthwave.com',
      }
    ],
    traction: {
      revenueStatus: 'Pre-revenue',
      monthlyActiveUsers: 500,
      totalPayingCustomers: 0,
      keyMilestones: ['MVP launch', 'Closed beta with 500 users'],
    },
    funding: {
      totalRaised: 250000,
      currentRound: 'Seed',
      targetAmount: 1000000,
      equityOffered: 10,
      useOfFunds: ['Product development', 'User acquisition'],
      idealInvestorType: ['Health tech VCs', 'Angel investors with healthcare background'],
    },
    preferences: {
      preferredInvestorRegion: ['US East Coast', 'Europe'],
      mentorshipNeeded: ['Marketing', 'Healthcare regulations'],
      industryConnectionsNeeded: ['Healthcare providers', 'Insurance'],
      openToCoInvestment: true,
    },
    documents: {
      pitchDeck: '/documents/healthwave-deck.pdf',
    },
    privacy: {
      isPublic: false,
      showFinancials: false,
      allowDirectMessaging: true,
    },
    createdAt: new Date('2023-06-20'),
  },
  {
    id: 'startup-3',
    questId: 'Q-9012',
    name: 'Carlos Rodriguez',
    email: 'carlos@greenlogistics.com',
    phoneNumber: '+34-555-234-5678',
    linkedinProfile: 'https://linkedin.com/in/carlosrodriguez',
    role: 'startup',
    level: 'Q',
    startupName: 'GreenLogistics',
    logo: '/images/logos/greenlogistics.png',
    industry: ['Sustainability', 'Supply Chain', 'Logistics'],
    businessModel: 'B2B Platform',
    website: 'https://greenlogistics.com',
    socialLinks: {
      twitter: 'https://twitter.com/greenlogistics',
      facebook: 'https://facebook.com/company/greenlogistics',
    },
    headquarters: 'Barcelona, Spain',
    operationalRegions: ['Europe', 'Latin America'],
    yearFounded: 2019,
    coFounders: [
      {
        name: 'Elena Vargas',
        role: 'COO',
        linkedin: 'https://linkedin.com/in/elenavargas',
        email: 'elena@greenlogistics.com',
      },
      {
        name: 'David Muller',
        role: 'CTO',
        linkedin: 'https://linkedin.com/in/davidmuller',
        email: 'david@greenlogistics.com',
      }
    ],
    traction: {
      revenueStatus: '$500K-$1M ARR',
      monthlyActiveUsers: 5000,
      totalPayingCustomers: 120,
      yoyGrowthRate: 150,
      keyMilestones: ['Product launch', '100 business customers', 'European expansion'],
    },
    funding: {
      totalRaised: 3500000,
      currentRound: 'Series B',
      targetAmount: 10000000,
      equityOffered: 12,
      useOfFunds: ['International expansion', 'Product scaling', 'Team growth'],
      idealInvestorType: ['Climate tech VCs', 'Sustainability-focused investors'],
    },
    preferences: {
      preferredInvestorRegion: ['Europe', 'US', 'Asia'],
      industryConnectionsNeeded: ['Logistics', 'Transportation', 'Retail'],
      openToCoInvestment: true,
    },
    documents: {
      pitchDeck: '/documents/greenlogistics-deck.pdf',
      businessPlan: '/documents/greenlogistics-plan.pdf',
      financialProjections: '/documents/greenlogistics-financials.xlsx',
    },
    privacy: {
      isPublic: true,
      showFinancials: true,
      allowDirectMessaging: true,
    },
    createdAt: new Date('2022-04-10'),
  }
];

// Mock Investor Users
export const mockInvestors: InvestorUser[] = [
  {
    id: 'investor-1',
    questId: 'Q-3456',
    name: 'Alex Thompson',
    email: 'alex@innovatecapital.com',
    phoneNumber: '+1-555-789-0123',
    linkedinProfile: 'https://linkedin.com/in/alexthompson',
    role: 'investor',
    level: 'L2',
    investorType: 'Venture Capital',
    industry: ['Artificial Intelligence', 'SaaS', 'Fintech'],
    investmentStage: ['Seed', 'Series A', 'Series B'],
    ticketSize: {
      min: 500000,
      max: 5000000,
    },
    dealType: ['Equity', 'Convertible Notes'],
    geographicPreferences: ['North America', 'Europe'],
    riskAppetite: 'Moderate',
    portfolio: {
      totalInvestments: 35,
      portfolioSize: 80000000,
      successfulExits: 7,
      fundedStartups: [
        {
          name: 'CloudTech Solutions',
          industry: 'Cloud Infrastructure',
          amount: 2500000,
          date: new Date('2022-05-15'),
        },
        {
          name: 'Finnovate',
          industry: 'Fintech',
          amount: 3500000,
          date: new Date('2021-11-22'),
        }
      ],
    },
    preferences: {
      visibility: 'public',
      allowMessages: true,
      contactMethod: 'platform',
      dealFlowFrequency: 'weekly',
    },
    activityLevel: 'very active',
    founderPreferences: {
      firstTimeFounders: true,
      experiencedFounders: true,
      keyFactors: ['Team expertise', 'Market size', 'Traction', 'IP'],
    },
    verification: {
      accreditationStatus: 'Verified',
    },
    createdAt: new Date('2021-08-12'),
  },
  {
    id: 'investor-2',
    questId: 'Q-7890',
    name: 'Jennifer Wu',
    email: 'jennifer@emergecapital.com',
    phoneNumber: '+1-555-345-6789',
    linkedinProfile: 'https://linkedin.com/in/jenniferwu',
    role: 'investor',
    level: 'Q',
    investorType: 'Angel Investor',
    industry: ['Health Tech', 'Biotechnology', 'Medical Devices'],
    investmentStage: ['Pre-seed', 'Seed'],
    ticketSize: {
      min: 50000,
      max: 500000,
    },
    dealType: ['Equity', 'SAFE'],
    geographicPreferences: ['North America', 'Asia'],
    riskAppetite: 'High',
    portfolio: {
      totalInvestments: 18,
      portfolioSize: 5000000,
      successfulExits: 3,
      fundedStartups: [
        {
          name: 'MediTech Solutions',
          industry: 'Health Tech',
          amount: 250000,
          date: new Date('2022-09-10'),
        }
      ],
    },
    preferences: {
      visibility: 'private',
      allowMessages: true,
      contactMethod: 'email',
      dealFlowFrequency: 'daily',
    },
    activityLevel: 'active',
    founderPreferences: {
      firstTimeFounders: true,
      experiencedFounders: true,
      keyFactors: ['Team background', 'Domain expertise', 'Novel technology'],
    },
    verification: {
      accreditationStatus: 'Verified',
    },
    createdAt: new Date('2022-01-20'),
  },
  {
    id: 'investor-3',
    questId: 'Q-1357',
    name: 'Robert Keller',
    email: 'robert@sustainfund.com',
    phoneNumber: '+49-555-456-7890',
    linkedinProfile: 'https://linkedin.com/in/robertkeller',
    role: 'investor',
    level: 'L1',
    investorType: 'Venture Capital',
    industry: ['Clean Energy', 'Sustainability', 'GreenTech'],
    investmentStage: ['Series A', 'Series B'],
    ticketSize: {
      min: 2000000,
      max: 10000000,
    },
    dealType: ['Equity'],
    geographicPreferences: ['Europe', 'North America'],
    riskAppetite: 'Moderate',
    portfolio: {
      totalInvestments: 22,
      portfolioSize: 150000000,
      successfulExits: 5,
      fundedStartups: [
        {
          name: 'SolarTech',
          industry: 'Renewable Energy',
          amount: 5000000,
          date: new Date('2022-03-18'),
        },
        {
          name: 'EcoBuilding',
          industry: 'Sustainable Construction',
          amount: 3500000,
          date: new Date('2021-07-29'),
        }
      ],
    },
    preferences: {
      visibility: 'public',
      allowMessages: true,
      contactMethod: 'platform',
      dealFlowFrequency: 'weekly',
      syndicateMemberships: ['CleanTech Alliance', 'European Green Investors'],
    },
    activityLevel: 'active',
    founderPreferences: {
      firstTimeFounders: false,
      experiencedFounders: true,
      keyFactors: ['Impact metrics', 'Tech innovation', 'Scalability', 'Team track record'],
    },
    verification: {
      accreditationStatus: 'Verified',
    },
    createdAt: new Date('2021-11-05'),
  }
];

// Mock Investor Matches for Startups
export const mockInvestorMatches: { [key: string]: InvestorMatch[] } = {
  'startup-1': [
    {
      investorId: 'investor-1',
      investorName: 'Alex Thompson',
      matchScore: 87,
      matchReason: ['Industry match: AI & SaaS', 'Stage match: Series A', 'Region match'],
      interestLevel: 'high',
    },
    {
      investorId: 'investor-3',
      investorName: 'Robert Keller',
      matchScore: 62,
      matchReason: ['Stage match: Series A', 'Region match'],
      interestLevel: 'medium',
    }
  ],
  'startup-2': [
    {
      investorId: 'investor-2',
      investorName: 'Jennifer Wu',
      matchScore: 91,
      matchReason: ['Industry match: Health Tech', 'Stage match: Seed', 'Region match'],
      interestLevel: 'high',
    }
  ],
  'startup-3': [
    {
      investorId: 'investor-3',
      investorName: 'Robert Keller',
      matchScore: 95,
      matchReason: ['Industry match: Sustainability', 'Stage match: Series B', 'Region match'],
      interestLevel: 'high',
    },
    {
      investorId: 'investor-1',
      investorName: 'Alex Thompson',
      matchScore: 70,
      matchReason: ['Stage match: Series B', 'Region match: Europe'],
      interestLevel: 'medium',
    }
  ]
};

// Mock Startup Matches for Investors
export const mockStartupMatches: { [key: string]: StartupMatch[] } = {
  'investor-1': [
    {
      startupId: 'startup-1',
      startupName: 'TechInnovate',
      matchScore: 87,
      matchReason: ['Industry match: AI & SaaS', 'Stage match: Series A', 'Region match'],
      interestLevel: 'high',
    },
    {
      startupId: 'startup-3',
      startupName: 'GreenLogistics',
      matchScore: 70,
      matchReason: ['Stage match: Series B', 'Region match: Europe'],
      interestLevel: 'medium',
    }
  ],
  'investor-2': [
    {
      startupId: 'startup-2',
      startupName: 'HealthWave',
      matchScore: 91,
      matchReason: ['Industry match: Health Tech', 'Stage match: Seed', 'Region match'],
      interestLevel: 'high',
    }
  ],
  'investor-3': [
    {
      startupId: 'startup-3',
      startupName: 'GreenLogistics',
      matchScore: 95,
      matchReason: ['Industry match: Sustainability', 'Stage match: Series B', 'Region match'],
      interestLevel: 'high',
    },
    {
      startupId: 'startup-1',
      startupName: 'TechInnovate',
      matchScore: 62,
      matchReason: ['Stage match: Series A', 'Region match'],
      interestLevel: 'medium',
    }
  ]
};

// Mock Meetings
export const mockMeetings: Meeting[] = [
  {
    id: 'meeting-1',
    startupId: 'startup-1',
    investorId: 'investor-1',
    title: 'Initial Introduction Call',
    description: "Discuss TechInnovate's product and investment opportunity",
    date: new Date(Date.now() + 86400000 * 2), // 2 days from now
    duration: 45,
    link: 'https://zoom.us/j/123456789',
    status: 'scheduled',
  },
  {
    id: 'meeting-2',
    startupId: 'startup-3',
    investorId: 'investor-3',
    title: 'Series B Investment Discussion',
    description: "Deep dive into GreenLogistics' growth plans and financial projections",
    date: new Date(Date.now() + 86400000 * 5), // 5 days from now
    duration: 60,
    link: 'https://meet.google.com/abc-defg-hij',
    status: 'scheduled',
  },
  {
    id: 'meeting-3',
    startupId: 'startup-2',
    investorId: 'investor-2',
    title: 'Seed Round Follow-up',
    description: 'Follow-up discussion regarding potential seed investment',
    date: new Date(Date.now() - 86400000 * 3), // 3 days ago
    duration: 30,
    link: 'https://zoom.us/j/987654321',
    status: 'completed',
    notes: 'Requested additional user metrics and financial projections',
  }
];

// Mock Deals
export const mockDeals: Deal[] = [
  {
    id: 'deal-1',
    startupId: 'startup-3',
    investorId: 'investor-3',
    status: 'due diligence',
    amount: 4000000,
    equity: 8,
    notes: 'Conducting market analysis and team background checks',
    createdAt: new Date(Date.now() - 86400000 * 15), // 15 days ago
    updatedAt: new Date(Date.now() - 86400000 * 5), // 5 days ago
  },
  {
    id: 'deal-2',
    startupId: 'startup-1',
    investorId: 'investor-1',
    status: 'interested',
    amount: 2500000,
    equity: 10,
    notes: 'Initial interest shown, awaiting more details',
    createdAt: new Date(Date.now() - 86400000 * 7), // 7 days ago
    updatedAt: new Date(Date.now() - 86400000 * 7), // 7 days ago
  },
  {
    id: 'deal-3',
    startupId: 'startup-2',
    investorId: 'investor-2',
    status: 'committed',
    amount: 400000,
    equity: 8,
    notes: 'Term sheet signed, finalizing documentation',
    createdAt: new Date(Date.now() - 86400000 * 20), // 20 days ago
    updatedAt: new Date(Date.now() - 86400000 * 2), // 2 days ago
  }
];

// Mock Messages
export const mockMessages: { [key: string]: Message[] } = {
  'startup-1_investor-1': [
    {
      id: 'msg-1',
      senderId: 'startup-1',
      receiverId: 'investor-1',
      content: "Thanks for your interest in TechInnovate. I'd be happy to schedule a call to discuss our business model and growth plans.",
      timestamp: new Date(Date.now() - 86400000 * 5 - 3600000 * 2), // 5 days and 2 hours ago
      read: true,
    },
    {
      id: 'msg-2',
      senderId: 'investor-1',
      receiverId: 'startup-1',
      content: "That sounds great. I'm particularly interested in your AI technology and how you're using it to solve enterprise problems. Could you send over your latest pitch deck before our call?",
      timestamp: new Date(Date.now() - 86400000 * 5 - 3600000), // 5 days and 1 hour ago
      read: true,
    },
    {
      id: 'msg-3',
      senderId: 'startup-1',
      receiverId: 'investor-1',
      content: "Absolutely, I've attached our latest pitch deck and a one-pager on our technology. Looking forward to our call!",
      timestamp: new Date(Date.now() - 86400000 * 5), // 5 days ago
      read: true,
      attachments: [
        {
          name: 'TechInnovate_Pitch_2023.pdf',
          url: '/documents/techinnovate-deck.pdf',
          type: 'application/pdf',
        },
        {
          name: 'TechInnovate_Tech_Overview.pdf',
          url: '/documents/techinnovate-tech.pdf',
          type: 'application/pdf',
        }
      ],
    }
  ],
  'startup-2_investor-2': [
    {
      id: 'msg-4',
      senderId: 'investor-2',
      receiverId: 'startup-2',
      content: "Hello Sarah, I'm very impressed by what HealthWave is building. Your approach to consumer health tech is quite innovative. Do you have time to chat this week?",
      timestamp: new Date(Date.now() - 86400000 * 10), // 10 days ago
      read: true,
    },
    {
      id: 'msg-5',
      senderId: 'startup-2',
      receiverId: 'investor-2',
      content: "Hi Jennifer, thanks for reaching out! We're excited about the possibility of working with you. I'm available this Thursday or Friday afternoon for a call.",
      timestamp: new Date(Date.now() - 86400000 * 9), // 9 days ago
      read: true,
    },
    {
      id: 'msg-6',
      senderId: 'investor-2',
      receiverId: 'startup-2',
      content: "Friday at 2pm PT works for me. I'll send a calendar invite with Zoom details. Could you also share some information about your user growth and engagement metrics?",
      timestamp: new Date(Date.now() - 86400000 * 9 + 3600000 * 3), // 9 days ago + 3 hours
      read: true,
    }
  ],
  'startup-3_investor-3': [
    {
      id: 'msg-7',
      senderId: 'startup-3',
      receiverId: 'investor-3',
      content: "Hello Robert, I noticed you've shown interest in GreenLogistics. We're preparing for our Series B round and believe there could be great alignment with SustainFund.",
      timestamp: new Date(Date.now() - 86400000 * 20), // 20 days ago
      read: true,
    },
    {
      id: 'msg-8',
      senderId: 'investor-3',
      receiverId: 'startup-3',
      content: "Carlos, thanks for reaching out. I've been following your progress for some time and am impressed with your expansion across Europe. Let's set up a call to discuss how we could support your next phase of growth.",
      timestamp: new Date(Date.now() - 86400000 * 19), // 19 days ago
      read: true,
    },
    {
      id: 'msg-9',
      senderId: 'startup-3',
      receiverId: 'investor-3',
      content: "That sounds excellent. I've attached our latest investor presentation and impact report. When would be a good time for that call?",
      timestamp: new Date(Date.now() - 86400000 * 18), // 18 days ago
      read: true,
      attachments: [
        {
          name: 'GreenLogistics_Investor_Deck_2023.pdf',
          url: '/documents/greenlogistics-deck.pdf',
          type: 'application/pdf',
        },
        {
          name: 'GreenLogistics_Impact_Report_2023.pdf',
          url: '/documents/greenlogistics-impact.pdf',
          type: 'application/pdf',
        }
      ],
    },
    {
      id: 'msg-10',
      senderId: 'investor-3',
      receiverId: 'startup-3',
      content: "Thanks for sharing these materials. I'm available next Monday or Tuesday morning CET. Also, I'd like to introduce you to our sustainability metrics team - they'll have some questions about your carbon reduction calculations.",
      timestamp: new Date(Date.now() - 86400000 * 17), // 17 days ago
      read: true,
    }
  ]
}; 
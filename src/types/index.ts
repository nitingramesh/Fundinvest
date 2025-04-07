// User Roles
export type UserRole = 'startup' | 'investor';

// Startup Levels
export type StartupLevel = 'L1' | 'L2' | 'Q';

// Investor Levels
export type InvestorLevel = 'L1' | 'L2' | 'Q';

// Common User Interface
export interface User {
  id: string;
  questId: string;
  name: string;
  email: string;
  phoneNumber: string;
  linkedinProfile: string;
  role: UserRole;
  createdAt: Date;
}

// Startup User
export interface StartupUser extends User {
  role: 'startup';
  level: StartupLevel;
  startupName: string;
  logo?: string;
  industry: string[];
  businessModel: string;
  website?: string;
  socialLinks?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    other?: string;
  };
  headquarters: string;
  operationalRegions: string[];
  yearFounded: number;
  coFounders?: {
    name: string;
    role: string;
    linkedin: string;
    phoneNumber?: string;
    email?: string;
  }[];
  advisors?: {
    name: string;
    role: string;
    linkedin?: string;
  }[];
  traction?: {
    revenueStatus?: string;
    monthlyActiveUsers?: number;
    totalPayingCustomers?: number;
    yoyGrowthRate?: number;
    keyMilestones?: string[];
  };
  funding?: {
    totalRaised: number;
    currentRound: string;
    targetAmount: number;
    equityOffered?: number;
    useOfFunds?: string[];
    idealInvestorType?: string[];
  };
  preferences?: {
    preferredInvestorRegion?: string[];
    mentorshipNeeded?: string[];
    industryConnectionsNeeded?: string[];
    openToCoInvestment?: boolean;
  };
  documents?: {
    pitchDeck?: string;
    businessPlan?: string;
    financialProjections?: string;
    businessRegistration?: string;
    taxId?: string;
  };
  privacy?: {
    isPublic: boolean;
    showFinancials: boolean;
    allowDirectMessaging: boolean;
    restrictedRegions?: string[];
  };
}

// Investor User
export interface InvestorUser extends User {
  role: 'investor';
  level: InvestorLevel;
  investorType: string;
  industry: string[];
  investmentStage: string[];
  ticketSize: {
    min: number;
    max: number;
  };
  dealType: string[];
  geographicPreferences: string[];
  riskAppetite: string;
  portfolio?: {
    totalInvestments: number;
    portfolioSize: number;
    successfulExits: number;
    fundedStartups?: {
      name: string;
      industry: string;
      amount?: number;
      date?: Date;
    }[];
  };
  preferences?: {
    visibility: 'public' | 'private';
    allowMessages: boolean;
    contactMethod: 'email' | 'platform' | 'video';
    dealFlowFrequency: 'daily' | 'weekly' | 'monthly';
    syndicateMemberships?: string[];
  };
  activityLevel?: 'very active' | 'active' | 'passive';
  founderPreferences?: {
    firstTimeFounders: boolean;
    experiencedFounders: boolean;
    keyFactors: string[];
  };
  verification?: {
    governmentId?: string;
    accreditationStatus?: string;
  };
}

// Startup Match Type
export interface StartupMatch {
  startupId: string;
  startupName: string;
  matchScore: number;
  matchReason: string[];
  interestLevel?: 'high' | 'medium' | 'low' | 'none';
}

// Investor Match Type
export interface InvestorMatch {
  investorId: string;
  investorName: string;
  matchScore: number;
  matchReason: string[];
  interestLevel?: 'high' | 'medium' | 'low';
}

// Deal Status Type
export type DealStatus = 'interested' | 'due diligence' | 'committed' | 'closed';

// Deal Type
export interface Deal {
  id: string;
  startupId: string;
  investorId: string;
  status: DealStatus;
  amount?: number;
  equity?: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Meeting Type
export interface Meeting {
  id: string;
  startupId: string;
  investorId: string;
  title: string;
  description?: string;
  date: Date;
  duration: number; // in minutes
  link?: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

// Message Type
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
  attachments?: {
    name: string;
    url: string;
    type: string;
  }[];
}

// Dashboard Stats
export interface DashboardStats {
  totalMatches: number;
  profileViews: number;
  meetingsScheduled: number;
  activeDeals: number;
  fundingProgress?: number; // for startups
  investmentCommitments?: number; // for startups
  openDeals?: number; // for investors
  potentialInvestments?: number; // for investors
} 
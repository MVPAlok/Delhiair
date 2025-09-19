// Mock data for DelhiAir.AI application

export const mockAQIData = {
  locations: [
    {
      id: 1,
      name: "Anand Vihar",
      aqi: 450,
      status: "Severe",
      coordinates: { top: "30%", left: "40%" },
      color: "bg-danger-red",
      description: "Industrial area with heavy traffic"
    },
    {
      id: 2,
      name: "Gurugram",
      aqi: 320,
      status: "Very Poor",
      coordinates: { top: "50%", left: "55%" },
      color: "bg-warning-orange",
      description: "Commercial hub with construction activities"
    },
    {
      id: 3,
      name: "Lodhi Road",
      aqi: 85,
      status: "Satisfactory",
      coordinates: { top: "65%", left: "45%" },
      color: "bg-fresh-green",
      description: "Green belt area with parks"
    },
    {
      id: 4,
      name: "Noida",
      aqi: 150,
      status: "Moderate",
      coordinates: { top: "40%", left: "65%" },
      color: "bg-yellow-400",
      description: "Planned city with IT sector"
    }
  ],
  lastUpdated: "2 minutes ago",
  averageAQI: 251,
  trend: "increasing"
};

export const mockAQICategories = [
  { range: "0-50", label: "Good", color: "bg-green-100 text-green-800", bgColor: "bg-fresh-green" },
  { range: "51-100", label: "Satisfactory", color: "bg-yellow-100 text-yellow-800", bgColor: "bg-yellow-400" },
  { range: "101-200", label: "Moderate", color: "bg-orange-100 text-orange-800", bgColor: "bg-warning-orange" },
  { range: "201-300", label: "Poor", color: "bg-orange-200 text-orange-900", bgColor: "bg-warning-orange" },
  { range: "301-400", label: "Very Poor", color: "bg-red-200 text-red-900", bgColor: "bg-danger-red" },
  { range: "401-500", label: "Severe", color: "bg-red-900/50 text-white", bgColor: "bg-danger-red" }
];

export const mockFeatures = [
  {
    id: 1,
    title: "Source Identification",
    description: "Our AI algorithm pinpoints pollution sources in real-time, from traffic to industrial emissions.",
    icon: "Target",
    color: "text-saffron",
    borderColor: "border-saffron/80"
  },
  {
    id: 2,
    title: "AI-Powered Forecasting",
    description: "Predictive models provide accurate AQI forecasts up to 72 hours in advance for proactive measures.",
    icon: "TrendingUp",
    color: "text-tech-blue",
    borderColor: "border-tech-blue/80"
  },
  {
    id: 3,
    title: "Citizen Health Alerts",
    description: "Personalized alerts based on location and health conditions, with recommendations to reduce exposure.",
    icon: "Shield",
    color: "text-india-green",
    borderColor: "border-india-green/80"
  },
  {
    id: 4,
    title: "Policy Effectiveness",
    description: "Analyze the impact of interventions like the 'Odd-Even' scheme with data-driven reports.",
    icon: "FileText",
    color: "text-warning-orange",
    borderColor: "border-warning-orange/80"
  }
];

export const mockSolutions = [
  {
    id: 1,
    title: "For the Citizen",
    description: "Receive hyperlocal air quality data, health alerts, and actionable advice through an intuitive mobile app. Understand your exposure and protect your family's health.",
    borderColor: "border-india-green/50",
    shadowColor: "hover:shadow-india-green/20",
    linkColor: "text-india-green",
    link: "Learn more about the Citizen App →"
  },
  {
    id: 2,
    title: "For the Policymaker",
    description: "Access a comprehensive dashboard with AI-driven source identification, pollution forecasts, and policy effectiveness tracking. Make informed decisions backed by data.",
    borderColor: "border-saffron/50",
    shadowColor: "hover:shadow-saffron/20",
    linkColor: "text-saffron",
    link: "Explore the Policy Dashboard →"
  }
];

export const mockNavLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "For Policymakers", href: "#cta" },
  { label: "About", href: "#footer" }
];

export const mockFooterLinks = {
  navigate: [
    { label: "Solutions", href: "#solutions" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#cta" },
    { label: "About Us", href: "#" }
  ],
  legal: [
    { label: "Data Transparency", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" }
  ],
  dataSources: ["IMD", "CPCB", "SAFAR"]
};
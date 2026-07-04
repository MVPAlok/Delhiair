# 🌍 DelhiAir.AI - Comprehensive Air Quality Intelligence Platform

> **A Revolutionary Role-Based Air Quality Management System** for Policy Makers, Researchers, NGOs, and Citizens

---

## 📖 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Project Architecture](#project-architecture)
- [Technology Stack](#technology-stack)
- [User Roles & Dashboards](#user-roles--dashboards)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Core Components](#core-components)
- [Authentication & Security](#authentication--security)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**DelhiAir.AI** is an intelligent air quality monitoring and management platform developed as part of the **Smart India Hackathon (SIH)** initiative. It empowers stakeholders across different sectors—from government policymakers to environmental researchers and citizens—with real-time air quality data, predictive analytics, and actionable insights.

### Mission

To democratize air quality information and enable data-driven decision-making at every level of society, from individual health awareness to national environmental policies.

### Vision

Create a sustainable, healthy urban environment through collaborative intelligence and transparent air quality management.

---

## ✨ Key Features

### 🔐 **Role-Based Authentication System**

- Secure login/signup with role selection
- Four distinct user roles with customized dashboards
- Session management and protected routes
- Tri-color themed authentication UI (Indian flag colors)

### 📊 **Advanced Dashboards**

#### **Policy Maker Dashboard**

- Real-time AQI monitoring across multiple stations
- AI-powered policy recommendations
- Heatmap visualization of pollution zones
- Forecast analysis for trend prediction
- Source contribution analysis
- Policy effectiveness tracking
- Station-wise data tables with detailed metrics

#### **Researcher Dashboard**

- Advanced data visualization tools
- Model performance analytics
- Research findings management
- Publication tracking
- Custom analysis tools integration
- Data export capabilities

#### **NGO Dashboard**

- Community impact tracking
- Volunteer management system
- Area coverage monitoring
- Campaign effectiveness metrics
- Real-time alert system
- Community report aggregation

#### **Citizen Dashboard**

- Personal AQI monitoring
- Health recommendations based on air quality
- Nearby station tracking
- Real-time alert notifications
- Interactive air quality index
- Lifestyle adjustment suggestions

### 🎨 **Modern UI/UX Design**

- Responsive design for desktop, tablet, and mobile
- Dark-themed charcoal interfaces
- Tri-color gradient components (Role-specific color schemes)
- Smooth animations and hover effects
- Intuitive navigation
- Accessibility-compliant components (Radix UI)

### 🔄 **Real-Time Data Processing**

- Live AQI calculations
- Instant data updates
- Predictive analytics engine
- Trend analysis
- Alert generation system

### 📥 **Data Export & Reporting**

- PDF export functionality with custom formatting
- Data table exports
- Report generation
- Share capabilities

---

## 🏗️ Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     DelhiAir.AI Platform                     │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────┐         ┌──────────────────┐          │
│  │   Frontend       │         │    Backend       │          │
│  │  (React 19.0)    │◄────────►│  (FastAPI)       │          │
│  │                  │         │                  │          │
│  │  • Dashboards    │         │  • REST API      │          │
│  │  • Auth System   │         │  • MongoDB       │          │
│  │  • Real-time UI  │         │  • ML Models     │          │
│  │  • PDF Export    │         │  • Validators    │          │
│  └──────────────────┘         └──────────────────┘          │
│           │                            │                    │
│           └────────────┬───────────────┘                    │
│                        │                                    │
│              ┌─────────▼──────────┐                         │
│              │  MongoDB Atlas     │                         │
│              │   (Database)       │                         │
│              └────────────────────┘                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

### **Frontend**

| Technology   | Purpose            | Version |
| ------------ | ------------------ | ------- |
| React        | UI Framework       | 19.0.0  |
| React Router | Navigation         | Latest  |
| Tailwind CSS | Styling            | Latest  |
| Radix UI     | Component Library  | Latest  |
| Chart.js     | Data Visualization | 4.5.0   |
| jsPDF        | PDF Generation     | 3.0.3   |
| Lucide React | Icons              | 0.507.0 |
| Axios        | HTTP Client        | 1.8.4   |

### **Backend**

| Technology | Purpose              | Version |
| ---------- | -------------------- | ------- |
| FastAPI    | Web Framework        | 0.110.1 |
| Uvicorn    | ASGI Server          | 0.25.0  |
| MongoDB    | Database             | Latest  |
| Motor      | Async MongoDB Driver | 3.3.1   |
| Pydantic   | Data Validation      | 2.6.4+  |
| PyJWT      | Authentication       | 2.10.1+ |
| Pandas     | Data Processing      | 2.2.0+  |
| NumPy      | Numerical Computing  | 1.26.0+ |

### **Development Tools**

- **Code Quality**: Black, Flake8, MyPy, isort
- **Testing**: Pytest, unittest
- **Build**: Craco, PostCSS, Vite
- **Deployment**: Vercel (Frontend), Docker ready

---

## 👥 User Roles & Dashboards

### 1. **Policy Maker** 🏛️

**Access Level**: Government & Policy Authority

**Capabilities**:

- View national/state-level air quality metrics
- Receive AI-driven policy recommendations
- Analyze pollution source contributions
- Generate policy effectiveness reports
- Set alert thresholds
- Access historical trend analysis

**Dashboard Components**:

- AIRecommendations.jsx
- AQIHeatMap.jsx
- ForecastingPanel.jsx
- PolicyEffectiveness.jsx
- SourceContribution.jsx
- StationDataTable.jsx

---

### 2. **Researcher** 🔬

**Access Level**: Academic & Research Institutions

**Capabilities**:

- Access comprehensive historical data
- Perform advanced data analysis
- Generate research publications
- Track model performance metrics
- Export data for research purposes
- Collaborate with other researchers

**Dashboard Features**:

- Data visualization tools
- Model analytics panel
- Research findings tracker
- Publication management
- Custom export options

---

### 3. **NGO** 🌱

**Access Level**: Environmental & Social Organizations

**Capabilities**:

- Monitor community impact
- Manage volunteer networks
- Track campaign effectiveness
- Generate community reports
- Alert community members
- Plan intervention programs

**Dashboard Features**:

- Community report tracking
- Volunteer management interface
- Area coverage monitoring
- Campaign metrics dashboard
- Alert notification system

---

### 4. **Citizen** 👤

**Access Level**: General Public

**Capabilities**:

- Check personal AQI exposure
- Receive health recommendations
- Get real-time alerts
- Find nearby monitoring stations
- Access health tips
- Track personal air quality history

**Dashboard Features**:

- Personal AQI monitor
- Health recommendation engine
- Station locator
- Alert notification panel
- Quick action buttons

---

## 🚀 Installation & Setup

### **Prerequisites**

- Node.js 16+ and npm/yarn
- Python 3.8+
- MongoDB Atlas account (or local MongoDB)
- Git

### **Step 1: Clone the Repository**

```bash
git clone <repository-url>
cd project
```

### **Step 2: Install All Dependencies**

```bash
npm run install:all
```

This command will:

- Install frontend dependencies
- Install backend Python packages

#### **Or Install Separately:**

**Frontend Setup:**

```bash
cd frontend
npm install
```

**Backend Setup:**

```bash
cd backend
pip install -r requirements.txt
```

### **Step 3: Configure Environment Variables**

**Backend (.env file)**:

```env
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=your-secret-key
JWT_ALGORITHM=HS256
CORS_ORIGINS=["http://localhost:3000", "http://localhost:5173"]
```

**Frontend (.env.local)**:

```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_ENV=development
```

---

## 🎮 Running the Application

### **Option 1: Run Everything**

```bash
npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:8000

### **Option 2: Run Separately**

**Start Frontend:**

```bash
npm run dev:frontend
```

Frontend runs on: `http://localhost:3000`

**Start Backend:**

```bash
npm run dev:backend
```

Backend runs on: `http://localhost:8000`

### **Build for Production**

```bash
npm run build
```

### **Start Production Build**

```bash
npm start
```

---

## 📁 Project Structure

```
project/
│
├── 📄 package.json                 # Root package configuration
├── 📄 README.md                    # This file
├── 📄 IMPLEMENTATION_SUMMARY.md    # Implementation details
│
├── frontend/                       # React Frontend Application
│   ├── public/                     # Static assets
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/               # Authentication components
│   │   │   │   ├── LoginModal.jsx
│   │   │   │   └── SignupModal.jsx
│   │   │   │
│   │   │   ├── dashboards/         # Role-based dashboards
│   │   │   │   ├── CitizenDashboard.jsx
│   │   │   │   ├── NGODashboard.jsx
│   │   │   │   ├── ResearchDashboard.jsx
│   │   │   │   ├── PolicyDashboard/
│   │   │   │   │   ├── AIRecommendations.jsx
│   │   │   │   │   ├── AQIHeatMap.jsx
│   │   │   │   │   ├── ForecastingPanel.jsx
│   │   │   │   │   ├── PolicyEffectiveness.jsx
│   │   │   │   │   ├── SourceContribution.jsx
│   │   │   │   │   └── StationDataTable.jsx
│   │   │   │   └── SavedDashboardModal.jsx
│   │   │   │
│   │   │   ├── ui/                 # Reusable UI components (Radix)
│   │   │   │   ├── button.jsx
│   │   │   │   ├── card.jsx
│   │   │   │   ├── dialog.jsx
│   │   │   │   ├── dropdown-menu.jsx
│   │   │   │   ├── table.jsx
│   │   │   │   ├── tabs.jsx
│   │   │   │   └── ... (40+ components)
│   │   │   │
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AQISnapshot.jsx
│   │   │   ├── ProtectedRoute.jsx  # Route protection
│   │   │   └── ... (other components)
│   │   │
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx     # Global auth state
│   │   │
│   │   ├── hooks/
│   │   │   ├── use-toast.js        # Toast notifications
│   │   │   └── useSavedDashboards.js
│   │   │
│   │   ├── lib/
│   │   │   ├── pdfUtils.js         # PDF export utilities
│   │   │   ├── pdfUtils.test.js
│   │   │   └── utils.js            # Helper functions
│   │   │
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx     # Home page
│   │   │   ├── AuthPage.jsx        # Auth page
│   │   │   ├── TestPage.jsx
│   │   │   └── dashboards/
│   │   │
│   │   ├── mock/
│   │   │   └── mockData.js         # Demo data
│   │   │
│   │   ├── App.js                  # Main app with routing
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── craco.config.js
│   └── vercel.json                 # Vercel deployment config
│
└── backend/                        # FastAPI Backend Application
    ├── server.py                   # Main FastAPI application
    ├── requirements.txt            # Python dependencies
    └── [Additional backend modules]
```

---

## 🔧 Core Components

### **Authentication Flow**

```
User → Landing Page → Login Modal → Role Selection → Credential Input →
Authentication → Role-based Dashboard Routing → Protected Dashboard
```

### **Component Hierarchy**

```
App.js
├── Header.jsx
├── ProtectedRoute (for authenticated routes)
│   ├── PolicyDashboard.jsx
│   │   ├── AIRecommendations.jsx
│   │   ├── AQIHeatMap.jsx
│   │   ├── ForecastingPanel.jsx
│   │   ├── PolicyEffectiveness.jsx
│   │   ├── SourceContribution.jsx
│   │   └── StationDataTable.jsx
│   ├── ResearchDashboard.jsx
│   ├── NGODashboard.jsx
│   └── CitizenDashboard.jsx
├── LandingPage.jsx
│   ├── HeroSection.jsx
│   ├── CoreCapabilities.jsx
│   ├── AQISnapshot.jsx
│   ├── StakeholderSolutions.jsx
│   ├── CTASection.jsx
│   └── Footer.jsx
└── AuthPage.jsx
    ├── LoginModal.jsx
    └── SignupModal.jsx
```

---

## 🔐 Authentication & Security

### **Features**

- ✅ JWT-based token authentication
- ✅ Role-based access control (RBAC)
- ✅ Protected routes with ProtectedRoute component
- ✅ Secure password handling with Passlib
- ✅ CORS protection
- ✅ Input validation with Pydantic
- ✅ Session management

### **Authentication Flow**

1. User submits credentials and selects role
2. Backend validates credentials
3. JWT token generated and stored
4. Frontend stores token in context
5. Protected routes verify token
6. Automatic logout on token expiry

### **User Roles**

- `citizen` → Access to Citizen Dashboard
- `ngo` → Access to NGO Dashboard
- `researcher` → Access to Research Dashboard
- `policymaker` → Access to Policy Dashboard

---

## 📡 API Documentation

### **Base URL**

```
http://localhost:8000/api
```

### **Key Endpoints**

#### **Authentication**

- `POST /auth/login` - User login
- `POST /auth/signup` - User registration
- `POST /auth/logout` - User logout
- `GET /auth/verify` - Token verification

#### **Air Quality Data**

- `GET /aqi/current` - Current AQI data
- `GET /aqi/stations` - All monitoring stations
- `GET /aqi/station/{id}` - Station-specific data
- `GET /aqi/forecast` - AQI forecast

#### **Policy Recommendations**

- `GET /policy/recommendations` - AI recommendations
- `GET /policy/effectiveness` - Policy impact metrics

#### **Reports**

- `GET /reports/generate` - Generate report
- `POST /reports/save` - Save custom report

---

## 🧪 Testing

### **Run Tests**

```bash
# Backend tests
cd backend
pytest

# Frontend tests
cd frontend
npm test
```

### **Code Quality Checks**

```bash
cd backend

# Format code
black .

# Lint
flake8 .

# Type checking
mypy .

# Import sorting
isort .
```

---

## 📊 Data Visualization

The platform includes advanced visualization capabilities:

- **Interactive Charts**: Real-time data display using Chart.js
- **Heatmaps**: Geographical visualization of pollution zones
- **Trend Analysis**: Historical data analysis
- **Comparative Analytics**: Station-to-station comparisons
- **Custom Reports**: User-generated visualizations.

---

## 🌐 Deployment

### **Frontend Deployment (Vercel)**

```bash
cd frontend
npm run build
# Deploy to Vercel
```

### **Backend Deployment (Docker)**

```bash
docker build -t delhiair-backend .
docker run -p 8000:8000 delhiair-backend
```

---

## 🤝 Contributing

We welcome contributions! Here's how to contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### **Development Guidelines**

- Follow PEP 8 (Python) and Airbnb style guide (JavaScript)
- Write descriptive commit messages
- Add tests for new features
- Update documentation accordingly

---

## 📞 Support & Contact

For support, questions, or feedback:

- 📧 Email: support@delhiair.ai
- 🐛 Issues: Create an issue on GitHub
- 💬 Discussions: Join our community discussions

---

## 📜 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 🎉 Acknowledgments

- **Smart India Hackathon (SIH)** for the platform opportunity
- **Radix UI** for accessible component library
- **FastAPI** for the powerful backend framework
- **React** community for excellent tools and libraries
- **MongoDB** for flexible database solutions

---

## 📈 Project Statistics

- **Frontend Components**: 50+ UI components
- **Backend Endpoints**: 20+ REST APIs
- **Database Collections**: 10+ MongoDB collections
- **Supported User Roles**: 4 distinct roles
- **Dashboard Variations**: 4 role-specific dashboards
- **Real-time Data Feeds**: Multiple AQI monitoring stations

---

<div align="center">

**Made with ❤️ for a cleaner, healthier India**

_Last Updated: January 2026_

</div>

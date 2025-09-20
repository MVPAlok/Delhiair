import React from 'react';
import { FileText, MessageSquare, Users, AlertTriangle } from 'lucide-react';

const NGODashboard = () => {
  return (
    <div className="p-6 bg-white min-h-screen text-gray-600 pt-20">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Community Reports</h1>
          <button className="bg-green-600 px-4 py-2 rounded-full text-white shadow-sm hover:bg-green-700 transition-colors">
            + New Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            icon={<FileText className="text-yellow-600" />}
            title="Active Reports"
            value="24"
            description="8 need attention"
          />
          <StatsCard
            icon={<MessageSquare className="text-green-600" />}
            title="Community Feedback"
            value="156"
            description="Last 30 days"
          />
          <StatsCard
            icon={<Users className="text-teal-600" />}
            title="Volunteers"
            value="45"
            description="12 active now"
          />
          <StatsCard
            icon={<AlertTriangle className="text-gray-900" />}
            title="Critical Areas"
            value="5"
            description="2 new this week"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Recent Reports</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Industrial Emissions in East Delhi",
                    status: "Critical",
                    submissions: 34,
                    date: "2 hours ago"
                  },
                  {
                    title: "Construction Dust Control Measures",
                    status: "Ongoing",
                    submissions: 12,
                    date: "5 hours ago"
                  },
                  {
                    title: "Waste Burning Incidents",
                    status: "Resolved",
                    submissions: 8,
                    date: "1 day ago"
                  },
                  {
                    title: "Traffic Congestion Impact",
                    status: "Under Review",
                    submissions: 23,
                    date: "2 days ago"
                  }
                ].map((report, i) => (
                  <div key={i} className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h3 className="font-medium text-gray-900">{report.title}</h3>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className={`px-2 py-0.5 rounded-full ${report.status === 'Critical' ? 'bg-red-100 text-red-600' :
                              report.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-600' :
                                report.status === 'Resolved' ? 'bg-green-100 text-green-600' :
                                  'bg-teal-100 text-teal-600'
                            }`}>
                            {report.status}
                          </span>
                          <span className="text-gray-600">{report.submissions} submissions</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{report.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Area Coverage</h2>
              <div className="h-64 flex items-center justify-center border border-gray-200 rounded-lg">
                [Placeholder for Area Coverage Map]
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Active Volunteers</h2>
              <div className="space-y-3">
                {[
                  { name: "Priya Sharma", area: "North Delhi", reports: 12 },
                  { name: "Amit Kumar", area: "South Delhi", reports: 8 },
                  { name: "Sarah John", area: "East Delhi", reports: 15 },
                  { name: "Rajesh Verma", area: "West Delhi", reports: 10 }
                ].map((volunteer, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div>
                      <div className="font-medium text-gray-900">{volunteer.name}</div>
                      <div className="text-sm text-gray-600">{volunteer.area}</div>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-900">{volunteer.reports}</span>
                      <span className="text-gray-600 ml-1">reports</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-gray-900">
                  Submit Report
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-gray-900">
                  Assign Volunteer
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-gray-900">
                  Schedule Survey
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ icon, title, value, description }) => (
  <div className="bg-white rounded-xl p-6 hover:ring-1 hover:ring-gray-200 transition-all shadow-sm">
    <div className="flex items-center space-x-3 mb-3">
      {icon}
      <h3 className="font-medium text-gray-900">{title}</h3>
    </div>
    <div className="space-y-1">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  </div>
);

export default NGODashboard;
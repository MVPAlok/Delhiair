import React from 'react';
import { X, Star, ExternalLink } from 'lucide-react';

const SavedDashboardModal = ({ isOpen, onClose, savedDashboards, onRemove }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-dark-charcoal w-full max-w-2xl mx-4 rounded-2xl shadow-2xl border border-saffron/20 overflow-hidden">
        {/* Header with tri-color gradient */}
        <div className="relative h-2 bg-gradient-to-r from-saffron via-pure-white to-india-green" />
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-pure-white">Saved Dashboards</h2>
            <button
              onClick={onClose}
              className="text-light-gray hover:text-pure-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {savedDashboards.length === 0 ? (
            <div className="text-center py-8">
              <Star className="mx-auto mb-3 text-light-gray" size={32} />
              <p className="text-light-gray">No saved dashboards yet.</p>
              <p className="text-sm text-light-gray/80">Your saved dashboards will appear here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
              {savedDashboards.map((dashboard) => (
                <div
                  key={dashboard.id}
                  className="group bg-dark-gunmetal rounded-xl p-4 hover:ring-1 hover:ring-saffron/20 transition-all"
                >
                  <div className="relative">
                    {/* Preview Image */}
                    <div className="aspect-video rounded-lg overflow-hidden bg-dark-charcoal/50 mb-3">
                      <img
                        src={dashboard.preview || 'placeholder-image-url'}
                        alt={dashboard.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Quick Actions Overlay */}
                    <div className="absolute inset-0 bg-dark-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                      <button
                        onClick={() => window.open(dashboard.url, '_blank')}
                        className="p-2 rounded-full bg-india-green/20 text-india-green hover:bg-india-green/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </button>
                      <button
                        onClick={() => onRemove(dashboard.id)}
                        className="p-2 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Dashboard Info */}
                  <div className="space-y-1">
                    <h3 className="font-medium text-pure-white">{dashboard.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-light-gray">{dashboard.type}</span>
                      <span className="text-xs text-light-gray">{dashboard.savedAt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-saffron/20">
            <div className="text-sm text-light-gray">
              Pro Tip: Hover over a dashboard to see quick actions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedDashboardModal;
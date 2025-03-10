import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import ApplicationLayout from '@/components/ApplicationLayout';
import { useNavigate } from 'react-router-dom';

const SavedApplicationsPage = () => {
  const [applications, setApplications] = useState([
    {
      id: '3066',
      date: 'Jan 6, 2024',
      status: 'Paid',
      purchase: 'Monthly subscription',
      isSelected: false
    },
    // You can add more applications here for demonstration
  ]);
  const navigate = useNavigate()
  const [sortDirection, setSortDirection] = useState('asc');
  
  const toggleSelection = (id) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, isSelected: !app.isSelected } : app
    ));
  };
  
  const toggleAllSelection = () => {
    const allSelected = applications.every(app => app.isSelected);
    setApplications(applications.map(app => ({ ...app, isSelected: !allSelected })));
  };
  
  const toggleSort = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return (
   <ApplicationLayout>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Applications Table */}
        <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 border-b border-gray-200 bg-gray-50">
            <div className="col-span-1 p-4 flex items-center">
              <Checkbox 
                checked={applications.length > 0 && applications.every(app => app.isSelected)} 
                onCheckedChange={toggleAllSelection} 
              />
            </div>
            <div className="col-span-2 p-4 flex items-center text-sm font-medium text-gray-600">
              <span>Application No</span>
              <button onClick={toggleSort} className="ml-1">
                {sortDirection === 'asc' ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
              </button>
            </div>
            <div className="col-span-2 p-4 text-sm font-medium text-gray-600">Date</div>
            <div className="col-span-3 p-4 text-sm font-medium text-gray-600">Status</div>
            <div className="col-span-4 p-4 text-sm font-medium text-gray-600">Purchase</div>
          </div>

          {/* Table Rows */}
          {applications.map((app) => (
            <div key={app.id} className="grid grid-cols-12 border-b border-gray-200 hover:bg-gray-50">
              <div className="col-span-1 p-4 flex items-center">
                <Checkbox 
                  checked={app.isSelected} 
                  onCheckedChange={() => toggleSelection(app.id)} 
                />
              </div>
              <div className="col-span-2 p-4 text-sm">#{app.id}</div>
              <div className="col-span-2 p-4 text-sm">{app.date}</div>
              <div className="col-span-3 p-4">
                {app.status === 'Paid' && (
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Check size={12} className="mr-1" />
                    Paid
                  </div>
                )}
              </div>
              <div className="col-span-2 p-4 text-sm">{app.purchase}</div>
              <div className="col-span-2 p-2 flex space-x-2 justify-end">
                <Button 
                  variant="outline" 
                  onClick={()=> navigate('/application')}
                  className="text-sm border border-gray-200 cursor-pointer  "
                >
                  Resume Application
                </Button>
                <Button 
                  variant="outline" 
                  className="text-sm bg-red-400 border-none cursor-pointer   text-white "
                >
                <Trash2 />  Delete
                </Button>
              </div>
            </div>
          ))}
          
          {/* Empty State - Show when no applications */}
          {applications.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-gray-500">No saved applications found.</p>
            </div>
          )}
        </div>
      </main>
      </ApplicationLayout>
  );
};

export default SavedApplicationsPage;
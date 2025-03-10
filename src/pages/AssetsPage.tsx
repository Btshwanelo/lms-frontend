// AssetsPage.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { updateAssetInfo } from '../features/loanApplication/loanApplicationSlice';
import { 
  Card, 
  CardContent,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Info, X } from 'lucide-react';
import ApplicationLayout from '@/components/ApplicationLayout';

const AssetsPage = () => {
  const dispatch = useDispatch();
//   const assetInfo = useSelector((state) => state.loanApplication.assetInfo);

//   const handleInputChange = (field, value) => {
//     dispatch(updateAssetInfo({ [field]: value }));
//   };

  const handleNext = () => {
    // Navigate to next page
    console.log('Navigating to next page...');
  };

  const handlePrevious = () => {
    // Navigate to previous page
    console.log('Navigating to previous page...');
  };

  const handleSaveAndExit = () => {
    // Save and exit logic
    console.log('Saving and exiting...');
  };

  const tabItems = [
    { id: 'personal', label: 'Personal details', active: false },
    { id: 'qualification', label: 'Qualification', active: false },
    { id: 'financial', label: 'Financial History', active: false },
    { id: 'assets', label: 'Assets', active: true },
    { id: 'income', label: 'Income details', active: false },
    { id: 'offer', label: 'Offer', active: false },
    { id: 'selfie', label: 'Selfie Verification', active: false },
  ];

  return (
  <ApplicationLayout>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* First Card - Title and Tabs */}
        <Card className="mb-4 shadow-sm border-0 bg-white">
          <CardContent className="p-0">
            <div className="flex justify-between items-center px-6 pt-6 pb-2">
              <h2 className="text-3xl font-semibold">Assets</h2>
              <Button 
                variant="outline" 
                className="border border-cyan-500 text-cyan-500 hover:bg-cyan-50"
                onClick={handleSaveAndExit}
              >
                Save & Exit
              </Button>
            </div>
            <div className="flex justify-between items-center px-6 pt-6 pb-2">


            <h2 className='font-normal text-[#475467]'>Manage your team members and their account permissions here.</h2>
            </div>
            {/* Tabs */}
            <div className="flex overflow-x-auto mt-4 gap-2  px-6">
              {tabItems.map((tab) => (
                <div
                  key={tab.id}
                  className={`
                    px-6 py-2 pb-3  border-t-4 flex-shrink-0 text-sm text-[#344054] font-semibold 
                    ${tab.active 
                      ? ' border-[#095C37] font-medium' 
                      : 'border-[#E4E7EC] text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {tab.label}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Second Card - Form Content */}
        <Card className="mb-4 shadow-sm border-0 bg-white">
          <CardContent className="p-0">
            <div className="bg-[#F9FAFB] py-4 px-6 mb-6">
              <h3 className="text-lg font-semibold text-center">Personal and Business Assets</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-12">
              {/* Asset Type */}
              <div>
                <div className="mb-1 flex items-center">
                  <label className="block text-sm font-medium text-gray-700">
                    Asset Type <span className="text-red-500">*</span>
                  </label>
                  <button className="ml-1 text-gray-400">
                    <Info size={16} />
                  </button>
                </div>
                <Select defaultValue="Vehicle">
                  <SelectTrigger className="w-full bg-white border-gray-300">
                    <SelectValue placeholder="Select Asset Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Vehicle">Vehicle</SelectItem>
                    <SelectItem value="Property">Property</SelectItem>
                    <SelectItem value="Investment">Investment</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Asset Category */}
              <div>
                <div className="mb-1 flex items-center">
                  <label className="block text-sm font-medium text-gray-700">
                    Asset Category <span className="text-red-500">*</span>
                  </label>
                  <button className="ml-1 text-gray-400">
                    <Info size={16} />
                  </button>
                </div>
                <Select defaultValue="Personal">
                  <SelectTrigger className="w-full bg-white border-gray-300">
                    <SelectValue placeholder="Select Asset Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Personal">Personal</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Asset Name */}
              <div>
                <div className="mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Asset Name <span className="text-red-500">*</span>
                  </label>
                </div>
                <Input 
                  type="text" 
                  className="border-gray-300"
                  placeholder="Asset Name"
                  defaultValue="Audi A3"
                />
              </div>

              {/* Asset Address */}
              <div>
                <div className="mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Asset Address <span className="text-red-500">*</span>
                  </label>
                </div>
                <Input 
                  type="text"
                  className="border-gray-300"
                  placeholder="Asset Address"
                  defaultValue="12 Invicta Road"
                />
              </div>

              {/* Asset Tel No */}
              <div>
                <div className="mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Asset Tel No <span className="text-red-500">*</span>
                  </label>
                </div>
                <Input 
                  type="text"
                  className="border-gray-300"
                  placeholder="Enter telephone number"
                />
              </div>

              {/* Asset Location */}
              <div>
                <div className="mb-1 flex items-center">
                  <label className="block text-sm font-medium text-gray-700">
                    Asset Location <span className="text-red-500">*</span>
                  </label>
                  <button className="ml-1 text-gray-400">
                    <Info size={16} />
                  </button>
                </div>
                <Select defaultValue="Urban">
                  <SelectTrigger className="w-full bg-white border-gray-300">
                    <SelectValue placeholder="Select Asset Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Urban">Urban</SelectItem>
                    <SelectItem value="Rural">Rural</SelectItem>
                    <SelectItem value="Suburban">Suburban</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between rounded-lg bg-white px-16 py-6">
          <Button 
            variant="outline" 
            onClick={handlePrevious} 
            className="border-gray-300 text-gray-700 flex items-center px-6"
          >
            <ChevronLeft size={18} className="mr-2" /> 
            Previous
          </Button>
          <Button 
            onClick={handleNext} 
            className="bg-sky-500 hover:bg-sky-600 text-white flex items-center px-6"
          >
            Next 
            <ChevronRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      </ApplicationLayout>
  );
};

export default AssetsPage;
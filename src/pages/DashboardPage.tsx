// Dashboard.jsx
import { useState } from 'react';
import { Bell, ChevronRight, Info, Search, X } from 'lucide-react';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [showFundingNotice, setShowFundingNotice] = useState(true);
const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-18 bg-white  rounded-lg">
        {/* Funding Notice */}
        {showFundingNotice && (
          <div className="bg-white p-4 rounded-md border-b border-gray-100 mb-6 flex items-center justify-between">
            <div className="flex items-start md:items-center">
              <div className="p-2 bg-gray-100 rounded-full mr-4">
                <Info size={20} className="text-gray-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">You may qualify for additional funding</h3>
                <p className="text-gray-600 text-sm">based on your performance and repayment track record, your profile may be eligible for additional funding</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="border border-gray-300 px-4 py-2 rounded-md text-sm">Learn more</button>
              <button onClick={()=> navigate('/start-application')} className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">Apply</button>
              <button onClick={() => setShowFundingNotice(false)} className="p-1">
                <X size={18} className="text-gray-500" />
              </button>
            </div>
          </div>
        )}

        {/* Welcome Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome Back, <span className="text-gray-800">Thandiwe</span></h1>
            <p className="text-gray-600">Manage your loan account here.</p>
          </div>
          <div className="w-full max-w-xs">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Account Details and Transactions */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Account Details Column */}
          <div className="w-full md:w-1/3 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Account Details</h2>
              <div className="bg-white p-4 rounded-md border border-gray-200 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-yellow-500">📄</span>
                    </div>
                    <span className="font-medium">Loan Account • 109826637</span>
                  </div>
                  <button>⋮</button>
                </div>
                <div className="mb-4">
                  <h3 className="text-3xl font-bold">R 1050000</h3>
                  <p className="text-gray-600">Outstanding</p>
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-gray-500">Installment Amount</p>
                    <p className="font-medium">R16666.67</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Payment date</p>
                    <p className="font-medium">30th</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Features</h2>
              <div className="space-y-2">
                <div className="bg-white p-4 rounded-md border border-gray-200 flex justify-between items-center">
                  <span className="text-gray-700">Log a case</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-200 flex justify-between items-center">
                  <span className="text-gray-700">Account Details</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-200 flex justify-between items-center">
                  <span className="text-gray-700">Statement and Documents</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Transactions Column */}
          <div className="w-full md:w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Transactions</h2>
              <a href="#" className="text-blue-500 flex items-center">
                Statements <ChevronRight size={16} />
              </a>
            </div>
            
            <Tabs defaultValue="all">
              <TabsList className="mb-4 border-b border-gray-200  justify-start">
                <TabsTrigger value="all" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none min-w-28 pb-2">All transactions</TabsTrigger>
                <TabsTrigger value="failed" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none min-w-28 pb-2">failed</TabsTrigger>
                <TabsTrigger value="once-off" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none min-w-28 pb-2">Once-off</TabsTrigger>
              </TabsList>
              
              <div className="bg-white rounded-md border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="w-12 p-4 text-left">
                        <input type="checkbox" className="rounded" />
                      </th>
                      <th className="p-4 text-left font-medium text-gray-600">Date</th>
                      <th className="p-4 text-left font-medium text-gray-600">
                        Description <span>↓</span>
                      </th>
                      <th className="p-4 text-right font-medium text-gray-600">
                        Amount <Info size={14} className="inline ml-1" />
                      </th>
                      <th className="p-4 text-right font-medium text-gray-600">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="p-4">30/09/2024</td>
                      <td className="p-4">Repayment dbt order</td>
                      <td className="p-4 text-right text-green-600">16666.67</td>
                      <td className="p-4 text-right">1050000</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="p-4">31/10/2024</td>
                      <td className="p-4">Repayment dbt order</td>
                      <td className="p-4 text-right text-green-600">16666.67</td>
                      <td className="p-4 text-right">1050000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
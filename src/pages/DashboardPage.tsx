// DashboardPage.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ChevronRight, 
  Info, 
  User, 
  Search, 
  CreditCard, 
  ChevronDown,
  X,
  HelpCircle,
} from 'lucide-react';

const DashboardPage = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white py-4 px-6 border-b flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="text-cyan-500 font-bold flex items-center">
            <span className="mr-1 font-semibold">RH</span>
            <span className="font-semibold">Services</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
              Products
              <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
              Cases
              <ChevronDown size={16} className="ml-1" />
            </a>
          </nav>
          
          <Button className="border border-cyan-500 text-cyan-500 bg-white hover:bg-cyan-50">
            Apply
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="rounded-full bg-gray-100 p-2">
              <User size={20} className="text-gray-600" />
            </div>
            <div className="ml-2 hidden md:block">
              <p className="text-sm font-medium">Thandiwe</p>
              <p className="text-xs text-gray-500">thandiwe.nkosi@gmail.com</p>
            </div>
          </div>
        </div>
      </header>

      {/* Notification Banner */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-start">
            <Info size={20} className="text-gray-500 mt-1 mr-2" />
            <div>
              <p className="font-medium text-gray-800">You may qualify for additional funding</p>
              <p className="text-gray-600 text-sm">based on your performance and repayment track record, your profile may be eligible for additional funding</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="rounded-md text-sm">
              Learn more
            </Button>
            <Button className="rounded-md bg-sky-500 hover:bg-sky-600 text-white text-sm">
              Apply
            </Button>
            <button className="text-gray-400 hover:text-gray-700">
              <X size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome Back, <span className="text-gray-800">Thandiwe</span></h1>
            <p className="text-gray-600">Manage your loan account here.</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              type="text" 
              placeholder="Search" 
              className="pl-10 w-64 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Account Details */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-gray-800">Account Details</h2>
            
            <Card className="shadow-sm">
              <CardContent className="p-0">
                <div className="p-4 flex justify-between items-center border-b">
                  <div className="flex items-center">
                    <div className="bg-yellow-100 p-2 rounded">
                      <CreditCard className="text-yellow-600" size={20} />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-800">Loan Account • 109826637</p>
                    </div>
                  </div>
                  <button className="text-gray-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="6" r="2" fill="currentColor"/>
                      <circle cx="12" cy="12" r="2" fill="currentColor"/>
                      <circle cx="12" cy="18" r="2" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-gray-900">R 1050000</h3>
                  <p className="text-gray-600">Outstanding</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between items-center p-4 border-t border-b">
              <div>
                <p className="text-gray-600 text-sm">Installment Amount</p>
                <p className="text-gray-900 font-medium">R16666.67</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Payment date</p>
                <p className="text-gray-900 font-medium">30th</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Features</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer rounded">
                  <p className="text-gray-800">Log a case</p>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
                
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer rounded">
                  <p className="text-gray-800">Account Details</p>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
                
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer rounded">
                  <p className="text-gray-800">Statement and Documents</p>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Columns - Transactions */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Transactions</h2>
              <a href="#" className="text-sky-500 hover:text-sky-600 flex items-center">
                Statements
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            <Card className="shadow-sm">
              <CardContent className="p-0">
                {/* Transaction Tabs */}
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid grid-cols-3 max-w-md border-b rounded-none bg-white h-auto">
                    <TabsTrigger 
                      value="all" 
                      className={`data-[state=active]:border-b-2 data-[state=active]:border-sky-500 data-[state=active]:text-sky-600 py-3 font-normal`}
                    >
                      All transactions
                    </TabsTrigger>
                    <TabsTrigger 
                      value="failed" 
                      className={`data-[state=active]:border-b-2 data-[state=active]:border-sky-500 data-[state=active]:text-sky-600 py-3 font-normal`}
                    >
                      failed
                    </TabsTrigger>
                    <TabsTrigger 
                      value="once-off" 
                      className={`data-[state=active]:border-b-2 data-[state=active]:border-sky-500 data-[state=active]:text-sky-600 py-3 font-normal`}
                    >
                      Once-off
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                {/* Transactions Table */}
                <table className="w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th className="w-10 p-4 text-left">
                        <input type="checkbox" className="rounded text-sky-500" />
                      </th>
                      <th className="p-4 text-left text-gray-600 font-medium text-sm">Date</th>
                      <th className="p-4 text-left text-gray-600 font-medium text-sm flex items-center">
                        Description
                        <ChevronDown size={14} className="ml-1" />
                      </th>
                      <th className="p-4 text-right text-gray-600 font-medium text-sm flex items-center justify-end">
                        Amount
                        <HelpCircle size={14} className="ml-1 text-gray-400" />
                      </th>
                      <th className="p-4 text-right text-gray-600 font-medium text-sm">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <input type="checkbox" className="rounded text-sky-500" />
                      </td>
                      <td className="p-4 text-gray-800">30/09/2024</td>
                      <td className="p-4 text-gray-800">Repayment dbt order</td>
                      <td className="p-4 text-right text-green-600 font-medium">16666.67</td>
                      <td className="p-4 text-right text-gray-800">1050000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <input type="checkbox" className="rounded text-sky-500" />
                      </td>
                      <td className="p-4 text-gray-800">31/10/2024</td>
                      <td className="p-4 text-gray-800">Repayment dbt order</td>
                      <td className="p-4 text-right text-green-600 font-medium">16666.67</td>
                      <td className="p-4 text-right text-gray-800">1050000</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
import React from 'react';
import { Truck } from 'lucide-react';



export interface Driver {
    id: string;
    name: string;
    address: string;
    amount: string;
    phone:string
}

interface RoadTrackerProps {
  road: {
    id: number;
    from: string;
    to: string;
    status: 'in-transit' | 'completed' | 'delayed';
    progress: number;
    driver:Driver
    
  };
}

export function RoadTracker({ road }: RoadTrackerProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm  h-fit  flex flex-col gap-10 justify-center ">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-8 flex-1">
          <div className="w-32">
            <p className="text-sm text-gray-500">From</p>
            <h3 className="text-xl font-semibold">{road.from}</h3>
          </div>

          <div className="flex-1 relative">
            {/* Progress line */}
            <div className="h-1 bg-gray-200 absolute left-0 right-0 top-1/2 -translate-y-1/2">
              <div 
                className={`h-full transition-all duration-500 relative ${
                  road.status === 'completed' ? 'bg-green-500' :
                  road.status === 'delayed' ? 'bg-red-500' :
                  'bg-blue-500'
                }`}
                style={{ width: `${Math.min(road.progress, 100)}%` }}
              />
            </div>

            {/* Truck icon */}
            <div 
              className="absolute top-1/2 transition-all duration-500"
              style={{ 
                left: `${Math.min(road.progress, 100)}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className={`p-2 rounded-full ${
                road.status === 'completed' ? 'bg-green-100' :
                road.status === 'delayed' ? 'bg-red-100' :
                'bg-blue-100'
              }`}>
                <Truck 
                  size={24} 
                  className={
                    road.status === 'completed' ? 'text-green-600' :
                    road.status === 'delayed' ? 'text-red-600' :
                    'text-blue-600'
                  }
                />
              </div>
            </div>

            {/* Percentage text */}
            <div 
              className="absolute top-1/2 transition-all duration-500"
              style={{ 
                left: `${Math.min(road.progress, 100)}%`,
                transform: 'translate(-50%, -150%)'
              }}
            >
              <div className="bg-white px-2 py-1 rounded-md shadow-sm">
                <span className={`text-xs font-medium ${
                  road.status === 'completed' ? 'text-green-600' :
                  road.status === 'delayed' ? 'text-red-600' :
                  'text-blue-600'
                }`}>
                  {Math.min(Math.round(road.progress), 100)}%
                </span>
              </div>
            </div>
          </div>

          <div className="w-32">
            <p className="text-sm text-gray-500">To</p>
            <h3 className="text-xl font-semibold">{road.to}</h3>
          </div>
        </div>

      </div>
                <section  className='flex justify-start space-x-3'>
      <div className={`px-3 py-1 rounded-full text-sm font-medium  ${
          road.status === 'completed' ? 'bg-green-100 text-green-800' :
          road.status === 'delayed' ? 'bg-red-100 text-red-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {road.status === 'in-transit' ? 'In Transit' :
           road.status === 'completed' ? 'Completed' :
           'Delayed'}
        </div>
        <div className='px-3 py-1 rounded-full text-sm font-medium bg-gray-100'>
            {road?.driver?.name}
        </div>
        <div className='px-3 py-1 rounded-full text-sm font-medium bg-gray-100'>
            {road?.driver?.address}
        </div>
        <div className='px-3 py-1 rounded-full text-sm font-medium bg-gray-100'>
            {road?.driver?.amount}
        </div>
        <div className='px-3 py-1 rounded-full text-sm font-medium bg-gray-100'>
        {road?.driver?.phone}

        </div>
        </section>
    </div>
  );
}
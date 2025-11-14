import { ArrowUpDown, Filter, Ship } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ShipmentHeader } from '../shipment-header';
import { Button } from '@/components/ui/button';

interface Driver {
    id: string;
    name: string;
    status: 'done' | 'in-progress' | 'pending' | 'fail';
    address: string;
    amount: string;
}

const Drivers = () => {
    const drivers: Driver[] = [
        {
            id: '1',
            name: 'Ahmed Mohammed',
            status: 'done',
            address: 'Riyadh, Saudi Arabia',
            amount: '500 SAR'
        },
        {
            id: '2',
            name: 'Khalid Abdullah',
            status: 'in-progress',
            address: 'Jeddah, Saudi Arabia',
            amount: '750 SAR'
        },{
                id: '3',
                name: 'Mohammed Ali',
                status: 'pending',
                address: 'Dammam, Saudi Arabia',
                amount: '600 SAR'
            }
        ];

        return (
             <main>
                 <div className={`p-6`}>
      <div className={`flex items-center justify-between mb-6`}>
        <h3 className="text-xl font-semibold">Road</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-[33px]" size="sm">
            <ArrowUpDown className="h-4 w-4 ml-4 mr-8" />
            <p className="px-4">
              Sort
            </p>
          </Button>
          <Button variant="outline" className="h-[33px]" size="sm">
            <Filter className="h-4 w-4 ml-4 mr-8" />
            <p className="px-4">
              Add filter
            </p>
          </Button>
        </div>
      </div>

                <ShipmentHeader title="Drivers" />
              <section className='space-y-6'>
              {drivers.map((driver) => (
          <div key={driver.id} className="border rounded-lg p-6 bg-white flex items-center gap-6">
            <div className="w-max h-24 border rounded-lg flex items-center justify-center">
              <Image
              alt=""
              src="/Frame.svg"
                width={146}
                height={108}
              >
                </Image>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{driver.name}</h4>
                  <p className="text-sm text-gray-500">{driver.id}</p>
                </div>
                <Badge
                  variant={
                    driver.status === "done" ? "success" : driver.status === "in-progress" ? "default" : "warning"
                  }
                  className={`capitalize text-white font-bold text-lg px-8 py-4
                    ${driver.status === "done" && "bg-green-500"}
                    ${driver.status === "fail" && "bg-red-500"}
                     ${driver.status === "pending" && "bg-blue-500"}
                    ${driver.status === "in-progress" && "bg-yellow-500"}`}
                >
                  {driver.status}
                </Badge>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{driver.address}</p>
                <p className="font-semibold mt-1">{driver.amount}</p>
              </div>
            </div>
          </div>
        ))}
              </section>
             </div>
             </main>

    );
    }
    export default Drivers;


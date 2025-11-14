import { ArrowUpDown, Filter, Ship } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ShipmentHeader } from '../shipment-header';
import { Button } from '@/components/ui/button';

interface Truck {
    id: string;
    name: string;
    status: 'Good' | 'need checking' | 'broken down' ;
    mark: string;
    year: string;
}

const Drivers = () => {
    const trucks: Truck[] = [
        {
            id: 'TRK-001',
            name: 'Mercedes-Benz Actros',
            status: 'Good',
            mark: 'Jeddah Port',
            year: '2021'
        },
        {
            id: 'TRK-002',
            name: 'Volvo FH16',
            status: 'need checking',
            mark: 'Dammam Port',
            year: '2019'
        },
        {
            id: 'TRK-003',
            name: 'MAN TGX',
            status: 'broken down',
            mark: 'Riyadh Logistics',
            year: '2020'
        },
        {
            id: 'TRK-004',
            name: 'Scania R730',
            status: 'Good',
            mark: 'Yanbu Port',
            year: '2022'
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
              {trucks.map((driver) => (
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
                    driver.status === "Good" ? "success" : driver.status === "need checking" ? "default" : "warning"
                  }
                  className={`capitalize text-white font-bold text-lg px-8 py-4
                    ${driver.status === "Good" && "bg-green-500"}
                    ${driver.status === "broken down" && "bg-red-500"}
                    ${driver.status === "need checking" && "bg-yellow-500"}`}
                >
                  {driver.status}
                </Badge>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{driver.mark}</p>
                <p className="font-semibold mt-1">{driver.year}</p>
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


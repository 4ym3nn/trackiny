import { ShipmentHeader } from "../shipment-header";
import { BillingHeader } from "./components/billingHeader";
import BillingTable from "./components/billingTable";
import { CardItem } from "./components/card";

interface Props {
    label: string;
    price: number;
    analyse: {
        description: string;
        percentage: number;
    }
}

const billingData: Props[] = [
    {
        label: "Monthly Subscription",
        price: 99.99,
        analyse: {
            description: "the last month",
            percentage: 90
        }
    },
    {
        label: "Annual Subscription",
        price: 999.99,
        analyse: {
            description: "the last year",
            percentage: -20
        }
    },
    {
        label: "daily  Subscription",
        price: 999.99,
        analyse: {
            description: "the last day",
            percentage: -30
        }
    }
];

const BillingsPage = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center w-full ">
            <section className="flex flex-col gap-6 justify-start w-full">
                <ShipmentHeader title="Billing" />
                <section className="flex justify-start items-center m-10 ">
                    <h1 className="font-bold text-2xl">Billings </h1>
                </section>
            </section>
            <hr className="w-full " />

            <ul className="flex flex-wrap gap-40 justify-center items-center ">
                {
                    billingData.map((infos, index) => {
                        return (
                            <li key={index}>
                                <CardItem data={infos} />
                            </li>
                        );
                    })

                }

            </ul>
            <BillingTable />


        </div>
    );
}

export default BillingsPage;
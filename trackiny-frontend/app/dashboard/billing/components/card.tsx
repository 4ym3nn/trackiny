'use client'
import { set } from "firebase/database";
import { use, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface props {
    label: string;
    price: number;
    analyse: {
        description: string;
        percentage: number;
    }
    }


export const CardItem = ({data}:{data:props}) => {
    
        const [color, setColor] = useState("");

        useEffect(() => {
            setColor(data.analyse.percentage > 0 ? "text-green-500" : "text-red-500");
        }
        , [data.analyse.percentage]);



    return (
        <Card className="flex flex-col  ">
        <CardContent className=" w-[382px] h-[157px] bg-white rounded-2xl shadow-md">
            <h1 className="text-black text-xl font-normal ">{data.label}</h1>
            <h2 className="font-bold text-5xl">{data.price}DA</h2>
            <p className={`text-xl ${color}  font-bold` }> {`${data.analyse.percentage}% ${data.analyse.description}`}</p>
        </CardContent>
        </Card>
    );
    }
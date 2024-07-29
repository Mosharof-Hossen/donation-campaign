
import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { getStorageCart } from "../../Utilitis/LocalStorage";



const COLORS = ["#00C49F", "#FF444A"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,

}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
export default function Statistics() {
    const [yourDonation, setYourDonation] = useState([]);

    useEffect(() => {
        const donation = getStorageCart();
        setYourDonation(donation)
    }, [])
    const data = [
        { name: "Your Donation", value: yourDonation.length },
        { name: "Total Donation", value: 12 - yourDonation.length },
    ];
    return (
        <div className="flex justify-center flex-col items-center">
            <PieChart width={500} height={500}>
                <Pie
                    data={data}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={200}
                    fill="#FF444A"
                    dataKey="value"
                    color={COLORS}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <p>Your Donation <span className='bg-[#00C49F] px-9 mx-3 rounded'></span> Total Donation <span className='bg-[#FF444A] px-9 mx-3 rounded'></span></p>
        </div>
    );
}

import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: 'Week 1', value: 120 },
    { name: 'Week 2', value: 400 },
    { name: 'Week 3', value: 250 },
    { name: 'Week 4', value: 600 },
    { name: 'Week 5', value: 500 },
];

const SocialTrafficChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorSocial" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Tooltip
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#10b981"
                    strokeWidth={4}
                    fillOpacity={1}
                    fill="url(#colorSocial)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default SocialTrafficChart;

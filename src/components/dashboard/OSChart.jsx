import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: 'Windows', value: 450 },
    { name: 'macOS', value: 300 },
    { name: 'Linux', value: 100 },
    { name: 'Android', value: 50 },
];

const COLORS = ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0'];

const OSChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Tooltip
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Pie
                    data={data}
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={8} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default OSChart;

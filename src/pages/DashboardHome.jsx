import StatCard from "../components/dashboard/StatCard";
import ChartCard from "../components/dashboard/ChartCard";
import TrafficChart from "../components/dashboard/TrafficChart";
import VisitorsPie from "../components/dashboard/VisitorsPie";
import OSChart from "../components/dashboard/OSChart";
import SocialTrafficChart from "../components/dashboard/SocialTrafficChart";

const DashboardHome = () => {
    return (
        <div className="space-y-8 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Traffic"
                    value="59,845"
                    change="+12.4%"
                    color="indigo"
                    icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                />
                <StatCard
                    title="Facebook"
                    value="14,365"
                    change="+8.2%"
                    color="blue"
                    icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                />
                <StatCard
                    title="Pinterest"
                    value="18,023"
                    change="-2.1%"
                    color="red"
                    icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                />
                <StatCard
                    title="Organic"
                    value="27,457"
                    change="+14.5%"
                    color="emerald"
                    icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                    <ChartCard title="Dynamic Traffic Analysis">
                        <TrafficChart />
                    </ChartCard>
                </div>
                <ChartCard title="Visitors by Area">
                    <VisitorsPie />
                </ChartCard>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <ChartCard title="Platform Distribution">
                    <OSChart />
                </ChartCard>
                <ChartCard title="Engagement Trends">
                    <SocialTrafficChart />
                </ChartCard>
            </div>
        </div>
    );
};

export default DashboardHome;

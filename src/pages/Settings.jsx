import PageContainer from "../components/common/PageContainer";

const Settings = () => {
    return (
        <PageContainer>
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">System Configuration</h1>
                <p className="text-gray-500 font-medium">Fine-tune your dashboard preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass shadow-premium p-10 rounded-[2.5rem] border border-white/40">
                        <h3 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                            <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            General Branding
                        </h3>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-1">Dashboard Identifier</label>
                                    <input
                                        className="px-5 py-3.5 rounded-2xl bg-white border border-gray-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none shadow-sm transition-all font-medium"
                                        defaultValue="PixelAdmin"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-1">Primary Support Canal</label>
                                    <input
                                        className="px-5 py-3.5 rounded-2xl bg-white border border-gray-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none shadow-sm transition-all font-medium"
                                        defaultValue="support@pixeladmin.io"
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <button className="px-8 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-500/20 transition-all">
                                    Synchronize Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="glass shadow-premium p-10 rounded-[2.5rem] border border-red-50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 -mr-16 -mt-16 rounded-full blur-3xl" />

                        <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-3 relative z-10">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            Critical Actions
                        </h3>

                        <p className="text-gray-500 text-sm font-medium mb-8 relative z-10">
                            Performing these actions will permanently reset historical metrics. Proceed with extreme caution.
                        </p>

                        <button className="w-full py-4 bg-white border-2 border-red-100 text-red-600 rounded-2xl font-black uppercase tracking-widest hover:bg-red-50 transition-all relative z-10">
                            Hard Reset Metrics
                        </button>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default Settings;

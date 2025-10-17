const LoadingPage = () => {
    return (
        <div className="h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
            {/* Animated background circles */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>

            <div className="text-center relative z-10">
                {/* Logo with pulse effect */}
                <div className="mb-12">
                    <div className="inline-block relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                        <div className="relative bg-white rounded-2xl px-8 py-6 shadow-xl">
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Digital Wallet
                            </h1>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 font-medium">E-Wallet & Payment Gateway</p>
                </div>

                {/* Multi-layer Loading Spinner */}
                <div className="relative w-24 h-24 mx-auto mb-8">
                    {/* Outer ring */}
                    <div className="absolute inset-0 border-4 border-gray-200 rounded-full opacity-30"></div>
                    
                    {/* Middle ring */}
                    <div className="absolute inset-2 border-4 border-transparent border-t-purple-500 border-r-purple-500 rounded-full animate-spin"></div>
                    
                    {/* Inner ring */}
                    <div className="absolute inset-4 border-4 border-transparent border-b-pink-500 border-l-pink-500 rounded-full animate-spin" style={{ animationDuration: '0.6s' }}></div>
                    
                    {/* Center dot pulse */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping"></div>
                        <div className="absolute w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                </div>

                {/* Loading Text with dots animation */}
                <div className="flex items-center justify-center gap-2 text-gray-700 font-medium">
                    <span>Loading your experience</span>
                    <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="mt-8 w-64 mx-auto">
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
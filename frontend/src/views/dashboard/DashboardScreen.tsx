export function DashboardScreen() {
    const username = "John Doe"; // in real app, you'd get this from context, props, or API

    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen px-4 text-black">
                <div className="w-full max-w-2xl">
                    <div className="bg-white p-8 shadow-lg rounded-lg text-center">
                        <h1 className="text-3xl font-bold mb-4">
                            Welcome, {username}! 👋
                        </h1>
                        <p className="text-gray-600 mb-6">
                            You are now logged in to your dashboard.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

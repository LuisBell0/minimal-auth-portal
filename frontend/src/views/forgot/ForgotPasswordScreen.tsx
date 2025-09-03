import { Link } from "react-router-dom";

export function ForgotPassword() {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen px-4 text-black">
                <div className="w-full max-w-md">
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <div className="text-center mb-4">
                            <h1 className="text-3xl font-bold">Forgot Password</h1>
                            <p className="text-gray-600 text-sm mt-2">
                                Enter your email and we’ll send you reset instructions
                            </p>
                        </div>
                        <form>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-2 border rounded-md border-black"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    className="w-full bg-green-500 text-white py-2 rounded-md cursor-pointer"
                                    type="submit"
                                    value="Send Reset Link"
                                />
                            </div>
                            <p className="text-center">
                                Remember your password?
                                <Link to="/login" className="ml-1 text-blue-600">
                                    Back to Login
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

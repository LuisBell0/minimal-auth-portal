import { Link } from "react-router-dom";

export function ResetPasswordScreen() {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen px-4 text-black">
                <div className="w-full max-w-md">
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <div className="text-center mb-4">
                            <h1 className="text-3xl font-bold">Reset Password</h1>
                            <p className="text-gray-600 text-sm mt-2">
                                Enter your new password below
                            </p>
                        </div>
                        <form>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    name="new_password"
                                    className="w-full p-2 border rounded-md border-black"
                                    placeholder="New Password"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    name="confirm_password"
                                    className="w-full p-2 border rounded-md border-black"
                                    placeholder="Confirm New Password"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    className="w-full bg-green-500 text-white py-2 rounded-md cursor-pointer"
                                    type="submit"
                                    value="Reset Password"
                                />
                            </div>
                            <p className="text-center">
                                Remembered your password?
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

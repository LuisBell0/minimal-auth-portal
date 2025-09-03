import { Link } from "react-router-dom";

export function ActivateAccountScreen() {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen px-4 text-black">
                <div className="w-full max-w-md">
                    <div className="bg-white p-8 shadow-lg rounded-lg text-center">
                        <h1 className="text-3xl font-bold mb-4">Account Activated 🎉</h1>
                        <p className="text-gray-600 mb-6">
                            Your email has been successfully verified. You can now log in to your account.
                        </p>
                        <Link
                            to="/login"
                            className="block w-full bg-green-500 !no-underline !text-white py-2 rounded-md cursor-pointer"
                        >
                            Go to Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

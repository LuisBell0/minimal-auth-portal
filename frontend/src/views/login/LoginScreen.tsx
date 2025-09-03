import { Link } from "react-router-dom";

export function LoginScreen() {
    return(
        <>
            <div className="flex flex-col justify-center items-center min-h-screen px-4 text-black">
                <div className="w-full max-w-md">
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <div className="text-center mb-4">
                            <h1 className="text-4xl font-bold">Minimal Auth Portal</h1>
                        </div>
                        <form>
                            <div className="mb-3">
                                <input
                                type="text"
                                name="username"
                                className="w-full p-2 border rounded-md border-black"
                                placeholder="Username or Email"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                name="password"
                                type="password"
                                className="w-full p-2 border rounded-md border-black"
                                placeholder="Password"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                className="w-full bg-green-500 text-white py-2 rounded-md cursor-pointer"
                                type="submit"
                                value="Log In"
                                />
                            </div>
                            <p className="text-center">
                                Forgot Password?
                                <Link to="/forgot" className=""> Click here</Link>
                            </p>
                            <p className="text-center">
                                Don't have an account?
                                <Link to="/signup"> Sign Up Here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
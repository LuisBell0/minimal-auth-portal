export function SignUpScreen() {
    return(
        <>
            <div className="flex flex-col justify-center items-center min-h-screen px-4 text-black">
                <div className="w-full max-w-md">
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <div className="text-center mb-4">
                            <h1 className="text-4xl font-bold">Create an Account</h1>
                        </div>
                        <form>
                            <div className="grid grid-flow-col grid-rows-3 gap-4">
                                <div className="">
                                    <input
                                    name="firstName"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="First Name"
                                    />
                                </div>
                                <div className="">
                                    <input
                                    name="lastName"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Last Name"
                                    />
                                </div>
                                <div className="">
                                    <input
                                    name="email"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Email"
                                    />
                                </div>
                                <div className="">
                                    <input
                                    name="username"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Username"
                                    />
                                </div>
                                <div className="">
                                    <input
                                    name="password"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Password"
                                    />
                                </div>
                                <div className="">
                                    <input
                                    name="password2"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Confirm Password"
                                    />
                                </div>
                            </div>
                            <div className="my-3">
                                <input
                                    className="w-full bg-green-500 text-white py-2 rounded-md cursor-pointer"
                                    type="submit"
                                    value="Sign Up"
                                />
                            </div>
                            <p className="text-center">
                                Already have an account?
                                <a href=""> Log In</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email, password)
    }

    return (
    <div className="bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-black animation-bounce">
            Login
            </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 animation-pulse">
                <form className="space-y-6" onClick={handleSubmit}>
                    <div>
                        <label
                        htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                        </label>
                        <div className="mt-1">
                            <input
                            type="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Password
                        </label>
                        <div className="mt-1">
                            <input
                            type="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animation-bounce"
                        >
                        Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Login;

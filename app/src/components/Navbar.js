import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
    const { logout } = useLogout()

    const handleClick = () => {
        logout()
    }

    return (
    <header className="bg-white flex justify-center py-4">
        <div className="max-w-[1400px] w-full flex items-center ml-48">
            <div className="flex-1 flex justify-center">
                <Link to="/" className="text-gray-800 no-underline">
                    <h1 className="text-2xl font-bold">Password Manager</h1>
                </Link>
            </div>
        </div>
        <div>
            <nav className="flex-1 flex justify-end items-center mr-8">
                <div>
                    <button onClick={handleClick}>Logout</button>
                </div>
                <div>
                    <Link to="/login" className="text-gray-800 no-underline ml-4">
                    Login
                    </Link>
                    <Link to="/signup" className="text-gray-800 no-underline ml-4">
                    Signup
                    </Link>
                </div>
            </nav>
        </div>
    </header>
    )
}

export default Navbar
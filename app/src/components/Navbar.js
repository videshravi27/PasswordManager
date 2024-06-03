import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }

    return (
        <header className="bg-white py-4">
            <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between px-4">
                <div className="flex-1 flex justify-center">
                    <Link to="/" className="text-gray-800 no-underline">
                        <div className="logo font-bold text-black text-2xl">
                            <span className='text-green-500'> &lt; </span>
                            <span>Pass</span>
                            <span className='text-green-500'>OP /&gt; </span>
                        </div>
                    </Link>
                </div>
                {user && (
                    <div className="flex items-center space-x-4">
                        <span>{user.email}</span>
                        <button onClick={handleClick} className="text-gray-800 no-underline">
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;

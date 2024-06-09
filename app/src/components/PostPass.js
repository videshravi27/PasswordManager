import React, { useState } from "react";
import { useDetailsContext } from '../hooks/useDetailsContext';
import { useAuthContext } from "../hooks/useAuthContext";

const PostPass = () => {
    const { dispatch } = useDetailsContext();
    const { user } = useAuthContext();

    const [website, setWebsite] = useState('');
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleUrlChange = (e) => {
        let value = e.target.value;
        if (value.startsWith("w")) {
            value = "https://" + value;
        }
        setUrl(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            setError('You must be logged in');
            return;
        }

        const detail = { website, url, username, password };

        const response = await fetch('/api/details', {
            method: 'POST',
            body: JSON.stringify(detail),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setSuccess(null);
            setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
            setEmptyFields([]);
            setWebsite('');
            setUrl('');
            setUsername('');
            setPassword('');
            setError(null);
            setSuccess('Password added');
            dispatch({ type: 'CREATE_DETAIL', payload: json });
        }
    };

    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen">
            <form className="bg-white p-4 rounded shadow-md max-w-lg w-full mx-auto mt-20" onSubmit={handleSubmit}>
                <h3 className="text-xl font-semibold mb-4">Store your Password</h3>

                <label className="block mb-1">Website:</label>
                <input
                    type="text"
                    onChange={(e) => setWebsite(e.target.value)}
                    value={website}
                    className={`p-2 border rounded w-full ${emptyFields.includes('website') ? 'border-red-500' : 'border-gray-300'}`}
                />

                <label className="block mb-1 mt-4">URL:</label>
                <input
                    type="url"
                    onChange={handleUrlChange}
                    value={url}
                    className={`p-2 border rounded w-full ${emptyFields.includes('url') ? 'border-red-500' : 'border-gray-300'}`}
                />

                <label className="block mb-1 mt-4">Username:</label>
                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`p-2 border rounded w-full ${emptyFields.includes('username') ? 'border-red-500' : 'border-gray-300'}`}
                />

                <label className="block mb-1 mt-4">Password:</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className={`p-2 border rounded w-full ${emptyFields.includes('password') ? 'border-red-500' : 'border-gray-300'}`}
                />

                <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded mt-6" type="submit">Add Password</button>
                {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
                {success && <div className="text-green-600 text-sm mt-2">{success}</div>}
            </form>
        </div>
    );
}

export default PostPass;

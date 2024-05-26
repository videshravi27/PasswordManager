import React, { useState } from "react";
import { useDetailsContext } from '../hooks/useDetailsContext';

const PostPass = () => {
    const { dispatch } = useDetailsContext();

    const [website, setWebsite] = useState('');
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleUrlChange = (e) => {
        let value = e.target.value;
        if (value.startsWith("w")) {
            value = "https://" + value;
        }
        setUrl(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const detail = { website, url, username, password };

        const response = await fetch('/api/details', { 
            method: 'POST',
            body: JSON.stringify(detail),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if(!response.ok){
            setError(json.error);
        } else {
            setWebsite('');
            setUrl('');
            setUsername('');
            setPassword('');
            setError(null);
            setSuccessMessage('Password saved successfully');
            console.log('Password stored successfully', json);
            dispatch({type: 'CREATE_DETAIL', payload: json});
        }
    };

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Store your Password</h3>

            <label>Website: </label>
            <input 
                type="text" 
                onChange={(e) => setWebsite(e.target.value)}
                value={website}
            />
            
            <label>URL: </label>
            <input 
                type="url" 
                onChange={handleUrlChange}
                value={url}
            />
            
            <label>Username: </label>
            <input 
                type="text" 
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />

            <label>Password</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            
            <button type="submit">Add Password</button>
            {error && <div className="error">{error}</div>}
            {successMessage && <div className="success">{successMessage}</div>}
        </form>
    );
}

export default PostPass;

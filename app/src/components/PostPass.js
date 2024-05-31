import React, { useState } from "react";
import { useDetailsContext } from '../hooks/useDetailsContext';
import { useAuthContext } from "../hooks/useAuthContext";

const PostPass = () => {
    const { dispatch } = useDetailsContext();
    const { user } = useAuthContext()

    const [website, setWebsite] = useState('');
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])

    const handleUrlChange = (e) => {
        let value = e.target.value;
        if (value.startsWith("w")) {
            value = "https://" + value;
        }
        setUrl(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!user){
            setError('You must be logged in')
            return 
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

        if(!response.ok){
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
        if(response.ok){
            setEmptyFields([]);
            setWebsite('');
            setUrl('');
            setUsername('');
            setPassword('');
            setError(null);
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
                className={emptyFields.includes('website') ? 'empty' : ''}
            />
            
            <label>URL: </label>
            <input 
                type="url" 
                onChange={handleUrlChange}
                value={url}
                className={emptyFields.includes('url') ? 'empty' : ''}
            />
            
            <label>Username: </label>
            <input 
                type="text" 
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className={emptyFields.includes('usename') ? 'empty' : ''}
            />

            <label>Password</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={emptyFields.includes('password') ? 'empty' : ''}
            />
            
            <button type="submit">Add Password</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default PostPass;

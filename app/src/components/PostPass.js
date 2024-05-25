import { useState } from "react"

const PostPass = () => {

    const [website, setWebsite] = useState('')
    const [url, setUrl] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('null')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const detail = { website, url, username, password }

        const response = await fetch('/api/details', { 
            method: 'POST',
            body: JSON.stringify(detail),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setWebsite('')
            setUrl('')
            setUsername('')
            setPassword('')
            setError(null)
            console.log('Password stored successfully', json)
        }
    }

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
            onChange={(e) => setUrl(e.target.value)}
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
        </form>
    )
}

export default PostPass
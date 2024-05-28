import { useDetailsContext } from "../hooks/useDetailsContext"

//date fns
import { format } from 'date-fns'

const StoredPass = ({ detail }) => {
    const { dispatch } = useDetailsContext()
    
    const handleClick = async () => {
        const response = await fetch('/api/details/' + detail._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_DETAIL', payload: json })
        }
    }
    
    return (
        <div className="workout-details">
            <h2>{detail.website}</h2>
            <p><strong>Website: </strong> {detail.url}</p>
            <p><strong>Username: </strong> {detail.username}</p>
            <p><strong>Password: </strong> {detail.password}</p>
            <p><strong>Created At: </strong>{format(new Date(detail.createdAt), 'PPpp')}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}

export default StoredPass

import { useDetailsContext } from "../hooks/useDetailsContext"

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const StoredPass = ({detail}) => {
    const { dispatch } = useDetailsContext()
    
    const handeClick = async () => {
        const response = await fetch('/api/details/' + detail._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_DETAIL', payload: json})
        }
    }
    
    return (
        <div className="workout-details">
            <h2>{detail.website}</h2>
            <p><strong>Website: </strong> {detail.url}</p>
            <p><strong>Username: </strong> {detail.username}</p>
            <p><strong>password: </strong> {detail.password}</p>
            <p><strong></strong>{formatDistanceToNow(new Date(detail.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handeClick}>Delete</span>
        </div>
    )
}

export default StoredPass
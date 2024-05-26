import { useDetailsContext } from "../hooks/useDetailsContext"

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
            <p><strong>Created: </strong>{detail.createdAt}</p>
            <span onClick={handeClick}>Delete</span>
        </div>
    )
}

export default StoredPass
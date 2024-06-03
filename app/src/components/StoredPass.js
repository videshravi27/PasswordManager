import { useDetailsContext } from "../hooks/useDetailsContext"
import { useAuthContext } from "../hooks/useAuthContext"

//date fns
import { format } from 'date-fns'

const StoredPass = ({ detail }) => {
    const { dispatch } = useDetailsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if(!user){
            return
        }
        const response = await fetch('/api/details/' + detail._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}` 
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_DETAIL', payload: json })
        }
    }
    
    return (
        <div className="workout-details">
            <h2 className="text-xl font-bold">{detail.website}</h2>
            <p><strong>Website: </strong> {detail.url}</p>
            <p><strong>Username: </strong> {detail.username}</p>
            <p><strong>Password: </strong> {detail.password}</p>
            <p><strong>Created At: </strong>{format(new Date(detail.createdAt), 'PPpp')}</p>
            <span onClick={handleClick}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></span>
        </div>
    )
}

export default StoredPass

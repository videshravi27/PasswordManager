import { useEffect} from 'react'
import { useDetailsContext } from '../hooks/useDetailsContext'
import { useAuthContext } from '../hooks/useAuthContext'

//components
import StoredPass from '../components/StoredPass'

const Display = () => {
    const { details, dispatch } = useDetailsContext()
    const { user } = useAuthContext()

    useEffect(() =>{
        const fetchDetails = async () => {
            const response = await fetch('/api/details', {
                headers: {
                    'Authorization': `Bearer ${user.token}` 
                }
            })
            const json = await response.json()        

            if (response.ok) {
                dispatch({type: 'SET_DETAILS', payload: json})
            }
        }
        
        if(user){
            fetchDetails()
        }
    }, [dispatch, user])

    return (
        <div className="home">
            <div className="wokouts">
                {details && details.map((detail) => (
                    <StoredPass key={detail._id} detail={detail} /> 
                ))}
            </div>
        </div>
    )
}
export default Display
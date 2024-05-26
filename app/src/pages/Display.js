import { useEffect} from 'react'
import { useDetailsContext } from '../hooks/useDetailsContext'

//components
import StoredPass from '../components/StoredPass'

const Display = () => {
    const { details, dispatch } = useDetailsContext()

    useEffect(() =>{
        const fetchDetails = async () => {
            const response = await fetch('/api/details')
            const json = await response.json()        

            if (response.ok) {
                dispatch({type: 'SET_DETAILS', payload: json})
            }
        }
        
        fetchDetails()
    }, [dispatch])

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
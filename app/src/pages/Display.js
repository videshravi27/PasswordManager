import { useEffect, useState } from 'react'
import StoredPass from '../components/StoredPass'
import PostPass from '../components/PostPass'

const Display = () => {

    const [details, setDetails] = useState(null)
    
    useEffect(() =>{
        const fetchDetails = async () => {
            const response = await fetch('/api/details')
            const json = await response.json()        

            if (response.ok) {
                setDetails(json)
            }
        }
        
        fetchDetails()
    }, [])

    return (
        <div className="home">
            <div className="wokouts">
                {details && details.map((detail) => (
                    <StoredPass key={detail._id} detail={detail} /> 
                ))}
            </div>
            <PostPass />
        </div>
    )
}
export default Display
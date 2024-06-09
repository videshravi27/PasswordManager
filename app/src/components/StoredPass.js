import { useDetailsContext } from "../hooks/useDetailsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { format } from 'date-fns';

const StoredPass = ({ detail }) => {
    const { dispatch } = useDetailsContext();
    const { user } = useAuthContext();

    const handleClick = async () => {
    
        if(!user){
            return;
        }
    
        const response = await fetch('/api/details/' + detail._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}` 
            }
        });
        const json = await response.json();
        
        if (response.ok) {
            dispatch({ type: 'DELETE_DETAIL', payload: json });
        }
    };

    return (
    <div className="mt-10 w-full max-w-lg bg-white rounded-lg mx-auto p-6 relative shadow-md">
        <h4 className="mb-2 text-xl font-bold text-black">{detail.website}</h4>
        <p className="m-0 text-sm text-gray-600">Website: {detail.url}</p>
        <p className="m-0 text-sm text-gray-600">Username: {detail.username}</p>
        <p className="m-0 text-sm text-gray-600">Password: {detail.password}</p>
        <p className="m-0 text-sm text-gray-600">Created At: {format(new Date(detail.createdAt), 'PPpp')}</p>
        <span onClick={handleClick} className="absolute top-5 right-5 cursor-pointer bg-gray-200 p-2 rounded-full text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2">
                <path d="M3 6h18"/>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                <line x1="10" x2="10" y1="11" y2="17"/>
                <line x1="14" x2="14" y1="11" y2="17"/>
            </svg>
        </span>
    </div>
    );
};

export default StoredPass;

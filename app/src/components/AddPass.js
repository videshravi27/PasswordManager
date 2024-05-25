import { useNavigate } from 'react-router-dom';

const AddPass = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20vh' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#2d3748', marginBottom: '1rem' }}>Store your passwords</h1>
            </div>
            <button
                onClick={handleButtonClick}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderWidth: '1px', borderColor: '#e2e8f0', borderRadius: '9999px', width: '4rem', height: '4rem', cursor: 'pointer', outline: '0', boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)' }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '1.5rem', height: '1.5rem' }}
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path>
                    <path d="M12 8v8"></path>
                </svg>
            </button>
        </div>
    );
}

export default AddPass;

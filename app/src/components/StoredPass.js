const StoredPass = ({detail}) => {
    return (
        <div className="workout-details">
            <h2>{detail.website}</h2>
            <p><strong>Website: </strong>{detail.url}</p>
            <p><strong>Username: </strong>{detail.username}</p>
            <p><strong>password</strong>{detail.password}</p>
            <p>{detail.createdAt}</p>
        </div>
    )
}

export default StoredPass

const Business = ({business}) => {
    return (
        <div className="business-card">
            <div className="image">
                <img src={business.image_url} alt="" />
            </div>
            <div className="info">
                <h3>{business.name}</h3>
                <div className="address">
                    <span>{business.location.address1}</span>
                    {
                        business.location.address2 ? <span>{business.location.address2}</span> : ''
                    }
                    <span>{business.location.city}</span>
                    <span>{business.location.state}</span>
                    <span>{business.location.zip_code}</span>
                </div>
                <div className="highlights">
                    <span className="category">{business.category}</span>
                    <span className="rating">{business.rating} stars</span>
                    <span className="review">{business.review_count} reviews</span>                    
                </div>
            </div>
        </div>
    )
}

export default Business; 
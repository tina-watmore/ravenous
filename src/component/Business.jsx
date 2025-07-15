
const Business = ({business}) => {
    return (
        <div className="business-card">
            <div className="image">
                <img src={business.img_path} alt="" />
            </div>
            <div className="info">
                <h3>{business.name}</h3>
                <div className="address">
                    <span>{business.address}</span>
                    <span>{business.suburb}</span>
                    <span>{business.post_code}</span>
                </div>
                <div className="highlights">
                    <span className="category">{business.category}</span>
                    <span className="rating">{business.rating} stars</span>
                    <span className="review">{business.review} reviews</span>                    
                </div>
            </div>
        </div>
    )
}

export default Business; 
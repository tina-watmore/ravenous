import Business from './Business';

const BusinessList = ({businessList}) => {

    return (
        <>
            {
                businessList  ? (
                    <div className="business-list">
                        {
                            businessList.map((business) => <Business business={business} key={business.id} />)                        
                        }
                    </div>
                ) : (
                    <p>There are no businesses</p>
                )
            }
        </>
    )
}   

export default BusinessList;
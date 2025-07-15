import Business from './Business';

const BusinessList = () => {
    const businesses = [
        {
            id: 1,
            name: "Via Napoli",
            address: "123 Fake Street",
            suburb: "Lane Cove",
            post_code: "2060",
            img_path: "https://picsum.photos/200",
            category: "Italian",
            rating: "4.5",
            review: "90"
        },
        {
            id: 2,
            name: "Thai Fusion",
            address: "611 Napier Street",
            suburb: "North Sydney",
            post_code: "2060",
            img_path: "https://picsum.photos/200",
            category: "Thai",
            rating: "4.9",
            review: "100"
        },
        {
            id: 3,
            name: "Lime Light",
            address: "123 Neutral Street",
            suburb: "Neutral Bay",
            post_code: "2065",
            img_path: "https://picsum.photos/200",
            category: "Thai",
            rating: "4.8",
            review: "90"
        },
        {
            id: 4,
            name: "Stir Crazy",
            address: "123 Kirribill Street",
            suburb: "Kirribilli",
            post_code: "2068",
            img_path: "https://picsum.photos/200",
            category: "Thai",
            rating: "5",
            review: "90"
        },                        
    ];

    return (
        <>
            {
                businesses ? (
                    <div className="business-list">
                        {
                            businesses.map((business) => <Business business={business} key={business.id} />)                        
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
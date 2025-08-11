import './styles/site.less';
import './styles/reset.less';
import BusinessList from '../src/component/BusinessList';
import SearchBar from '../src/component/SearchBar';
import { getBusinessListings } from '../src/utils/yelpAPI';
import { useEffect, useState } from 'react';

export const App = () => {
  const [businesses, setBusinesses] = useState([]);

  // const businesses = [
  //     {
  //         id: 1,
  //         name: "Via Napoli",
  //         address: "123 Fake Street",
  //         suburb: "Lane Cove",
  //         post_code: "2060",
  //         img_path: "https://picsum.photos/200",
  //         category: "Italian",
  //         rating: "4.5",
  //         review: "90"
  //     },
  //     {
  //         id: 2,
  //         name: "Thai Fusion",
  //         address: "611 Napier Street",
  //         suburb: "North Sydney",
  //         post_code: "2060",
  //         img_path: "https://picsum.photos/200",
  //         category: "Thai",
  //         rating: "4.9",
  //         review: "100"
  //     },
  //     {
  //         id: 3,
  //         name: "Lime Light",
  //         address: "123 Neutral Street",
  //         suburb: "Neutral Bay",
  //         post_code: "2065",
  //         img_path: "https://picsum.photos/200",
  //         category: "Thai",
  //         rating: "4.8",
  //         review: "90"
  //     },
  //     {
  //         id: 4,
  //         name: "Stir Crazy",
  //         address: "123 Kirribill Street",
  //         suburb: "Kirribilli",
  //         post_code: "2068",
  //         img_path: "https://picsum.photos/200",
  //         category: "Thai",
  //         rating: "5",
  //         review: "90"
  //     },                        
  // ];

  const onSearchHandler = async (searchTerm, searchLocation, searchSortBy) => {
    const results = await getBusinessListings(searchTerm, searchLocation, searchSortBy);
    setBusinesses(results.businesses);
  }

  return (
    <>
      <header>
        <div className="header-bar">
          <div className="container">
            <h1>Ravenous</h1>
          </div>
        </div>
        <div className="banner">
          <div className="container">
            <SearchBar onSearch={onSearchHandler} />
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <BusinessList businessList={businesses} />
        </div>
      </main>
      <footer>
        <div className="container">
          <p>Created by Tina W</p>
        </div>
      </footer>
    </>
  )
}


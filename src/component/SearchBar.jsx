import { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('Pizza');
    const [location, setLocation] = useState('North Sydney');
    const [filterBy, setFilterBy] = useState('best_match');

    useEffect(() => {
        onSearch(searchTerm, location, filterBy);      
        setFilterBy('');
        setLocation('');
        setSearchTerm('');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchTerm.length && location.length) {
            console.log(`Searching Yelp with ${searchTerm}, ${location}, ${!filterBy.length ? 'best_match' : filterBy}`);    
            onSearch(searchTerm, location, filterBy || 'best_match');  
            setFilterBy('');
            setLocation('');
            setSearchTerm('');                    
        } else {
            alert('Please enter search term and location!');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <div className="quick-filter-container">
                <button className={filterBy === 'best_match' ? 'active' : ''} type="button" onClick={() => setFilterBy('best_match')}>Best Match</button>
                <button className={filterBy === 'rating' ? 'active' : ''} type="button" onClick={() => setFilterBy('rating')}>Highest Rated</button>
                <button className={filterBy === 'reviewed_count' ? 'active' : ''} type="button" onClick={() => setFilterBy('reviewed_count')}>Most Reviewed</button>
            </div>
            <div className="input-container">
                <input 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text" 
                    name="term" 
                    placeholder="Search Business" 
                />
                <input 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}                
                    type="text" 
                    name="location" 
                    placeholder="Where?" 
                /> 
            </div>
            <div className="button-container">
                <button type="submit" className="styled-btn">Let's Go</button>
            </div>
        </form>
    )
}

export default SearchBar;
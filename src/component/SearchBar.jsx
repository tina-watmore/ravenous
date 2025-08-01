import { useState, useEffect } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [filterBy, setFilterBy] = useState('');

    const handleSubmit = () => {
        if(searchTerm.length || location.length) {
            console.log(`Searching Yelp with ${searchTerm}, ${location}, ${filterBy}`);               
        }
    }

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <div className="quick-filter-container">
                <button className={filterBy === 'Best Match' ? 'active' : ''} type="button" onClick={() => setFilterBy('Best Match')}>Best Match</button>
                <button className={filterBy === 'Highest Rated' ? 'active' : ''} type="button" onClick={() => setFilterBy('Highest Rated')}>Highest Rated</button>
                <button className={filterBy === 'Most Reviewed' ? 'active' : ''} type="button" onClick={() => setFilterBy('Most Reviewed')}>Most Reviewed</button>
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
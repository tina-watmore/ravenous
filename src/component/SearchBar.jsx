const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="quick-filter-container">
                <button type="button">Best Match</button>
                <button type="button">Highest Rated</button>
                <button type="button">Most Reviewed</button>
            </div>
            <div className="input-container">
                <input type="text" placeholder="Search Business" />
                <input type="text" placeholder="Where?" /> 
            </div>
            <div className="button-container">
                <button type="submit" className="styled-btn">Let's Go</button>
            </div>
        </div>
    )
}

export default SearchBar;
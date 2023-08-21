import React from "react";
import "../styles/search-results.css"

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="title">No Results</p>
  } else {
    return(
      <div className="card-images">
        {results.map((image) => (
            <img className="card-image" src={image} alt="spaceImage" />
        ))}
      </div>
   );
 };
};

export default SearchResults;
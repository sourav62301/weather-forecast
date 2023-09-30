// import React, { useState } from "react";
// import { AsyncPaginate } from "react-select-async-paginate";
// import { geoApiOptions, GEO_API_URL } from "../../api";

// const Search = ({ onSearchChange }) => {
//   const [search, setSearch] = useState(null);

//   const loadOptions =  (inputValue) => {
//     return fetch(
//       `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
//       geoApiOptions
//     )
//       .then((res) => res.json())
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));

//   };

//   const handleOnChange = (searchData) => {
//     setSearch(searchData);
//     onSearchChange(searchData);
//   };

//   return (
//     <div>
//       <AsyncPaginate
//         placeholder="Search City"
//         debounceTimeout={600}
//         value={search}
//         onChange={handleOnChange}
//         loadOptions={loadOptions}
//       />
//     </div>
//   );
// };

// export default Search;

import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      className="abc"
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;

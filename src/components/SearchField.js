import React from 'react';


const SearchField=({SearchChange})=>{
	return(
		<div>
     <input 
      className='pa3 ba b--green bg-light-blue' 
      type='search'
      placeholder='search robots' 
      onChange={SearchChange}/>
     </div>

	);
}
export default SearchField;
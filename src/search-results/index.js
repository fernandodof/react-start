import React from 'react';
import SearchResultsRow from './search-results-row';

const SearchResults = (props) => {
	const houseRows = props.filteredHouses.map(house => {
		return (
			<SearchResultsRow key={house.id.toString()}
				house={house}
				setActiveHouse={props.setActiveHouse}>
			</SearchResultsRow>
		);
	});

	return (
		<div className="mt-2">
			<h4>Results for {props.country}:</h4>
			<table className="table table-hover">
				<tbody>
					{houseRows}
				</tbody>
			</table>
		</div>
	)
};

export default SearchResults;
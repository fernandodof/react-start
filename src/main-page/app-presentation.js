import React from 'react';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import House from '../house';

const AppPresentation = (props) => {
    let activeComponent = <FeaturedHouse house={props.featuredHouse} />;

    if (props.country) {
        activeComponent = <SearchResults
            country={props.country}
            filteredHouses={props.filteredHouses}
            setActiveHouse={props.setActiveHouse} >
        </SearchResults>;
    } else if (props.activeHouse) {
        activeComponent = <House house={props.activeHouse} />;
    }

    return (
        <div className="container">
            <Header subtitle="Providing a home anywhere"></Header>
            <HouseFilter countries={props.countries} filterHouses={props.filterHouses}></HouseFilter>
            {activeComponent}
        </div>
    );
}

export default AppPresentation;
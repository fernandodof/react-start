import React, { Component } from 'react';
import './main-page.css';
import AppPresentation from './app-presentation';

class App extends Component {
	state = {};

	componentDidMount() {
		this.fetchHouses();
	}

	fetchHouses = () => {
		fetch('/houses.json')
			.then(response => response.json())
			.then(allHouses => {
				this.allHouses = allHouses;
				this.determineFeaturedHouse();
				this.determineUniqueCountries();
			})
	}

	determineFeaturedHouse = () => {
		if (this.allHouses) {
			const randomIndex = Math.floor(Math.random() * this.allHouses.length);
			const featuredHouse = this.allHouses[randomIndex];
			this.setState({ featuredHouse });
		};
	}

	determineUniqueCountries = () => {
		const countries = this.allHouses ? Array.from(new Set(this.allHouses.map(house => house.country))) : [];
		countries.unshift(null);
		this.setState({ countries });
	}

	filterHouses = (country) => {
		this.setState({ activeHouse: null });
		const filteredHouses = this.allHouses.filter((house) => house.country === country);
		this.setState({ filteredHouses, country });
	}

	setActiveHouse = (activeHouse) => {
		this.setState({ activeHouse });
	}

	render() {
		return (
			<AppPresentation country={this.state.country}
				filteredHouses={this.state.filteredHouses}
				featuredHouse={this.state.featuredHouse}
				countries={this.state.countries} filterHouses={this.filterHouses}
				activeHouse={this.state.activeHouse} setActiveHouse={this.setActiveHouse} />
		);
	}
}


export default App;

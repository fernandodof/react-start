import React, { Component } from 'react';

class Inquiry extends Component {
	state = {
		name: "",
		email: "",
		remarks: ""
	};

	onNameChange = (event) => {
		event.preventDefault();
		this.setState({ name: event.target.value });
	}

	onEmailChange = (event) => {
		event.preventDefault();
		this.setState({ email: event.target.value });
	}

	onRemarksChange = (event) => {
		event.preventDefault();
		this.setState({ remarks: event.target.value });
	}

	onSubmit = (event) => {
		event.preventDefault();
		const house = this.props.house;
		const contactInfo = this.state;
		console.log("send emial", house, contactInfo);
	}

	render() {
		return (
			<form className="mt-2">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Name"
						id="name"
						value={this.state.name}
						onChange={this.onNameChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input
						type="text"
						id="email"
						className="form-control"
						placeholder="Email"
						value={this.state.password}
						onChange={this.onEmailChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="remarks">Remarks</label>
					<input
						type="text"
						id="remarks"
						className="form-control"
						placeholder="Remarks"
						value={this.state.remarks}
						onChange={this.onRemarksChange}
					/>
				</div>
				<button
					className="btn btn-primary"
					disabled={this.state.name.length === 0 || this.state.email.length === 0}
					onClick={this.onSubmit}>
					Submit
      			</button>
			</form>
		);
	}
}

export default Inquiry;

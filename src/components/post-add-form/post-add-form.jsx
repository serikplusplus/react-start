import React, { Component } from 'react';
import './post-add-form.css';

/**
 * Компонент
 * Форма дабовления нового поста
 * @returns
 */
export default class PostAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState(({ inputValue }) => ({
			inputValue: event.target.value,
		}));
	}

	onSubmit(event) {
		const { onAddNewPost } = this.props;
		const { inputValue } = this.state;
		event.preventDefault();
		onAddNewPost(inputValue);
		this.setState(({ inputValue }) => ({
			inputValue: '',
		}));
	}

	render() {
		return (
			<form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
				<input
					type="text"
					className="form-control new-post-label"
					placeholder="Label for new post"
					onChange={this.onInputChange}
					value={this.state.inputValue}
				/>
				<button type="submit" className="btn btn-outline-secondary">
					Add post
				</button>
			</form>
		);
	}
}

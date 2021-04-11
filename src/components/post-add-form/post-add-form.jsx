import React, { Component } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input,
	Form,
	FormGroup,
} from 'reactstrap';
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
			textareaValue: '',
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onTextareaChange = this.onTextareaChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState(({ inputValue }) => ({
			inputValue: event.target.value,
		}));
	}

	onTextareaChange(event) {
		this.setState(({ textareaValue }) => ({
			textareaValue: event.target.value,
		}));
	}

	onSubmit(event) {
		const { onAddNewPost, onToggleModal } = this.props;
		const { inputValue, textareaValue } = this.state;
		event.preventDefault();
		onAddNewPost(inputValue, textareaValue);
		onToggleModal();
		this.setState(({ inputValue, textareaValue }) => ({
			inputValue: '',
			textareaValue: '',
		}));
	}

	render() {
		const { modal, onToggleModal } = this.props;
		return (
			<div>
				<Modal isOpen={modal} toggle={onToggleModal}>
					<ModalHeader toggle={onToggleModal}>Добавление поста</ModalHeader>
					<ModalBody>
						<Form className="bottom-panel">
							<FormGroup>
								<Input
									type="text"
									bsSize="lg"
									className="form-control"
									placeholder="Название поста"
									onChange={this.onInputChange}
									value={this.state.inputValue}
								/>
							</FormGroup>
							<FormGroup>
								<Input
									type="textarea"
									onChange={this.onTextareaChange}
									value={this.state.textareaValue}
								/>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<button className="btn btn-outline-secondary" onClick={this.onSubmit}>
							Добаить пост
						</button>
						<Button color="secondary" onClick={onToggleModal}>
							Вийти
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

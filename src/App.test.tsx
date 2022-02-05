import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('it renders the main page', () => {
	render(<App />);

	const headerEl = screen.getByText("Filter Products");

	expect(headerEl).toBeInTheDocument();
});

test('it errors on wrong profile login information', () => {
	render(<App />);

	userEvent.click(screen.getAllByText("User Profile")[1]);

	userEvent.type(
		screen.getByPlaceholderText("Username"),
		"Test"
	);

	userEvent.type(
	screen.getByPlaceholderText("Password"),
		"Test"
	);

	userEvent.click(screen.getByText("Log In"));

	const error = screen.getByText("Wrong username or password");

	expect(error).toBeInTheDocument();
});

test('it logs in on correct profile login information', () => {
	render(<App />);

	userEvent.click(screen.getAllByText("User Profile")[1]);

	userEvent.type(
		screen.getByPlaceholderText("Username"),
		"user"
	);

	userEvent.type(
	screen.getByPlaceholderText("Password"),
		"user"
	);

	userEvent.click(screen.getByText("Log In"));

	const success = screen.getByText("Address");

	expect(success).toBeInTheDocument();
});

test('it adds to cart from main page', () => {
	render(<App />);

	userEvent.click(screen.getByText("2 000 000 🌖 / soul"));

	userEvent.click(screen.getAllByText("Open Cart")[1]);

	const oneofsix = screen.getByText("1 / 6");

	expect(oneofsix).toBeInTheDocument();
});

test('it removes from cart from cart popup', () => {
	render(<App />);

	userEvent.click(screen.getAllByText("Open Cart")[1]);

	userEvent.click(screen.getAllByText("-")[1]);

	const oneoffifteen = screen.getByText("1 / 15");

	expect(oneoffifteen).toBeInTheDocument();
});
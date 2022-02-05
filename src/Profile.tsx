import React, { useState } from 'react';
import {
	Form,
	Message,
	Modal,
} from 'semantic-ui-react';




function Staff(props: any) {
	const [loggedIn, setLoggedIn] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	function tryLogin(e: any) {
		e.preventDefault();
		if (username === 'user' && password === 'user') {
			setLoggedIn(true);
			setError('');
		} else {
			setError('Wrong username or password');
		}
	}

	return (
		<Modal
			size="large"
			onClose={props.canceled}
			open={true}
		>
			<Modal.Header>Profile</Modal.Header>
			<Modal.Content image>
				<Modal.Description>
					{error.length > 0 &&
						<Message
							color="red"
							content={error}
						/>
					}
					{!loggedIn &&
						<Form>
							<Form.Input
								label="Username"
								placeholder="Username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<Form.Input
								label="Password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Form.Button
								color="green"
								fluid
								onClick={(e) => tryLogin(e)}
							>
								Log In
							</Form.Button>
						</Form>
					}
					{!!loggedIn &&
						<Form>
							<Form.Input
								label="Full Name"
								value="Mikael Vaihela"
								onChange={() => {}}
							/>
							<Form.Input
								label="Address"
								value="Jensen Basement"
								onChange={() => {}}
							/>
						</Form>
					}
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
			</Modal.Actions>
		</Modal >
	);
}

export default Staff;
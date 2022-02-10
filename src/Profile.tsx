import React, { useState } from 'react';




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
		<></>
	);
}

export default Staff;
import React, { useState } from 'react'


function App() {
	const [activeItem, setActiveItem] = useState('home');
	//state = { activeItem: 'home' }

	//handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	function handleItemClick(event: any, name: string) {
		setActiveItem("e");
	}

	return (
		<></>
	)
}

export default App;
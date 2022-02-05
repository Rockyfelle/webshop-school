import React, { useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'

function App() {
	const [activeItem, setActiveItem] = useState('home');
	//state = { activeItem: 'home' }

	//handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	function handleItemClick(event: any, name: string) {
		setActiveItem("e");
	}

	return (
		<Menu secondary inverted>
			<Menu.Item
				name='home'
				active={activeItem === 'home'}
				onClick={(e) => handleItemClick(e, 'home')}
			/>
			<Menu.Item
				name='messages'
				active={activeItem === 'messages'}
				onClick={(e) => handleItemClick(e, 'messages')}
			/>
			<Menu.Item
				name='friends'
				active={activeItem === 'friends'}
				onClick={(e) => handleItemClick(e, 'friends')}
			/>
			<Menu.Menu position='right'>
				<Menu.Item>
					<Input icon='search' placeholder='Search...' />
				</Menu.Item>
				<Menu.Item
					name='logout'
					active={activeItem === 'logout'}
					onClick={(e) => handleItemClick(e, 'logout')}
				/>
			</Menu.Menu>
		</Menu>
	)
}

export default App;
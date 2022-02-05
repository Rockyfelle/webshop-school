import React, { useEffect, useState } from 'react';
import './App.css';
import { Card, Image, Button, Form } from 'semantic-ui-react';
import Cart from './Cart';
import Profile from './Profile';

const categoryOptions = [
	{ key: 'any', value: 'any', text: 'All Categories' },
	{ key: 'child', value: 'child', text: 'Children' },
	{ key: 'from_earth', value: 'from_earth', text: 'From Earth' },
	{ key: 'misc', value: 'misc', text: 'Misc' },
]

function App() {
	const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products') as string) || [
	//const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products') || `[
		{
			id: 0,
			name: 'Plastic Grass',
			description: 'Pure Mars-grade plastic grass. Made from our finest marsian-oil compound',
			free: 404,
			total: 404,
			cart: 1,
			price: '200',
			cost: 200,
			unit: 'sqm',
			image: 'grass.jpg',
			category: 'misc',
		},
		{
			id: 1,
			name: 'Mars Tree',
			description: 'This tree had its seeds transported all the way from earth to our company here on Mars, after which its grown for 2 years in our special nature-boosting observatory, growing up just like it would have on earth, but faster',
			free: 15,
			total: 15,
			cart: 2,
			price: '2 000',
			cost: 2000,
			unit: 'sqm',
			image: 'tall.jpg',
			category: 'misc'
		},
		{
			id: 2,
			name: 'Tree Seeds',
			description: 'Perfect for institutions that have their own growing observatories and want to try growing their own trees',
			free: 534,
			total: 534,
			cart: 0,
			price: '20',
			cost: 20,
			unit: 'sqm',
			image: 'grass.jpg',
			category: 'from_earth'
		},
		{
			id: 3,
			name: 'Biowaste',
			description: 'Various biowaste, excrement, skin dust, and crushed dead bodies',
			free: 752,
			total: 752,
			cart: 0,
			price: '10 000',
			cost: 10000,
			unit: 'kg',
			image: 'grass.jpg',
			category: 'child'
		},
		{
			id: 4,
			name: 'Mars-grown Infant',
			description: 'Although Mars-born residents have considerable difficulties in birth giving, we believe everyone deserves to be a parent and grow our Martian population. These infants have been grown in Mars-adapted growing cells, and are ready to meet their new parents whenever you are.',
			free: 18,
			total: 18,
			cart: 0,
			price: '500 000',
			cost: 500000,
			unit: 'soul',
			image: 'grass.jpg',
			category: 'child'
		},
		{
			id: 5,
			name: 'Mars-grown 5 year old',
			description: 'Some of our cell grown Infants are kept and put through an intense growing cycle to advance them past the infant stage, for those who want to adopt, but want to skip past the infant age',
			free: 9,
			total: 9,
			cart: 0,
			price: '900 000',
			cost: 900000,
			unit: 'soul',
			image: 'grass.jpg',
			category: 'child'
		},
		{
			id: 6,
			name: 'Mars-grown 10 year old',
			description: 'For those who want go past the first 10 years in their adoption procedure, our most expensive offering',
			free: 6,
			total: 6,
			cart: 0,
			price: '2 000 000',
			cost: 2000000,
			unit: 'soul',
			image: 'grass.jpg',
			category: 'child'
		},
		{
			id: 7,
			name: 'Generic Earth Plants',
			description: 'When you want to capture the earth escense in a single plant, the Generic Earth Plant is for you',
			free: 73,
			total: 73,
			cart: 0,
			price: '400',
			cost: 400,
			unit: 'piece',
			image: 'grass.jpg',
			category: 'from_earth'
		},
		{
			id: 8,
			name: 'Unfiltered Lake Water',
			description: 'Pure Earth Lake Water, unprocessed, uncycled, undrank',
			free: 59,
			total: 59,
			cart: 0,
			price: '2 500',
			cost: 2500,
			unit: 'liter',
			image: 'grass.jpg',
			category: 'from_earth'
		},
	]);
	const [filteredProducts, setFilteredProducts] = useState([...products]);
	const [filterText, setFilterText] = useState('');
	const [filterCategory, setFilterCategory] = useState('any');
	const [cartOpen, setCartOpen] = useState(false);
	const [profileOpen, setProfileOpen] = useState(false);

	const productGrid = filteredProducts.map((product, index) => {
		return (
			<Card key={'product' + index} className="col-span-1 flex-none">
				<Image src={'/ears.jpg'} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{product.name}</Card.Header>
					<Card.Meta>
						<span className='date'>{product.free}</span>
					</Card.Meta>
					<Card.Description>
						{product.description}
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Button fluid color='green' onClick={() => addProduct(index)}>
						{`${product.price} 🌖 / ${product.unit}`}
					</Button>
				</Card.Content>
			</Card>
		)
	})

	useEffect(() => {
		localStorage.setItem('products', JSON.stringify(products));
	}, [products]);

	function addProduct(index: number) {
		let modded = products;
		if (modded[index].free > 0) {
			modded[index].free -= 1;
			modded[index].cart += 1;
		}
		setProducts([...modded]);

	}

	function updateFilterCategory(val: any) {
		setFilterCategory(val.value);
	}

	useEffect(() => {
		let modded = [...products];
		modded = modded.filter((x) => x.name.indexOf(filterText) !== -1 || x.category.indexOf(filterText) !== -1);
		if (filterCategory !== 'any') modded = modded.filter((x) => x.category === filterCategory);
		setFilteredProducts([...modded])
	}, [filterCategory, filterText, products])

	function cartClosed() {
		setCartOpen(false);
	}

	function profileClosed() {
		setProfileOpen(false);
	}

	function getUpdate(modded: Array<any>) {
		setProducts(modded);
		console.log(products[0].free);
		console.log(products[0].cart);
	}

	return (
		<div className="App">
			{/*<Navbar />*/}
			{!!cartOpen && <Cart canceled={cartClosed} products={products} sendUpdate={getUpdate} />}
			{!!profileOpen && <Profile canceled={profileClosed} products={products} sendUpdate={getUpdate} />}
			<div className="mt-[150px] grid place-items-center">
				<h1 className="text-6xl mb-10">Filter Products</h1>
				<Form inverted>
					<Form.Group width="equal">
						<Form.Input
							label="Search Term"
							value={filterText}
							onChange={(e) => setFilterText(e.target.value)}
						/>
						<Form.Dropdown
							label="Categories"
							selection
							options={categoryOptions}
							value={filterCategory}
							onChange={(e, val) => updateFilterCategory(val)}
						/>
						<Form.Button
							label="Open Cart"
							onClick={() => setCartOpen(!cartOpen)}
						>
							Open Cart
						</Form.Button>
						<Form.Button
							label="User Profile"
							onClick={() => setProfileOpen(!profileOpen)}
						>
							User Profile
						</Form.Button>
					</Form.Group>
				</Form>
			</div>
			<div className="m-[10%]">
				<Card.Group itemsPerRow={6}>
					{productGrid}
				</Card.Group>
			</div>
		</div>
	);
}

export default App;

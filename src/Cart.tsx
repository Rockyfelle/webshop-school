import React, { useState, useEffect } from 'react';





function Staff(props: any) {
	const [cartProducts, setCartProducts] = useState(props.products.flatMap((x: any, index: number) => {
		if (x.cart > 0) return {
			name: x.name, description: x.description, cost: x.cost,
			free: x.free, total: x.total, cart: x.cart, price: x.price,
			unit: x.unit, image: x.unit, category: x.category, orgIndex: index
		}; else return [];
	}));

	useEffect(() => {
		setCartProducts(props.products.flatMap((x: any, index: number) => {
			if (x.cart > 0) return {
				name: x.name, description: x.description, cost: x.cost,
				free: x.free, total: x.total, cart: x.cart, price: x.price,
				unit: x.unit, image: x.unit, category: x.category, orgIndex: index
			}; else return [];
		}));
	}, [props]);

	function removeItem(index: number) {
		let modded = props.products;
		if (modded[index].cart > 0) {
			modded[index].free += 1;
			modded[index].cart -= 1;
		}
		props.sendUpdate([...props.products]);
	}

	function addItem(index: number) {
		let modded = props.products;
		if (modded[index].free > 0) {
			modded[index].free -= 1;
			modded[index].cart += 1;
		}
		props.sendUpdate([...props.products]);
	}

	return (
<></>
	);
}

export default Staff;
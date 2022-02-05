import React, { useState, useEffect } from 'react';
import {
	Button,
	Modal,
} from 'semantic-ui-react';




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
		<Modal
			size="large"
			onClose={props.canceled}
			open={true}
		>
			<Modal.Header>Cart / {cartProducts.map((x: any) => x.cost * x.cart).reduce((prev: any, next: any) => prev + next)} kr</Modal.Header>
			<Modal.Content image>
				<Modal.Description>
					{cartProducts.map((item: any, index: number) => {
						return (
							<div className="text-black text-2xl grid place-items-center mb-10" key={"cart" + index}>
								<h1>{item.name}</h1>
								<Button.Group>
									<Button color="red" onClick={(e) => removeItem(item.orgIndex)}>-</Button>
									<Button disabled className="w-[200px]">{item.cart} / {item.total}</Button>
									<Button color="green" onClick={(e) => addItem(item.orgIndex)}>+</Button>
								</Button.Group>
							</div>
						)
					})}
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
			</Modal.Actions>
		</Modal >
	);
}

export default Staff;
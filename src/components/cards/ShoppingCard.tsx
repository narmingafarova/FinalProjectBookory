import React from 'react'
import { Button } from 'react-bootstrap';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';

const ShoppingCard = ({ item }: any) => {
    const { removeItem, updateItemQuantity } = useCart();
    return (
        <tr key={item.id}>
            <td>
                <LinkContainer to="/cart">
                    <a
                        href="/cart"
                        className="text-decoration-none delete-btn"
                        onClick={() => {
                            removeItem(item.id);
                        }}
                    >
                        x
                    </a>
                </LinkContainer>
            </td>
            <td>
                <a href="/">
                    <img width={50} src={item.image} alt={item.title} />
                </a>
            </td>
            <td>
                <a href="/cart" className="text-decoration-none">
                    {item.title}
                </a>
            </td>
            <td>${item.price}</td>
            <td className="position-relative">
                <input
                    id="number"
                    type="number"
                    className="quantity text-center"
                    defaultValue={item.quantity}
                    min="0"
                    step="1"
                    value={item.quantity}
                    onChange={(e) => (item.quantity = e.target.value)}
                />
                <div className="input-btns d-flex flex-column position-absolute">
                    <Button
                        className="py-0"
                        onClick={() => {
                            updateItemQuantity(item.id, item.quantity + 1);
                        }}
                    >
                        <ChevronUp color="#3bb77e" fontSize={10} />
                    </Button>
                    <Button
                        className="py-0"
                        onClick={() => {
                            updateItemQuantity(item.id, item.quantity - 1);
                        }}
                    >
                        <ChevronDown color="#3bb77e" fontSize={10} />
                    </Button>
                </div>
            </td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
    )
}

export default ShoppingCard
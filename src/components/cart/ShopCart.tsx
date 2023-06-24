import React, { useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';
import ShoppingCard from '../cards/ShoppingCard';

const ShopCart: React.FC = () => {
    const { isEmpty, items, cartTotal } = useCart();
    const [coupon, setCoupon] = useState<string>("");
    const [sale, setSale] = useState<boolean>(false);
    return (
        <>
            {isEmpty ?
                <Container className='add-cart text-center mb-5'>
                    <div className="empty-icon text-center">
                        <img src="https://icon-library.com/images/shoppingcart-icon/shoppingcart-icon-29.jpg" alt="empty" width="300px" />
                    </div>
                    <h5 className='mb-4'>Your cart is currently empty.</h5>
                    <LinkContainer to="/shop">
                        <a href="/" className='text-decoration-none section-btn'>
                            Return to shop
                        </a>
                    </LinkContainer>
                </Container>
                : <div className='shopping-card mt-5'>
                    <Container className="add-table mb-5">
                        <Table className="shop-cart-items w-75 my-0 mx-auto">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item: any) => {
                                    return <ShoppingCard item={item} />
                                })}
                                <tr>
                                    <td colSpan={6}>
                                        <div className="coupon-update d-flex justify-content-between">
                                            <div className="coupon d-flex">
                                                <input type="text" placeholder="Coupon Code" onChange={(e) => { setCoupon(e.target.value) }} />
                                                <Button
                                                    type="submit"
                                                    className="add-cart-btn ms-2 d-flex align-items-center"
                                                    onClick={() => {
                                                        if (coupon === "Bookory") {
                                                            setSale(true);
                                                        } else {
                                                            setSale(false);
                                                        }
                                                    }}
                                                >
                                                    Apply coupon
                                                </Button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Row className="d-flex flex-row-reverse mt-4">
                            <Col sm={12} md={6}>
                                <h5>Cart totals</h5>
                                <Table bordered className="totals">
                                    <tbody>
                                        <tr>
                                            <td>Subtotal</td>
                                            <td>${cartTotal.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <td className='d-flex justify-content-between'>
                                                ${sale ? (cartTotal - 50).toFixed(2) : cartTotal.toFixed(2)}
                                                <span className={sale ? "" : "d-none"}>-$50</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Button
                                    type="submit"
                                    className="add-cart-btn d-flex align-items-center"
                                >
                                    Proceed to checkout
                                </Button>
                            </Col>
                        </Row>
                    </Container>

                </div>
            }
        </>
    )
}

export default ShopCart
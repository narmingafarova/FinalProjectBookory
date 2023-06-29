import React, { useContext, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';
import ShoppingCard from '../cards/ShoppingCard';
import { LangContext } from '../../context/LangContext';
import { useBetween } from 'use-between';
import useSharedUser from '../sharedHook/useSharedUser';
import Swal from 'sweetalert2';
import useSharedLogin from '../sharedHook/useSharedLogin';

const ShopCart: React.FC = () => {
    const { isEmpty, items, cartTotal, emptyCart } = useCart();
    const [coupon, setCoupon] = useState<string>("");
    const [sale, setSale] = useState<boolean>(false);
    const [lang] = useContext(LangContext);
    const { userStatus } = useBetween(useSharedUser);
    const { setShowLogin } = useBetween(useSharedLogin);

    const swalTitle = lang === "en" ? "The order of the books has been accepted" : "Kitabların sifarişi qəbul olunub";
    const swalLog = lang === "en" ? "Please login first!" : "Zəhmət olmasa əvvəlcə daxil olun!";

    const cartCheckout = () => {
        if (userStatus !== "") {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: swalTitle,
                showConfirmButton: false,
                timer: 1000
            })
            emptyCart();
        } else {
            Swal.fire({
                title: swalLog,
                timer: 1000,
                timerProgressBar: false,
                showConfirmButton: false,
            })
            setTimeout(() => {
                setShowLogin(true);
            }, 1200);
        }
    }
    return (
        <>
            {isEmpty ?
                <Container className='add-cart text-center mb-5'>
                    <div className="empty-icon text-center">
                        <img src="https://icon-library.com/images/shoppingcart-icon/shoppingcart-icon-29.jpg" alt="empty" width="300px" />
                    </div>
                    <h5 className='mb-4'>{lang === "en" ? "Your cart is currently empty." : "Səbətiniz hazırda boşdur."}</h5>
                    <LinkContainer to="/shop">
                        <a href="/" className='text-decoration-none section-btn'>
                            {lang === "en" ? "Return to shop" : "Alış-verişə geri dön"}
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
                                    <th>{lang === "en" ? "Product" : "Məhsul"}</th>
                                    <th>{lang === "en" ? "Price" : "Qiymət"}</th>
                                    <th>{lang === "en" ? "Quantity" : "Say"}</th>
                                    <th>{lang === "en" ? "Subtotal" : "Ara Cəmi"}</th>
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
                                                <input type="text" placeholder={lang === "en" ? "Coupon Code" : "Kupon kodu"} onChange={(e) => { setCoupon(e.target.value) }} />
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
                                                    {lang === "en" ? "Apply coupon" : "Kuponu tətbiq edin"}
                                                </Button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Row className="d-flex flex-row-reverse mt-4">
                            <Col sm={12} md={6}>
                                <h5>{lang === "en" ? "Cart totals" : "Səbət cəmi"}</h5>
                                <Table bordered className="totals">
                                    <tbody>
                                        <tr>
                                            <td>{lang === "en" ? "Subtotal" : "Ara Cəmi"}</td>
                                            <td>${cartTotal.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td>{lang === "en" ? "Total" : "Cəmi"}</td>
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
                                    onClick={cartCheckout}
                                >
                                    {lang === "en" ? "Proceed to checkout" : "Alış-verişi tamamla"}
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
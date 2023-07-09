import React, { useContext } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { LangContext } from '../../context/LangContext';
import { useCart } from 'react-use-cart';
import { useBetween } from 'use-between';
import useSharedCanvas from '../sharedHook/useSharedCanvas';
import { Basket } from 'react-bootstrap-icons';

const WishListCard = ({ item }: any) => {
    const [lang] = useContext(LangContext)
    const { addItem } = useCart();
    const { setShowCanvas } = useBetween(useSharedCanvas);
    return (
        <tr>
            <td><img src={item.image} alt="book" width={80} /></td>
            <td>
                <div className="wish-info d-flex flex-column">
                    <LinkContainer to={`/shop/${item.id}`}>
                        <strong>{item.title}</strong>
                    </LinkContainer>
                    <span>${item.price}</span>
                </div>
            </td>
            <td>
                <LinkContainer to={window.location.pathname}>
                    <a href="/" className='text-decoration-none section-btn' onClick={() => { addItem(item); setShowCanvas(true); }}>
                        <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
                    </a>
                </LinkContainer>
            </td>
            <td>
                <LinkContainer to="/wishlist">
                    <a
                        href="/"
                        className="text-decoration-none delete-btn"
                    >
                        x
                    </a>
                </LinkContainer>
            </td>
        </tr>
    )
}

export default WishListCard
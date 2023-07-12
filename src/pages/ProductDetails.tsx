import React, { useCallback, useContext, useState } from 'react'
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { BookContext } from '../context/BookContext'
import Rating from '../components/Rating'
import ScrollToTop from '../components/ScrollToTop'
import { LinkContainer } from 'react-router-bootstrap'
import { useCart } from 'react-use-cart'
import { useBetween } from 'use-between'
import useSharedCanvas from '../components/sharedHook/useSharedCanvas'
import BookCard from '../components/cards/BookCard'
import { LangContext } from '../context/LangContext'
import { useDispatch } from 'react-redux'
import { addWish, removeWish } from '../managers/action/wishAction'

const ProductDetails = () => {
  const [books] = useContext(BookContext);

  const [quantity, setQuantity] = useState<number>(1);
  const { addItem } = useCart();
  const { setShowCanvas } = useBetween(useSharedCanvas);

  const [activeTitle, setActiveTitle] = useState<number>(1);

  const random = Math.floor(Math.random() * (30 - 0 + 1)) + 0;

  const { id } = useParams();
  const details = books.find((item: any) => item.id.toString() === id);

  const [lang] = useContext(LangContext);

  const dispatch = useDispatch()

  const local: any = localStorage.getItem("wish");
  const wishData: any = local ? JSON.parse(local).find((item: any) => item.id == id) : false;

  const [wishStatus, setWishStatus] = useState<string>(wishData ? "solid" : "regular");

  const findWish = (id: any) => {
    const local: any = localStorage.getItem("wish");
    const wishData: any = local ? JSON.parse(local).find((item: any) => item.id == id) : false;
    return wishData ? true : false;
  }

  const wishClick = useCallback(() => {
    if (findWish(id)) {
      dispatch(removeWish({ id: details.id }));
      setWishStatus("regular");
    } else {
      dispatch(addWish(details));
      setWishStatus("solid");
    }
  }, [])

  return (
    <>
      <ScrollToTop />
      {!details ?
        <Container className='my-5 no-details'>
          <div className="no-details-content d-flex align-items-center mb-3">
            <i className="fa-regular fa-calendar me-3"></i>
            <p className='mb-0'>{lang === "en" ? "We don't have such a book" : "Bizim belə bir kitabımız yoxdur"}</p>
          </div>
          <LinkContainer to="/shop">
            <a href="/" className='text-decoration-none section-btn'>
              {lang === "en" ? "Return to shop" : "Alış-verişə qayıt"}
            </a>
          </LinkContainer>
        </Container>
        :
        <Container className='details-page mb-5'>
          <div className="details-breadcrumb">
            <Breadcrumb className='pt-4 pb-3'>
              <Breadcrumb.Item href="/" className='text-uppercase'>{lang === "en" ? "Home" : "Ana səhifə"}</Breadcrumb.Item>
              <Breadcrumb.Item href="/shop" className='text-uppercase'>{details.category[1] ?? details.category[0]}</Breadcrumb.Item>
              <Breadcrumb.Item active className='text-uppercase'>{details.title}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="book-detail mb-5">
            <Row className='justify-content-center'>
              <Col sm={12} md={6} className='book-photo me-4'>
                <img src={details.image} alt="book" width="100%" />
              </Col>
              <Col sm={12} md={5} className='book-info'>
                <div className="info-title">
                  <div className={`${details.stock ? "stock-mode sale" : "stock-mode sold"}`}>
                    {details.stock && lang === "en" ? "In Stock" : details.stock && lang === "az" ? "Stokda var" : lang === "en" ? "Sold Out" : "Tükənib"}
                  </div>
                </div>
                <div className="book-title">
                  <div className="book-name">{details.title}</div>
                  <div className="book-author-rate d-flex">
                    <div className="author">
                      {lang === "en" ? "Author" : "Yazıçı"}: &nbsp;
                      <LinkContainer to={`/author/${details.author}`}>
                        <span>{details.author}</span>
                      </LinkContainer>
                    </div>
                    <div className="rate">
                      <Rating star={details.star} count="5" />
                    </div>
                    <div className="sku">
                      SKU: &nbsp; <span>{details.sku}</span>
                    </div>
                  </div>
                </div>
                <div className="price-desc">
                  <div className="price">${!details.price.toString().split(".")[1]
                    ? details.price.toString().concat(".00")
                    : details.price.toString().split(".")[1].length === 1
                      ? details.price.toString().concat("0")
                      : details.price}</div>
                  <div className="brief-desc">{details.briefDescription}</div>
                </div>
                <label htmlFor="quantity">{lang === "en" ? "Quantity" : "Say"}</label>
                <div className="modal-actions d-flex justify-content-start align-items-center pt-0 mt-1">
                  <div className="modal-quantity d-flex align-items-center me-2">
                    <button className="d-flex align-items-center justify-content-center" onClick={() => {
                      quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
                    }}>-</button>
                    <input type="number" readOnly id="quantity" name="quantity" min="1" max="999" value={quantity} />
                    <button className="d-flex align-items-center justify-content-center" onClick={() => { setQuantity(quantity + 1) }}>+</button>
                  </div>
                  <div className="resp-btns d-flex align-items-center">
                    <LinkContainer to={`/shop/${details.id}`}>
                      <a href="/" className={`text-decoration-none section-btn me-2 ${details.stock ? "" : "disable-btn"}`} onClick={() => { addItem(details, quantity); setShowCanvas(true); }}>
                        <i className="fas fa-shopping-basket"></i>  <span>&nbsp;{lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
                      </a>
                    </LinkContainer>
                    <Button variant="none" className="detail-wish d-flex align-items-center" onClick={() => { wishClick() }}>
                      <i className={`fa-${wishStatus} fa-heart me-1`}></i>
                      <span>{lang === "en" ? "Add to wishlist" : "Bəyənilənlərə əlavə et"}</span>
                    </Button>
                  </div>
                </div>
                <div className="modal-cat-tag">
                  <div className="categories d-flex align-items-start">
                    <span>{lang === "en" ? "Categories" : "Kateqoriyalar"}: </span>
                    <div className="list ms-2 d-flex flex-wrap">
                      {details.category.map((item: any, id: any) => {
                        return (
                          <>
                            <LinkContainer to="/shop">
                              <span className="d-inline">{item}{item === details.category[details.category.length - 1] ? "" : ','}</span>
                            </LinkContainer>
                            <span style={{ whiteSpace: 'pre-wrap' }}> </span>
                          </>
                        )
                      })}
                    </div>
                  </div>
                  <div className="tags d-flex align-items-start">
                    <span>{lang === "en" ? "Tags" : "Etiketlər"}: &nbsp;</span>
                    <div className="list ms-2 d-flex flex-wrap">
                      {details.tags.map((item: any, id: any) => {
                        return (
                          <>
                            <LinkContainer to="/shop">
                              <span className="d-inline">{item}{item === details.tags[details.tags.length - 1] ? "" : ","}</span>
                            </LinkContainer>
                            <span style={{ whiteSpace: 'pre-wrap' }}> </span>
                          </>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="additional-data mb-5">
            <div className="data-titles d-flex justify-content-center">
              <h3 className={`mb-0 ${activeTitle === 1 ? "active-title" : ""}`} onClick={() => { setActiveTitle(1) }}>{lang === "en" ? "Description" : "Təsvir"}</h3>
              <h3 className={`mb-0 ${activeTitle === 2 ? "active-title" : ""}`} onClick={() => { setActiveTitle(2) }}>{lang === "en" ? "Reviews" : "Rəylər"}(5)</h3>
              <h3 className={`mb-0 ${activeTitle === 3 ? "active-title" : ""}`} onClick={() => { setActiveTitle(3) }}>{lang === "en" ? "Vendor Info" : "Satıcı Haqqında"}</h3>
            </div>
            <div className="data-content">
              <div className={`desc-data ${activeTitle === 1 ? "d-block" : "d-none"}`}>
                <p className='mb-0'>{details.description}</p>
              </div>
              <div className={`review-data ${activeTitle === 2 ? "d-block" : "d-none"}`}>
                <div className="review-item mb-4">
                  <div className="person-info d-flex align-items-center">
                    <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g" alt="person" width={50} />
                    <div className="person-data ms-2">
                      <Rating star={3} count={0} />
                      <div className="person-name d-flex align-items-center">
                        <h4 className='me-2 mb-0'>Join Hiddleston</h4>
                        <span>February 15, 2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="person-review">
                    I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.
                  </div>
                </div>
                <div className="review-item mb-4">
                  <div className="person-info d-flex align-items-center">
                    <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g" alt="person" width={50} />
                    <div className="person-data ms-2">
                      <Rating star={3} count={0} />
                      <div className="person-name d-flex align-items-center">
                        <h4 className='me-2 mb-0'>Kenneth R. Myers </h4>
                        <span>February 15, 2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="person-review">
                    The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.
                  </div>
                </div>
                <div className="review-item mb-4">
                  <div className="person-info d-flex align-items-center">
                    <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g" alt="person" width={50} />
                    <div className="person-data ms-2">
                      <Rating star={4} count={0} />
                      <div className="person-name d-flex align-items-center">
                        <h4 className='me-2 mb-0'>Mike Addington</h4>
                        <span>February 15, 2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="person-review">
                    Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware
                  </div>
                </div>
                <div className="review-item mb-4">
                  <div className="person-info d-flex align-items-center">
                    <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g" alt="person" width={50} />
                    <div className="person-data ms-2">
                      <Rating star={5} count={0} />
                      <div className="person-name d-flex align-items-center">
                        <h4 className='me-2 mb-0'>Ervin Arlington</h4>
                        <span>February 15, 2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="person-review">
                    The Ralph Lauren quaility is here in abundance. My husband always says that the Lauren polos fit better and last longer than any other brand.I love the new “heathered” color and the price is always excellent through shop
                  </div>
                </div>
                <div className="review-item">
                  <div className="person-info d-flex align-items-center">
                    <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g" alt="person" width={50} />
                    <div className="person-data ms-2">
                      <Rating star={5} count={0} />
                      <div className="person-name d-flex align-items-center">
                        <h4 className='me-2 mb-0'>Patrick M. Newman</h4>
                        <span>February 15, 2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="person-review">
                    My son loved this Jacket for his Senior Prom… He got sooo many compliments! He is slim build 5’11 and 150lbs … I ordered a large … it was a little big … but it was fine!
                  </div>
                </div>
              </div>
              <div className={`vendor-data ${activeTitle === 3 ? "d-block" : "d-none"}`}>
                <div className="name">{lang === "en" ? "Store Name" : "Mağaza Adı"}: <span>{details.vendorInfo.storeName}</span></div>
                <div className="vendor">{lang === "en" ? "Vendor" : "Satıcı"}: <span>{details.vendorInfo.vendor}</span></div>
                <div className="address">{lang === "en" ? "Address" : "Ünvan"}: <span>{details.vendorInfo.address}</span></div>
                <div className="rate d-flex align-items-center"><span className='me-3'>{details.vendorInfo.rating} {lang === "en" ? "rating from" : "reytinq"} {details.vendorInfo.review} {lang === "en" ? "reviews" : "rəydən"}</span> <Rating star={details.vendorInfo.rating} count={0} /></div>
              </div>
            </div>
          </div>
          <div className="section-header mb-4">
            <div className="row">
              <div className="col-8 col-sm-4 col-md-3">
                <h4 className='mb-0'>{lang === "en" ? "Related products" : "Əlaqəli məhsullar"}</h4>
              </div>
              <div className="col-4 col-sm-8 col-md-9 d-flex justify-content-center align-items-center">
                <div className="divider-line"></div>
              </div>
            </div>
          </div>
          <Row className='mode-cards gy-4'>
            {books.slice(random, random + 6).map((item: any) => {
              return (<Col sm={6} md={2} className='px-0 detail-mode'>
                <BookCard key={item.id} item={item} id={item.id} image={item.image} title={item.title} author={item.author} price={item.price} star={item.star} category={item.category} tags={item.tags} cutTitle={true} flexStyle='flex-column' briefDesc={item.briefDescription} listChange={false} stock={item.stock}/>
              </Col>)
            })}
          </Row>
        </Container>
      }
    </>
  )
}

export default ProductDetails
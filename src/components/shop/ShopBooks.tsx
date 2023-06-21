import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BookContext } from "../../context/BookContext";
import BookCard from "../cards/BookCard";
import { GridFill, Dot } from "react-bootstrap-icons";
import Rating from "../Rating";
import { LinkContainer } from "react-router-bootstrap";
import Pagination from "../Pagination";
import { Slider } from "@mui/material";

const ShopBooks = () => {
  const [books, setBooks] = useContext(BookContext);

  // For categories
  const [category, setCategory] = useState<any>();

  // For authors
  const [authors, setAuthors] = useState<any>();

  // For checked catgeory
  const [activeCat, setActiveCat] = useState<number | null>()

  // For ratings
  const [five, setFive] = useState<number>();
  const [fiveBook, setFiveBook] = useState<number>();

  const [four, setFour] = useState<number>();
  const [fourBook, setFourBook] = useState<number>();

  const [three, setThree] = useState<number>();
  const [threeBook, setThreeBook] = useState<number>();

  const [rateBooks, setRateBooks] = useState<any>();

  // For list view
  const [colValue, setColValue] = useState<number>(4);
  const [flexMode, setFlexMode] = useState<string>("flex-column");

  // List Buttons
  const [prevBtn, setPrevbtn] = useState<number | null>(1);
  const [classname, setClassname] = useState<string>("active");
  const [secClass, setSecclass] = useState<string>("");

  // Sorting
  const [sortState, setSortState] = useState<string>("");

  // For Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(12);

  // For price filter
  const [range, setRange] = React.useState<any>([0, 100]);
  const [priceFilter, setPriceFilter] = useState<any>();

  useEffect(() => {
    // For ratings
    const fiveStar = books.filter((item: any) => item.star >= 4.4);
    const fourStar = books.filter(
      (item: any) => item.star >= 3.4 && item.star < 4.4
    );
    const threeStar = books.filter(
      (item: any) => item.star >= 2.4 && item.star < 3.4
    );
    setFive(fiveStar.length);
    setFiveBook(fiveStar);
    setFour(fourStar.length);
    setFourBook(fourStar);
    setThree(threeStar.length);
    setThreeBook(threeStar);
  }, [books]);

  const filterCategory = (cat: string) => {
    // const catItem = books.filter((item: any) => item.category.map((itemCat: any) => itemCat) === cat);
    // const catItem = books.filter((item: any) => {
    // for (let i = 0; i < item.category.length; i++) {
    //     let res = item.category[i] === cat ? item : ""
    // }
    // return res;
    // });
    const catItem = books.filter(
      (item: any) =>
        item.category[0] === cat ||
        item.category[1] === cat ||
        item.category[2] === cat ||
        item.category[3] === cat ||
        item.category[4] === cat ||
        item.category[5] === cat
    );
    setCategory(catItem);
  };

  const filterAuthor = (author: string) => {
    const newAuthor = books.filter((item: any) => item.author === author);
    setAuthors(newAuthor);
  };

  const priceChanges = (e: any, newValue: any) => {
    setRange(newValue);
  }

  const sortingProducts = (e: any) => {
    setSortState(e.target.value);
    switch (sortState) {
      case "price-desc":
        setBooks(books.sort((a: any, b: any) => a.price - b.price));
        console.log("low");
        break;
      case "price":
        setBooks(books.sort((a: any, b: any) => b.price - a.price));
        console.log("high");
        break;
      case "menu_order":
        setBooks(books.sort((a: any, b: any) => null));
        console.log("first");
        break;
      default:
        setBooks(books.sort((a: any, b: any) => null));
        console.log("default");
        break;
    }
  };

  const filterPrice = () => {
    const price = books.filter((item: any) => {
      return item.price >= range[0] * 10 && item.price <= range[1] * 10;
    })
    setPriceFilter(price);
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentBooks = books.slice(firstPostIndex, lastPostIndex);
  const currentCategories = category?.slice(firstPostIndex, lastPostIndex);
  const currentFilters = priceFilter?.slice(firstPostIndex, lastPostIndex);
  const currentAuthors = authors?.slice(firstPostIndex, lastPostIndex);
  const currentRates = rateBooks?.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <Container className="shop-books">
        <Row className="mt-5">
          <Col sm={12} md={3} className="pe-4">
            <div className="shop-category mb-4">
              <div className="cat-title d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Genre</h4>
                <Button
                  variant="none"
                  className="text-decoration-underline text-danger"
                  onClick={() => {
                    setCategory(undefined);
                    setActiveCat(null)
                  }}
                >
                  Reset
                </Button>
              </div>
              <div className="categories d-flex flex-column align-items-start">
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 1 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="action" onClick={() => { setAuthors(undefined); setActiveCat(1); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("Action & Adventure") }}>Action & Adventure</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 2 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="activity" onClick={() => { setAuthors(undefined); setActiveCat(2); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("Activity Books"); }}>Activity Books</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 3 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="animals" onClick={() => { setAuthors(undefined); setActiveCat(3); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("Animals"); }}>Animals</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 4 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="anthologies" onClick={() => { setAuthors(undefined); setActiveCat(4); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("Anthologies"); }}>Anthologies</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 5 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="art" onClick={() => { setAuthors(undefined); setActiveCat(5); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("Arts & Literature"); }}>Arts & Literature</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 6 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="cars" onClick={() => { setAuthors(undefined); setActiveCat(6); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("Cars & Trucks"); }}>Cars & Trucks</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 7 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="classics" onClick={() => { setAuthors(undefined); setActiveCat(7); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("Classics"); }}>Classics</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 8 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="contemporary" onClick={() => { setAuthors(undefined); setActiveCat(8); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("Contemporary"); }}>Contemporary</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 9 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="cultural" onClick={() => { setAuthors(undefined); setActiveCat(9); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("Cultural"); }}>Cultural</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 10 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="european" onClick={() => { setAuthors(undefined); setActiveCat(10); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("European"); }}>European</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 11 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="foreign" onClick={() => { setAuthors(undefined); setActiveCat(11); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("Foreign Language"); }}>Foreign Language</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 12 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="fiction" onClick={() => { setAuthors(undefined); setActiveCat(12); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("Genre Fiction"); }}>Genre Fiction</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 13 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="historical" onClick={() => { setAuthors(undefined); setActiveCat(13); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("Historical"); }}>Historical</label>
                </div>
                <div className={`category ${activeCat === 14 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="uncategorized" onClick={() => { setAuthors(undefined); setActiveCat(14); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); filterCategory("Uncategorized"); }}>Uncategorized</label>
                </div>
              </div>
            </div>
            <div className="shop-category mb-4">
              <div className="cat-title d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Authors</h4>
                <Button
                  variant="none"
                  className="text-decoration-underline text-danger"
                  onClick={() => {
                    setAuthors(undefined);
                    setActiveCat(null);
                  }}
                >
                  Reset
                </Button>
              </div>
              <div className="categories d-flex flex-column align-items-start">
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 15 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="arthur" onClick={() => {
                    setCategory(undefined);
                    setActiveCat(null); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); setActiveCat(15); filterAuthor("Arthur Gonzalez");
                  }}>Arthur Gonzalez</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 16 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="dana" onClick={() => {
                    setCategory(undefined);
                    setActiveCat(null); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); setActiveCat(16); filterAuthor("Dana Chambers");
                  }}>Dana Chambers</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 17 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="ernesto" onClick={() => {
                    setCategory(undefined);
                    setActiveCat(null); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); setActiveCat(17); filterAuthor("Ernesto Wade");
                  }}>Ernesto Wade</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 18 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="karla" onClick={() => {
                    setCategory(undefined);
                    setActiveCat(null); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); setActiveCat(18); filterAuthor("Karla Newman");
                  }}>Karla Newman</label>
                </div>
                <div className={`category mb-3 d-flex w-100 align-items-center ${activeCat === 19 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="misty" onClick={() => {
                    setCategory(undefined);
                    setActiveCat(null); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); setActiveCat(19); filterAuthor("Misty Figueroa");
                  }}>Misty Figueroa</label>
                </div>
                <div className={`category d-flex w-100 align-items-center ${activeCat === 20 ? "activeCat" : ""}`}>
                  <Dot />
                  <label htmlFor="suzanne" onClick={() => {
                    setCategory(undefined);
                    setActiveCat(null); setRateBooks(undefined); setPriceFilter(undefined); setRange([0, 100]); setActiveCat(20); filterAuthor("Suzanne Casey");
                  }}>Suzanne Casey</label>
                </div>
              </div>
            </div>
            <div className="shop-category mb-4">
              <div className="cat-title d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Filter By Price</h4>
                <Button
                  variant="none"
                  className="text-decoration-underline text-danger"
                  onClick={() => {
                    setRange([0, 100])
                    setPriceFilter(undefined);
                  }}
                >
                  Reset
                </Button>
              </div>
              <div className="categories price-filter d-flex flex-column align-items-start">
                <Slider value={range} onChange={priceChanges} />
                <div className="range-show">Price: <span>${range[0] === 0 ? 10 : range[0] * 10}</span> - <span>${range[1] * 10}</span></div>
                <p className="text-decoration-underline mb-0" onClick={() => { filterPrice(); setAuthors(undefined); setCategory(undefined); setRateBooks(undefined); setActiveCat(null) }}>Filter</p>
              </div>
            </div>
            <div className="shop-category mb-4">
              <div className="cat-title d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Review Ratings</h4>
                <Button
                  variant="none"
                  className="text-decoration-underline text-danger"
                  onClick={() => {
                    setRateBooks(undefined);
                  }}
                >
                  Reset
                </Button>
              </div>
              <div className="categories d-flex flex-column align-items-start">
                <div
                  className={`w-100 rate-div ${rateBooks === fiveBook ? "active-rate" : ""}`}
                  onClick={() => {
                    setRateBooks(fiveBook);
                    setAuthors(undefined);
                    setCategory(undefined);
                    setActiveCat(null);
                    setPriceFilter(undefined);
                    setRange([0, 100]);
                  }}
                >
                  <Rating star={5} count={five} />
                </div>
                <div
                  className={`w-100 rate-div ${rateBooks === fourBook ? "active-rate" : ""}`}
                  onClick={() => {
                    setRateBooks(fourBook);
                    setAuthors(undefined);
                    setCategory(undefined);
                    setActiveCat(null);
                    setPriceFilter(undefined);
                    setRange([0, 100]);
                  }}
                >
                  <Rating star={4} count={four} />
                </div>
                <div
                  className={`w-100 rate-div ${rateBooks === threeBook ? "active-rate" : ""}`}
                  onClick={() => {
                    setRateBooks(threeBook);
                    setAuthors(undefined);
                    setCategory(undefined);
                    setActiveCat(null);
                    setPriceFilter(undefined);
                    setRange([0, 100]);
                  }}
                >
                  <Rating star={3} count={three} />
                </div>
              </div>
            </div>
            <div className="shop-category feature-category">
              <h4 className="mb-0">Featured Books</h4>
              <div className="categories d-flex flex-column align-items-start">
                {books.slice(15, 18).map((item: any) => {
                  return (
                    <div
                      key={item.id}
                      className="d-flex mb-3 justify-content-center align-items-center"
                    >
                      <LinkContainer
                        to={`/shop/${item.id}`}
                        className="feature-img"
                      >
                        <img src={item.image} alt="book" width="80px" />
                      </LinkContainer>
                      <div className="feature-name ps-4">
                        <LinkContainer to={`/shop/${item.id}`}>
                          <h5 className="mb-0">{item.title}</h5>
                        </LinkContainer>
                        <span>
                          {item.category[0].length > 15
                            ? item.category[0].substring(0, 14).concat("...")
                            : item.category[0]}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col sm={12} md={9} className="mode-cards">
            <div className="shop-title-filter d-flex justify-content-between align-items-center mx-3">
              <div className="list-style-icon d-flex justify-content-center align-items-center">
                <Button
                  variant="none"
                  className={`d-flex justify-content-center align-items-center ${classname}`}
                  onClick={() => {
                    setColValue(4);
                    setFlexMode("flex-column");
                    if (prevBtn == null) {
                      setPrevbtn(1);
                      setClassname("active");
                      setSecclass("");
                    }
                  }}
                >
                  <GridFill className="me-2" />
                </Button>
                <Button
                  variant="none"
                  className={`d-flex justify-content-center align-items-center ${secClass}`}
                  onClick={() => {
                    setColValue(12);
                    setFlexMode("flex-row");
                    if (prevBtn === 1) {
                      setPrevbtn(null);
                      setSecclass("active");
                      setClassname("");
                    }
                  }}
                >
                  <i className="fa-solid fa-list"></i>
                </Button>
              </div>
              <div className="sort-func d-flex justify-content-center align-items-center">
                <select
                  name="orderby"
                  className="orderby me-3"
                  aria-label="Shop order"
                  defaultValue={"menu_order"}
                  onChange={(e) => sortingProducts(e)}
                >
                  <option value="menu_order">Default sorting</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                  {/* <option value="rating">Sort by average rating</option> */}
                </select>
                <div className="page-item-count ps-3">
                  <span>Show</span>
                  <select
                    name="pageitem"
                    id="pageitem"
                    onChange={(e: any) => {
                      setPostsPerPage(e.target.value);
                    }}
                  >
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12" selected>
                      12
                    </option>
                    <option value="15">15</option>
                    <option value="18">18</option>
                  </select>
                </div>
              </div>
            </div>
            <Row>
              {category !== undefined
                ? currentCategories.map((item: any) => {
                  return (
                    <Col sm={12} md={colValue} key={item.id}>
                      <BookCard
                        item={item}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        author={item.author}
                        price={item.price}
                        star={item.star}
                        category={item.category}
                        tags={item.tags}
                        cutTitle={false}
                        flexStyle={flexMode}
                        briefDesc={item.briefDescription}
                        listChange={flexMode === "flex-column" ? false : true}
                      />
                    </Col>
                  );
                })
                : authors !== undefined
                  ? currentAuthors.map((item: any) => {
                    return (
                      <Col sm={12} md={colValue} key={item.id}>
                        <BookCard
                          item={item}
                          id={item.id}
                          image={item.image}
                          title={item.title}
                          author={item.author}
                          price={item.price}
                          star={item.star}
                          category={item.category}
                          tags={item.tags}
                          cutTitle={false}
                          flexStyle={flexMode}
                          briefDesc={item.briefDescription}
                          listChange={flexMode === "flex-column" ? false : true}
                        />
                      </Col>
                    );
                  })
                  : rateBooks !== undefined
                    ? currentRates.map((item: any) => {
                      return (
                        <Col sm={12} md={colValue} key={item.id}>
                          <BookCard
                            item={item}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            author={item.author}
                            price={item.price}
                            star={item.star}
                            category={item.category}
                            tags={item.tags}
                            cutTitle={false}
                            flexStyle={flexMode}
                            briefDesc={item.briefDescription}
                            listChange={flexMode === "flex-column" ? false : true}
                          />
                        </Col>
                      );
                    })
                    : priceFilter !== undefined ?
                      currentFilters.map((item: any) => {
                        return (
                          <Col sm={12} md={colValue} key={item.id}>
                            <BookCard
                              item={item}
                              id={item.id}
                              image={item.image}
                              title={item.title}
                              author={item.author}
                              price={item.price}
                              star={item.star}
                              category={item.category}
                              tags={item.tags}
                              cutTitle={false}
                              flexStyle={flexMode}
                              briefDesc={item.briefDescription}
                              listChange={flexMode === "flex-column" ? false : true}
                            />
                          </Col>
                        );
                      })
                      : currentBooks.map((item: any) => {
                        return (
                          <Col sm={12} md={colValue} key={item.id}>
                            <BookCard
                              item={item}
                              id={item.id}
                              image={item.image}
                              title={item.title}
                              author={item.author}
                              price={item.price}
                              star={item.star}
                              category={item.category}
                              tags={item.tags}
                              cutTitle={false}
                              flexStyle={flexMode}
                              briefDesc={item.briefDescription}
                              listChange={flexMode === "flex-column" ? false : true}
                            />
                          </Col>
                        );
                      })}
            </Row>
            <Pagination
              totalPosts={
                category?.length
                  ? category?.length
                  : authors?.length
                    ? authors?.length
                    : rateBooks?.length
                      ? rateBooks?.length
                      : priceFilter?.length
                        ? priceFilter?.length
                        : category?.length === 0 ?
                          0 : books.length
              }
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShopBooks;

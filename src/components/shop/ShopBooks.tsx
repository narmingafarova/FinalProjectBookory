import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BookContext } from "../../context/BookContext";
import BookCard from "../cards/BookCard";
import { GridFill } from "react-bootstrap-icons";
import Rating from "../Rating";
import { LinkContainer } from "react-router-bootstrap";
import Pagination from "../Pagination";
import { Slider } from "@mui/material";

const ShopBooks = () => {
  const [books, setBooks] = useContext(BookContext);

  // For categories
  const [category, setCategory] = useState<any>();
  const [catCheck, setCatCheck] = useState<string>("");

  // For authors
  const [authors, setAuthors] = useState<any>();
  const [authorCheck, setAuthorCheck] = useState<string>("");

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

  const [range, setRange] = React.useState([0, 100]);

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

  function priceChanges(event: any, newValue: any) {
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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentBooks = books.slice(firstPostIndex, lastPostIndex);
  const currentCategories = category?.slice(firstPostIndex, lastPostIndex);
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
                    setCatCheck("");
                    setCategory(undefined);
                  }}
                >
                  Reset
                </Button>
              </div>
              <div className="categories d-flex flex-column align-items-start">
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="action"
                    id="action"
                    onChange={() => {
                      filterCategory("Action & Adventure");
                      setCatCheck("action");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "action" ? true : false}
                  />
                  <label htmlFor="action">Action & Adventure</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="activity"
                    id="activity"
                    onChange={() => {
                      filterCategory("Activity Books");
                      setCatCheck("activity");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "activity" ? true : false}
                  />
                  <label htmlFor="activity">Activity Books</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="animals"
                    id="animals"
                    onChange={() => {
                      filterCategory("Animals");
                      setCatCheck("animals");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "animals" ? true : false}
                  />
                  <label htmlFor="animals">Animals</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="anthologies"
                    id="anthologies"
                    onChange={() => {
                      filterCategory("Anthologies");
                      setCatCheck("anthologies");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "anthologies" ? true : false}
                  />
                  <label htmlFor="anthologies">Anthologies</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="art"
                    id="art"
                    onChange={() => {
                      filterCategory("Arts & Literature");
                      setCatCheck("art");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "art" ? true : false}
                  />
                  <label htmlFor="art">Arts & Literature</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="cars"
                    id="cars"
                    onChange={() => {
                      filterCategory("Cars & Trucks");
                      setCatCheck("cars");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "cars" ? true : false}
                  />
                  <label htmlFor="cars">Cars & Trucks</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="classics"
                    id="classics"
                    onChange={() => {
                      filterCategory("Classics");
                      setCatCheck("classics");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "classics" ? true : false}
                  />
                  <label htmlFor="classics">Classics</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="contemporary"
                    id="contemporary"
                    onChange={() => {
                      filterCategory("Contemporary");
                      setCatCheck("contemporary");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "contemporary" ? true : false}
                  />
                  <label htmlFor="contemporary">Contemporary</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="cultural"
                    id="cultural"
                    onChange={() => {
                      filterCategory("Cultural");
                      setCatCheck("cultural");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "cultural" ? true : false}
                  />
                  <label htmlFor="cultural">Cultural</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="european"
                    id="european"
                    onChange={() => {
                      filterCategory("European");
                      setCatCheck("european");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "european" ? true : false}
                  />
                  <label htmlFor="european">European</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="foreign"
                    id="foreign"
                    onChange={() => {
                      filterCategory("Foreign Language");
                      setCatCheck("foreign");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "foreign" ? true : false}
                  />
                  <label htmlFor="foreign">Foreign Language</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="fiction"
                    id="fiction"
                    onChange={() => {
                      filterCategory("Genre Fiction");
                      setCatCheck("fiction");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "fiction" ? true : false}
                  />
                  <label htmlFor="fiction">Genre Fiction</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="historical"
                    id="historical"
                    onChange={() => {
                      filterCategory("Historical");
                      setCatCheck("historical");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "historical" ? true : false}
                  />
                  <label htmlFor="historical">Historical</label>
                </div>
                <div className="category">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="uncategorized"
                    id="uncategorized"
                    onChange={() => {
                      filterCategory("Uncategorized");
                      setCatCheck("uncategorized");
                      setAuthorCheck("");
                      setAuthors(undefined);
                    }}
                    checked={catCheck === "uncategorized" ? true : false}
                  />
                  <label htmlFor="uncategorized">Uncategorized</label>
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
                    setAuthorCheck("");
                    setAuthors(undefined);
                  }}
                >
                  Reset
                </Button>
              </div>
              <div className="categories d-flex flex-column align-items-start">
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="arthur"
                    id="arthur"
                    onChange={() => {
                      filterAuthor("Arthur Gonzalez");
                      setAuthorCheck("arthur");
                      setCategory(undefined);
                      setCatCheck("");
                    }}
                    checked={authorCheck === "arthur" ? true : false}
                  />
                  <label htmlFor="arthur">Arthur Gonzalez</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="dana"
                    id="dana"
                    onChange={() => {
                      filterAuthor("Dana Chambers");
                      setAuthorCheck("dana");
                      setCategory(undefined);
                      setCatCheck("");
                    }}
                    checked={authorCheck === "dana" ? true : false}
                  />
                  <label htmlFor="dana">Dana Chambers</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="ernesto"
                    id="ernesto"
                    onChange={() => {
                      filterAuthor("Ernesto Wade");
                      setAuthorCheck("ernesto");
                      setCategory(undefined);
                      setCatCheck("");
                    }}
                    checked={authorCheck === "ernesto" ? true : false}
                  />
                  <label htmlFor="ernesto">Ernesto Wade</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="karla"
                    id="karla"
                    onChange={() => {
                      filterAuthor("Karla Newman");
                      setAuthorCheck("karla");
                      setCategory(undefined);
                      setCatCheck("");
                    }}
                    checked={authorCheck === "karla" ? true : false}
                  />
                  <label htmlFor="karla">Karla Newman</label>
                </div>
                <div className="category mb-3 d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="misty"
                    id="misty"
                    onChange={() => {
                      filterAuthor("Misty Figueroa");
                      setAuthorCheck("misty");
                      setCategory(undefined);
                      setCatCheck("");
                    }}
                    checked={authorCheck === "misty" ? true : false}
                  />
                  <label htmlFor="misty">Misty Figueroa</label>
                </div>
                <div className="category d-flex w-100 align-items-center">
                  <input
                    className="me-2"
                    type="checkbox"
                    name="suzanne"
                    id="suzanne"
                    onChange={() => {
                      filterAuthor("Suzanne Casey");
                      setAuthorCheck("suzanne");
                      setCategory(undefined);
                      setCatCheck("");
                    }}
                    checked={authorCheck === "suzanne" ? true : false}
                  />
                  <label htmlFor="suzanne">Suzanne Casey</label>
                </div>
              </div>
            </div>
            <div className="shop-category mb-4">
              <div className="cat-title d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Filter By Price</h4>
                <Button
                  variant="none"
                  className="text-decoration-underline text-danger"
                >
                  Reset
                </Button>
              </div>
              <div className="categories price-filter d-flex flex-column align-items-start">
                <Slider value={range} onChange={priceChanges} />
                <div className="range-show">Price: <span>${range[0] === 0 ? 10 : range[0] * 10}</span> - <span>${range[1] * 10}</span></div>
                <p className="text-decoration-underline mb-0">Filter</p>
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
                    setAuthorCheck("");
                    setCategory(undefined);
                    setCatCheck("");
                  }}
                >
                  <Rating star={5} count={five} />
                </div>
                <div
                  className={`w-100 rate-div ${rateBooks === fourBook ? "active-rate" : ""}`}
                  onClick={() => {
                    setRateBooks(fourBook);
                    setAuthors(undefined);
                    setAuthorCheck("");
                    setCategory(undefined);
                    setCatCheck("");
                  }}
                >
                  <Rating star={4} count={four} />
                </div>
                <div
                  className={`w-100 rate-div ${rateBooks === threeBook ? "active-rate" : ""}`}
                  onClick={() => {
                    setRateBooks(threeBook);
                    setAuthors(undefined);
                    setAuthorCheck("");
                    setCategory(undefined);
                    setCatCheck("");
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
                      : books.length
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

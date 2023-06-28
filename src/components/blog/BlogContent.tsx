import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircleFill, Search } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const BlogContent: React.FC = () => {
    const blogData = useSelector((blog: any) => blog);
    // prettier-ignore
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

    // Search blog
    const [query, setQuery] = useState<string>("");
    const [searchvalue, setSearchvalue] = useState<string>("");

    // Filter blog
    const [filtered, setFiltered] = useState<any>("");
    const [activeFilter, setActiveFilter] = useState<number>(0);

    const filterBlog = (cat: string) => {
        const catBlog = blogData.filter((item: any) => {
            return item.cat.toLocaleLowerCase().includes(cat);
        });
        setFiltered(catBlog);
    };

    return (
        <Container className="blog-content my-5">
            <Row>
                <Col sm={12} md={8}>
                    {filtered !== ""
                        ? filtered.map((item: any) => {
                            return (
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <img src={item.photo} alt="" width="100%" height="100%" />
                                    </div>
                                    <div className="blog-subinfo">
                                        <span className="text-uppercase">
                                            {
                                                months[
                                                item.date.split("-")[1][0] === "0"
                                                    ? item.date.split("-")[1][1]
                                                    : item.date.split("-")[1]
                                                ]
                                            }{" "}
                                            {item.date.split("-")[2][0] === "0"
                                                ? item.date.split("-")[2][1]
                                                : item.date.split("-")[2]}
                                            , {item.date.split("-")[0]} / by {item.person}
                                        </span>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}...</p>
                                    </div>
                                    <div className="blog-foot">
                                        <p className="text-uppercase mb-0">
                                            in <span>{item.cat}</span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                        : searchvalue !== ""
                            ? blogData
                                .filter((value: any) =>
                                    value.title.toLocaleLowerCase().includes(searchvalue)
                                )
                                .map((item: any) => {
                                    return (
                                        <div className="blog-card">
                                            <div className="blog-img">
                                                <img
                                                    src={item.photo}
                                                    alt=""
                                                    width="100%"
                                                    height="100%"
                                                />
                                            </div>
                                            <div className="blog-subinfo">
                                                <span className="text-uppercase">
                                                    {
                                                        months[
                                                        item.date.split("-")[1][0] === "0"
                                                            ? item.date.split("-")[1][1]
                                                            : item.date.split("-")[1]
                                                        ]
                                                    }{" "}
                                                    {item.date.split("-")[2][0] === "0"
                                                        ? item.date.split("-")[2][1]
                                                        : item.date.split("-")[2]}
                                                    , {item.date.split("-")[0]} / by {item.person}
                                                </span>
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}...</p>
                                            </div>
                                            <div className="blog-foot">
                                                <p className="text-uppercase mb-0">
                                                    in <span>{item.cat}</span>
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })
                            : blogData.map((item: any) => {
                                return (
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={item.photo} alt="" width="100%" height="100%" />
                                        </div>
                                        <div className="blog-subinfo">
                                            <span className="text-uppercase">
                                                {
                                                    months[
                                                    item.date.split("-")[1][0] === "0"
                                                        ? item.date.split("-")[1][1]
                                                        : item.date.split("-")[1]
                                                    ]
                                                }{" "}
                                                {item.date.split("-")[2][0] === "0"
                                                    ? item.date.split("-")[2][1]
                                                    : item.date.split("-")[2]}
                                                , {item.date.split("-")[0]} / by {item.person}
                                            </span>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}...</p>
                                        </div>
                                        <div className="blog-foot">
                                            <p className="text-uppercase mb-0">
                                                in <span>{item.cat}</span>
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                </Col>
                <Col sm={12} md={4}>
                    <div className="blog-filters">
                        <div className="shop-category mb-4">
                            <div className="cat-title d-flex justify-content-between align-items-center">
                                <h4 className="mb-0">Search</h4>
                            </div>
                            <div className="search-blog categories d-flex flex-row align-items-center">
                                <form
                                    onSubmit={(e: any) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <input
                                        type="text"
                                        placeholder="Search ..."
                                        value={query}
                                        onChange={(e) => {
                                            setQuery(e.target.value);
                                        }}
                                    />
                                    <Button
                                        variant="none"
                                        type="submit"
                                        onClick={() => {
                                            setSearchvalue(query);
                                            setActiveFilter(0);
                                            setFiltered("");
                                        }}
                                    >
                                        <Search fontSize={17} />
                                    </Button>
                                </form>
                            </div>
                        </div>
                        <div className="shop-category">
                            <div className="cat-title d-flex justify-content-between align-items-center">
                                <h4 className="mb-0">Categories</h4>
                            </div>
                            <div className="categories d-flex flex-column align-items-start">
                                <div
                                    className={`category d-flex w-100 align-items-center mb-2 ${activeFilter === 1 ? "active-filter" : ""
                                        }`}
                                >
                                    <ArrowRightCircleFill className="me-2" />
                                    <label
                                        htmlFor="arts"
                                        onClick={() => {
                                            filterBlog("arts");
                                            setQuery("");
                                            if (activeFilter === 1) {
                                                setActiveFilter(0);
                                                setFiltered("");
                                            } else {
                                                setActiveFilter(1);
                                            }
                                        }}
                                    >
                                        Arts & Literature
                                    </label>
                                </div>
                                <div
                                    className={`category d-flex w-100 align-items-center mb-2 ${activeFilter === 2 ? "active-filter" : ""
                                        }`}
                                >
                                    <ArrowRightCircleFill className="me-2" />
                                    <label
                                        htmlFor="cultural"
                                        onClick={() => {
                                            filterBlog("cultur");
                                            setQuery("");
                                            if (activeFilter === 2) {
                                                setActiveFilter(0);
                                                setFiltered("");
                                            } else {
                                                setActiveFilter(2);
                                            }
                                        }}
                                    >
                                        Cultural
                                    </label>
                                </div>
                                <div
                                    className={`category d-flex w-100 align-items-center mb-2 ${activeFilter === 3 ? "active-filter" : ""
                                        }`}
                                >
                                    <ArrowRightCircleFill className="me-2" />
                                    <label
                                        htmlFor="europe"
                                        onClick={() => {
                                            filterBlog("europe");
                                            setQuery("");
                                            if (activeFilter === 3) {
                                                setActiveFilter(0);
                                                setFiltered("");
                                            } else {
                                                setActiveFilter(3);
                                            }
                                        }}
                                    >
                                        European
                                    </label>
                                </div>
                                <div
                                    className={`category d-flex w-100 align-items-center mb-2 ${activeFilter === 4 ? "active-filter" : ""
                                        }`}
                                >
                                    <ArrowRightCircleFill className="me-2" />
                                    <label
                                        htmlFor="history"
                                        onClick={() => {
                                            filterBlog("historical");
                                            setQuery("");
                                            if (activeFilter === 4) {
                                                setActiveFilter(0);
                                                setFiltered("");
                                            } else {
                                                setActiveFilter(4);
                                            }
                                        }}
                                    >
                                        Historical
                                    </label>
                                </div>
                                <div
                                    className={`category d-flex w-100 align-items-center ${activeFilter === 5 ? "active-filter" : ""
                                        }`}
                                >
                                    <ArrowRightCircleFill className="me-2" />
                                    <label
                                        htmlFor="uncategorized"
                                        onClick={() => {
                                            filterBlog("uncat");
                                            setQuery("");
                                            if (activeFilter === 5) {
                                                setActiveFilter(0);
                                                setFiltered("");
                                            } else {
                                                setActiveFilter(5);
                                            }
                                        }}
                                    >
                                        Uncategorized
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogContent;

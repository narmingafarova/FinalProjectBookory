import React from 'react'

interface StarType {
    star: any,
    count: any
}

const Rating: React.FC<StarType> = ({ star, count }) => {
    return (
        <div className="rating d-flex align-items-center">
            <span>
                <i
                    style={star >= 0.5 ? { "color": "#fa8c17" } : { "color": "#999" }}
                    className={
                        star >= 1
                            ? "fa-solid fa-star"
                            : star >= 0.5
                                ? "fa-solid fa-star-half-stroke"
                                : "fa-regular fa-star"
                    }
                ></i>
            </span>
            <span>
                <i
                    style={star >= 1.5 ? { "color": "#fa8c17" } : { "color": "#999" }}
                    className={
                        star >= 2
                            ? "fa-solid fa-star"
                            : star >= 1.5
                                ? "fa-solid fa-star-half-stroke"
                                : "fa-regular fa-star"
                    }
                ></i>
            </span>
            <span>
                <i
                    style={star >= 2.5 ? { "color": "#fa8c17" } : { "color": "#999" }}
                    className={
                        star >= 3
                            ? "fa-solid fa-star"
                            : star >= 2.5
                                ? "fa-solid fa-star-half-stroke"
                                : "fa-regular fa-star"
                    }
                ></i>
            </span>
            <span>
                <i
                    style={star >= 3.5 ? { "color": "#fa8c17" } : { "color": "#999" }}
                    className={
                        star >= 4
                            ? "fa-solid fa-star"
                            : star >= 3.5
                                ? "fa-solid fa-star-half-stroke"
                                : "fa-regular fa-star"
                    }
                ></i>
            </span>
            <span>
                <i
                    style={star >= 4.5 ? { "color": "#fa8c17" } : { "color": "#999" }}
                    className={
                        star >= 5
                            ? "fa-solid fa-star"
                            : star >= 4.5
                                ? "fa-solid fa-star-half-stroke"
                                : "fa-regular fa-star"
                    }
                ></i>
            </span>
            <span className='total-star'>{count === 0 ? "" : count}</span>
        </div>
    )
}

export default Rating
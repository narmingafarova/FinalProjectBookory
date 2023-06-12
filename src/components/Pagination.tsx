import React from "react";

interface PaginationType {
    totalPosts: any,
    postsPerPage: any,
    setCurrentPage: any,
    currentPage: any
}

const Pagination: React.FC<PaginationType> = ({ totalPosts, postsPerPage, setCurrentPage, currentPage, }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <>
            <div className='pagination'>
                {pages.map((page, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => { setCurrentPage(page); window.scrollTo(0, 300); }}
                            className={page === currentPage ? "active" : ""}>
                            {page}
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default Pagination;
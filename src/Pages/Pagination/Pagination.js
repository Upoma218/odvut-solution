import React from 'react';
const Pagination = ({ totalCard, cardNumber, setPages }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalCard / cardNumber); i++) {
        pages.push(i)
    }
    return (
        <div className='flex justify-center align-middle items-center mt-12'>
            {
                pages.map((page, index) => {
                    return <button onClick={() => setPages(page)} key={index} className="btn mx-4">{page}</button>
                })
            }
        </div>
    );
};

export default Pagination;
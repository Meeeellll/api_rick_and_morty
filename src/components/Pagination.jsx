import React from 'react'

export const Pagination = ({setPageNumber}) => {
    let next = () => {
        setPageNumber((x) => x + 1);
    };
    let prev = () => {
        setPageNumber((x) => x - 1);
    };

  return (
    <div className='conatiner'>
        <button onClick={prev} className='btn btn-primary'>Prev</button>
        <button onClick={next} className='btn btn-primary'>Next</button>
    </div>
  )
}

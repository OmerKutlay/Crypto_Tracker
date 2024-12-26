import React from 'react';
import { useEffect, useState, useRef, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import currencyListContext from '../store/currencyListContext';
import ExchangesTable from "../components/ExchangesTable";

const itemsPerPage = 20;


const Exchanges = () => {
  const { exchanges } = useContext(currencyListContext);


  const tableRef = useRef();

  const [currentRows, setCurrentRows] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [rowsOffset, setRowsOffset] = useState(0);

  useEffect(() => {
    const endOffset = rowsOffset + itemsPerPage;
    setCurrentRows(exchanges.slice(rowsOffset, endOffset));
    setPageCount(exchanges.length / itemsPerPage);
  }, [rowsOffset, exchanges]);

  const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % exchanges.length;
  setRowsOffset(newOffset);
  tableRef.current.scrollIntoView();
  }
  return (
    <main className='main'>
      <section ref={tableRef}>
        <div className='title'>
          <h4>Exchanges</h4>
        </div>
        <ExchangesTable rows={currentRows}></ExchangesTable>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          randerOnZeroPageCount={null}
          containerClassName='pagination'
          activeClassName='active'
          pageLinkClassName='page-num'
          previousClassName='page-num'
          pageClassName='page-num'
          previousLinkClassName='page-num'
          nextClassName='page-num'
          nextLinkClassName='page-num'
        />
      </section>
    </main>
  );
  };

  export default Exchanges;

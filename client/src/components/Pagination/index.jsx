import React, { useEffect, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { Container, PageButton, PageNumbers } from './PaginationStyles';

const Pagination = ({ data, setProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const handleButtonEffect = (e) => {
    const button = e.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      e.clientX - (button.getBoundingClientRect().left + radius)
    }px`;
    circle.style.top = `${
      e.clientY - (button.getBoundingClientRect().top + radius)
    }px`;

    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 100000);
  };

  const handleNextPage = (e) => {
    handleButtonEffect(e);
    setCurrentPage((prevPage) => prevPage + 1);
    setProducts(getPaginatedData(data, currentPage + 1));
  };

  const handlePrevPage = (e) => {
    handleButtonEffect(e);
    setCurrentPage((prevPage) => prevPage - 1);
    setProducts(getPaginatedData(data, currentPage - 1));
  };

  const handleChangePage = (e, number) => {
    handleButtonEffect(e);
    setCurrentPage(number);
    setProducts(getPaginatedData(data, number));
  };

  const getPaginationGroup = () => {
    // products in page is 9
    const totalPages = Math.ceil(data.length / 9);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  };

  const getPaginatedData = (data, number) => {
    // products in page is 9
    const startIndex = number * 9 - 9;
    const endIndex = startIndex + 9;

    return data.filter((_, index) => index >= startIndex && index < endIndex);
  };

  return (
    <Container>
      <PageButton disabled={currentPage === 1 ? 1 : 0} onClick={handlePrevPage}>
        <MdOutlineKeyboardArrowLeft />
      </PageButton>
      <PageNumbers>
        {getPaginationGroup().map((number) => (
          <li key={number}>
            <PageButton
              active={currentPage === number ? 1 : 0}
              onClick={(e) => handleChangePage(e, number)}
            >
              {number}
            </PageButton>
          </li>
        ))}
      </PageNumbers>
      <PageButton
        disabled={
          currentPage === getPaginationGroup()[getPaginationGroup().length - 1]
            ? 1
            : 0
        }
        onClick={handleNextPage}
      >
        <MdOutlineKeyboardArrowRight />
      </PageButton>
    </Container>
  );
};

export default Pagination;

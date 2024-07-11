
import styled from "styled-components";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  font-family: "Kalam", cursive;
  color:#A6ACAF;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background:none;
  border: none;
  border-radius: 20%;
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.2s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    color: #515A5A;
  }
`;

function Pagination({ numProducts }) {

  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))

  const count = !searchParams.get("count") ? numProducts : Number(searchParams.get("count"))

  const pageCount = Math.ceil(count / PAGE_SIZE)

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next)
    setSearchParams(searchParams)
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev)
    setSearchParams(searchParams)
  }

  if (pageCount <= 1)
    return null;

  return (

    <StyledPagination className="px-2">

      <P className="text-xs">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to <span>{currentPage === pageCount ? count : currentPage * PAGE_SIZE} </span>
        of <span>{count}</span> results
      </P>

      <Buttons>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1} >
          <GoChevronLeft /> <span>Previous</span>
        </PaginationButton>

        <PaginationButton onClick={nextPage} disabled={currentPage === pageCount}>
          <span>Next</span> <GoChevronRight />
        </PaginationButton>
      </Buttons>

    </StyledPagination>

  )
}

export default Pagination
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  //  console.log(showPerPage);

  const Container = styled.div`
    display: flex;
    margin: 0 2rem;
    align-items: center;
    margin-left: 800px;
    margin-top: 360px;
    padding: 13px;
    position: absolute;
    z-index:99999;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      display: flex;
    }
  `;
  const StyledButton = styled.button`
    display: block;
    background-color: transparent;
    color: #1d5ad4;
    font-size: 2rem !important;
    border: none;
    border-radius: 5px;
    height: 20px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
    transition: 0.4s ease-in-out;
    &:hover {
      color: #1a4eb8;
    }
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      margin: 2rem;
    }
  `;

  return (
    <Container>
     
      <StyledButton onClick={() => onButtonClick("prev")}>
        <i class="fas fa-arrow-circle-left"></i>
      </StyledButton>
      <StyledButton onClick={() => onButtonClick("next")}>
        <i className="fas fa-arrow-circle-right"></i>
      </StyledButton>
    </Container>
  );
};

export default Pagination;

import styled from "styled-components";

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 10px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + div img {
      left: 35px;
      -webkit-transform:  rotate(1080deg);
      -ms-transform:  rotate(1080deg);
      transform:  rotate(1080deg);
    }
  }

  div {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    z-index: 100;
    
    img {
      position: absolute;
      height: 30px;
      width: 30px;
      left: -10px;
      bottom: -12px;
      background: url(${(props) => props.icon});
      -webkit-transition: all ease 0.7s;
      transform: rotate(0) scale(1.1);
      transition: all ease 0.7s;
    }
  }
`;

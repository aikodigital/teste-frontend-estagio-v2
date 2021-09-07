import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: ${(props) => `${props.width}vw`};
  height: ${(props) => `${props.height}vh`};
  margin: 20px auto;

  .leaflet-container {
    width: inherit;
    height: inherit;
  }
`;

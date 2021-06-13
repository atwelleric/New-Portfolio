import styled from "styled-components";
import React from "react";
import AvtcCardSvg from "../resources/avtccard.svg";

const Title = styled.h1`
  font-size: 10vw;
  margin: 0;
`;

const AvtcCardImage = styled.img`
  width: 20vw;
  height: 60vh;
  &:hover {
    width: 40vw;
    height: 80vh;
  }
`;

function Home() {
  return (
    <div>
      <AvtcCardImage src={AvtcCardSvg} alt="AVTC Card" />
    </div>
  );
}

export default Home;

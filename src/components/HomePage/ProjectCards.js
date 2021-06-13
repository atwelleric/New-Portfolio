import React from "react";
import styled from "styled-components";
import AvtcCardSvg from "../../resources/avtccard.svg";
import HangmanCardSvg from "../../resources/hangmancard.svg";
import KidsDayCardSvg from "../../resources/kidsdaycard.svg";
import CodeShareCardSvg from "../../resources/codesharecard.svg";
import ArcadeCardSvg from "../../resources/arcadecard.svg";

const Card = styled.img`
  // helps with jagged edges from rotating svg
  -webkit-backface-visibility: hidden;
  position: relative;
  &:hover {
    width: 15vw;
    height: 30vh;
    top: 65vh;
    z-index: 1;
  }
`;

const AvtcCardImage = styled(Card)`
  width: 15vw;
  height: 25vh;
  left: 8vw;
  top: 66vh;
  transform: rotate(-20deg);
  &:hover {
    left: 5vw;
  }
`;

const KidsDayImage = styled(Card)`
  width: 15vw;
  height: 25vh;
  left: -1vw;
  top: 63vh;
  transform: rotate(-10deg);
`;

const HangmanImage = styled(Card)`
  width: 15vw;
  height: 25vh;
  left: -10vw;
  top: 62vh;
`;

const CodeShareImage = styled(Card)`
  width: 15vw;
  height: 25vh;
  left: -18vw;
  top: 63vh;
  transform: rotate(10deg);
`;

const ArcadeImage = styled(Card)`
  margin: 0;
  padding: 0;
  width: 15vw;
  height: 25vh;
  left: -27vw;
  top: 66vh;
  transform: rotate(20deg);
`;

function ProjectCards() {
  return (
    <div>
      <AvtcCardImage src={AvtcCardSvg} alt="AVTC Card" />
      <KidsDayImage src={KidsDayCardSvg} alt="kids day Card" />
      <HangmanImage src={HangmanCardSvg} alt="Hangman Card" />
      <CodeShareImage src={CodeShareCardSvg} alt="CodeShare Card" />
      <ArcadeImage src={ArcadeCardSvg} alt="Arcade Card" />
    </div>
  );
}

export default ProjectCards;

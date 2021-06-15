import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import AvtcCardSvg from "../../resources/avtccard.svg";
import HangmanCardSvg from "../../resources/hangmancard.svg";
import KidsDayCardSvg from "../../resources/kidsdaycard.svg";
import CodeShareCardSvg from "../../resources/codesharecard.svg";
import ArcadeCardSvg from "../../resources/arcadecard.svg";
import { motion } from "framer-motion";

let Card = styled(motion.img)`
  // helps with jagged edges from rotating svg
  -webkit-backface-visibility: hidden;
  position: relative;
  height: 25vh;
  width: 15vw;
  &:hover {
    width: 15vw;
    height: 30vh;
    z-index: 1;
  }
`;

const moveUp = keyframes`
  from{top:65vmin}
  to{top:5vmin}
`;

const moveBack = keyframes`
  from{top:5vmin}
  to{top:65vmin}
`;

const AvtcCardImage = styled(Card)`
  width: 15vw;
  height: 25vh;
  left: 18vmin;
  top: ${(props) => (props.showUp ? `65vmin` : `5vmin`)};
  transform: rotate(-20deg);
  /* &:hover {
    left: 5vw;
  } */
`;

const KidsDayImage = styled(Card)`
  width: 15vw;
  height: 25vh;
  left: -2vmin;
  top: 62vmin;
  transform: rotate(-10deg);
`;

const HangmanImage = styled(Card)`
  width: 15vw;
  height: 25vh;
  left: -20vmin;
  top: 61vmin;
`;

const CodeShareImage = styled(Card)`
  width: 15vw;
  height: 25vh;
  left: -38vmin;
  top: 62vmin;
  transform: rotate(10deg);
`;

const ArcadeImage = styled(Card)`
  margin: 0;
  padding: 0;
  width: 15vw;
  height: 25vh;
  left: -57vmin;
  top: 65vmin;
  transform: rotate(20deg);
`;

//Clear isActive array
//OnClick selects card and adds to isActive array
//isActive toggles class
//each card needs different is active styled component
//string concat isActive+"avtccard"?

export default function ProjectCards(props) {
  // const [avtcSelected, setAvtcSelected] = useState(false);
  // const [kidsDaySelected, setKidsDaySelected] = useState(false);
  // const [hangmanSelected, setHangmanSelected] = useState(false);
  // const [codeShareSelected, setCodeShareSelected] = useState(false);
  // const [arcadeSelected, setArcadeSelected] = useState(false);

  // const reset = () => {
  //   setAvtcSelected(false);
  //   setKidsDaySelected(false);
  //   setHangmanSelected(false);
  //   setCodeShareSelected(false);
  //   setArcadeSelected(false);
  // };

  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
    console.log(isClick);
  };

  return (
    <div>
      <AvtcCardImage
        src={AvtcCardSvg}
        id="avtc"
        alt="AVTC Card"
        showUp={isClick}
        onTap={handleClick}
      />

      <KidsDayImage
        src={KidsDayCardSvg}
        alt="kids day Card"
        // onClick={() => setKidsDaySelected(true)}
      />
      <HangmanImage src={HangmanCardSvg} alt="Hangman Card" />
      <CodeShareImage src={CodeShareCardSvg} alt="CodeShare Card" />
      <ArcadeImage src={ArcadeCardSvg} alt="Arcade Card" />
    </div>
  );
}

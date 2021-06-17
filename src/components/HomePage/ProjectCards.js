import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import AvtcCardSvg from "../../resources/avtccard.svg";
import HangmanCardSvg from "../../resources/hangmancard.svg";
import KidsDayCardSvg from "../../resources/kidsdaycard.svg";
import CodeShareCardSvg from "../../resources/codesharecard.svg";
import ArcadeCardSvg from "../../resources/arcadecard.svg";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 15vh 50vh 25vh;
  /* justify-content: center; */
`;

let Card = styled(motion.img)`
  // helps with jagged edges from rotating svg
  -webkit-backface-visibility: hidden;
  position: relative;
  &:hover {
    height: 25vh;
    z-index: 1;
  }
`;

// This broke the click back when clicking on an already active card

let ActiveCard = styled.img`
  -webkit-backface-visibility: hidden;
  grid-row: 2;
  grid-column: 1;
  justify-self: start;
  height: 35vh;
`;

const AvtcCardImage = styled(Card)`
  grid-row: 3;
  grid-column: 1;
  justify-self: end;
  left: -3vw;
  height: 20vh;
  transform: rotate(-20deg);
`;

const AvtcCardActive = styled(ActiveCard)``;

const KidsDayImage = styled(Card)`
  grid-row: 3;
  grid-column: 1;
  justify-self: end;
  bottom: 2vh;
  height: 20vh;
  transform: rotate(-10deg);
`;
const KidsDayCardActive = styled(ActiveCard)``;

const HangmanImage = styled(Card)`
  grid-row: 3;
  grid-column: 2;
  left: -3vw;
  height: 20vh;
  bottom: 3vh;
`;

const HangmanCardActive = styled(ActiveCard)``;

const CodeShareImage = styled(Card)`
  grid-row: 3;
  grid-column: 2;
  left: 1vw;
  bottom: 2vh;
  height: 20vh;
  transform: ${(props) =>
    props.showCodeShare ? `rotate(0deg)` : `rotate(10deg)`};
`;

const CodeShareCardActive = styled(ActiveCard)`
  grid-row: 2;
  grid-column: 1;
  justify-self: start;
  height: 35vh;
`;

const ArcadeImage = styled(Card)`
  grid-row: 3;
  grid-column: 2;
  left: 5vw;
  height: 20vh;
  transform: ${(props) =>
    props.showArcade ? `rotate(0deg)` : `rotate(20deg)`};
`;

const ArcadeCardActive = styled(ActiveCard)``;

//Title
const Title = styled.h1`
  /* display: flex;
  justify-content: end; */
  /* display: grid;
  grid-row: 1;
  grid-column: 3; */
  font-size: 45px;
  padding: 30px;
`;

// Github Repo link
const GithubLink = styled.a`
  display: flex;
  justify-content: start;
  grid-row: 1;
  font-size: 45px;
  padding: 30px;
`;

// Deployed version link
const DeployedLink = styled.a`
  display: flex;
  justify-content: start;
  font-size: 45px;
  padding: 30px;
`;
// youtube embeded
const Youtube = styled(ReactPlayer)`
  //does not work this way
  height: 25px;
  width: 25px;
`;

export default function ProjectCards() {
  const [avtcSelected, setAvtcSelected] = useState(false);
  const [kidsDaySelected, setKidsDaySelected] = useState(false);
  const [hangmanSelected, setHangmanSelected] = useState(false);
  const [codeShareSelected, setCodeShareSelected] = useState(false);
  const [arcadeSelected, setArcadeSelected] = useState(false);

  const reset = () => {
    setAvtcSelected(false);
    setKidsDaySelected(false);
    setHangmanSelected(false);
    setCodeShareSelected(false);
    setArcadeSelected(false);
  };

  const avtcClick = () => {
    reset();
    setAvtcSelected(!avtcSelected);
  };

  const kidsDayClick = () => {
    reset();
    setKidsDaySelected(!kidsDaySelected);
  };

  const hangmanClick = () => {
    reset();
    setHangmanSelected(!hangmanSelected);
  };

  const codeShareClick = () => {
    reset();
    setCodeShareSelected(!codeShareSelected);
  };

  const arcadeClick = () => {
    reset();
    setArcadeSelected(!arcadeSelected);
  };

  return (
    <Container>
      {/* ternary operation for avtc card active vs innactive
	  
	 */}
      {avtcSelected ? (
        <AvtcCardActive
          src={AvtcCardSvg}
          alt="AVTC Card"
          showAvtc={avtcSelected}
          onTap={avtcClick}
        />
      ) : (
        <AvtcCardImage
          src={AvtcCardSvg}
          id="avtc"
          alt="AVTC Card"
          showAvtc={avtcSelected}
          onTap={avtcClick}
        />
      )}
      {/* 
	  
	 
	 
	  toggles avtc Title and links when avtc is active
	  
	 
	 
	 */}
      {avtcSelected ? <Title>Avtc</Title> : null}
      {avtcSelected ? (
        <GithubLink href="https://github.com/atwelleric/New-Portfolio/tree/devEA">
          Github
        </GithubLink>
      ) : null}
      {avtcSelected ? (
        <DeployedLink href="www.deployed.com">Deployed</DeployedLink>
      ) : null}
      {avtcSelected ? (
        <Youtube url="https://www.youtube.com/watch?v=NtKEOM1CTQ8&list=PLG5aTkXQ4DLJrYkLzbquVzhT8BgOf80pK" />
      ) : null}
      {/* 
	  
	 
	 ternary operation for Kids Day card active vs innactive
	 
	 
	 */}
      {kidsDaySelected ? (
        <KidsDayCardActive
          src={KidsDayCardSvg}
          alt="kids day Card"
          showKidsDay={kidsDaySelected}
          onTap={kidsDayClick}
        />
      ) : (
        <KidsDayImage
          src={KidsDayCardSvg}
          alt="kids day Card"
          showKidsDay={kidsDaySelected}
          onTap={kidsDayClick}
        />
      )}
      {/* 
	  
	 
	 toggles KidsDay Title and links when avtc is active
	 
	 
	 */}
      {kidsDaySelected ? <Title>Kids Day</Title> : null}
      {kidsDaySelected ? (
        <GithubLink href="https://github.com/atwelleric/New-Portfolio/tree/devEA">
          Github
        </GithubLink>
      ) : null}
      {kidsDaySelected ? (
        <DeployedLink href="www.deployed.com">Deployed</DeployedLink>
      ) : null}
      {kidsDaySelected ? (
        <Youtube url="https://www.youtube.com/watch?v=NtKEOM1CTQ8&list=PLG5aTkXQ4DLJrYkLzbquVzhT8BgOf80pK" />
      ) : null}
      {/* 
	  
	 
	 ternary operation for Hangman card active vs innactive
	 
	 
	 */}
      {hangmanSelected ? (
        <HangmanCardActive
          src={HangmanCardSvg}
          alt="Hangman Card"
          showHangman={hangmanSelected}
          onTap={hangmanClick}
        />
      ) : (
        <HangmanImage
          src={HangmanCardSvg}
          alt="Hangman Card"
          showHangman={hangmanSelected}
          onTap={hangmanClick}
        />
      )}

      {/* 
	  
	 
	 toggles Hangman Title and links when avtc is active
	 
	 
	 */}
      {hangmanSelected ? <Title>Hangman</Title> : null}
      {hangmanSelected ? (
        <GithubLink href="https://github.com/atwelleric/New-Portfolio/tree/devEA">
          Github
        </GithubLink>
      ) : null}
      {hangmanSelected ? (
        <DeployedLink href="www.deployed.com">Deployed</DeployedLink>
      ) : null}
      {hangmanSelected ? (
        <Youtube url="https://www.youtube.com/watch?v=NtKEOM1CTQ8&list=PLG5aTkXQ4DLJrYkLzbquVzhT8BgOf80pK" />
      ) : null}
      {/* 
	  
	 
	 ternary operation for CodeShare card active vs innactive
	 
	 
	 */}

      {codeShareSelected ? (
        <CodeShareCardActive
          src={CodeShareCardSvg}
          alt="CodeShare Card"
          showCodeShare={codeShareSelected}
          onTap={codeShareClick}
        />
      ) : (
        <CodeShareImage
          src={CodeShareCardSvg}
          alt="CodeShare Card"
          showCodeShare={codeShareSelected}
          onTap={codeShareClick}
        />
      )}

      {/* 
	  
	 
	 toggles CodeShare Title and links when avtc is active
	 
	 
	 */}
      {codeShareSelected ? <Title>Code Share</Title> : null}
      {codeShareSelected ? (
        <GithubLink href="https://github.com/atwelleric/New-Portfolio/tree/devEA">
          Github
        </GithubLink>
      ) : null}
      {codeShareSelected ? (
        <DeployedLink href="www.deployed.com">Deployed</DeployedLink>
      ) : null}
      {codeShareSelected ? (
        <Youtube url="https://www.youtube.com/watch?v=NtKEOM1CTQ8&list=PLG5aTkXQ4DLJrYkLzbquVzhT8BgOf80pK" />
      ) : null}
      {/* 
	  
	 
	 ternary operation for Arcade card active vs innactive
	 
	 
	 */}

      {arcadeSelected ? (
        <ArcadeCardActive
          src={ArcadeCardSvg}
          alt="Arcade Card"
          showArcade={arcadeSelected}
          onTap={arcadeClick}
        />
      ) : (
        <ArcadeImage
          src={ArcadeCardSvg}
          alt="Arcade Card"
          showArcade={arcadeSelected}
          onTap={arcadeClick}
        />
      )}

      {/*
	  
	 
	 toggles Arcade Title and links when avtc is active 
	 
	 
	 */}
      {arcadeSelected ? <Title>Arcade</Title> : null}
      {arcadeSelected ? (
        <GithubLink href="https://github.com/atwelleric/New-Portfolio/tree/devEA">
          Github
        </GithubLink>
      ) : null}
      {arcadeSelected ? (
        <DeployedLink href="www.deployed.com">Deployed</DeployedLink>
      ) : null}
      {arcadeSelected ? (
        <Youtube url="https://www.youtube.com/watch?v=NtKEOM1CTQ8&list=PLG5aTkXQ4DLJrYkLzbquVzhT8BgOf80pK" />
      ) : null}
    </Container>
  );
}

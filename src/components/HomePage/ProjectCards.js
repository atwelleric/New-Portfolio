import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import AvtcCardSvg from '../../resources/avtccard.svg';
import HangmanCardSvg from '../../resources/hangmancard.svg';
import KidsDayCardSvg from '../../resources/kidsdaycard.svg';
import CodeShareCardSvg from '../../resources/codesharecard.svg';
import ArcadeCardSvg from '../../resources/arcadecard.svg';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import YouTubePlayer from 'react-player/youtube';

let active;
console.log(active);

let Card = styled(motion.img)`
	// helps with jagged edges from rotating svg
	-webkit-backface-visibility: hidden;
	position: relative;
`;

const AvtcCardImage = styled(Card)`
	/* width: ${(props) => (props.showAvtc ? `30vw` : `15vw`)}; */
	height: ${(props) => (props.showAvtc ? `50vh` : `25vh`)};
	left: ${(props) => (props.showAvtc ? `2vmin` : `2vmin`)};
	top: ${(props) => (props.showAvtc ? `10vmin` : `65vmin`)};
	transform: ${(props) => (props.showAvtc ? `rotate(0deg)` : `rotate(-20deg)`)};
	&:hover {
		${(props) =>
			props.showAvtc
				? null
				: `width: 15vw;
    height: 30vh;
    z-index: 1;`}
	}
	/* &:hover {
    left: 5vw;
  } */
`;

const KidsDayImage = styled(Card)`
	/* width: ${(props) => (props.showKidsDay ? `30vw` : `15vw`)}; */
	height: ${(props) => (props.showKidsDay ? `50vh` : `25vh`)};
	left: ${(props) => (props.showKidsDay ? `2vmin` : `-8vmin`)};
	top: ${(props) => (props.showKidsDay ? `10vmin` : `63vmin`)};
	transform: ${(props) =>
		props.showKidsDay ? `rotate(0deg)` : `rotate(-10deg)`};
	&:hover {
		${(props) =>
			props.showKidsDay
				? null
				: `width: 15vw;
    height: 30vh;
    z-index: 1;`}
	}
`;

const HangmanImage = styled(Card)`
	/* width: ${(props) => (props.showHangman ? `30vw` : `15vw`)}; */
	height: ${(props) => (props.showHangman ? `50vh` : `25vh`)};
	left: ${(props) => (props.showHangman ? `2vmin` : `-20vmin`)};
	top: ${(props) => (props.showHangman ? `10vmin` : `61vmin`)};
	&:hover {
		${(props) =>
			props.showHangman
				? null
				: `width: 15vw;
    height: 30vh;
    z-index: 1;`}
	}
`;

const CodeShareImage = styled(Card)`
	/* width: ${(props) => (props.showCodeShare ? `30vw` : `15vw`)}; */
	height: ${(props) => (props.showCodeShare ? `50vh` : `25vh`)};
	left: ${(props) => (props.showCodeShare ? `2vmin` : `-28vmin`)};
	top: ${(props) => (props.showCodeShare ? `10vmin` : `61vmin`)};
	transform: ${(props) =>
		props.showCodeShare ? `rotate(0deg)` : `rotate(10deg)`};
	&:hover {
		${(props) =>
			props.showCodeShare
				? null
				: `width: 15vw;
    height: 30vh;
    z-index: 1;`}
	}
`;

const ArcadeImage = styled(Card)`
	/* width: ${(props) => (props.showArcade ? `30vw` : `15vw`)}; */
	height: ${(props) => (props.showArcade ? `50vh` : `25vh`)};
	left: ${(props) => (props.showArcade ? `-120vmin` : `-34vmin`)};
	top: ${(props) => (props.showArcade ? `10vmin` : `65vmin`)};
	transform: ${(props) =>
		props.showArcade ? `rotate(0deg)` : `rotate(20deg)`};
	&:hover {
		${(props) =>
			props.showArcade
				? null
				: `width: 15vw;
    height: 30vh;
    z-index: 1;`}
	}
`;

//Title
const Title = styled.h1`
	display: flex;
	justify-content: end;
	font-size: 45px;
	padding: 30px;
`;

// Github Repo link
const GithubLink = styled.a`
	display: flex;
	justify-content: start;
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
		<div>
			<AvtcCardImage
				src={AvtcCardSvg}
				id='avtc'
				alt='AVTC Card'
				showAvtc={avtcSelected}
				onTap={avtcClick}
			/>

			{avtcSelected ? <Title>Avtc</Title> : null}
			{avtcSelected ? (
				<GithubLink href='https://github.com/atwelleric/New-Portfolio/tree/devEA'>
					Github
				</GithubLink>
			) : null}
			{avtcSelected ? (
				<DeployedLink href='www.deployed.com'>Deployed</DeployedLink>
			) : null}
			{avtcSelected ? (
				<Youtube url='https://www.youtube.com/watch?v=NtKEOM1CTQ8&list=PLG5aTkXQ4DLJrYkLzbquVzhT8BgOf80pK' />
			) : null}

			<KidsDayImage
				src={KidsDayCardSvg}
				alt='kids day Card'
				showKidsDay={kidsDaySelected}
				onTap={kidsDayClick}
			/>
			{kidsDaySelected ? <Title>Kids Day</Title> : null}
			{kidsDaySelected ? (
				<GithubLink href='https://github.com/atwelleric/New-Portfolio/tree/devEA'>
					Github
				</GithubLink>
			) : null}
			{kidsDaySelected ? (
				<DeployedLink href='www.deployed.com'>Deployed</DeployedLink>
			) : null}
			{kidsDaySelected ? (
				<Youtube url='https://www.youtube.com/watch?v=NtKEOM1CTQ8&list=PLG5aTkXQ4DLJrYkLzbquVzhT8BgOf80pK' />
			) : null}

			<HangmanImage
				src={HangmanCardSvg}
				alt='Hangman Card'
				showHangman={hangmanSelected}
				onTap={hangmanClick}
			/>

			{hangmanSelected ? <Title>Hangman</Title> : null}
			{hangmanSelected ? (
				<GithubLink href='https://github.com/atwelleric/New-Portfolio/tree/devEA'>
					Github
				</GithubLink>
			) : null}
			{hangmanSelected ? (
				<DeployedLink href='www.deployed.com'>Deployed</DeployedLink>
			) : null}
			{hangmanSelected ? (
				<Youtube url='https://www.youtube.com/watch?v=NtKEOM1CTQ8&list=PLG5aTkXQ4DLJrYkLzbquVzhT8BgOf80pK' />
			) : null}

			<CodeShareImage
				src={CodeShareCardSvg}
				alt='CodeShare Card'
				showCodeShare={codeShareSelected}
				onTap={codeShareClick}
			/>

			{codeShareSelected ? <Title>Code Share</Title> : null}
			{codeShareSelected ? (
				<GithubLink href='https://github.com/atwelleric/New-Portfolio/tree/devEA'>
					Github
				</GithubLink>
			) : null}
			{codeShareSelected ? (
				<DeployedLink href='www.deployed.com'>Deployed</DeployedLink>
			) : null}
			{codeShareSelected ? (
				<Youtube url='https://www.youtube.com/watch?v=NtKEOM1CTQ8&list=PLG5aTkXQ4DLJrYkLzbquVzhT8BgOf80pK' />
			) : null}

			<ArcadeImage
				src={ArcadeCardSvg}
				alt='Arcade Card'
				showArcade={arcadeSelected}
				onTap={arcadeClick}
			/>

			{arcadeSelected ? <Title>Arcade</Title> : null}
			{arcadeSelected ? (
				<GithubLink href='https://github.com/atwelleric/New-Portfolio/tree/devEA'>
					Github
				</GithubLink>
			) : null}
			{arcadeSelected ? (
				<DeployedLink href='www.deployed.com'>Deployed</DeployedLink>
			) : null}
			{arcadeSelected ? (
				<Youtube url='https://www.youtube.com/watch?v=NtKEOM1CTQ8&list=PLG5aTkXQ4DLJrYkLzbquVzhT8BgOf80pK' />
			) : null}
		</div>
	);
}

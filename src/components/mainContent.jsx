import React from "react";
import styled from "styled-components";
import Game from "./game";
import { FiSearch } from "react-icons/fi";
import Cyberpunk from "../assets/cyberpunk.jpg";
import Zelda from "../assets/zelda.jpg";
import DeathStranding from "../assets/Deathstranding.jpg";

function mainContent() {
  return (
    <MainContentContainer>
      <MainTitle>My Top Games</MainTitle>
      <InputContainer>
        <Input type="text" placeholder="search" />
        <FiSearch />
      </InputContainer>
      <GamesContainer>
        <Game
          image={Cyberpunk}
          title="Cyberpunk 2077"
          platform="Pc Version"
          percent="75"
        />
        <Game
          image={Zelda}
          title="The Legend of Zelda"
          platform="Switch Version"
          percent="32"
        />
        <Game
          image={DeathStranding}
          title="Death Stranding"
          platform="Ps5 Version"
          percent="87"
        />
      </GamesContainer>
    </MainContentContainer>
  );
}
const MainContentContainer = styled.div`
  margin: 5rem 5rem 0 5rem;
  color: #055daa;
`;

const MainTitle = styled.h1``;

const InputContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 10rem;
    top: 1.5rem;
  }
`;

const Input = styled.input`
  border-radius: 2rem;
  border: none;
  width: 15rem;
  padding: 0.6rem 1rem;
  margin: 1rem 0 0 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  font-size: 0.9rem;
  color: #0661bd;
  &::placeholder {
    color: #0661bd;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

const GamesContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default mainContent;
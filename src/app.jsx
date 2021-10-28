import styled from "styled-components";

import "./app.css";
import MainContent from "./components/mainContent";
import Sidebar from "./components/sidebar";
function app() {
  return (
    <Container>
      <Card>
        <Sidebar />
        <MainContent />
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #2009ee;
  background: -webkit-linear-gradient(to right, #00ddff, #2009ee);
  background: linear-gradient(to right, #00ddff, #2009ee);
`;

const Card = styled.div`
  height: 90vh;
  width: 80vw;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 10px;
  display: flex;
`;

export default app;

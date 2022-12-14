import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
`;

const Announcements = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcements;

import { MdSend } from "react-icons/md";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 7vh;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 2.4vh;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
  line-height: normal;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  display: initial;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <br/>   <br/>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <MdSend style={{display: "initial"}}/>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

import styled, { keyframes } from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: purple;
`;

const Content = styled.div`
  padding: 20px 25px;
`;

const Button = styled.button`
  transition: box-shadow 0.2s ease;
  background-color: ${(props) => (props.primary ? "purple" : "white")};
  color: ${(props) => (props.primary ? "white" : "purple")};
  padding: 10px 15px;
  border: solid 2px purple;
  border-radius: 4px;
  margin: 2px;

  &:hover {
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  }

  &.secondary {
    background-color: salmon;
    border: solid 2px salmon;
  }
`;

const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`;

const Link = ({ className, ...props }) => {
  return <a className={className} {...props}></a>;
};

const StyledLink = styled(Link)`
  color: blue;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  color: props.color || "purple",
}))`
  font-size: 20px;
  border: 1px solid purple;
  color: ${(props) => props.color};
`;

const Password = styled(Input).attrs({
  type: "password",
})``;

const girar = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform:rotate(360deg)
  }
`;

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`;

const App = () => {
  return (
    <Content>
      <P>Hola soy un parrafo</P>
      <Button>Enviar</Button>
      <Button primary>Enviar</Button>
      <Button primary className="secondary">
        Enviar
      </Button>
      <Button primary={true}>Enviar</Button>
      <BlockButton>Enviar</BlockButton>
      <BlockButton primary>Enviar</BlockButton>
      <BlockButton primary as="a" href="#">
        Enviar
      </BlockButton>
      <Link>Enlace</Link>
      <StyledLink>Enlace con estilo</StyledLink>
      <Input color="blue" />
      <Password />
      <br />
      <Rotar>Estoy girando</Rotar>
    </Content>
  );
};

export default App;

import styled from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: purple;
`;

const Content = styled.div`
  padding: 20px 25px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "purple" : "white")};
  color: ${(props) => (props.primary ? "white" : "purple")};
  padding: 10px 15px;
  border: solid 2px purple;
  border-radius: 4px;
  margin: 2px;
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

const App = () => {
  return (
    <Content>
      <P>Hola soy un parrafo!</P>
      <Button>Enviar</Button>
      <Button primary>Enviar</Button>
      <Button primary={true}>Enviar</Button>
      <BlockButton>Enviar</BlockButton>
      <BlockButton primary>Enviar</BlockButton>
      <BlockButton primary as="a" href="#">
        Enviar
      </BlockButton>
      <Link>Enlace</Link>
      <StyledLink>Enlace con estilo</StyledLink>
    </Content>
  );
};

export default App;

import { Container } from "./style";

const GroupCard = ({ name, category, ...rest }) => {
  return (
    <Container {...rest}>
      <h3>{name}</h3>
      <p>{category}</p>
    </Container>
  );
};
export default GroupCard;

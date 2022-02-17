import { Container, Header, Body, EntryMeta } from './ProductStyles';
import { FaUserCheck } from 'react-icons/fa';
import { AiFillClockCircle, AiFillHeart } from 'react-icons/ai';

const Product = ({ img, name, desc, category }) => {
  return (
    <Container>
      <Header>
        <img src={img} alt="" />
      </Header>
      <Body>
        <h3>{category}</h3>
        <span>{name}</span>
        <p>{desc}</p>
        <EntryMeta>
          <li>
            <FaUserCheck />
            <span>by</span>
          </li>
          <li>
            <AiFillClockCircle />
            <span>Mins</span>
          </li>
          <li>
            <AiFillHeart />
            <span>Like</span>
          </li>
        </EntryMeta>
      </Body>
    </Container>
  );
};

export default Product;

import { Container, Header, Body, EntryMeta } from './ProductStyles';
import { FaUserCheck } from 'react-icons/fa';
import { AiFillClockCircle, AiFillHeart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Product = ({ id, img, name, desc, category }) => {
  return (
    <Container>
      <Header>
        <NavLink to={`/${category.replace(' ', '-')}/${id}`}>
          <img src={img} alt="" />
        </NavLink>
      </Header>
      <Body>
        <NavLink to={`/${category.replace(' ', '-')}`}>
          <h3>{category}</h3>
        </NavLink>
        <span>
          <NavLink to={`/${category.replace(' ', '-')}/${id}`}>{name}</NavLink>
        </span>

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

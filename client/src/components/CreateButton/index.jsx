import { Link } from 'react-router-dom';
import { Container } from './CreateButtonStyled';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import getImageByKey from '../../Utils/getImageByKey.js';

const CreateButton = ({ color }) => {
  return (
    <Container>
      <Link to="/create-recipe">
        <img src={getImageByKey(color)} alt="" />
        <MdOutlineAddCircleOutline />
      </Link>
    </Container>
  );
};

export default CreateButton;

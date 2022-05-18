import { Link } from 'react-router-dom';
import { Container } from './CreateButtonStyled';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import getImageByKey from '../../Utils/getImageByKey.js';

const CreateButton = ({ color }) => {
  return (
    <Container>
      <Link to="/create-recipe">
        <img
          src={getImageByKey(
            `add${color.charAt(0).toUpperCase() + color.slice(1)}`,
          )}
          alt=""
        />
        <MdOutlineAddCircleOutline />
      </Link>
    </Container>
  );
};

export default CreateButton;

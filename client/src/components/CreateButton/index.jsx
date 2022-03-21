import { Link } from 'react-router-dom';
import { Container } from './CreateButtonStyled';
import addRecipeImg from '../../assets/add-recipe.png';
import { MdOutlineAddCircleOutline } from 'react-icons/md';

const CreateButton = () => {
  return (
    <Container>
      <Link to="/create-recipe">
        <img src={addRecipeImg} alt="" />
        <MdOutlineAddCircleOutline />
      </Link>
    </Container>
  );
};

export default CreateButton;

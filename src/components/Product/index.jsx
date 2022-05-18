import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import db from '../../firebase';
import { Body, Container, EntryMeta, Header } from './ProductStyles';

const Product = ({ id, thumbnail: image, name, desc, category, authorId }) => {
  const [author, setAuthor] = useState('');

  useEffect(() => {
    let isSubscribed = true;

    const fetchAuthorName = async () => {
      let response;

      try {
        const userRef = doc(db, 'users', authorId);
        const userSnap = await getDoc(userRef);
        response = userSnap.data();
      } catch (error) {
        console.log('Error: ' + error.message);
      }

      if (isSubscribed) {
        setAuthor(response.name);
      }
    };

    fetchAuthorName();

    return () => {
      isSubscribed = false;
    };
  }, [authorId]);

  return (
    <Container>
      <Header>
        <NavLink to={`/${category.replace(' ', '-')}/${id}`}>
          <img src={image} alt="" />
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
          <span>
            Created by <Link to={`/profile/${authorId}`}>{author}</Link>
          </span>
        </EntryMeta>
      </Body>
    </Container>
  );
};

export default Product;

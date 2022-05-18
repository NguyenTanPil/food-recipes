import { collection, getDocs, limit, query } from 'firebase/firestore';
import { useLayoutEffect, useState } from 'react';
import db from '../../firebase';
import Product from '../Product';
import { Container } from './PreviewProductsStyles';

const PreviewProducts = () => {
  const [previewProducts, setPreviewProducts] = useState([]);

  useLayoutEffect(() => {
    let isSubscribed = true;

    const fetchProducts = async () => {
      const response = [];

      try {
        const queryRecipes = query(collection(db, 'recipes'), limit(3));
        const querySnapshot = await getDocs(queryRecipes);

        querySnapshot.forEach((doc) => {
          response.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.log('Error: ' + error.message);
      }

      if (isSubscribed) {
        setPreviewProducts(response);
      }
    };

    fetchProducts();

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Container>
      {previewProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Container>
  );
};

export default PreviewProducts;

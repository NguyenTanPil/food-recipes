import {
  Container,
  Content,
  Follows,
  FollowItem,
  Brand,
  Copyright,
} from './FooterStyles';
import brandImg from '../../assets/brand.png';
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaGithubAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <Container>
      <Content>
        <Brand to="/">
          <img src={brandImg} alt="" />
          <span>Food Recipes</span>
        </Brand>
        <Follows>
          <FollowItem>
            <a href="https://www.facebook.com/">
              <FaFacebookSquare /> <span>Facebook</span>{' '}
            </a>
          </FollowItem>
          <FollowItem>
            <a href="https://www.facebook.com/">
              <FaTwitter /> <span>twitter</span>{' '}
            </a>
          </FollowItem>
          <FollowItem>
            <a href="https://www.facebook.com/">
              <FaInstagram /> <span>instagram</span>{' '}
            </a>
          </FollowItem>
          <FollowItem>
            <a href="https://www.facebook.com/">
              <FaPinterestP /> <span>pinterest</span>{' '}
            </a>
          </FollowItem>
          <FollowItem>
            <a href="https://www.facebook.com/">
              <FaYoutube /> <span>youtube</span>{' '}
            </a>
          </FollowItem>
          <FollowItem>
            <a href="https://github.com/NguyenTanPil/recommend-food-recipes">
              <FaGithubAlt /> <span>github</span>{' '}
            </a>
          </FollowItem>
        </Follows>
        <Copyright>
          &copy; Copyright 2022 by <span> Food Recipes</span>. All Rights
          Reserved.
        </Copyright>
      </Content>
    </Container>
  );
};

export default Footer;

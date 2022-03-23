import Cookies from 'universal-cookie';
import TitleBar from '../../TitleBar';
import {
  Container,
  Content,
  CustomContainer,
  CustomItem,
  SelectBackgroundItem,
  SelectItem,
  SelectOption,
  Title,
} from './AppearanceStyles';

const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'pink'];
const backgrounds = ['light', 'dark', 'dim'];

const Appearance = ({ theme, setTheme }) => {
  const setCookie = (data) => {
    const cookies = new Cookies();
    const theme = JSON.stringify(data);
    cookies.set('theme', theme, { path: '/', sameSite: true });
  };

  const handleChangeColor = (value) => {
    setTheme({ ...theme, color: value });
    setCookie({ ...theme, color: value });
  };

  const handleChangeBackground = (value) => {
    setTheme({ ...theme, background: value });
    setCookie({ ...theme, background: value });
  };

  return (
    <>
      <TitleBar mainTitle="Appearance" pageList={['Appearance']} oneLine />
      <Container>
        <Content>
          <Title>
            <h2>Customize you theme</h2>
            <span>
              Manager color and background. These settings will be saved and
              applied to your next visit.
            </span>
          </Title>
          <CustomContainer>
            <CustomItem>
              <label>Color</label>
              <SelectOption>
                {colors.map((c) => (
                  <SelectItem active={c === theme.color ? 1 : 0} key={c}>
                    <span onClick={() => handleChangeColor(c)}></span>
                  </SelectItem>
                ))}
              </SelectOption>
            </CustomItem>
            <CustomItem>
              <label>Background</label>
              <SelectOption>
                {backgrounds.map((b) => (
                  <SelectBackgroundItem
                    active={b === theme.background ? 1 : 0}
                    key={b}
                  >
                    <span onClick={() => handleChangeBackground(b)}></span>
                  </SelectBackgroundItem>
                ))}
              </SelectOption>
            </CustomItem>
          </CustomContainer>
        </Content>
      </Container>
    </>
  );
};

export default Appearance;

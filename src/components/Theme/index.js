const light = {
  backgroundColor: '#ffffff',
  borderColor: '#e3e8ec',
  fontColor: '#536471',
  hoverItemColor: '#e3e8ec66',
  footerBackgroundColor: '#1b1d1f',
  footerColor: '#b0b0b0',
  titleColor: '#000000',
  titleBackgroundColor: '#f3f3f3',
};

const dark = {
  backgroundColor: '#181a1b',
  borderColor: '#373b3d',
  fontColor: '#aaa398',
  hoverItemColor: '#25282a66',
  footerBackgroundColor: '#161819',
  footerColor: '#b6b0a6',
  titleColor: '#ffffff',
  titleBackgroundColor: '#1f2123',
};

const dim = {
  backgroundColor: '#15202b',
  borderColor: '#38444d',
  fontColor: '#8899a6',
  hoverItemColor: '#273340',
  footerBackgroundColor: '#1e2732',
  footerColor: '#8b98a5',
  titleColor: '#ffffff',
  titleBackgroundColor: '#192734',
};

const colors = {
  red: '#e33e5a',
  blue: '#00bbf0',
  yellow: '#ffd739',
  green: '#29de92',
  purple: '#9852f9',
  pink: '#f91880',
};

const backgrounds = {
  light,
  dim,
  dark,
};

export default function getTheme({ background, color }) {
  const theme = backgrounds[background];
  theme.hoverColor = colors[color];
  return theme;
}

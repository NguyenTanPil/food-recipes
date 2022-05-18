import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setCookie = ({ data, cookieName, time }) => {
  const dataToJson = JSON.stringify(data);
  if (time) {
    cookies.set(cookieName, dataToJson, {
      path: '/',
      maxAge: time,
      sameSite: true,
    });
  } else {
    cookies.set(cookieName, dataToJson, { path: '/', sameSite: true });
  }
};

export const getCookie = (cookieName) => {
  return cookies.get(cookieName);
};

export const deleteCookie = (cookieName) => {
  cookies.remove(cookieName, { path: '/', sameSite: true });
};

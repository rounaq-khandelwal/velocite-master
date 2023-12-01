import axios from 'axios';
import jwtDecode from 'jwt-decode';

function decodeJWT(token) {
  if (!token) return;
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace;
}

const host = 'https://velocite.link/';

export const login = async (username, password) => {
  //   const response = await axios.post(`${host}users/login`, {
  const response = await axios.post(
    `https://dqxrg92yu7.execute-api.ap-south-1.amazonaws.com/prod/login`,
    {
      email: username,
      password: password,
    }
  );

  let result;

  if (response) {
    console.log('success');
    const headers = response?.headers;
    const authHeader = String(response.headers['authorization'] || '');
    if (authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7, authHeader.length);
      const payload = jwtDecode(token);
      localStorage.setItem('userInfo', payload?.sub);
      const userObject = { userId: headers.userid, userInfo: payload?.sub };
      localStorage.setItem('userObject', JSON.stringify(userObject));
    }

    result = headers?.userId;
  } else {
    result = 'Invalid username and password';
  }

  return result;
};

export const verifyEmail = async (token) => {
  const response = await axios.get(
    `https://dqxrg92yu7.execute-api.ap-south-1.amazonaws.com/prod/email-verification`,
    {
      params: {
        token: token,
      },
    }
  );
  return response;
};

export const register = async (email, firstName, lastName, password) => {
  const response = await axios.post(
    `https://dqxrg92yu7.execute-api.ap-south-1.amazonaws.com/prod/register`,
    {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    }
  );
  let result;
  const userId = response?.userId;
  if (userId) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

export const forgotPassowrd = async (email) => {
  let forgotPassowrdResponse;
  // const response = await axios.post(`${host}users/password-reset-request`, {
  const response = await axios.post(
    `https://dqxrg92yu7.execute-api.ap-south-1.amazonaws.com/prod/password-reset-request`,
    {
      email: email,
    }
  );
  const result = response?.data.operationResult;
  const userObject = { userId: 'reset' };
  if (result === 'SUCCESS') {
    localStorage.setItem('userObject', JSON.stringify(userObject));
    forgotPassowrdResponse = 'success';
  } else {
    forgotPassowrdResponse = 'Please enter the registered mail ID';
  }
  return forgotPassowrdResponse;
};

export const resetPassword = async (token, newPassword) => {
  const response = await axios.post(
    `https://dqxrg92yu7.execute-api.ap-south-1.amazonaws.com/prod/password-reset`,
    {
      token: token,
      password: newPassword,
    }
  );
  console.log('response');
  console.log(response);
};

export const isAuthenticated = () => {
  const user = localStorage.getItem('userObject');
  if (!user) {
    console.log('authenticate');
    return {};
  }
  return user;
};

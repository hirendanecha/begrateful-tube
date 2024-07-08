// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';

const frontendUrl = 'https://www.begrateful.tube/';
const backendUrl = 'https://api.begrateful.tube/';
const loginUrl = 'https://www.begrateful.tube/login';
const wasabiUrl = 'https://tube-social.s3.us-east-1.wasabisys.com/';
const logoutUrl = 'https://www.begrateful.tube/logout';



export const environment = {
  production: true,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.begrateful.tube',
  wasabiUrl: wasabiUrl,
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://facetime.tube/',
  logoutUrl: logoutUrl
};


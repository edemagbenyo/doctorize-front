let url = '';
switch (process.env.NODE_ENV) {
  case 'development':
    url = 'http://localhost:3001';
    break;
  case 'production':
    url = 'https://doctorize-api.herokuapp.com';
    break;
  default:
    url = 'https://doctorize-api.herokuapp.com';
    break;
}
export { url };

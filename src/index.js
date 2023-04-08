if (process.env.NODE_ENV.trim() === 'development') { // for watching html
  require('./index.html');
}

import '@styles/style.scss';
// import './scripts/convertImgToPicture';
// import './img/login.png';
// import './fonts/Roboto-Medium.woff';

console.log(process.env.NODE_ENV.trim());



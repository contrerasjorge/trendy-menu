import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: 'trendy-menu.firebaseapp.com',
  databaseURL: 'https://trendy-menu.firebaseio.com',
  projectId: 'trendy-menu',
  storageBucket: 'trendy-menu.appspot.com',
  messagingSenderId: '1090780467777',
  appId: '1:1090780467777:web:e15fb290e62399ef'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

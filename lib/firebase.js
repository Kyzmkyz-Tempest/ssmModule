const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, doc, setDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCKO1X0hrBCuhzLaHcqXqUSr8tccAshmG4",
  authDomain: "smm-db-ace0a.firebaseapp.com",
  projectId: "smm-db-ace0a",
  storageBucket: "smm-db-ace0a.firebasestorage.app",
  messagingSenderId: "1002578843824",
  appId: "1:1002578843824:web:f01b2f3df8d76c1e99c375",
  measurementId: "G-Y2J6XN0RKG"
};

// init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// fungsi tambah user
const addUser = async (username, password) => {
  const init = {
    username: username,
    password: password,
    saldo: 0,
    status: "silver",
    daftar: new Date()
  };

  const docRef = doc(db, "users", username); // ini bikin doc reference
  await setDoc(docRef, init); // ini simpen data
};

const getUser = async (username) => {
  const docRef = await doc(db, "users", username);
  return getDocs(docRef);
}

module.exports = { addUser, getUser }

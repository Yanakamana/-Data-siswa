import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
  } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBm9HdJ92vSLrKRclI6Z2J4bmvlFgR4AuU",
  authDomain: "mang-yana.firebaseapp.com",
  projectId: "mang-yana",
  storageBucket: "mang-yana.appspot.com",
  messagingSenderId: "1094982396668",
  appId: "1:1094982396668:web:2d103526ab40a59efc0579",
  measurementId: "G-MF48P7VG5P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaptarSiswa () {
  const siswaRef = collection(db,"siswa");
  const q = query(siswaRef,orderBy("nama"));
  const querySnapshot = await getDocs(q);
  
  let retval = [];
  querySnapshot.forEach((doc) => {
    retval.push({ id: doc.id, nama: doc.data().nama });
  });
  
  return retval;
}
  
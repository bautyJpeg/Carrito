import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  getDocs,
  doc, 
  getDoc
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyA3B500rMTrIzIiP_NxNyAkU-wWIgHAhFU",
  authDomain: "carrito-67d31.firebaseapp.com",
  projectId: "carrito-67d31",
  storageBucket: "carrito-67d31.appspot.com",
  messagingSenderId: "388112774484",
  appId: "1:388112774484:web:c630436312928ba29d04c1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getProducts = async () => {

  const querySnapshot = await getDocs(collection(db, "products"));

  const products = []

  querySnapshot.forEach((doc) => {
    products.push(doc);
  });

  return products

}

export const getproduct = async (id) => {

  const docRef = doc(db, "products", id);

const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap;
} else {
  console.log("No such document!");
}

}



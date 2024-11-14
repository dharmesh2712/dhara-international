
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwzubqrtwDdFs1gxzKLMLfoJhxaBgZooc",
  authDomain: "dharaa-international.firebaseapp.com",
  projectId: "dharaa-international",
  storageBucket: "dharaa-international.firebasestorage.app",
  messagingSenderId: "935797855178",
  appId: "1:935797855178:web:6da7171fdd28cad5e83533",
  measurementId: "G-KNWJR3Y7EB",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(getDatabase());
get(child(dbRef, `products`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });
document
  .getElementById("addProduct")
  .addEventListener("click", function (e) {
    e.preventDefault();
    set(ref(db, "products/"+"cardiovascularAPIs"), {
      product: ["Atorvastatin Calcium", "Amlodipine Besylate", "Carbamazepine","Valsartan","Rosuvastatin Calcium","Hydrochlorothiazide","Clopidogrel Bisulfate","Apixaban","Losartan","Ranolazine","Nifedipine"]
    });
    alert("Product added successfully  !");
  });
$(function () {
    $("#navbar-part").load("navbar.html");
  });
  $(function () {
    $("#footer-part").load("footer.html");
  });
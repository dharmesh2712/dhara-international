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
let isLoggedIn = localStorage.getItem("user");
let cardiovascularAPIs = [];
let cnsAPIs;
let antidiabeticAPIs;
let antibioticAPIs;
let analgesicAPIs;
let productCategory = "";
const app = initializeApp(firebaseConfig);
const addProduct = document.getElementsByClassName("addbtn");
for (let index = 0; index < addProduct.length; index++) {
  addProduct[index].style.display = isLoggedIn ? "block" : "none";
}

const db = getDatabase(app);
const dbRef = ref(getDatabase());
get(child(dbRef, `products`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());

      cardiovascularAPIs = snapshot.val()?.cardiovascularAPIs?.product || [];
      cnsAPIs = snapshot.val()?.cnsAPIs?.product || [];
      antidiabeticAPIs = snapshot.val()?.antidiabeticAPIs?.product || [];
      antibioticAPIs = snapshot.val()?.antibioticAPIs?.product || [];
      analgesicAPIs = snapshot.val()?.analgesicAPIs?.product || [];

      let cardiovascularAPIsObj = "";
      let cnsAPIObj = "";
      let antidiabeticAPIObj = "";
      let antibioticAPIsObj = "";
      let analgesicAPIsObj = "";

      for (let i = 0; i < cardiovascularAPIs.length; i++) {
        cardiovascularAPIsObj =
          cardiovascularAPIsObj +
          `<div class="p-2 md:p-4 bg-indigo-50 rounded-md text-center">${cardiovascularAPIs[i]}</div>`;
      }
      document.getElementById("cardiovascularAPIs").innerHTML =
        cardiovascularAPIsObj;

      for (let i = 0; i < cnsAPIs.length; i++) {
        cnsAPIObj =
          cnsAPIObj +
          `<div class="p-2 md:p-4 bg-indigo-50 rounded-md text-center">${cnsAPIs[i]}</div>`;
      }
      document.getElementById("cnsAPIs").innerHTML = cnsAPIObj;

      for (let i = 0; i < antidiabeticAPIs.length; i++) {
        antidiabeticAPIObj =
          antidiabeticAPIObj +
          `<div class="p-2 md:p-4 bg-indigo-50 rounded-md text-center">${antidiabeticAPIs[i]}</div>`;
      }
      document.getElementById("antidiabeticAPIs").innerHTML =
        antidiabeticAPIObj;

      for (let i = 0; i < antibioticAPIs.length; i++) {
        antibioticAPIsObj =
          antibioticAPIsObj +
          `<div class="p-2 md:p-4 bg-indigo-50 rounded-md text-center">${antibioticAPIs[i]}</div>`;
      }
      document.getElementById("antibioticAPIs").innerHTML = antibioticAPIsObj;

      for (let i = 0; i < analgesicAPIs.length; i++) {
        analgesicAPIsObj =
          analgesicAPIsObj +
          `<div class="p-2 md:p-4 bg-indigo-50 rounded-md text-center">${analgesicAPIs[i]}</div>`;
      }
      document.getElementById("analgesicAPIs").innerHTML = analgesicAPIsObj;
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });

document
  .getElementById("cardiovascularbtn")
  .addEventListener("click", function (e) {
    document.getElementById("productPopup").style.display = "flex";
    productCategory = "cardiovascular";
  });

document.getElementById("cnsbtn").addEventListener("click", function (e) {
  document.getElementById("productPopup").style.display = "flex";
  productCategory = "cns";
});

document
  .getElementById("antidiabeticbtn")
  .addEventListener("click", function (e) {
    document.getElementById("productPopup").style.display = "flex";
    productCategory = "antidiabetic";
  });

document
  .getElementById("antibioticbtn")
  .addEventListener("click", function (e) {
    document.getElementById("productPopup").style.display = "flex";
    productCategory = "antibiotic";
  });

document.getElementById("analgesicbtn").addEventListener("click", function (e) {
  document.getElementById("productPopup").style.display = "flex";
  productCategory = "analgesic";
});

document
  .getElementById("addProductSave")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const productName = document.getElementById("productName").value;
    if (productCategory === "cardiovascular") {
      set(ref(db, "products/" + "cardiovascularAPIs"), {
        product: [...cardiovascularAPIs, productName],
      });
    }
    if (productCategory === "cns") {
      set(ref(db, "products/" + "cnsAPIs"), {
        product: [...cnsAPIs, productName],
      });
    }
    if (productCategory === "antidiabetic") {
      set(ref(db, "products/" + "antidiabeticAPIs"), {
        product: [...antidiabeticAPIs, productName],
      });
    }
    if (productCategory === "antibiotic") {
      set(ref(db, "products/" + "antibioticAPIs"), {
        product: [...antibioticAPIs, productName],
      });
    }
    if (productCategory === "analgesic") {
      set(ref(db, "products/" + "analgesicAPIs"), {
        product: [...analgesicAPIs, productName],
      });
    }

    document.getElementById("productPopup").style.display = "none";
    setTimeout(() => {
      alert("Product added successfully!");
      window.location.reload();
    }, 100);
  });

document.getElementById("closeBtn").addEventListener("click", function (e) {
  document.getElementById("productPopup").style.display = "none";
});

$(function () {
  $("#navbar-part").load("navbar.html");
});
$(function () {
  $("#footer-part").load("footer.html");
});

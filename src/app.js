import "./styles.css";
import axios from "axios";

axios
    .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
    .then((response) => {
        // Firstly, log response to the console,
        // inspect the response and see that it has data field
        // Assign data field of the response to
        // products variable below by destructuring
        // You can use alias
        console.log(response);
        const {data} = response;
        const products = data;

        // Print names of all product to the console
        // by calling foreach  method (use arrow function)
        products.forEach((item) => console.log(item["name"]));

        // Get all products that contain "Şal" in their name (use filter method)
        // map filtered products to new object having only image and name field
        // assign mapped items to mappedProducts variable
        let sal = products.filter((item) => item["name"].includes("Şal"));
        const mappedProducts = sal.map((item) => ({name: item["name"], src: item["image"]}));
        // Display the images and names of mappedProducts
        // You need to add them to the DOM
        // you need to use forEach method
        // You need to use flexbox
        // Position of image and text is up to you
        // You can use any style you wish

        const div = document.createElement("div");
        const element = document.querySelector("body");
        element.appendChild(div);
        div.setAttribute("id", "img");
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.alignItems = "center";

        const createImage = (name, src) => {
            const label = document.createElement("label");
            label.style.fontWeight = "bold";
            const labelText = document.createTextNode(name);
            label.appendChild(labelText);

            const img = document.createElement("img");
            img.setAttribute("src", src);

            document.getElementById("img").appendChild(label);
            document.getElementById("img").appendChild(img);
        }

        mappedProducts.forEach((item) => {
            createImage(item["name"], item["src"]);
        });

    });

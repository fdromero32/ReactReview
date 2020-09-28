import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/products">Products</Link>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// HomePage.js
import React from "react";

function Home() {
  return (
    <>
      <h1>Welcome to my page!</h1>
      <p>my name is danny and I'm an aspiring front-end developer!</p>
      <p>
        I've been coding for a year now and have completed a coding boot camp &
        an internship with a local startup.
      </p>
    </>
  );
}

export default Home;

// Products.js
import React from "react";
import { Link } from "react-router-dom";

import ProductsData from "./productsData";

function Products() {
  const products = ProductsData.map(product => (
    <div key={product.id}>
      <h1>
        <Link to={`products/${product.id}`}>{product.name}</Link>
      </h1>
      <h2>Price: ${product.price}</h2>
      <hr />
    </div>
  ));
  return (
    <>
      <h1>Product Page</h1>
      {products}
    </>
  );
}

export default Products;

// ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";

import ProductsData from "./productsData";

function ProductDetail() {
  const { productId } = useParams();
  const singleProduct = ProductsData.find((product) => product.id === productId);

  return (
    <>
      <h1>Product Details</h1>
      <h2>{singleProduct.name}</h2>
      <h2>Price: ${singleProduct.price}</h2>
      <p>Description: {singleProduct.description}</p>
    </>
  );
}

export default ProductDetail;

// ProductsData.js
export default [
  {
      id: "1",
      name: "Grumpy Cat Poster",
      description: "Everyone's favorite cat who loves to hate",
      price: 15
  },
  {
      id: "2",
      name: "Stretch Armstrong",
      description: "He bends! He stretches! He even ties in knots, but always returns to his original shape!",
      price: 20
  },
  {
      id: "3",
      name: "Hungry Hungry Hippos Game",
      description: "It's a race, it's a chase, hurry up and feed their face! Who will win? No one knows! Feed the hungry hip-ip-pos!",
      price: 30
  },
  {
      id: "4",
      name: "Crossfire board game",
      description: "You'll get caught up in the crossfire!",
      price: 35
  }
]


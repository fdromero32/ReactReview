import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import ServiceDetails from "./ServiceDetails";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route path="/services/:serviceId">
              <ServiceDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

// Services.js

import React from "react";
import ServiceData from "./ServiceData";

function Services() {
  const service = ServiceData.map((item) => (
    <div>
      <h1 key={item._id}>
        {/* forgot to add Link to the specific item being linked */}
        <Link to={`/services/${services._id}`}>
        {item.name}
        </Link></h1>
      <h2>{item.price}</h2>
    </div>
  ));
  return { service };
}

export default Services;

// ServiceDetails.js
import React from "react";
import { useParams } from "react-router-dom";

function ServiceDetails(props) {
  const { serviceId } = useParams();

  const thisService = servicesData.find((service) => service._id === serviceId);

  return (
    <div>
      <h1>Service Detail Page</h1>
      <h3>
        {thisService.name} - ${thisService.price}
      </h3>
      <p>{thisService.description}</p>
    </div>
  );
}

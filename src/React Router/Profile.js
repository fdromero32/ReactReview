import React from "react";
import servicesData from "./servicesData";
import { Link } from "react-router-dom";

function ServicesList() {
  const services = servicesData.map((service) => (
    <div>
      <h1 key={services._id}>
        <Link to={`/services/${services._id}`}>{services.name}</Link>
      </h1>
      <h2>{service.price}</h2>
    </div>
  ));

  return (
    <div>
      <h1>Services List Page</h1>
      {services}
    </div>
  );
}

export default ServicesList;

// ServiceDetails.js

import React from "react"
import {useParams} from "react-router-dom"
import servicesData from "./servicesData"

function ServiceDetail(props) {
    const {serviceId} = useParams()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const thisService = servicesData.find(service => service._id === serviceId)
    
    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{thisService.name} - ${thisService.price}</h3>
            <p>{thisService.description}</p>
        </div>
    )
}

export default ServiceDetail

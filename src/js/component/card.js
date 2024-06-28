import React from "react";
import { Link } from "react-router-dom";
export const Card = ({item}) => {
  return (
    <div class="card mb-3" style={{maxWidth: "70%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-4">
      <div class="card-body">
        <p class="card-text">Name: {item.name}</p>
        <p class="card-text">Phone: {item.phone}</p>
        <p class="card-text">Email: {item.email}</p>
        <p class="card-text">Address: {item.address}</p>
        



      </div>
      
    </div>
    <div class="col-md-4">
      <Link to={"/edit-contact/"+item.id}><span><i class="fa-solid fa-pencil"></i></span></Link>
      <span><i class="fa-solid fa-trash-can"></i></span>
      </div>

    
  </div>
</div>
  )
};

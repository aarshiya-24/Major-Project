import { useState,useEffect } from "react";


import axios from 'axios';

import { useNavigate } from "react-router-dom";


function DisplayAllItem(){


    const [vehicles , setVehicles]=useState([]);

    const navigate = useNavigate();


    useEffect(()=>{

        fetchVehicles();

    }, [])



    const fetchVehicles = () => {

        axios.get('http://localhost:5000/pizza')

            .then(response => {

                setVehicles(response.data);

            })

            .catch(error => {

                console.error('There was an error fetching the pizza data',error)

            })

    }


    const handleDelete = (id)=> {

        axios.delete(`http://localhost:5000/pizza/${id}`)

        .then(response => {

            fetchVehicles();

        })

        .catch(error => {

            console.error('There was an error deleting the pizza data',error)

        })

    }


    return (

        <div className="container mt-4">

            <h2>Pizza List</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600" height="300" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Margherita Pizza</h5>
        <p class="card-text">Price: $20</p>
        <p class="card-text">Size: Small</p>
        <p class="card-text">Category: Cheese Pizza</p>
        <p class="card-text">Description: Truely delicious and pure vegetarian pizza.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=600" height="300" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Pepperoni Pizza</h5>
        <p class="card-text">Price: $25</p>
        <p class="card-text">Size: Medium</p>
        <p class="card-text">Category: Extra Cheese Pizza</p>
        <p class="card-text">Description: Truely delicious and pure vegetarian pizza.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.pexels.com/photos/2274787/pexels-photo-2274787.jpeg?auto=compress&cs=tinysrgb&w=600" height="300" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Hawaiian Pizza</h5> 
        <p class="card-text">Price: $30</p>
        <p class="card-text">Size: Large</p>
        <p class="card-text">Category: Cheese Pizza</p>
        <p class="card-text">Description: Truely delicious and pure vegetarian pizza.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.pexels.com/photos/3644/pizza-restaurant-dinner-lunch.jpg?auto=compress&cs=tinysrgb&w=600" height="300" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Chicago Pizza</h5>
        <p class="card-text">Price: $40</p>
        <p class="card-text">Size: Extra Large</p>
        <p class="card-text">Category: Extra Cheese Pizza</p>
        <p class="card-text">Description: Truely delicious and pure vegetarian pizza.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=600" height="300" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Detroit Pizza</h5>
        <p class="card-text">Price: $35</p>
        <p class="card-text">Size: Small</p>
        <p class="card-text">Category: Cheese Pizza</p>
        <p class="card-text">Description: Truely delicious and pure vegetarian pizza.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>


            <div className="row">

                {vehicles.map(vehicle => (

                    <div className="col-md-4" key={vehicle.id}>

                    <div className="card mb-4">

                        <img src={vehicle.image} height={300}  className="card-img-top" />

                        <div className="card-body">

                            <h5 className="card-title">{vehicle.name}</h5>

                            <p className="card-text">Price: ${vehicle.price}</p>

                            <p className="card-text">Size: {vehicle.size}</p>

                            <p className="card-text">Category: {vehicle.category}</p>

                            <p className="card-text">Description: {vehicle.description}</p>

                            <button className="btn btn-danger me-2" onClick={()=>handleDelete(vehicle.id)}>Delete</button>

                            <button className="btn btn-warning" onClick={()=>navigate('/updateitem/${pizza.id}')}>Update</button>
                        
                        </div>

                        </div>

                    </div>


                ))}

            </div>


        </div>

    )

}


export default DisplayAllItem;
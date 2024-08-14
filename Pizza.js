import { useState,useEffect } from "react";

import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Pizza(){


    const [pizza , setPizza]=useState([]);

    const navigate = useNavigate();


    useEffect(()=>{

        fetchPizza();

    }, [])



    const fetchPizza = () => {

        axios.get('http://localhost:5000/pizza')

            .then(response => {

                setPizza(response.data);

            })

            .catch(error => {

                console.error('There was an error fetching the pizza data',error)

            })

    }


    const handleDelete = (id)=> {

        axios.delete(`http://localhost:5000/vehicles/${id}`)

        .then(response => {

            fetchPizza();

        })

        .catch(error => {

            console.error('There was an error deleting the pizza data',error)

        })

    }


    return (

        <div className="container mt-4">

            <h2>Pizza List</h2>

            <div className="row">

                {pizza.map(pizza => (

                    <div className="col-md-4" key={pizza.id}>

                    <div className="card mb-4">

                        <img src={"https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600"} height={300}  className="card-img-top" />

                        <div className="card-body">

                            <h5 className="card-title">Name:{pizza.name}</h5>

                            <p className="card-text">Price: ${pizza.price}</p>

                            <p className="card-text">Size: {pizza.size}</p>

                            <p className="card-text">Category: {pizza.category}</p>

                            <p className="card-text">Description: {pizza.description}</p>

                            <button  className="btn btn-danger me-2" onClick={()=> handleDelete(pizza.id)}>DELETE</button>

                            <button className="btn btn-warning" onClick={() => navigate(`/update-pizza/${pizza.id}`)}>UPDATE</button>

                        </div>

                        </div>

                    </div>


                ))}

            </div>


        </div>

    )

}


export default Pizza;


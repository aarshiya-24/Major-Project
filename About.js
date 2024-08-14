import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="container col-xxl-8 px-4 py-5">

<div className="row flex-lg-row-reverse align-items-center g-5 py-5">

  <div className="col-10 col-sm-8 col-lg-6">

    <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>

  </div>

  <div className="col-lg-6">

    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to Pizza House</h1>

    <p className="lead">Founded in 2024, Pizza House was born out of a genuine love for crafting the perfect pizza. Our founder, Ms. Aarshiya Qadri, started with a simple vision to create a place where friends and family could gather and enjoy exceptional, handcrafted pizzas made from the finest ingredients. It all began in a small, cozy kitchen where Aarshiya's passion for pizza-making flourished. With each pizza, a new recipe was perfected, blending traditional techniques with innovative flavors.As word spread, our humble pizzeria quickly became a local favorite, known for its warm, welcoming atmosphere and dedication to quality. We've grown over the years, but our commitment to excellence remains unchanged. Every pizza we serve is a testament to our journey—a journey filled with hard work, creativity, and an unwavering commitment to our customers. Today, Pizza Store stands as a beloved institution in Karad, where our story continues to unfold with every slice shared.</p>

    <div className="d-grid gap-2 d-md-flex justify-content-md-start">

      <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Pizza</button>

      <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>

    </div>

  </div>

</div>

</div>



<div className="row row-cols-1 row-cols-md-3 g-4">

<div className="col">

<div className="card h-100">

  <img src="https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>

  <div className="card-body">

    <h5 className="card-title">Margherita Pizza</h5>

    <p className="card-text">Truely delicious and pure vegetarian pizza.</p>

  </div>

  <div className="card-footer">

    <small className="text-body-secondary">Last updated 3 mins ago</small>

  </div>

</div>

</div>

<div className="col">

<div className="card h-100">

  <img src="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>

  <div className="card-body">

    <h5 className="card-title">Pepperoni Pizza</h5>

    <p className="card-text">Truely delicious and pure vegetarian pizza.</p>

  </div>

  <div className="card-footer">

    <small className="text-body-secondary">Last updated 3 mins ago</small>

  </div>

</div>

</div>

<div className="col">

<div className="card h-100">

  <img src="https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>

  <div className="card-body">

    <h5 className="card-title">Capricciosa Pizza</h5>

    <p className="card-text">Truely delicious and pure vegetarian pizza.</p>

  </div>

  <div className="card-footer">

    <small className="text-body-secondary">Last updated 3 mins ago</small>

  </div>

</div>

</div>

</div>
      <p>We serve the best pizzas in town with a variety of toppings and flavors.</p>
    </div>
  );
};

export default About;
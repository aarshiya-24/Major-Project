import{Link} from "react-router-dom";
function Menu(){
  return (
    <>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">Pizza House</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/displayallitem">Display All Item</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addnewitem">Add New Item</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/updateitem">Update Item</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/deleteitem">Delete Item</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactus">Contact Us</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </>
    )
  }
  export default Menu;
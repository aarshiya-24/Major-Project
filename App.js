import Menu from "./Menu";
import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import DisplayAllItem from "./DisplayAllItem";
import AddNewItem from "./AddNewItem";
import UpdateItem from "./UpdateItem";
import DeleteItem from "./DeleteItem";
import ContactUs from "./ContactUs";
import {Routes, Route} from 'react-router-dom';

function App(){
  return (
    <>
    <Menu/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/displayallitem" element={<DisplayAllItem/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/addnewitem" element={<AddNewItem/>}/>
      <Route path="/updateitem/:id" element={<UpdateItem/>}/>
      <Route path="/deleteitem" element={<DeleteItem/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
    </Routes>
    
    <Footer/>
    </>
  )
}


export default App;
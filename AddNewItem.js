import { useFormik } from "formik";

import axios from 'axios';

import { useNavigate } from "react-router-dom";

import * as Yup from 'yup';



function AddNewItem(){



    const navigate = useNavigate();



    const formik = useFormik({

        initialValues: {

            image:'',

            name:'',

            price:'',

            size:'',

            category:'',

            description:''

        },
        enableReinitialize:true,
        validationSchema: Yup.object({

            image: Yup.string().required('Image URL is required'),

            name: Yup.string()

                    .min(5,'Name must be at least 5 characters')

                    .required('Name is required'),

            price: Yup.number()

                    .min(1,'Price must be greater than 0')

                    .required('Price is required'),

            size: Yup.string()

                    .min(1,'Size must be at least 5 characters')

                    .required('Size is required'),

            category: Yup.string()

                    .min(1,'Category must be at least 5 characters')

                    .required('Category is required'),
            
            description: Yup.string()

                    .min(5,'Description must be at least 5 characters')

                    .required('Description is required'),        

           

        }),

        onSubmit: (values , {setSubmitting, resetForm , setStatus})=>{

            axios.post('http://localhost:5000/vehicles',values)

                .then(response=> {

                    setStatus('success');

                    resetForm();

                    navigate('/pizza');

                })

                .catch(error=>{

                    setStatus('error');

                })

                .finally(()=>{

                    setSubmitting(false);

                });

        },

    });



    return (

        <div className="container mt-4">

            <h2>Add New Item</h2>


            <form onSubmit={formik.handleSubmit}>

                <div className="mb-3">

                    <label htmlFor="image" className="form-label">Image URL</label>

                    <input

                        id="image"

                        name="image"

                        type="text"

                        className="form-control"

                        onChange={formik.handleChange}

                        onBlur={formik.handleBlur}

                        value={formik.values.image}

                        />


                        {

                            formik.touched.image &&  formik.errors.image ? (

                                <div className="text-danger">{formik.errors.image}</div>

                            ): null

                        }

                </div>




                <div className="mb-3">

                    <label htmlFor="name" className="form-label">Name</label>

                    <input

                        id="name"

                        name="name"

                        type="text"

                        className="form-control"

                        onChange={formik.handleChange}

                        value={formik.values.name}

                        />


                        {

                            formik.touched.name &&  formik.errors.name ? (

                                <div className="text-danger">{formik.errors.name}</div>

                            ): null

                        }

                </div>




                <div className="mb-3">

                    <label htmlFor="price" className="form-label">Price</label>

                    <input

                        id="price"

                        name="price"

                        type="number"

                        className="form-control"

                        onChange={formik.handleChange}

                        value={formik.values.price}

                        />


                        {

                            formik.touched.price &&  formik.errors.price ? (

                                <div className="text-danger">{formik.errors.price}</div>

                            ): null

                        }

                </div>



                <div className="mb-3">

                    <label htmlFor="size" className="form-label">Size</label>

                    <input

                        id="size"

                        name="size"

                        type="text"

                        className="form-control"

                        onChange={formik.handleChange}

                        value={formik.values.size}

                        />


                        {

                            formik.touched.size &&  formik.errors.size ? (

                                <div className="text-danger">{formik.errors.size}</div>

                            ): null

                        }

                </div>




                <div className="mb-3">

                    <label htmlFor="category" className="form-label">Category</label>

                    <input

                        id="category"

                        name="category"

                        type="text"

                        className="form-control"

                        onChange={formik.handleChange}

                        value={formik.values.category}

                        />


                        {

                            formik.touched.category &&  formik.errors.category ? (

                                <div className="text-danger">{formik.errors.category}</div>

                            ): null

                        }

                </div>




                <div className="mb-3">

                    <label htmlFor="description" className="form-label">Description</label>

                    <input

                        id="description"

                        name="description"

                        type="text"

                        className="form-control"

                        onChange={formik.handleChange}

                        value={formik.values.description}

                        />


                        {

                            formik.touched.description &&  formik.errors.descrption ? (

                                <div className="text-danger">{formik.errors.description}</div>

                            ): null

                        }

                </div>



                <button type="submit" className="btn btn-primary">

                    Submit

                </button>

            </form>


        </div>

    )


}


export default AddNewItem;
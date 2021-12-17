import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Sidebar from './sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, createProduct } from '../action/productAction'
import { NEW_PRODUCT_RESET } from '../constants/productConstants'

const AddProduct = ({history}) => {
  // history
  const dispatch = useDispatch();
  //  const alert =useAlert ();
  const { loading, error, success } = useSelector((state) => state.newProduct);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [decription, setDecription] = useState("");

  useEffect({
    if(error) {
      alert.error(error);
      dispatch(clearErrors());
    },
    if(Success) {
      alert.Success("Product uploaded Successfully")
      history.push("admin/dashboard")
      dispatch({ type: NEW_PRODUCT_RESET })
    }
  }, [dispatch, alert, error, history, success])


  const createProducthandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("category", category);
    myForm.set("decription", decription);
    dispatch(createProduct(myForm));
  };

  return (
    <Fragment>
      <div className='container'>
        <Sidebar />
      </div>
      <h1>Add Products</h1>
      <form onSubmit={createProducthandler} >
      
        <div class="form-group">
          <label for="Item_Name">Item-Name</label>
          <input type="text" class="form-control" id="Item-Name" placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="Price">Price</label>
          <input type="number" class="form-control" id="Price" placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)} />
          
        </div>
        <div class="form-group">
          <label for="category">category</label>
          <input type="text" class="form-control" id="category" placeholder="Enter category"  onChange={(e) => setCategory(e.target.value)} />
         
        </div>
        <div class="form-group">
          <label for="decription">decription</label>
          <input type="text" class="form-control" id="decription" placeholder="Enter decription" onChange={(e) => setDecription(e.target.value)} />
          
        </div>


        <button type="submit" class="btn btn-primary" >Submit</button>
      </form>
    </Fragment>
  )
}

export default AddProduct
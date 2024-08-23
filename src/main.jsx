import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Catugory from './components/catugory'
import DeleteModal from './components/deleteModal'
import AddUserModal from './components/addUserModal'
import Tables from './components/table'
import { dataurl } from './consts/consts'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
        // data 
        const [data, setData] = useState([])
        // data 
    
        // products
        const [products, setProducts] = useState([])
        // products
    
        // add modal
        const [AddUsersModal, setAddUsersModal] = useState(false)
        const closeAddUserModal = () => setAddUsersModal(!AddUsersModal)
        // add modal
    
        // delete modal
        const [deleteModal, setDeleteModal] = useState(false)
        const closeModal = () => setDeleteModal(!deleteModal)
        const [deletUsers, setDeletUsers] = useState([])
        // delete modal
    
        // fetch data
        useEffect(() => {
          axios.get(dataurl + "/category/list")
            .then(response => setData(response.data.body))
            .catch(err => console.log(err))
    
          axios.get(dataurl + "/product/list")
            .then(response => setProducts(response.data.body))
            .catch(err => console.log(err))
        }, [data])
    
  return (
    <div>
        <Catugory data={data} />
        <Tables products={products} closeModal={closeModal} setDeletUsers={setDeletUsers} closeAddUserModal={closeAddUserModal} />
        <DeleteModal deleteModal={deleteModal} closeModal={closeModal} deletUsers={deletUsers}  />
        <AddUserModal closeAddUserModal= {closeAddUserModal} AddUsersModal= {AddUsersModal} data={data}/>
    </div>
  )
}

export default Main
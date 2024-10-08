import axios from 'axios'
import React, { useRef, useState } from 'react'
import { dataurl } from '../consts/consts'

const AddUserModal = ({ closeAddUserModal, AddUsersModal, data }) => {
    const name = useRef('')
    const price = useRef('')
    const description = useRef('')
    
    function addUser() {

        let newUser = {
            "name": name.current.value,
            "description": description.current.value,
            "categoryId": 2,
            "price": price.current.value,
        }

        
        axios.post(`${dataurl}/product/save`, newUser)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        closeAddUserModal()

    }

    return (
        <div>
            {AddUsersModal &&
                <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="container mx-auto flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Sign in to our platform
                                </h3>
                                <button onClick={closeAddUserModal} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <div>
                                    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
                                    <input ref={name} type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">desripton</label>
                                    <input ref={description} type="text" name="password" id="password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">price</label>
                                    <input ref={price} type="number" name="password" id="password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>

                                <button onClick={addUser} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">add user</button>

                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default AddUserModal
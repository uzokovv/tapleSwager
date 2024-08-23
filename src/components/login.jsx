import axios from 'axios'
import React, { useRef } from 'react'
import { dataurl } from '../consts/consts'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let name = useRef('')
    let password = useRef('')

    const navigite = useNavigate()
    const navigite2 = useNavigate()

    function register() {
        navigite2('/register');
    }
    function getlogin() {
        let loginUser = {
            "login": name.current.value,
            "password": password.current.value
        }
        if (name.current.value && password.current.value) {

            axios.post(dataurl + "/auth/login", loginUser)
                .then(response => {
                    console.log(response);
                    if (response.status === 200) {
                        toast.success('Login Successful');
                        localStorage.setItem('token', response.data.token);
                        navigite('/');
                    }
                })
                .catch(err => {
                    if (err.response.status === 404) {
                        toast.error('User not found');
                    }else if (err.response.status === 400){
                        toast.error('Incorrect Password');
                    }
                })
            name.current.value = ''
            password.current.value = ''
        } else {
            toast.error('Please enter');
        }
    }
    return (
        <div className='text-center container mx-auto w-[400px]'>
            <div className="mb-5">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input ref={name} type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input ref={password} type="password" id="password" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div className='gap-7'>
                <button onClick={getlogin} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">login</button>
                <a onClick={register} href="#" class="ml-7 font-medium text-blue-600 dark:text-blue-500 hover:underline">register</a>

            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
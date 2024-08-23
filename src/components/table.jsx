import React from 'react'

const Tables = ({ products, closeModal, closeAddUserModal, setDeletUsers }) => {
    return (
        <div className='text-center'>
            <button onClick={closeAddUserModal} type="button" className="mt-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                +add user
            </button>

            <div className="container mx-auto overflow-x-auto w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                desription
                            </th>
                            <th scope="col" className="px-6 py-3">
                                price
                            </th>

                            <th scope="col" className="px-6 py-3">
                                setting
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 &&
                            products.map((item, idx) => (
                                <tr key={idx} className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.price}
                                    </td>

                                    <td className="px-6 py-4">
                                        <button onClick={() => {
                                            closeModal()
                                            setDeletUsers(item)               
                                        }} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Tables
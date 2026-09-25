import React, { useEffect, useState } from 'react'
import RoleBasedLayout from '../../Layouts/RoleBasedLayout';
import { ArrowUpRight, Trash, UserRoundPen } from 'lucide-react';
import { Link } from 'react-router';
import { CUSTOMERS_API, DELETE_CUSTOMER_API } from '../../utils/apis';
import toast from 'react-hot-toast';
import axios from 'axios';

const Customers = () => {
    const [customers, setCustomers ] = useState([])
    const getCustomers = async () => {
        try {
            const response = await axios.get(CUSTOMERS_API)
            if (response.data.status == true) {
                setCustomers(response.data.customers)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Internal server error")
            throw new Error(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${DELETE_CUSTOMER_API}/${id}`)
            if (response.data.status == true) {
                toast.success(response.data.message)
                setCustomers(response.data.customers)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Internal server error!")
            throw new Error(error)
        }
    }

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <RoleBasedLayout>

            <div className="mx-auto max-w-[1600px] space-y-6">
                {/* Welcome */}
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-1 text-sm font-medium text-amber-600">
                            Actions
                        </p>

                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            Customers
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Manage your client in one go
                        </p>
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white xl:col-span-2">
                    <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">
                        <div>
                            <h3 className="font-bold text-gray-900">

                            </h3>
                            <p className="mt-1 text-xs text-gray-400">

                            </p>
                        </div>

                        <Link
                            to="/customers/add"
                            className="flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700"
                        >
                            Add customer
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>

                    <div className="divide-y divide-gray-100">
                        <div className="px-5 py-5" >
                            <div class="overflow-x-auto">
                                <table class="min-w-full border border-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
                                    <thead class="bg-amber-600 text-white">
                                        <tr>
                                            <th class="px-6 py-3 text-left text-sm font-semibold">ID</th>
                                            <th class="px-6 py-3 text-left text-sm font-semibold">Full Name</th>
                                            <th class="px-6 py-3 text-left text-sm font-semibold">Email</th>
                                            <th class="px-6 py-3 text-left text-sm font-semibold">Phone</th>
                                            <th class="px-6 py-3 text-left text-sm font-semibold">Address</th>
                                            <th class="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody class="divide-y divide-gray-200">
                                        { customers.map((customer, i) => {
                                            return (
                                                
                                                <tr key={i} class="hover:bg-amber-50">
                                                    <td class="px-6 py-4">{i+1}</td>
                                                    <td class="px-6 py-4 font-medium">{customer.fullName}</td>
                                                    <td class="px-6 py-4">{customer.email}</td>
                                                    <td class="px-6 py-4">{customer.phone}</td>
                                                    <td class="px-6 py-4">
                                                        <div className='w-20 truncate'>
                                                            {customer.address}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='flex items-center gap-3'>
                                                            <button onClick={() => handleDelete(customer._id)} className='hover:cursor-pointer hover:bg-amber-600 hover:text-white bg-gray-200 shadow-lg rounded-lg p-2'>
                                                                <Trash size={16} />
                                                            </button>
                                                            <Link className='hover:cursor-pointer hover:bg-amber-600 hover:text-white bg-gray-200 shadow-lg rounded-lg p-2'>
                                                                <UserRoundPen size={16} />
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }) }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </RoleBasedLayout>
    )
}

export default Customers
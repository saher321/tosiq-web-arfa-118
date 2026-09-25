import React from 'react'
import RoleBasedLayout from '../../Layouts/RoleBasedLayout';
import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { InputField, SimpleButton } from '../../components/ComponentLib';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ADD_CUSTOMER_API } from '../../utils/apis';
import toast from 'react-hot-toast';

const AddCustomer = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const handleAddNewCustomer = async (data) => {
        try {
            const response = await axios.post(ADD_CUSTOMER_API, data)
            if (response.data.status == true) {
                toast.success(response.data.message)
                navigate("/customers")
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Internal server error")
            throw new Error(error)
        }
    }
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
                            Add customer
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Add new client for the future
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
                            to="/customers"
                            className="flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700"
                        >
                            View all
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>

                    <div className="divide-y divide-gray-100">
                        <div className="px-5 py-5" >
                            <div class="overflow-x-auto">
                                <form onSubmit={handleSubmit(handleAddNewCustomer)}>
                                    <div className="grid grid-cols-12 gap-3">
                                        <div className="col-span-12 lg:col-span-6">
                                            <div>
                                                <label htmlFor="">Customer name</label>
                                                <InputField
                                                { ...register("fullName") }
                                                type="text"
                                                placeholder="e.g: John Doe"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-6">
                                            <div>
                                                <label htmlFor="">Email address</label>
                                                <InputField
                                                { ...register("email") }
                                                type="text"
                                                placeholder="e.g: john@email.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-6">
                                            <div>
                                                <label htmlFor="">Phone</label>
                                                <InputField
                                                { ...register("phone") }
                                                type="text"
                                                placeholder="e.g: 1234"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-6">
                                            <div>
                                                <label htmlFor="">Address</label>
                                                <InputField
                                                { ...register("address") }
                                                type="text"
                                                placeholder="e.g: NY, USA"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12">
                                            <SimpleButton
                                            text="Add new customer"
                                             />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RoleBasedLayout>
    )
}

export default AddCustomer
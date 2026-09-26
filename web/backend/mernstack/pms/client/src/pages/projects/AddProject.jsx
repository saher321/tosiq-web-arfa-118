import React, { useEffect, useState } from 'react'
import RoleBasedLayout from '../../Layouts/RoleBasedLayout';
import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { InputField, SelectInput, SimpleButton } from '../../components/ComponentLib';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ADD_PROJECT_API, PROJECT_CUSTOMERS_API } from '../../utils/apis.js';
import toast from 'react-hot-toast';
import { projectStatuses } from '../../utils/common.js';

const AddProject = () => {
    const [customerNames, setCustomerNames] = useState([])
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const handleAddNewProject = async (data) => {
        try {
            const response = await axios.post(ADD_PROJECT_API, data)
            if (response.data.status == true) {
                toast.success(response.data.message)
                navigate("/projects")
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Internal server error")
            throw new Error(error)
        }
    }

    const getCustomerNames = async () => {
        try {
            const response = await axios.get(PROJECT_CUSTOMERS_API)
            if (response.data.status == true) {
                setCustomerNames(response.data.customerNames)
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    useEffect(() => {
        getCustomerNames()
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
                            Add project
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
                            to="/projects"
                            className="flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700"
                        >
                            View all
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>

                    <div className="divide-y divide-gray-100">
                        <div className="px-5 py-5" >
                            <div class="overflow-x-auto">
                                <form onSubmit={handleSubmit(handleAddNewProject)}>
                                    <div className="grid grid-cols-12 gap-3">
                                        <div className="col-span-12 lg:col-span-6">
                                            <div>
                                                <label htmlFor="">Project Title</label>
                                                <InputField
                                                { ...register("title") }
                                                type="text"
                                                placeholder="e.g: PMS portal"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-6">
                                            <div>
                                                <label htmlFor="">Customer</label>
                                                <SelectInput
                                                { ...register("customer") }
                                                data={customerNames}
                                                placeholder="e.g: john@email.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-6">
                                            <div>
                                                <label htmlFor="">Start date</label>
                                                <InputField
                                                { ...register("startDate") }
                                                type="date"
                                                placeholder="e.g: 1234"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-6">
                                            <div>
                                                <label htmlFor="">Dead Line</label>
                                                <InputField
                                                { ...register("deadLine") }
                                                type="date"
                                                placeholder="e.g: NY, USA"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-6">
                                            <div>
                                                <label htmlFor="">Status</label>
                                                <SelectInput
                                                { ...register("status") }
                                                data={projectStatuses}
                                                placeholder="e.g: 1234"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 lg:col-span-6">
                                            <div>
                                                <label htmlFor="">Notes</label>
                                                <InputField
                                                { ...register("notes") }
                                                type="text"
                                                placeholder="type something..."
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12">
                                            <SimpleButton
                                            text="Add new project"
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

export default AddProject
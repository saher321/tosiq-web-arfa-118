import React, { useEffect, useState } from 'react'
import RoleBasedLayout from '../../Layouts/RoleBasedLayout';
import { ArrowUpRight, Trash, UserRoundPen } from 'lucide-react';
import { Link } from 'react-router';
import { PROJECTS_API, DELETE_PROJECT_API } from '../../utils/apis';
import toast from 'react-hot-toast';
import axios from 'axios';
import moment from 'moment'

const Projects = () => {
    const [projects, setProjects ] = useState([])
    const getProjects = async () => {
        try {
            const response = await axios.get(PROJECTS_API)
            if (response.data.status == true) {
                console.log(response.data)
                setProjects(response.data.projects)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Internal server error")
            throw new Error(error)
        }
    }

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this?")) {
            return;
        }
        try {
            const response = await axios.delete(`${DELETE_PROJECT_API}/${id}`)
            if (response.data.status == true) {
                toast.success(response.data.message)
                setProjects(response.data.projects)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Internal server error!")
            throw new Error(error)
        }
    }

    useEffect(() => {
        getProjects()
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
                            Projects
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
                            to="/projects/add"
                            className="flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700"
                        >
                            Add project
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>

                    <div className="divide-y divide-gray-100">
                        <div className="px-5 py-5" >
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
                                    <thead className="bg-amber-600 text-white">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold">Customer</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold">Start date</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold">Deadline</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold">Notes</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200">
                                        { projects.map((project, i) => {
                                            return (
                                                
                                                <tr key={i} className="hover:bg-amber-50">
                                                    <td className="px-6 py-4">{i+1}</td>
                                                    <td className="px-6 py-4 font-medium">{project.title}</td>
                                                    <td className="px-6 py-4">{project?.customer?.fullName}</td>
                                                    <td className="px-6 py-4">{moment(project.startDate).format('ll')}</td>
                                                    <td className="px-6 py-4">{moment(project.deadLine).format('ll')}</td>
                                                    <td className="px-6 py-4 capitalize">{project.status}</td>
                                                    <td className="px-6 py-4">
                                                        <div className='w-20 truncate'>
                                                            {project.notes}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='flex items-center gap-3'>
                                                            <button onClick={() => handleDelete(project._id)} className='hover:cursor-pointer hover:bg-amber-600 hover:text-white bg-gray-200 shadow-lg rounded-lg p-2'>
                                                                <Trash size={16} />
                                                            </button>
                                                            <Link to={`/projects/edit/${project._id}`} className='hover:cursor-pointer hover:bg-amber-600 hover:text-white bg-gray-200 shadow-lg rounded-lg p-2'>
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

export default Projects
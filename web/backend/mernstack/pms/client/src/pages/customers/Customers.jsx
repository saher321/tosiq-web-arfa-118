import React from 'react'
import RoleBasedLayout from '../../Layouts/RoleBasedLayout';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

const Customers = () => {
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
                            href="/customers/add"
                            className="flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700"
                        >
                            View all
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
                                        </tr>
                                    </thead>

                                    <tbody class="divide-y divide-gray-200">
                                        <tr class="hover:bg-amber-50">
                                            <td class="px-6 py-4">1</td>
                                            <td class="px-6 py-4 font-medium">John Doe</td>
                                            <td class="px-6 py-4">john@example.com</td>
                                            <td class="px-6 py-4">+1 555-0101</td>
                                            <td class="px-6 py-4">123 Main Street</td>
                                        </tr>

                                        <tr class="hover:bg-amber-50">
                                            <td class="px-6 py-4">2</td>
                                            <td class="px-6 py-4 font-medium">Sarah Smith</td>
                                            <td class="px-6 py-4">sarah@example.com</td>
                                            <td class="px-6 py-4">+1 555-0102</td>
                                            <td class="px-6 py-4">456 Oak Avenue</td>
                                        </tr>

                                        <tr class="hover:bg-amber-50">
                                            <td class="px-6 py-4">3</td>
                                            <td class="px-6 py-4 font-medium">Michael Brown</td>
                                            <td class="px-6 py-4">michael@example.com</td>
                                            <td class="px-6 py-4">+1 555-0103</td>
                                            <td class="px-6 py-4">789 Pine Road</td>
                                        </tr>

                                        <tr class="hover:bg-amber-50">
                                            <td class="px-6 py-4">4</td>
                                            <td class="px-6 py-4 font-medium">Emily Johnson</td>
                                            <td class="px-6 py-4">emily@example.com</td>
                                            <td class="px-6 py-4">+1 555-0104</td>
                                            <td class="px-6 py-4">321 Maple Street</td>
                                        </tr>

                                        <tr class="hover:bg-amber-50">
                                            <td class="px-6 py-4">5</td>
                                            <td class="px-6 py-4 font-medium">David Wilson</td>
                                            <td class="px-6 py-4">david@example.com</td>
                                            <td class="px-6 py-4">+1 555-0105</td>
                                            <td class="px-6 py-4">654 Cedar Lane</td>
                                        </tr>
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
import { Icon } from 'lucide-react'
import React from 'react'

const DashStats = ({ title, value, change, positive, Icon }) => {
  return (
    <div
              key={title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Icon size={21} />
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm text-gray-500">{title}</p>

                <div className="mt-1 flex items-end gap-3">
                  <p className="text-2xl font-bold tracking-tight">
                    {value}
                  </p>
                </div>

                <p className="mt-2 text-xs text-gray-400">
                  Compared to last month
                </p>
              </div>
            </div>
  )
}

export default DashStats
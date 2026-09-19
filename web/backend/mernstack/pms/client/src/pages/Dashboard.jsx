
import useAuth from '../store/useAuth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import AdminLayout from '../Layouts/AdminLayout'
import {
  Users,
  FolderKanban,
  UserCheck,
  CheckSquare,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Clock3,
  CircleCheck,
  CircleAlert,
  CalendarDays,
} from "lucide-react";
import { TaskStat } from '../components/TaskStat';
import { TaskBadge } from '../components/TaskBadge';
import { QuickAction } from '../components/QuickAction';
import RoleBasedLayout from '../Layouts/RoleBasedLayout';
import DashStats from '../components/DashStats';
const Dashboard = () => {

  const logout = useAuth(state => state.logout)
  const user = useAuth(state => state.user)
  const isAuthenticated = useAuth(state => state.isAuthenticated)
  const navigate = useNavigate()

  const projects = [
    {
      name: "Website Redesign",
      customer: "Acme Corporation",
      progress: 78,
      status: "In Progress",
    },
    {
      name: "Mobile Application",
      customer: "Tech Solutions",
      progress: 62,
      status: "In Progress",
    },
    {
      name: "CRM Integration",
      customer: "Global Systems",
      progress: 45,
      status: "In Progress",
    },
    {
      name: "Marketing Campaign",
      customer: "Nova Brands",
      progress: 91,
      status: "Almost Done",
    },
  ];

  const tasks = [
    {
      title: "Review homepage designs",
      project: "Website Redesign",
      assignee: "AM",
      status: "Completed",
    },
    {
      title: "Fix authentication flow",
      project: "Mobile Application",
      assignee: "SA",
      status: "In Progress",
    },
    {
      title: "Prepare client presentation",
      project: "CRM Integration",
      assignee: "MK",
      status: "Pending",
    },
    {
      title: "Update campaign assets",
      project: "Marketing Campaign",
      assignee: "HR",
      status: "In Progress",
    },
  ];


  return (
    <RoleBasedLayout>
      <div className="mx-auto max-w-[1600px] space-y-6">
        {/* Welcome */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1 text-sm font-medium text-amber-600">
              Overview
            </p>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Good morning, {user?.fullName} 👋
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Monitor your business performance and team activity.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {user?.role == 'pm' ?
            <>
              <DashStats
                title="Total Customers"
                value="2,480"
                Icon={Users}
              />
              <DashStats
                title="Active Projects"
                value="148"
                Icon={FolderKanban}
              />
              <DashStats
                title="Team Members"
                value="64"
                Icon={UserCheck}
              />
              <DashStats
                title="Pending Tasks"
                value="36"
                Icon={CheckSquare}
              />
            </> :
            <DashStats
              title="Pending Tasks"
              value="36"
              Icon={CheckSquare}
            />
          }
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Projects */}

          {user?.role == 'pm' &&
            <div className="rounded-2xl border border-gray-200 bg-white xl:col-span-2">
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">
                <div>
                  <h3 className="font-bold text-gray-900">
                    Active Projects
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    Current project progress
                  </p>
                </div>

                <a
                  href="/admin/projects"
                  className="flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700"
                >
                  View all
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="divide-y divide-gray-100">
                {projects.map((project) => (
                  <div
                    key={project.name}
                    className="px-5 py-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                          {project.name}
                        </h4>

                        <p className="mt-1 text-xs text-gray-400">
                          {project.customer}
                        </p>
                      </div>

                      <span className="w-fit rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-600">
                        {project.status}
                      </span>
                    </div>

                    <div className="mt-4">
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="text-gray-400">
                          Progress
                        </span>

                        <span className="font-semibold text-gray-700">
                          {project.progress}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-amber-600 transition-all"
                          style={{
                            width: `${project.progress}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }

          {/* Tasks summary */}
          <div className="rounded-2xl border border-gray-200 bg-white">
            <div className="border-b border-gray-100 px-5 py-5">
              <h3 className="font-bold text-gray-900">
                Task Overview
              </h3>

              <p className="mt-1 text-xs text-gray-400">
                Your team's task status
              </p>
            </div>

            <div className="space-y-5 p-5">
              <TaskStat
                icon={CircleCheck}
                label="Completed"
                value="84"
                percentage="64%"
              />

              <TaskStat
                icon={Clock3}
                label="In Progress"
                value="36"
                percentage="28%"
              />

              <TaskStat
                icon={CircleAlert}
                label="Pending"
                value="11"
                percentage="8%"
              />
            </div>

            <div className="mx-5 mb-5 rounded-xl bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Total Tasks
                </span>

                <span className="text-lg font-bold">
                  131
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-amber-600"
                  style={{ width: "64%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom grid */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Recent Tasks */}
          <div className="rounded-2xl border border-gray-200 bg-white xl:col-span-2">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">
              <div>
                <h3 className="font-bold text-gray-900">
                  Recent Tasks
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  Latest activity from your team
                </p>
              </div>

              <a
                href="/admin/tasks"
                className="text-sm font-semibold text-amber-600 hover:text-amber-700"
              >
                View all
              </a>
            </div>

            <div className="divide-y divide-gray-100">
              {tasks.map((task) => (
                <div
                  key={task.title}
                  className="flex items-center gap-3 px-5 py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xs font-bold text-gray-600">
                    {task.assignee}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-800">
                      {task.title}
                    </p>

                    <p className="mt-0.5 truncate text-xs text-gray-400">
                      {task.project}
                    </p>
                  </div>

                  <TaskBadge status={task.status} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          {user?.role == 'pm' &&
            <div className="rounded-2xl border border-gray-200 bg-white">
              <div className="border-b border-gray-100 px-5 py-5">
                <h3 className="font-bold text-gray-900">
                  Quick Actions
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  Common management actions
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 p-5">
                <QuickAction
                  icon={Users}
                  title="Customer"
                  href="/admin/customers"
                />

                <QuickAction
                  icon={FolderKanban}
                  title="Project"
                  href="/admin/projects"
                />

                <QuickAction
                  icon={UserCheck}
                  title="Assignee"
                  href="/admin/assignees"
                />

                <QuickAction
                  icon={CheckSquare}
                  title="Task"
                  href="/admin/tasks"
                />
              </div>
            </div>
          }
        </div>
      </div>
    </RoleBasedLayout>
  )
}

export default Dashboard

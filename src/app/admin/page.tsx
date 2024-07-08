import React from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import {
  ActivityIcon,
  ClockIcon,
  FileQuestionIcon,
  PlusIcon,
  TrophyIcon,
  User,
} from "lucide-react";
export default function page() {
  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +5.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              New Registrations
            </CardTitle>
            <PlusIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+124</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +12.4% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+873</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +8.7% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Quizzes Completed
            </CardTitle>
            <FileQuestionIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+1,234</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +15.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Recent Registrations
            </CardTitle>
            <ClockIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/user.png"
                  alt="user"
                />
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Registered 2 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/user.png"
                  alt="user"
                />

                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Registered 4 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/user.png"
                  alt="user"
                />
                <div>
                  <p className="font-medium">Bob Johnson</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Registered 6 hours ago
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Recent Quiz Completions
            </CardTitle>
            <TrophyIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/user.png"
                  alt="user"
                />

                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Completed "JavaScript Fundamentals" quiz 2 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/user.png"
                  alt="user"
                />

                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Completed "React Basics" quiz 4 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/user.png"
                  alt="user"
                />
                <div>
                  <p className="font-medium">Bob Johnson</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Completed "SQL Fundamentals" quiz 6 hours ago
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

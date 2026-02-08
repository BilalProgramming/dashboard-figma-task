import React from 'react'
import StatCard from '@/Components/Card'
import { Users, Video, BookOpen, CreditCard } from "lucide-react"
import RecentUpdateCard from '@/Components/RecentUpdateCard'
import NoClasses from '@/Components/NoClasses'
export const Dashboard = () => {
  const updates = [
    {
      title: "Universe get attention of all the scientists! Why?",
      author: "Alex Cool",
      time: "2h ago",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=250&fit=crop&q=80",
      questions: "10 Questions"
    },
    {
      title: "The best way to create your own Projects! How?",
      author: "Jason A.",
      time: "5h ago",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&q=80",
      questions: "10 Questions"
    },
    {
      title: "Future predictions that makes you shocked!",
      author: "David Connor",
      time: "1d ago",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&q=80",
      questions: "10 Questions"
    }
  ]

  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* left side */}
        <div className="flex flex-col w-full lg:w-[70%]">
          {/* std cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="Students" value="0" icon={<Users size={24} strokeWidth={1.5} />} />
            <StatCard title="Videos" value="0" icon={<Video size={24} strokeWidth={1.5} />} />
            <StatCard title="Quizzes" value="0" icon={<BookOpen size={24} strokeWidth={1.5} />} />
            <StatCard title="Task's" value="0" icon={<CreditCard size={24} strokeWidth={1.5} />} />
          </div>

          {/* recent update */}
          <div className="bg-white border rounded-2xl mt-6 w-full p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">Recent Update</h2>
              <span className="text-red-500 text-sm font-medium cursor-pointer hover:underline">
                See All
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {updates.map((u, index) => (
                <RecentUpdateCard
                  key={index}
                  title={u.title}
                  author={u.author}
                  time={u.time}
                  image={u.image}
                  questions={u.questions}
                />
              ))}
            </div>
          </div>

          {/* Task's Assigned */}
          <div className="mt-6 bg-white border rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-gray-900">Task’s Assigned</h2>
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  790 x 315
                </span>
              </div>
              <span className="text-red-500 text-sm font-medium cursor-pointer hover:underline">
                See All
              </span>
            </div>

            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-48 h-24 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="text-sm font-semibold text-gray-900">
                You dont assigned any task
              </h3>
              <p className="text-xs text-gray-400">
                List of tasks you assigned to will appear here
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full lg:w-[30%] flex flex-col gap-6">
          <NoClasses
            headerTitle="Classes"
            title="There’s no Classes in your School"
            description="List of Classes you've create will appear here"
            icon={BookOpen}
            buttonText="See All"
          />

          <NoClasses
            headerTitle="Students"
            title="There’s no students in your School"
            description="List of students you've added will appear here"
            icon={Users}
            buttonText="See All"
          />
        </div>
      </div>
    </div>
  )
}

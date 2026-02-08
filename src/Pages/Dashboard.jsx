import React from 'react'
import StatCard from '@/Components/Card'
import { Users, Video, BookOpen, CreditCard } from "lucide-react"
import RecentUpdateCard from '@/Components/RecentUpdateCard'
import NoClasses from '@/Components/NoClasses'
export const Dashboard = () => {
  const updates = [
    {
      title: "New Lecture Added",
      author: "Mr. Ali",
      time: "2h ago",
      image: "https://via.placeholder.com/48" // small square placeholder
    },
    {
      title: "Quiz Released",
      author: "Ms. Sara",
      time: "5h ago",
      image: "https://via.placeholder.com/48"
    },
    {
      title: "Assignment Update",
      author: "Mr. Ahmed",
      time: "1d ago",
      image: "https://via.placeholder.com/48"
    }
  ]
  return (
    <div className='p-6'>
      <div className='flex gap-4'>
        {/* left side */}
      <div className='flex flex-col'>
      {/* std cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      <StatCard title="Students" value="0" icon={<Users size={20} />} />
        <StatCard title="Videos" value="0" icon={<Video size={20} />} />
        <StatCard title="Quizzes" value="0" icon={<BookOpen size={20} />} />
        <StatCard title="Tasks" value="0" icon={<CreditCard size={20} />} />
      </div>
       {/* recent update */}
<div className="bg-gray-100 rounded-2xl mt-6 w-full">
  
  <div className="flex justify-between items-center px-4 py-3">
    <h2 className="text-lg font-semibold">Recent Updates</h2>
    <span className="text-red-500 text-sm cursor-pointer">See All</span>
  </div>

  {/* 👇 EXACT FIGMA BEHAVIOR */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 pb-4">
    {updates.map((u, index) => (
      <RecentUpdateCard
        key={index}
        title={u.title}
        author={u.author}
        time={u.time}
        image={u.image}
      />
    ))}
  </div>

</div>

    </div>
    {/* right side */}
    <div>
      <NoClasses />
    </div>

</div>


    </div>
  )
}

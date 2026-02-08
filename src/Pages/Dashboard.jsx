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
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=250&fit=crop&q=80"
    },
    {
      title: "The best way to create your own Projects! How?",
      author: "Jason A.",
      time: "5h ago",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&q=80"
    },
    {
      title: "Future predictions that makes you shocked!",
      author: "David Connor",
      time: "1d ago",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&q=80"
    }
  ]

  return (
    <div className='p-6'>
      <div className='flex flex-col lg:flex-row gap-4'>
        {/* left side */}
      <div className='flex flex-col w-full lg:w-[70%]'>
      {/* std cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      <StatCard title="Students" value="0" icon={<Users size={23} />} />
        <StatCard title="Videos" value="0" icon={<Video size={23} />} />
        <StatCard title="Quizzes" value="0" icon={<BookOpen size={23} />} />
        <StatCard title="Tasks" value="0" icon={<CreditCard size={23} />} />
      </div>
       {/* recent update */}
<div className="bg-gray-100 rounded-2xl mt-6 w-full">
  
  <div className="flex justify-between items-center px-4 py-3">
    <h2 className="text-lg font-semibold">Recent Updates</h2>
    <span className="text-red-500 text-sm cursor-pointer">See All</span>
  </div>

 
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
    <div className='w-full lg:w-[30%]'>
      <NoClasses />
    </div>

</div>


    </div>
  )
}

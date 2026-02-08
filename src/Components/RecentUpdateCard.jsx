import React from "react"
import { Card } from "@/Components/ui/card"
import { PlayCircle, User } from "lucide-react"

const RecentUpdateCard = ({ title, author, time, image, questions = "10 Questions" }) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Video Thumbnail Section */}
      <div className="relative aspect-video w-full rounded-xl overflow-hidden group cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
          <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
             <PlayCircle className="text-white fill-white/20" size={20} />
          </div>
        </div>

        {/* Bottom stats */}
        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end text-[10px] font-medium text-white">
            <span className="bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-sm">12:14</span>
             <span className="bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-sm">{questions}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        {/* Author */}
        <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`} alt={author} className="w-full h-full" />
            </div>
            <div className="flex items-center justify-between flex-1">
             <span className="text-xs font-semibold text-gray-700">{author}</span>
             <span className="text-[10px] text-gray-400 flex items-center gap-1">
                <User size={10} /> 5k Students
             </span>
            </div>
        </div>

         {/* Title */}
        <h4 className="text-sm font-bold text-gray-900 leading-tight line-clamp-2">
            {title}
        </h4>
      </div>
    </div>
  )
}

export default RecentUpdateCard

import React from "react"
import { Card } from "@/Components/ui/card"



const RecentUpdateCard = ({ title, author, time, image }) => {
  return (
    <Card className="flex items-center gap-4 p-3 hover:bg-gray-100 transition-colors">
      
      {/* Thumbnail Image */}
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded-md object-cover flex-shrink-0"
      />

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="text-xs text-gray-500">{author}</p>
      </div>

      {/* Time */}
      <span className="text-xs text-gray-400 flex-shrink-0">{time}</span>
    </Card>
  )
}

export default RecentUpdateCard

import { Card, CardHeader, CardContent } from "@/Components/ui/card"


import React from "react"

const StatCard = ({ title, value, icon }) => {
  return (
    <Card className="flex items-center justify-between p-4 gap-4 hover:shadow-md transition-shadow">
      {/* Left Side: Icon + Title */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
      </div>
      
      {/* Right Side: Value */}
      <p className="text-2xl font-bold text-red-500">{value}</p>
    </Card>
  )
}

export default StatCard

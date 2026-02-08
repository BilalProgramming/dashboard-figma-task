import { Card, CardHeader, CardContent } from "@/components/ui/card"
import React from "react"

const StatCard = ({ title, value, icon }) => {
  return (
    <Card className="flex flex-col justify-between p-4 min-w-[150px] h-32">
      <CardHeader className="flex items-center justify-between">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="text-orange-500">{icon}</div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  )
}

export default StatCard

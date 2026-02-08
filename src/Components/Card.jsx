import { Card, CardHeader, CardContent } from "@/components/ui/card"


import React from "react"

const StatCard = ({ title, value, icon }) => {
  return (
    <Card className="flex flex-col justify-between p-4 min-w-[150px] h-[90px]">
      <div className="flex gap-0">
      <CardHeader className="flex items-center justify-between">

        <div >{icon}</div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-orange-500">{value}</p>
                <h3 className="text-sm ">{title}</h3>
      </CardContent>
      </div>
    </Card>
  )
}

export default StatCard

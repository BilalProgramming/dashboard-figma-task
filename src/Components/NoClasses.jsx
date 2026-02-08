import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"

const NoClasses = () => {
  return (
   <Card className="p-6 h-full flex flex-col gap-4">
  {/* Header */}
  <div className="flex items-center justify-between">
    <span className="text-lg font-semibold text-gray-900">
      Classes
    </span>
    <button className="text-sm font-medium text-red-600 hover:underline">
      See All
    </button>
  </div>

  {/* Center content */}
  <div className="flex flex-col items-center justify-center text-center gap-3 flex-1">
    {/* Icon */}
    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
      <GraduationCap className="text-orange-500" size={22} />
    </div>

    {/* Title */}
    <h3 className="text-sm font-semibold text-gray-800">
      There’s no classes in your school
    </h3>

    {/* Description */}
    <p className="text-xs text-gray-500 max-w-[220px]">
      Classes will appear here once they are created by the admin.
    </p>
  </div>
</Card>

  )
}

export default NoClasses

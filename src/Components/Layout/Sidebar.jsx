import {
  LayoutDashboard,
  Compass,
  BookOpen,
  GraduationCap,
  Video,
  Download,
  CreditCard,
  Users,
} from "lucide-react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Discover", icon: Compass },
  { name: "Quizzes", icon: BookOpen },
  { name: "My School", icon: GraduationCap },
  { name: "Classes", icon: Users },
  { name: "Lessons", icon: Video },
  { name: "Downloads", icon: Download },
  { name: "Subscription", icon: CreditCard },
]

const Sidebar = () => {
  return (
    <aside className="w-[270px] bg-[#1B1B1B] text-white flex flex-col">
      
      {/* Logo */}
      <div className="h-16 flex items-center px-6 text-xl font-bold">
        <span className="text-orange-500">Learn</span>
        <span className="ml-1">Bright</span>
      </div>

      <Separator className="bg-gray-800" />

      {/* Menu */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-sm",
                item.active
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              )}
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  )
}

export default Sidebar

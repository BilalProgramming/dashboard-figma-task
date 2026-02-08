import { Bell, Search } from "lucide-react"
import { Input } from "../ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

const Header = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      
      {/* Search */}
      <div className="relative w-[320px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder="Add search term or youtube link..."
          className="pl-10"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        
        {/* Notification */}
        <Button variant="ghost" size="icon">
          <Bell size={20} />
        </Button>

        {/* User */}
        <div className="flex items-center gap-2">
    
          <span className="text-sm font-medium text-gray-700">
            Jessica J.
          </span>
            <Avatar className="h-8 w-8">
            <AvatarImage src="https://i.pravatar.cc/100" />
            <AvatarFallback>JJ</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

export default Header

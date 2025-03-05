import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, User } from 'lucide-react'
const MainHeder = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
    <Link href="/" className="text-2xl font-bold text-primary">QuizMaster</Link>
    <div className="flex items-center space-x-4">
      {/* <Link href="/quizzes" className="text-muted-foreground hover:text-foreground">Quizzes</Link>
      <Link href="/leaderboard" className="text-muted-foreground hover:text-foreground">Leaderboard</Link>
      <Link href="/create" className="text-muted-foreground hover:text-foreground">Create Quiz</Link> */}
      <div className="relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input type="search" placeholder="Search quizzes..." className="pl-8 w-64" />
      </div>
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <User className="h-5 w-5" />
      </Button>
    </div>
  </nav>
  )
}

export default MainHeder

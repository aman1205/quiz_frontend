"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Clock, Users, Trophy } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface QuizCardProps {
  id: string | number
  title: string
  description: string
  questions: number
  timeInMinutes: number
  participants?: number
  category: string
  difficulty?: 'Easy' | 'Intermediate' | 'Hard'
  featured?: boolean
}

export function QuizCard({
  id,
  title,
  description,
  questions,
  timeInMinutes,
  participants,
  category,
  difficulty = 'Intermediate',
  featured = false
}: QuizCardProps) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/quizzes/${id}`)
  }

  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
        featured ? 'border-primary/50' : ''
      }`}
      onClick={handleCardClick}
    >
      {featured && (
        <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 text-center">
          Featured Quiz
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="outline" className="ml-2">
            {category}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-2">
          <div className="flex items-center">
            <Brain className="mr-1 h-4 w-4 text-primary" />
            <span>{questions} Questions</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4 text-primary" />
            <span>{timeInMinutes} minutes</span>
          </div>
          {participants && (
            <div className="flex items-center col-span-2">
              <Users className="mr-1 h-4 w-4 text-primary" />
              <span>{participants.toLocaleString()} participants</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-2">
          <Badge variant="secondary" className="text-xs">
            {difficulty}
          </Badge>
          {featured && (
            <div className="flex items-center text-amber-500">
              <Trophy className="h-4 w-4 mr-1" />
              <span className="text-xs font-medium">Top Rated</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Start Quiz</Button>
      </CardFooter>
    </Card>
  )
}
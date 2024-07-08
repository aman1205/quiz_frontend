'use client'
import React, { useEffect, useState } from 'react'
import { CSVLink } from 'react-csv';

import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Result {
  email: string
  name: string
  studentNo: string
  score: number
}

const sampleData: Result[] = [
  { email: 'john@example.com', name: 'John Doe', studentNo: '123456', score: 85 },
  { email: 'jane@example.com', name: 'Jane Smith', studentNo: '654321', score: 92 },
  { email: 'bob@example.com', name: 'Bob Johnson', studentNo: '789012', score: 78 },
]

export default function Page() {
  const [results, setResults] = useState<Result[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')

  useEffect(() => {
    const fetchResults = async () => {
      try {
        // Simulating an API call with sample data
        const response = { data: sampleData }
        setResults(response.data)
      } catch (error) {
        console.error('Error fetching quiz results:', error)
      }
    }
    fetchResults()
  }, [])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSort = (value: string) => {
    setSortBy(value)
    const sortedResults = [...results].sort((a, b) => {
      if (value === 'score') {
        return b.score - a.score
      } else if (value === 'name') {
        return a.name.localeCompare(b.name)
      } else if (value === 'email') {
        return a.email.localeCompare(b.email)
      } else if (value === 'student-no') {
        return a.studentNo.localeCompare(b.studentNo)
      }
      return 0
    })
    setResults(sortedResults)
  }

  const filteredResults = results.filter(result =>
    result.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.studentNo.includes(searchTerm)
  )
  const csvData = [
    ['Email', 'Name', 'Student No.', 'Score'],
    ...filteredResults.map((result) => [result.email, result.name, result.studentNo, result.score])
  ];
  return (
    <div className="flex-1 p-4 md:p-6 items-center justify-center bg-white dark:bg-gray-950">
      <div className="w-full space-y-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quiz Results</h1>
        <div className="bg-white dark:bg-gray-950 rounded-md shadow p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Student No.</div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Score</div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Actions</div>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {filteredResults.map((result) => (
              <div key={result.email} className="flex items-center justify-between py-4">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">{result.email}</div>
                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">{result.name}</div>
                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">{result.studentNo}</div>
                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">{result.score}</div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View</Button>
                  <Button size="sm" variant="outline">Export</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Label className="text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="search">Search:</Label>
            <Input
              className="max-w-md"
              id="search"
              placeholder="Search by email, name, or student number"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="flex items-center gap-2">
            <Label className="text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="sort">Sort by:</Label>
            <Select defaultValue="name" onValueChange={handleSort}>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="score">Score</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="student-no">Student No.</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline">
            <CSVLink data={csvData} filename={'quiz_results.csv'}>
              Export Results
            </CSVLink>
          </Button>

        </div>
      </div>
    </div>
  )
}

export interface Question {
    id: string;
    text: string;
    options: string[];
    category: string;
    image_url: string;
  }
  
  export interface Quiz {
    id: string;
    title: string;
    category: string;
    description: string;
    questionsList: Question[];
    timeInMinutes: number;
    participants: number;
    difficulty: 'Easy' | 'Intermediate' | 'Hard';
    featured: boolean;
  }
  
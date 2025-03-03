import { NavItem } from '@/types';

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/admin/overview',
    icon: 'dashboard',
    isActive: false,
    items: []
  },
  {
    title: 'Users',
    url: '#',
    icon: 'user',
    isActive: false,
    items: [
      {
        title: 'Users',
        url: '/admin/users',
        icon: 'userPen'
      },
      {
        title: 'Add User',
        url: '/admin/users/new',
        icon: 'userPen'
      }
    ]
  },
  {
    title: 'Questions',
    url: '#',
    icon: 'product',
    isActive: false,
    items: [
      {
        title: 'Questions',
        url: '/admin/questions',
        icon: 'userPen'
      },
      {
        title: 'Add Question',
        url: '/admin/questions/new',
        icon: 'login'
      }
    ] // No child items
  },
  {
    title: 'Quiz',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'billing',
    isActive: false,
    items: [
      {
        title: 'Quiz',
        url: '/admin/quiz',
        icon: 'userPen'
      },
      {
        title: 'Add Quiz',
        url: '/admin/quiz/new',
        icon: 'login'
      }
    ]
  },
  {
    title: 'Leaderboard',
    url: '/admin/leaderboard',
    icon: 'kanban',
    isActive: false,
    items: [] // No child items
  }
];

export type User = {
  id: string;
  name: string;
  // last_name: string;
  role: string;
  email: string;
  createdAt: string;
  // phone: string;
  // gender: string;
  // date_of_birth: string; // Consider using a proper date type if possible
  // street: string;
  // city: string;
  // state: string;
  // country: string;
  // zipcode: string;
  // longitude?: number; // Optional field
  // latitude?: number; // Optional field
  // job: string;
  // profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type Questions={
  id:string;
  text:string;
  options:string[];
  image_url:string;
  correctAnswer:string;
  category:string;
  createdAt:string;
}

export type Quiz={
  id:string ,
  title:string,
  questions:Questions[]
}


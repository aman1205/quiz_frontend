import { NavItem } from '@/types';

export const navItems: NavItem[] = [
    {
      title: 'Dashboard',
      url: '/admin/overview',
      icon: 'dashboard',
      isActive: false,
      items: [] // Empty array as there are no child items for Dashboard
    },
    {
      title: 'User',
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
          url: '/admin/add-user',
          icon: 'userPen'
        }
      ] 
    },
    {
      title: 'Product',
      url: '/admin/product',
      icon: 'product',
      isActive: false,
      items: [] // No child items
    },
    {
      title: 'Account',
      url: '#', // Placeholder as there is no direct link for the parent
      icon: 'billing',
      isActive: true,
  
      items: [
        {
          title: 'Profile',
          url: '/admin/profile',
          icon: 'userPen'
        },
        {
          title: 'Login',
          url: '/',
          icon: 'login'
        }
      ]
    },
    {
      title: 'Kanban',
      url: '/admin/kanban',
      icon: 'kanban',
      isActive: false,
      items: [] // No child items
    }
  ];

  export type Employee = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    gender: string;
    date_of_birth: string; // Consider using a proper date type if possible
    street: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
    longitude?: number; // Optional field
    latitude?: number; // Optional field
    job: string;
    profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
  };
  


  export const mockUsers: Employee[] = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      gender: 'Male',
      date_of_birth: '1985-01-15',
      street: '123 Main St',
      city: 'Anytown',
      state: 'Anystate',
      country: 'USA',
      zipcode: '12345',
      longitude: -75.343,
      latitude: 39.984,
      job: 'Software Engineer',
      profile_picture: 'https://example.com/profiles/john.jpg'
    },
    {
      id: 2,
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      gender: 'Female',
      date_of_birth: '1990-05-20',
      street: '456 Elm St',
      city: 'Othertown',
      state: 'Otherstate',
      country: 'USA',
      zipcode: '67890',
      job: 'Product Manager',
      profile_picture: 'https://example.com/profiles/jane.jpg'
    },
    {
      id: 3,
      first_name: 'Alice',
      last_name: 'Johnson',
      email: 'alice.johnson@example.com',
      phone: '555-123-4567',
      gender: 'Female',
      date_of_birth: '1988-07-30',
      street: '789 Oak St',
      city: 'Sometown',
      state: 'Somestate',
      country: 'USA',
      zipcode: '11223',
      job: 'UX Designer',
      profile_picture: 'https://example.com/profiles/alice.jpg'
    },
    {
      id: 4,
      first_name: 'Bob',
      last_name: 'Brown',
      email: 'bob.brown@example.com',
      phone: '444-555-6666',
      gender: 'Male',
      date_of_birth: '1975-03-10',
      street: '101 Pine St',
      city: 'Anycity',
      state: 'Anystate',
      country: 'USA',
      zipcode: '33445',
      job: 'DevOps Engineer',
      profile_picture: 'https://example.com/profiles/bob.jpg'
    },
    {
      id: 5,
      first_name: 'Charlie',
      last_name: 'Davis',
      email: 'charlie.davis@example.com',
      phone: '222-333-4444',
      gender: 'Male',
      date_of_birth: '1992-11-25',
      street: '202 Maple St',
      city: 'Othercity',
      state: 'Otherstate',
      country: 'USA',
      zipcode: '55667',
      job: 'Data Scientist',
      profile_picture: 'https://example.com/profiles/charlie.jpg'
    },
    {
      id: 6,
      first_name: 'Diana',
      last_name: 'Evans',
      email: 'diana.evans@example.com',
      phone: '111-222-3333',
      gender: 'Female',
      date_of_birth: '1983-09-15',
      street: '303 Birch St',
      city: 'Sometown',
      state: 'Somestate',
      country: 'USA',
      zipcode: '77889',
      job: 'Marketing Specialist',
      profile_picture: 'https://example.com/profiles/diana.jpg'
    },
    {
      id: 7,
      first_name: 'Eve',
      last_name: 'Foster',
      email: 'eve.foster@example.com',
      phone: '666-777-8888',
      gender: 'Female',
      date_of_birth: '1995-12-05',
      street: '404 Cedar St',
      city: 'Anycity',
      state: 'Anystate',
      country: 'USA',
      zipcode: '99001',
      job: 'HR Manager',
      profile_picture: 'https://example.com/profiles/eve.jpg'
    },
    {
      id: 8,
      first_name: 'Frank',
      last_name: 'Green',
      email: 'frank.green@example.com',
      phone: '333-444-5555',
      gender: 'Male',
      date_of_birth: '1980-06-18',
      street: '505 Walnut St',
      city: 'Othercity',
      state: 'Otherstate',
      country: 'USA',
      zipcode: '22334',
      job: 'Sales Manager',
      profile_picture: 'https://example.com/profiles/frank.jpg'
    },
    {
      id: 9,
      first_name: 'Grace',
      last_name: 'Harris',
      email: 'grace.harris@example.com',
      phone: '777-888-9999',
      gender: 'Female',
      date_of_birth: '1987-04-22',
      street: '606 Spruce St',
      city: 'Sometown',
      state: 'Somestate',
      country: 'USA',
      zipcode: '44556',
      job: 'Business Analyst',
      profile_picture: 'https://example.com/profiles/grace.jpg'
    },
    {
      id: 10,
      first_name: 'Henry',
      last_name: 'Irvine',
      email: 'henry.irvine@example.com',
      phone: '888-999-0000',
      gender: 'Male',
      date_of_birth: '1993-08-12',
      street: '707 Aspen St',
      city: 'Anycity',
      state: 'Anystate',
      country: 'USA',
      zipcode: '66778',
      job: 'Project Manager',
      profile_picture: 'https://example.com/profiles/henry.jpg'
    }
  ];
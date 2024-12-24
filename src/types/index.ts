import { Icons } from '@/components/icons';


export interface NavItem {
    title: string;
    url: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
    description?: string;
    isActive?: boolean;
    items?: NavItem[];
  }
  
  export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[];
  }
  
  export interface NavItemWithOptionalChildren extends NavItem {
    items?: NavItemWithChildren[];
  }

  export type MainNavItem = NavItemWithOptionalChildren;
  export type SidebarNavItem = NavItemWithChildren;
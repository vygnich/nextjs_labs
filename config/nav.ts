import { Cog, Globe, HomeIcon } from 'lucide-react';
import { SidebarLinkType } from '@/components/SidebarItems';

interface AdditionalLinks {
  title: string;
  links: SidebarLinkType[]
}

export const defaultLinks: SidebarLinkType[] = [
  { href: '/admin/dashboard', title: 'Home', icon: HomeIcon },
  { href: '/admin/account', title: 'Account', icon: Cog },
  { href: '/admin/settings', title: 'Settings', icon: Cog },
] as const;

export const additionalLinks: AdditionalLinks[] = [
  {
    title: 'Entities',
    links: [
      {
        href: '/admin/orders',
        title: 'Orders',
        icon: Globe,
      },
      {
        href: '/admin/products',
        title: 'Products',
        icon: Globe,
      },
      {
        href: '/admin/categories',
        title: 'Categories',
        icon: Globe,
      },
      {
        href: '/admin/feedbacks',
        title: 'Feedbacks',
        icon: Globe,
      },
    ],
  },
] as const;


export const sellerLinks: AdditionalLinks[] = [
  {
    title: 'Sellers',
    links: [
      {
        href: '/admin/seller-request',
        title: 'Seller requests',
        icon: Globe,
      }
    ],
  },
] as const;


export const brandLink: AdditionalLinks[] = [
  {
    title: 'Бренд',
    links: [
      {
        href: '/admin/brand',
        title: 'Бренд',
        icon: Globe,
      }
    ],
  },
] as const;



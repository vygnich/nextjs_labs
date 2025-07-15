import { Cog, Globe, HomeIcon } from 'lucide-react';
import { SidebarLinkType } from '@/components/SidebarItems';

interface AdditionalLinks {
  title: string;
  links: SidebarLinkType[]
}

export const defaultLinks: SidebarLinkType[] = [
  { href: '/admin/dashboard', title: 'Головна', icon: HomeIcon },
  { href: '/admin/account', title: 'Профіль', icon: Cog },
  { href: '/admin/settings', title: 'Налаштування', icon: Cog },
] as const;

export const additionalLinks: AdditionalLinks[] = [
  {
    title: 'Суб\'єкти',
    links: [
      {
        href: '/admin/orders',
        title: 'Замовлення',
        icon: Globe,
      },
      {
        href: '/admin/products',
        title: 'Продукти',
        icon: Globe,
      },
      {
        href: '/admin/categories',
        title: 'Категорії',
        icon: Globe,
      },
      {
        href: '/admin/feedbacks',
        title: 'Відгуки',
        icon: Globe,
      },
    ],
  },
] as const;


export const sellerLinks: AdditionalLinks[] = [
  {
    title: 'Запити',
    links: [
      {
        href: '/admin/seller-request',
        title: 'Запити на продавця',
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



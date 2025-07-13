import { LucideIcon } from 'lucide-react';
import {additionalLinks, brandLink, defaultLinks, sellerLinks} from '@/config/nav';
import {SidebarLink} from "@/components/ui/SidebarItem";
import {getUserAuth} from "@/lib/auth/utils";
import {UserRole} from "@prisma/client";

export interface SidebarLinkType {
  title: string;
  href: string;
  icon: LucideIcon;
}


function SidebarLinkGroup({
  links,
  title,
  border,
}: {
  links: SidebarLinkType[];
  title?: string;
  border?: boolean;
}) {


  return (
    <div className={border ? 'border-border border-t my-8 pt-4' : ''}>
      {title ? (
        <h4 className="px-2 mb-2 text-xs uppercase text-muted-foreground tracking-wider">
          {title}
        </h4>
      ) : null}
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <SidebarLink
                link={{
                  title: link.title,
                  href: link.href,
                }}
            >
              <link.icon className="mr-2 h-4 w-4" />
            </SidebarLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function SidebarItems() {
  const { session } = await getUserAuth();


  return (
    <>
      <SidebarLinkGroup links={defaultLinks} />
      {additionalLinks.length > 0
        ? additionalLinks.map((l) => (
          <SidebarLinkGroup
            links={l.links}
            title={l.title}
            border
            key={l.title}
          />
        ))
        : null}

      {(session?.user.role == UserRole.ADMIN && sellerLinks.length > 0)
        ? sellerLinks.map((l) => (
          <SidebarLinkGroup
            links={l.links}
            title={l.title}
            border
            key={l.title}
          />
        ))
        : null}
      {(session?.user.role == UserRole.SELLER && brandLink.length > 0)
        ? brandLink.map((l) => (
          <SidebarLinkGroup
            links={l.links}
            title={l.title}
            border
            key={l.title}
          />
        ))
        : null}
    </>
  );
}

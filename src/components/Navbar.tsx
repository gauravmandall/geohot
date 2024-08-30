import { Rabbit } from 'lucide-react';
import React from 'react';
import ModeToggle from '@/components/ui/theme-button';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center gap-2">
        <Rabbit className="size-8" />
        <div className="flex flex-col gap-4">
          <span className="tracking-tighter text-3xl font-extrabold text-primary flex gap-2 items-center">
            Geohot{' '}
            <span className="rounded-full text-base bg-primary/10 border border-primary/50 px-2">
              <Link
                href={siteConfig.links.github}
              >
                v1.0
              </Link>
            </span>
          </span>
        </div>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;

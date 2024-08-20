import avatarPlaceholder from '@/assets/images/avatar_placeholder.png';
import { LogOut, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './Button';
import { signOut } from '@/auth';

export default function UserButton({ user }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' className='flex-none rounded-full'>
          <Image
            src={user.image || avatarPlaceholder}
            alt='User profile picture'
            width={50}
            height={50}
            className='aspect-square rounded-full bg-background object-cover'
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 bg-white '>
        <DropdownMenuLabel>{user.name || 'User'}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href='/settings' className='cursor-pointer'>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button type='submit' className='flex w-full items-center'>
              <LogOut className='mr-2 h-4 w-4' /> Sign Out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

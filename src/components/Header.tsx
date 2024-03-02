import MenuIcon from './icons/MenuIcon';
import Logo from '../assets/images/logo.png';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ArrowDownIcon from './icons/ArrowDownIcon';
import SearchIcon from './icons/SearchIcon';
import { NAV_LINKS } from '@/app-constants';
import BellIcon from './icons/BellIcon';
import GiftIcon from './icons/GiftIcon';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

export default function Header() {
  return (
    <div className='flex items-center justify-between lg:space-x-6 py-6'>
      <div className='flex items-center space-x-3 w-full lg:w-fit justify-between lg:justify-normal'>
        <div className='flex items-center space-x-3'>
          <Button variant='ghost'>
            <MenuIcon className='lg:hidden' />
          </Button>
          <Image src={Logo} className='w-8' alt='company logo' />
        </div>

        <div className='flex items-center justify-between space-x-6'>
          <div className='rounded-full border flex items-center p-1.5 space-x-3'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className='font-montrealMedium font-medium'>Keshav</p>
            <ArrowDownIcon />
          </div>
          <SearchIcon className='lg:hidden' />
        </div>
      </div>

      <div className='items-center space-x-8 hidden lg:flex'>
        {NAV_LINKS.map((link, index) => (
          <p key={index} className='opacity-60 font-montrealMedium font-medium'>
            {link}
          </p>
        ))}
      </div>

      <div className='items-center space-x-8 hidden lg:flex'>
        <BellIcon />
        <GiftIcon />
        <Input type='text' placeholder='Search...' />
      </div>
    </div>
  );
}

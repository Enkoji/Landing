import {
  PlusIcon,
  HeartIcon,
  PhoneIcon
} from '@heroicons/react/24/solid'
import { Links } from '../../../utils/links';

import Logo from '../../../assets/images/logo.png';

export const Desktop = () => {
  return (
    <>
      <header className='flex justify-center bg-primary-500 pt-4'>
        <div className='flex justify-end gap-2 w-4/5'>
          <button className='flex justify-between items-center gap-2 bg-secondary-500 rounded-full px-4 py-1 text-white text-xl font-normal'>
            <PlusIcon
              className='w-7 h-7'
            />
            <span>Seja Membro</span>
          </button>
          <button className='flex justify-between items-center gap-2 bg-secondary-500 rounded-full px-4 py-1 text-white text-xl font-normal'>
            <HeartIcon
              className='w-6 h-6'
            />
            <span>Doações</span>
          </button>
          <a href='#gallery'>
            <button className='flex justify-between items-center gap-2 bg-secondary-500 rounded-full px-4 py-1 text-white text-xl font-normal'>
              <PhoneIcon
                className='w-6 h-6'
              />
              <span>Contato</span>
            </button>
          </a>
        </div>
      </header>
      <nav className='flex justify-center bg-primary-500 pb-6 h-4/5'>
        <div className='flex items-center gap-2 w-4/5' id='navbar-default'>
          <img
            src={Logo}
            alt='Logo templo enkoji'
            className='w-1/5'
          />
          <ul className='flex flex-row justify-around items-center p-4 rounded-full w-full bg-secondary-500 text-white text-xl font-medium'>
            <li className='flex justify-between items-center gap-2'>
              <a href='#history'>Sobre nós</a>
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='#buddhism'>Budismo</a>
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='#infos'>Programação</a>
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href={Links.socialMedia.shop} target='_blank' rel='noreferrer'>Loja</a>
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='#gallery'>Mídia</a>
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='#infos'>Visite</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

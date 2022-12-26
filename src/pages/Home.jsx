import React from 'react';
import { ChevronDownIcon, PlusIcon, HeartIcon, PhoneIcon } from '@heroicons/react/24/solid'

import Logo from '../assets/images/logo.png';
import Carrousel1 from '../assets/images/carrousel1.jpg';

import Instagram from '../assets/icons/instagram.svg';
import Facebook from '../assets/icons/facebook.svg';
import WhatsApp from '../assets/icons/whatsapp.svg';

export const Home = () => {
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
          <button className='flex justify-between items-center gap-2 bg-secondary-500 rounded-full px-4 py-1 text-white text-xl font-normal'>
            <PhoneIcon
              className='w-6 h-6'
            />
            <span>Contato</span>
          </button>
        </div>
      </header>
      <nav className='flex justify-center bg-primary-500 pb-6 h-4/5'>
        <div className='flex items-center gap-2 w-4/5'>
          <img
            src={Logo}
            alt='Logo templo enkoji'
            className='w-1/5'
          />
          <ul className='flex flex-row justify-around items-center p-4 rounded-full w-full bg-secondary-500 text-white text-xl font-medium'>
            <li className='flex justify-between items-center gap-2'>
              <a href='*'>Sobre nós</a>
              <ChevronDownIcon
                className='w-6 h-6 mt-1'
              />
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='*'>Budismo</a>
              <ChevronDownIcon
                className='w-6 h-6 mt-1'
              />
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='*'>Programação</a>
              <ChevronDownIcon
                className='w-6 h-6 mt-1'
              />
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='*'>Loja</a>
              <ChevronDownIcon
                className='w-6 h-6 mt-1'
              />
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='*'>Mídia</a>
              <ChevronDownIcon
                className='w-6 h-6 mt-1'
              />
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='*'>Visite</a>
              <ChevronDownIcon
                className='w-6 h-6 mt-1'
              />
            </li>
          </ul>
        </div>
      </nav>
      <section className='flex justify-center pb-5 bg-primary-500'>
        <div className='flex justify-between gap-4 w-3/4 border border-white text-white p-9'>
          <div className='flex flex-col justify-between'>
            <h1 className='text-6xl'>
              Seja bem-vindo!
            </h1>
            <p className='text-2xl w-5/6'>
              Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo! Venha construí-la com a gente! Venha ao templo Enkoji
            </p>
            <span className='flex gap-3'>
              <img src={Instagram} alt='Logo Instagram' className='w-8 h-8'/>
              <img src={Facebook} alt='Logo Facebook' className='w-8 h-8'/>
              <img src={WhatsApp} alt='Logo WhatsApp' className='w-8 h-8'/>
            </span>
          </div>
          <img
            src={Carrousel1}
            alt='Imagem do templo Enkoji'
            className='w-5/12'
          />
        </div>
      </section>
    </>
  );
}
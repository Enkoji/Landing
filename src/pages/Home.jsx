import React from 'react';
import {
  // ChevronDownIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/solid'
import { AddressMap } from '../components/AddressMap';
import { Navbar } from '../components/Navbar';

import { Links } from '../utils/links.js'

import Monge from '../assets/images/monge.png';
import Carrousel1 from '../assets/images/carrousel1.jpg';
import Person1 from '../assets/images/person1.png';
import Person2 from '../assets/images/person2.png';
import Grid1 from '../assets/images/grid1.png';
import Grid2 from '../assets/images/grid2.png';
import Grid3 from '../assets/images/grid3.png';
import GridFooter1 from '../assets/images/grid-footer-1.png';
import GridFooter2 from '../assets/images/grid-footer-2.png';
import GridFooter3 from '../assets/images/grid-footer-3.png';

import Instagram from '../assets/icons/instagram.svg';
import Facebook from '../assets/icons/facebook.svg';
import WhatsApp from '../assets/icons/whatsapp.svg';
import Youtube from '../assets/icons/youtube.svg';
import { ReactComponent as Waze } from '../assets/icons/waze.svg';
import { ReactComponent as Maps } from '../assets/icons/maps.svg';

export const Home = () => {

  const handleOpenSchedule = () => {
    // Open Schedule
  }

  const handleOpenTrack = (plataform) => {
    Object.keys(Links.track).map(key => {
      if (key === plataform) {
        window.open(Links.track[key], '_blank');
      }
    })
  }

  return (
    <>
      <Navbar/>
      <section className='flex justify-center pb-5 pt-28 md:pt-0 bg-primary-500'>
        <div className='flex justify-between gap-4 w-3/4 border border-white text-white p-9'>
          <div className='flex flex-col justify-between'>
            <h1 className='text-6xl'>
              Seja bem-vindo!
            </h1>
            <p className='text-2xl w-5/6'>
              Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo! Venha construí-la com a gente! Venha ao templo Enkoji
            </p>
            <span className='flex gap-3'>
              <a href={Links.socialMedia.instagram} target='_blank' rel='noreferrer'>
                <img src={Instagram} alt='Logo Instagram' className='w-8 h-8'/>
              </a>
              <a href={Links.socialMedia.facebook} target='_blank' rel='noreferrer'>
                <img src={Facebook} alt='Logo Facebook' className='w-8 h-8'/>
              </a>
              <a href={Links.socialMedia.whatsapp} target='_blank' rel='noreferrer'>
                <img src={WhatsApp} alt='Logo WhatsApp' className='w-8 h-8'/>
              </a>
              <a href={Links.socialMedia.youtube} target='_blank' rel='noreferrer'>
                <img src={Youtube} alt='Logo Youtube' className='w-9 h-9'/>
              </a>
            </span>
          </div>
          <img
            src={Carrousel1}
            alt='Imagem do templo Enkoji'
            className='w-5/12'
          />
        </div>
      </section>
      <section className='flex justify-center my-7' id='infos'>
        <div className='flex justify-between w-4/5 text-primary-500'>
          <div className='flex flex-col justify-evenly gap-10'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-3xl font-bold uppercase'>
                Horário de Funcionamento
              </h2>
              <div className='flex gap-3'>
                <ClockIcon
                  className='w-14 h-14 float-left'
                />
                <span className='float-left'>
                  <p className='text-xl'>Segunda a sexta: 14h às 18h</p>
                  <p className='text-xl'>Sábado e Domingo: 9h às 17h</p>
                </span>
              </div>
              <button
                className='bg-primary-500 text-white text-4xs rounded-full py-2 mx-7'
                onClick={handleOpenSchedule}
              >
                Acessar Cronograma
              </button>
            </div>
            <div className='flex flex-col gap-5'>
              <h2 className='text-3xl font-bold uppercase'>
                Localização
              </h2>
              <div className='flex gap-3'>
                <MapPinIcon
                  className='w-14 h-14 float-left'
                />
                <span className='float-left w-3/4'>
                  <p className='text-xl'>R. Izequias Hengles - Itapecerica da Serra, SP</p>
                </span>
              </div>
              <div className='flex justify-between gap-5 mx-7'>
                <button
                  className='flex flex-row justify-center items-center gap-2 bg-primary-500 text-white text-4xs rounded-full py-2 w-full'
                  onClick={() => handleOpenTrack('waze')}
                >
                  Waze
                  <Waze className='w-7 h-7'/>
                </button>
                <button
                  className='flex flex-row justify-center items-center gap-2 bg-primary-500 text-white text-4xs rounded-full py-2 w-full'
                  onClick={() => handleOpenTrack('maps')}
                >
                  Maps
                  <Maps className='w-7 h-7'/>
                </button>
              </div>
            </div>
            <AddressMap/>
          </div>
          <img
            src={Monge}
            alt='Imagem de um monge no templo enkoji'
            className='w-1/2'
          />
        </div>
      </section>
      <section className='flex justify-center bg-history bg-cover bg-no-repeat bg-fixed p-10 h-[90vh]' id='history'>
        <div className='flex flex-col justify-between gap-4 w-4/5 h-full text-primary-500 bg-white rounded px-10 pt-10'>
          <span>
            <h2 className='text-4xl font-bold mb-4'>A história do Templo Enkoji...</h2>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, expedita eum nemo rerum autem ratione ab minima. Ex, distinctio officiis, omnis dolore adipisci incidunt veritatis pariatur molestiae reiciendis aperiam quos.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum velit ipsam temporibus placeat dolorem cupiditate vel reiciendis modi cum enim, nulla quas incidunt voluptate culpa quasi obcaecati praesentium numquam possimus.
            </p>
          </span>
          <div className='flex gap-14 mx-10 h-3/5'>
            <div className='text-white bg-primary-500 rounded-t-xl p-5'>
              <h3 className='text-center mb-3'>Missão</h3>
              <p className='text-justify'>Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo!</p>
            </div>
            <div className='text-white bg-primary-500 rounded-t-xl p-5'>
              <h3 className='text-center mb-3'>Missão</h3>
              <p className='text-justify'>Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo!</p>
            </div>
            <div className='text-white bg-primary-500 rounded-t-xl p-5'>
              <h3 className='text-center mb-3'>Missão</h3>
              <p className='text-justify'>Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo!</p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center items-center gap-10 my-7'>
        <div className='flex justify-between gap-5 w-3/4'>
          <img
            className='w-4/5'
            src={Person1}
            alt='Foto monge ohata'
          />
          <span className='text-primary-500'>
            <h3 className='text-3xl font-bold'>
              Monge Ohata
            </h3>
            <hr className='mb-4 h-1 w-2/3 bg-primary-500 border-0'/>
            <p className='text-xl font-light text-justify'>
              Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo! Venha construí-la com a gente ! Venha ao templo Enkoji.Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar...
            </p>
          </span>
        </div>
        <div className='flex justify-between gap-5 w-3/4'>
          <img
            className='w-4/5'
            src={Person2}
            alt='Foto monge ohata'
          />
          <span className='text-primary-500'>
            <h3 className='text-3xl font-bold'>
              Monge Marcos Lopes
            </h3>
            <hr className='mb-4 h-1 w-2/3 bg-primary-500 border-0'/>
            <p className='text-xl font-light text-justify'>
              Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo! Venha construí-la com a gente ! Venha ao templo Enkoji.Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar...
            </p>
          </span>
        </div>
      </section>
      <section className='flex justify-center bg-primary-500 p-7' id='buddhism'>
        <div className='grid grid-cols-2 gap-12 w-10/12'>
          <div className='flex flex-col justify-evenly gap-5 text-white h-full'>
            <h2 className='text-6xl font-medium'>
              Saiba mais sobre o Budismo
            </h2>
            <p className='text-justify text-xl font-light'>
              Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo! Venha construí-la com a gente ! Venha ao templo Enkoji.Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo! Venha construí-la com a gente ! Venha ao templo EnkojiTodo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo!
            </p>
            <div className='flex flex-col gap-4'>
              <button className='text-primary-500 bg-white px-5 py-3 rounded-full text-xl font-medium'>
                Budismo no dia a dia
              </button>
              <button className='text-primary-500 bg-white px-5 py-3 rounded-full text-xl font-medium'>
                Retiros - para quem é indicado
              </button>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5 h-full'>
            <img src={Grid1} alt='Foto Buda' className='col-span-2'/>
            <img src={Grid2} alt='Foto em momento de meditação' className='w-full'/>
            <img src={Grid3} alt='Foto do templo ao lado de um lago' className='w-full h-full'/>
          </div>
        </div>
      </section>
      <section className='flex justify-center bg-primary-500 p-7' id='gallery'>
        <div className='grid grid-cols-2 gap-12 w-10/12 text-white'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-6xl font-bold uppercase'>
              Galeria
            </h3>
            <div className='grid grid-cols-2 grid-rows-2 gap-3 h-full'>
              <img src={GridFooter1} alt='' className='row-span-2 h-full w-full'/>
              <img src={GridFooter2} alt='' className='h-full w-full'/>
              <img src={GridFooter3} alt='' className='h-full w-full'/>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
              <h4 className='text-3xl font-bold uppercase'>Contato</h4>
              <a href='tel:+5511968981736' className='text-xl'>
                (11) 9 1352-9667
              </a>
              <a href='mailto:templo.enkoji@gmail.com' className='text-xl'>
                templo.enkoji@gmail.com
              </a>
              <a href={Links.socialMedia.whatsapp} target='_blank' rel='noreferrer' className='w-full'>
                <button className='text-primary-500 bg-white px-4 py-2 rounded-full text-xl font-medium w-full'>
                  Converse conosco pelo WhatsApp
                </button>
              </a>
            </div>
            <div className='flex flex-col gap-5'>
              <h4 className='text-3xl font-bold uppercase'>Já nos Visitou?</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis asperiores est id amet voluptate perspiciatis voluptatum</p>
              <a href={Links.socialMedia.maps} target='_blank' rel='noreferrer' className='w-full'>
                <button className='text-primary-500 bg-white px-4 py-2 rounded-full text-xl font-medium w-full'>
                  Conte Sua Experiência
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react'
import { Fade } from "react-awesome-reveal";

import logoNext from '../Images/nextjs-logo.png'
import logoReact from '../Images/react-logo.png'
import logoFirebase from '../Images/firebase-logo.svg'
import logoNode from '../Images/node-logo.png'


const SobreMiSection = () => {
  return (
    <section className='section' id='sobre-mi'>
      <div className="sobre-mi__title mb-5 text-center">
        <Fade direction='up' duration={1200}>

          <h2 className="text-4xl tab:text-5xl">
            Conoceme un poco mas
          </h2>
        </Fade>
      </div>  

      <div className="sobre-mi__content mb-20 tab:px-20 grid lap:grid-cols-2 gap-8 text-justify">
        <Fade duration={1000} direction="up">

          <div className="sobre_mi__parrafo text-gray-400  text-md md:text-lg">
            Mi nombre es Mattias Alexandre Duarte Aparicio, tengo 19 años
            y actualmente estoy estudiando la carrera de Ingenieria de Sistemas
            en La Paz - Bolivia.
          </div>
          <div className="sobre_mi__parrafo text-gray-400  text-md md:text-lg">
            Empece a programar a mis 16 años y desde entonces estoy en constante
            aprendizaje, cuento con un año de experiencia desarrollando sitios y
            aplicaciones web en PHP 🐘 y React Js ⚛️ .
          </div>
        </Fade>
      </div>  

      <div className="sobre_mi__info grid lap:grid-cols-2 divide-y-2 lap:divide-y-0 lap:divide-x gap-10 lap:gap-0 divide-gray-600">
          
          
          <div className="sobre_mi__image grid grid-cols-2 gap-4 justify-items-center">
            <Fade cascade duration={800}>

              <img src={logoNext} className="w-40 lap:w-52" alt="Next Logo" />
              <img src={logoReact} className="w-40 lap:w-52" alt="React Logo" />
              <img src={logoFirebase} className="w-40 lap:w-44" alt="Firebase Logo" />
              <img src={logoNode} className="w-40 lap:w-48" alt="Firebase Logo"/>
            </Fade>
          </div>
          <div className="sobre_mi__list">
            <ul className='flex flex-col gap-20 mt-5 lap:ml-5'>
              <Fade duration={1000} cascade>
              <li className='flex  flex-col gap-2'>
                <span className="list__title  text-gray-300 text-3xl font-semibold">
                  Desarrolador FullStack
                </span>
                <span className="list__description text-gray-400">
                  Trabajo con tecnologias como React Js, Next Js, 
                  React Native, Node Js, PHP, MySql, MongoDB y Firebase 🤓.
                </span>
              </li>

              <li className='flex  flex-col gap-2'>
                <span className="list__title  text-gray-300 text-3xl font-semibold">
                  Disponible 24/7
                </span>
                <span className="list__description text-gray-400">
                  Cuenta conmigo las 24 horas del dia, de Lunes a Domingo 😃.
                </span>
              </li>

              <li className='flex  flex-col gap-2'>
                <span className="list__title  text-gray-300 text-3xl font-semibold">
                  Asesoramiento
                </span>
                <span className="list__description text-gray-400">
                  Si quieres que empecemos un proyecto y no tienes conocimiento, no te preocupes!,
                  podre asesorarte en el proceso.
                </span>
              </li>
              </Fade>
            </ul>
          </div>

      </div>
    </section>
  )
}

export default SobreMiSection


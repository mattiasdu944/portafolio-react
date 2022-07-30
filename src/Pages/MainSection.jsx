import React from 'react'
import { UilArrowRight, UilImport } from '@iconscout/react-unicons'
import { Fade } from "react-awesome-reveal";

const MainSection = () => {
  return (
    <section className='main__section section text-gray-300'>
      <div className="main__container text-center my-auto">
        <Fade duration={2000} direction='down' >

          <div className="main__title">
            <h2 className="text-4xl mob:text-5xl tab:text-7xl lap:text-7xl desk:text-9xl text-center cursor-default">
              Hola! soy <br />
              <span className="text-5xl mob:text-6xl tab:text-8xl desk:text-9xl">Mattias Duarte</span>
              <br /> Desarrollador  <br /> Web Frontend
            </h2>
          </div>
        </Fade>

        <div className="flex align-center justify-center my-10 flex-wrap gap-7 lap:gap-20">
          <Fade duration={2000}>

            <a href="#contacto" className='main__button__item text-sm mob:text-lg px-5 py-3 md:py-3' rel="noopener noreferrer">
              Contactar <UilArrowRight />
            </a>
            <a href="https://docs.google.com/document/d/1ks_EQ-GjIiIY73Ezf3uxL70oG1fsAvBpK3Mr6aMKmgk/edit?usp=sharing" target="_blank" className='main__button__item px-5 py-3 text-sm mob:text-lg'>
              Descargar CV <UilImport />
            </a>
          </Fade>
        </div>

        <div className="main__content">
          <Fade direction='up' duration='2000'>

            <p className="text-gray-400 text-sm  mob:text-lg">
              Soy Desarrollador Web, me especializo en realizar Frontend con React Js, <br />cuento con mas de 5 proyectos propios y 1 año de experiencia.
            </p>
          </Fade>
        </div>
      </div>
    </section>

  )
}

export default MainSection
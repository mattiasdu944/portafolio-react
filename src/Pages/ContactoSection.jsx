import React from 'react'

const ContactoSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando')
  }
  return (
    <section className='section' id='contacto'>
        <div className="contacto__container grid lap:grid-cols-2">
          <div className="contacto__info">
            <h2 className='mb-5'>Metodos de contacto</h2>
            <ul>
              <li className='flex items-center gap-3 mb-5'>
                <div className="icon_contact p-2 bg-slate-800 rounded-xl">
                  <i className="uil uil-envelope text-3xl"></i>
                </div>
                <div className="description__contact">
                  <h4>Correo Electronico</h4>
                  <a href="mailto:duartemattias4@gmail.com">duartemattias4@gmail.com</a>
                </div>
              </li>

              <li className='flex items-center gap-3 mb-5'>
                <div className="icon_contact p-2 bg-slate-800 rounded-xl">
                  <i className="uil uil-whatsapp text-3xl"></i>
                </div>
                <div className="description__contact">
                  <h4>Whatsapp</h4>
                  <a href="mailto:duartemattias4@gmail.com">+591 76290741</a>
                </div>
              </li>

              <li className='flex items-center gap-3'>
                <div className="icon_contact p-2 bg-slate-800 rounded-xl">
                  <i className="uil uil-instagram text-3xl"></i>
                </div>
                <div className="description__contact">
                  <h4>Instagram</h4>
                  <a href="mailto:duartemattias4@gmail.com">+591 76290741</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="contacto__form">
              <h2>Formulario</h2>
            <form onSubmit={handleSubmit} className='py-10 px-10 border'>
              <div className="input__group mb-5">

                <label htmlFor="nombre">Nombre Completo</label>
                <input type="text" name='nombre' className='text-gray-300 bg-transparent p-3 bg-neutral-800 rounded-sm w-full' placeholder='Ingresa tu nombre'/>
              </div>

              <div className="input__group mb-5">
                <label htmlFor="correo">Correo Electronico</label>
                <input type="email  " name='correo' className='text-gray-300 bg-transparent p-3 bg-neutral-800 rounded-sm w-full' placeholder='Ingresa tu correo'/>
              </div>

              <div className="input__group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea type="email  " name='mensaje' className='text-gray-300 bg-transparent p-3 bg-neutral-800 rounded-sm w-full' placeholder='Agrega un mensaje'/>
              </div>

              <button type="submit"  className='p-3 bg-slate-500 mt-5 cursor-pointer hover:bg-slate-600 rounded-sm flex justify-center items-center gap-2' >
                Enviar<i className="uil uil-message"></i>
                </button>

              {/* <input type="submit" className='p-3 bg-slate-500 mt-5 cursor-pointer hover:bg-slate-600 rounded-sm'><i class="uil uil-message"></i></input> */}
            </form>
          </div>
        </div>
    </section>
  )
}

export default ContactoSection
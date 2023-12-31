import Header  from './../components/header'
import ContactForm from '../components/Forms/ContactForm'
const ContactPage = () => {
    return (
        <>
        <Header
          className='bg-gradient-to-r from-black to-indigo-950'
        />
          <section className="bg-gradient-to-r from-black to-indigo-950" id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
              <div className="mb-4">
                <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                  <p className="mt-4 text-base font-semibold uppercase tracking-wide text-white dark:text-blue-200">
                    Contacto
                  </p>
                  <h2
                    className="font-heading mb-4 font-bold tracking-tight text-yellow-500 dark:text-white text-3xl sm:text-5xl">
                    Eduardo Almachi
                  </h2>
                  <p className="mx-auto mt-4 max-w-3xl text-xl text-white dark:text-slate-400">
                    Desarrollador de Software
                  </p>
                </div>
              </div>
              <div className="flex items-stretch justify-center">
                <div className="grid md:grid-cols-2">
                  <div className="h-full pr-6">
                    <p className="text-white mt-3 mb-12 text-lg text-wh">
                      Si te gusto lo que viste, contactame y trabajemos juntos.
                    </p>
                    <ul className="mb-6 md:mb-0">
                      <li className="flex">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="h-6 w-6">
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                            <path
                              d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                            </path>
                          </svg>
                        </div>
                        <div className="ml-4 mb-4">
                          <h3 className="mb-2 text-lg font-medium leading-6 text-yellow-400 dark:text-white">Dirección
                          </h3>
                          <p className="text-white dark:text-slate-400">Quito, Distrito Metropolitano</p>
                          <p className="text-white dark:text-slate-400">Ecuador</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="h-6 w-6">
                            <path
                              d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                            </path>
                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                          </svg>
                        </div>
                        <div className="ml-4 mb-4">
                          <h3 className="mb-2 text-lg font-medium leading-6 text-yellow-400 dark:text-white">Contacto
                          </h3>
                          <p className="text-white dark:text-slate-400">Celular: +593 0986572316</p>
                          <p className="text-white dark:text-slate-400">Gmail: edu03sebas@gmail.com</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="h-6 w-6">
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                            <path d="M12 7v5l3 3"></path>
                          </svg>
                        </div>
                        <div className="ml-4 mb-4">
                          <h3 className="mb-2 text-lg font-medium leading-6 text-yellow-400 dark:text-white">Horario</h3>
                          <p className="text-white ">Lunes - Viernes: 08:00 - 17:00</p>
                          <p className="text-white ">Sábado: 08:00 - 12:00</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 className="text-yellow-500 mb-4 text-2xl font-bold">Listo, para empezar? </h2>
                    <ContactForm/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}

export default ContactPage
import { useState } from 'react'
import './App.css'
import icon from './assets/icon.png'
import portrait from './assets/portrait-WB.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navigation"> {/* Navegacion */}
        <img src={icon} alt="" className='nav-icon'/>
        <div className="nav-box"> 
          <h6> Quienes Somos?</h6>
          <h6> Experiencia </h6>
          <h6> Contacto </h6>
          <h6> Servicios </h6>
        </div>
        <div className="nav-box"> </div>

      </nav>

      <div className="portrait">
        <p className='portrait-text'> En Estudio Jurídico Cervantes nos dedicamos a proporcionar soluciones legales efectivas y personalizadas para nuestros clientes, respaldados por un profundo conocimiento y experiencia en diversas áreas del derecho. Nuestro compromiso es defender sus derechos y asegurar que las acciones de las autoridades y terceros se ajusten a la legalidad. </p>
        <div className='portrait-space'></div>
      </div>

      <div className='title-box'> {/* Services Title */}
        <div className="servicio-element"></div>
        <h1 className="servicio-text"> Servicios </h1>
        <div className="servicio-element"></div>
      </div>

      <div className="services-mosaic"> {/* Services Mosaic*/}

        <div className="service">
          <div className="service-iconbox">
          <svg className='iconbox' width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H15.9595C16.5118 13 16.9595 12.5523 16.9595 12C16.9595 11.4477 16.5118 11 15.9595 11H8Z" fill="currentColor" /><path d="M8.04053 15.0665C7.48824 15.0665 7.04053 15.5142 7.04053 16.0665C7.04053 16.6188 7.48824 17.0665 8.04053 17.0665H16C16.5523 17.0665 17 16.6188 17 16.0665C17 15.5142 16.5523 15.0665 16 15.0665H8.04053Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7 5H5L5 19H19V5H17V6C17 7.65685 15.6569 9 14 9H10C8.34315 9 7 7.65685 7 6V5ZM9 5V6C9 6.55228 9.44772 7 10 7H14C14.5523 7 15 6.55228 15 6V5H9Z" fill="currentColor" /></svg>
          </div>
          <h1 className="icon-title"> Materia Civil </h1>
          <p className="service-text"> Gestion de Herencias y Sucesiones</p>
          <p className="service-text"> Elaboracion y Revision de Contratos </p>
          <p className="service-text"> Tramites de Propiedad </p>
          <p className="service-text"> Indemnizacion por daños y perjuicios </p>
        </div>

        <div className="service">
          <div className="service-iconbox">
          <svg className='iconbox' width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11H10V13H14V11Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" fill="currentColor" /></svg>
          </div>
          <h1 className="icon-title"> Materia Administrativa </h1>
          <p className="service-text"> Juicio de Nulidad</p>
          <p className="service-text"> Pago de lo indebido </p>
        </div>

        <div className="service">
          <div className="service-iconbox">
          <svg className='iconbox' width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="currentColor" /><path d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z" fill="currentColor" /></svg>
          </div>
          <h1 className="icon-title"> Materia Familiar </h1>
          <p className="service-text">Pension Alimenticia</p>
          <p className="service-text">Divorcio</p>
          <p className="service-text">Perdida de la patria potestad</p>
          <p className="service-text">Guarda y Custodia</p>
        </div>

      </div>

      <div className="alianzas-box"> {/* Aliances */}
        <h1 className="alianzas-title"> Nuestras Alianzas </h1>
        <p className="alianzas-text"> Participamos de alianzas con redes internacionales que reúnen a firmas corresponsales de todo el mundo. Somos miembros activos de las siguientes redes: </p>
        
        <div className="alianzas-icon-container">
          <div className="alianzas-icon-box">
            <img src="" alt="" className="alianzas-icon" />
          </div>
          <div className="alianzas-icon-box">
            <img src="" alt="" className="alianzas-icon" />
          </div>
          <div className="alianzas-icon-box">
            <img src="" alt="" className="alianzas-icon" />
          </div>
          <div className="alianzas-icon-box">
            <img src="" alt="" className="alianzas-icon" />
          </div>
        </div>
      </div>

      <div className='title-box'> {/* Nosotros Title */}
        <div className="servicio-element"></div>
        <h1 className="servicio-text"> Nosotros </h1>
        <div className="servicio-element"></div>
      </div>

      <div className="nosotros-box">
        <div className="stat-mosaic-box">
          <div className="stat-mosaic">
            <svg className='stat-mosaic-icon' width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5ZM13 4H17C17.5523 4 18 4.44772 18 5V13H13V4ZM13 15V20H17C17.5523 20 18 19.5523 18 19V15H13ZM11 4H7C6.44771 4 6 4.44772 6 5V8H11V4ZM6 19V10H11V20H7C6.44772 20 6 19.5523 6 19Z" fill="currentColor" /></svg>
            <h1 className="stat-mosaic-title"> Años de Experiencia </h1>
            <h1 className="stat-mosaic-value"> +10 </h1>
          </div>
          <div className="stat-mosaic">
            <svg className='stat-mosaic-icon' width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" fill="currentColor" /><path d="M15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0244 2.00003L12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.74235 17.9425 2.43237 12.788 2.03059L12.7886 2.0282C12.5329 2.00891 12.278 1.99961 12.0244 2.00003ZM12 20C16.4183 20 20 16.4183 20 12C20 11.3014 19.9105 10.6237 19.7422 9.97775C16.1597 10.2313 12.7359 8.52461 10.7605 5.60246C9.31322 7.07886 7.2982 7.99666 5.06879 8.00253C4.38902 9.17866 4 10.5439 4 12C4 16.4183 7.58172 20 12 20ZM11.9785 4.00003L12.0236 4.00003L12 4L11.9785 4.00003Z" fill="currentColor" /></svg>
            <h1 className="stat-mosaic-title"> Clientes Satisfechos </h1>
            <h1 className="stat-mosaic-value"> +127 </h1>
          </div>
          <div className="stat-mosaic">
            <svg className='stat-mosaic-icon' width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C16.7614 0 19 2.23858 19 5V17C19 20.866 15.866 24 12 24C8.13401 24 5 20.866 5 17V9H7V17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17V5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V6H15V17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17V5C9 2.23858 11.2386 0 14 0Z" fill="currentColor" /></svg>
            <h1 className="stat-mosaic-title"> Trabajos realizados </h1>
            <h1 className="stat-mosaic-value"> +210 </h1>
          </div>
          <div className="stat-mosaic">
            <svg className='stat-mosaic-icon' width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 9H7V7H17V9Z" fill="currentColor" /><path d="M7 13H17V11H7V13Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z" fill="currentColor" /></svg>
            <h1 className="stat-mosaic-title"> Juicios Atravesados </h1>
            <h1 className="stat-mosaic-value"> +49 </h1>
          </div>
        </div>

        <div className="nosotros-mosaic">
          <p className="nosotros-mosaic-text">
            <span>Nuestro Compromiso</span>
            En Estudio Jurídico Cervantes, nos enorgullece ofrecer un servicio legal integral, caracterizado por la transparencia, la dedicación y la excelencia profesional. Nos esforzamos por proporcionar soluciones prácticas y efectivas que protejan y promuevan los intereses de nuestros clientes en cada etapa de sus procesos legales.
          </p>

          <p className="nosotros-mosaic-text">
            <span>Contáctenos</span>
            Estamos aquí para ayudarle. Contáctenos para una consulta y descubra cómo podemos asistirle en sus necesidades legales. En Estudio Jurídico Cervantes, su tranquilidad y seguridad jurídica son nuestra prioridad.
          </p>
        </div>
      </div>

      <div className="contacto">
        <h1> Lineas de Contacto</h1>
        <p> En Jurídico Cervantes, creemos que la comunicación es fundamental para resolver problemas. Por ello, ponemos a su disposición todas nuestras líneas de contacto directo, para que pueda comunicarse con nosotros y recibir la ayuda que necesita</p>
      </div>

      <footer className="footer">
        contacto:
      </footer>

    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import icon from './assets/icon.png'
import portrait from './assets/portrait-WB.png'

function App() {
  const [count, setCount] = useState(0)

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <nav className="navigation"> {/* Navegacion */}
        <img src={icon} alt="" className='nav-icon'/>
        <div className="nav-box"> 
          <a href='#servicio' className='nav-a'> Servicios </a>
          <a href='#aliances' className='nav-a'> Alianzas </a>
          <a href='#experiencia' className='nav-a'> Experiencia </a>
          <a href='#contacto' className='nav-a'> Contacto </a>
          <a href='#qs' className='nav-a'> Quienes Somos?</a>
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

      <div className="services-mosaic" id='servicio'> {/* Services Mosaic*/}

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

      <div className="alianzas-box" id='aliances'> {/* Aliances */}
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

      <div className="nosotros-box" id='experiencia'>
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

      <div className="contacto" id='contacto'>
        <div className="contacto-info">
          <h1 className='contacto-title'> Lineas de Contacto</h1>
          <p className='contacto-text'> En Jurídico Cervantes, creemos que la comunicación es fundamental para resolver problemas. Por ello, ponemos a su disposición todas nuestras líneas de contacto directo, para que pueda comunicarse con nosotros y recibir la ayuda que necesita</p>
          <div className="contacto-social">
            <a href='https://www.facebook.com/mazamitlabar11a11?mibextid=ZbWKwL' className="contacto-social-link"><svg xmlns="http://www.w3.org/2000/svg"  className="contacto-social-icon" width="inherit" height="inherit"viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"> </path> </svg></a>
            <a href='https://www.facebook.com/mazamitlabar11a11?mibextid=ZbWKwL' className="contacto-social-link"><svg xmlns="http://www.w3.org/2000/svg"  className="contacto-social-icon" width="inherit" height="inherit" viewBox="0 0 24 24" fill="currentColor"> <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"> </path> <circle cx="16.806" cy="7.207" r="1.078"></circle> <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"> </path> </svg></a>
          </div>  
        </div>
        <img src="../src/assets/Phone.png" alt="" className="contacto-img" />
      </div>

      <div className="ubicacion">
        <div className="ubicacion-info">
          <h1 className='ubicacion-title'> Donde nos pueden encontrar </h1>
          <p className='ubicacion-text'> Estamos situados en una zona céntrica y de fácil acceso, pensada para su comodidad. Invitamos a todos nuestros clientes a visitarnos, no solo por nuestra conveniencia geográfica, sino porque creemos en la importancia del contacto directo. Aquí, cada cliente recibe una atención personalizada y un servicio legal a la medida de sus necesidades. Su visita es el primer paso para solucionar sus problemas con la profesionalidad que nos caracteriza.</p>
        </div>
        <img src="../src/assets/Map.png" alt="" className="ubicacion-img" />
      </div>

      <div className="queesperar" id='qs'>
        <div className="queesperar-info">
          <h1 className='queesperar-title'> Que esperar de nosotros </h1>
          <p className='queesperar-text'> En Jurídico Cervantes, nos comprometemos a ofrecerle un servicio legal de la más alta calidad. Usted puede esperar de nosotros una atención personalizada, donde cada caso es tratado con la máxima dedicación y profesionalismo. Nuestro equipo de expertos está aquí para escuchar sus preocupaciones, entender sus necesidades y proporcionar soluciones efectivas. Además, valoramos la transparencia y la comunicación clara, manteniéndole informado en cada paso del proceso. Confíe en nosotros para manejar sus asuntos legales con la seriedad y eficiencia que merecen. </p>
        </div>
        <img src="../src/assets/Job.png" alt="" className="queesperar-img" />
      </div>

      <footer className="footer">
        <div className='footer-info'>
          <h2 className="footer-title"> Vias de Contacto: </h2>
          <div className="footer-icon-box"> <svg className="footer-icon" width="inherit" height="inherit" viewBox="0 0 35 35" fill="white" xmlns="http://www.w3.org/2000/svg"> <path d="M29.1667 5.8335H5.83333C4.22479 5.8335 2.91667 7.14162 2.91667 8.75016V26.2502C2.91667 27.8587 4.22479 29.1668 5.83333 29.1668H29.1667C30.7752 29.1668 32.0833 27.8587 32.0833 26.2502V8.75016C32.0833 7.14162 30.7752 5.8335 29.1667 5.8335ZM29.1667 8.75016V9.49537L17.5 18.5706L5.83333 9.49683V8.75016H29.1667ZM5.83333 26.2502V13.1893L16.6046 21.5675C16.86 21.768 17.1753 21.8771 17.5 21.8771C17.8247 21.8771 18.14 21.768 18.3954 21.5675L29.1667 13.1893L29.1696 26.2502H5.83333Z" fill="white" /> </svg> <h4 className='footer-icon-text'> CERVANTES@GMAIL.COM </h4> </div>
          <div className="footer-icon-box"> <svg  className="footer-icon" width="inherit" height="inherit" viewBox="0 0 35 35" fill="white" xmlns="http://www.w3.org/2000/svg"> <path d="M24.248 32.1697C24.6353 32.172 25.0192 32.097 25.3772 31.9493C25.7353 31.8016 26.0603 31.584 26.3334 31.3093L30.2855 27.3572C30.5571 27.084 30.7095 26.7144 30.7095 26.3291C30.7095 25.9438 30.5571 25.5742 30.2855 25.301L24.4521 19.4676C24.1789 19.196 23.8093 19.0436 23.424 19.0436C23.0387 19.0436 22.6691 19.196 22.3959 19.4676L20.0625 21.7864C18.4471 21.3557 16.9509 20.5627 15.6875 19.4676C14.5954 18.2023 13.8028 16.7068 13.3688 15.0926L15.6875 12.7593C15.9592 12.4861 16.1116 12.1165 16.1116 11.7312C16.1116 11.3459 15.9592 10.9763 15.6875 10.7031L9.85421 4.86972C9.58098 4.59811 9.21136 4.44565 8.82609 4.44565C8.44082 4.44565 8.0712 4.59811 7.79797 4.86972L3.86047 8.83639C3.58576 9.10945 3.3682 9.43449 3.22047 9.79254C3.07274 10.1506 2.99781 10.5345 3.00005 10.9218C3.13235 16.5251 5.37141 21.8728 9.27088 25.8989C13.2969 29.7984 18.6446 32.0374 24.248 32.1697ZM8.83338 7.97597L12.6105 11.7531L10.7292 13.6343C10.551 13.8012 10.4176 14.0102 10.3412 14.242C10.2647 14.4739 10.2477 14.7212 10.2917 14.9614C10.8368 17.3973 11.9908 19.6552 13.6459 21.5239C15.5131 23.1811 17.7716 24.3354 20.2084 24.8781C20.4449 24.9275 20.69 24.9174 20.9216 24.8487C21.1533 24.7799 21.3642 24.6547 21.5355 24.4843L23.4167 22.5593L27.1938 26.3364L24.2771 29.2531C19.4409 29.1285 14.8264 27.1985 11.3417 23.8426C7.97721 20.3565 6.04156 15.7359 5.91672 10.8926L8.83338 7.97597ZM29.25 16.1281H32.1667C32.2045 14.3941 31.8909 12.6704 31.2447 11.0609C30.5985 9.45145 29.6331 7.98945 28.4067 6.76307C27.1803 5.53668 25.7183 4.5713 24.1088 3.92509C22.4993 3.27888 20.7757 2.96524 19.0417 3.00305V5.91972C20.3949 5.87291 21.7433 6.10494 23.003 6.6014C24.2627 7.09785 25.4068 7.8481 26.3642 8.80553C27.3217 9.76296 28.0719 10.9071 28.5684 12.1668C29.0648 13.4265 29.2969 14.7749 29.25 16.1281Z" fill="white" /> <path d="M19.0417 11.7531C22.1042 11.7531 23.4167 13.0656 23.4167 16.1281H26.3334C26.3334 11.4323 23.7376 8.83643 19.0417 8.83643V11.7531Z" fill="white" /> </svg> <h4 className='footer-icon-text'>+52 33 1460 8410</h4></div>
        </div>
        <h3 className='powered'>Powered by Smartracoon</h3>
      </footer>

    </>
  )
}

export default App

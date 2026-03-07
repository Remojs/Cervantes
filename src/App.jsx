import { useEffect } from 'react';
import Header from './components/Header';
import cervantesLogo from './assets/icon.png';
import cervantesPhoto from './assets/cervantes.png';
import opcion1 from './assets/opcion1.png';
import opcion2 from './assets/opcion2.png';
import opcion3 from './assets/opcion3.png';
import opcion4 from './assets/opcion4.png';
import heroBackground from './assets/hero.png';

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header scrollToSection={scrollToSection} />

      <main className="pt-16">
        {/* Hero Section — reduced height */}
        <section
          id="hero"
          className="relative bg-cover bg-center h-[72vh] min-h-[480px]"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13, 42, 84, 0.72)' }}></div>
          <div className="container mx-auto px-6 h-full flex items-center relative z-10">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <p className="text-blue-300 uppercase tracking-widest text-sm font-semibold mb-3 reveal fade-up">
                Estudio Jurídico Cervantes
              </p>
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5 reveal fade-up delay-1">
                Soluciones Legales <br className="hidden md:block" /> Efectivas y Personalizadas
              </h1>
              <p className="text-gray-200 text-lg mb-8 reveal fade-up delay-2">
                Más de 20 años defendiendo tus derechos con profesionalismo, integridad y resultados reales.
              </p>
              <div className="flex flex-wrap gap-4 reveal fade-up delay-3">
                <button
                  className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                  onClick={() => scrollToSection('servicios')}
                >
                  Nuestros Servicios
                </button>
                <button
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                  onClick={() => scrollToSection('contacto')}
                >
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro / Quiénes Somos Section */}
        <section id="intro" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-blue-700 uppercase tracking-widest text-sm font-semibold mb-3 reveal fade-up">
                Tu Abogada de Confianza
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 reveal fade-up delay-1">
                Resolver · Reparar · <span className="text-blue-800">Reconstruir · Prosperar</span>
              </h2>
              <div className="h-1 w-24 bg-blue-800 mx-auto mb-10 reveal fade-up delay-2"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 reveal fade-up delay-2">
                En la vida cotidiana estamos inmersos en situaciones regidas por el derecho: cada acto que realizamos,
                por pequeño que parezca, está regulado por nuestro ordenamiento legal. Por eso, conocer tus derechos
                y obligaciones en detalle marca la diferencia entre perder y ganar.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed reveal fade-up delay-3">
                Durante más de <strong className="text-blue-800">20 años</strong>, nuestro estudio de servicios
                jurídicos integrales ha acompañado a personas en todo el país a resolver situaciones vinculadas
                con alimentos, cuidado personal, comunicación con los hijos, divorcios, liquidación de sociedad
                conyugal, compensaciones económicas, sucesiones, disposiciones de última voluntad, medidas
                anticipadas, pactos de convivencia, acuerdos prenupciales, daños en relaciones de familia,
                amparos de salud y mucho más.
              </p>
              <p className="text-gray-800 text-xl font-semibold mt-8 reveal fade-up delay-3">
                Profesionalismo, integridad y resultados.
              </p>
            </div>
          </div>
        </section>

        {/* RECORDA CTA Section */}
        <section className="py-24 bg-blue-900 relative overflow-hidden" id="recorda">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-950 opacity-60"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <p className="text-blue-300 uppercase tracking-widest text-sm font-semibold mb-4 reveal fade-up">
              Un consejo importante
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 reveal fade-up delay-1">
              Recordá…
            </h2>
            <p className="text-blue-100 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-8 reveal fade-up delay-2">
              No podés defender ni exigir derechos que no conocés. Por eso, siempre consultá a tu abogada de
              confianza antes de tomar cualquier decisión importante.
            </p>
            <div className="h-px w-24 bg-blue-400 mx-auto mb-8 reveal fade-up delay-2"></div>
            <p className="text-white text-2xl md:text-3xl font-bold reveal fade-up delay-3">
              Estamos Aquí Para Ayudarte
            </p>
            <button
              className="mt-10 bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-10 rounded-lg text-lg transition-colors duration-300 reveal fade-up delay-3"
              onClick={() => scrollToSection('contacto')}
            >
              Consultá Ahora
            </button>
          </div>
        </section>

        {/* Servicios Section */}
        <section className="py-24 bg-gray-50" id="servicios">
          <div className="container mx-auto px-6">
            <p className="text-blue-700 uppercase tracking-widest text-sm font-semibold text-center mb-3 reveal fade-up">
              Lo que hacemos
            </p>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 reveal fade-up delay-1">Nuestros Servicios</h2>
            <div className="h-1 w-24 bg-blue-800 mx-auto mb-6 reveal fade-up delay-1"></div>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 reveal fade-up delay-2">
              Décadas de experiencia en distintas ramas del derecho nos permiten ofrecerte soluciones
              integrales, adaptadas a tu situación personal y respaldadas por un equipo comprometido con tu bienestar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Materia Civil */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 reveal fade-up delay-1">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Materia Civil</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">
                  Contratos, reclamación de deudas, daños y perjuicios y resolución de conflictos
                  patrimoniales. Defendemos tus intereses con estrategias jurídicas precisas para
                  obtener el resultado que merecés.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2"><span className="text-blue-700 font-bold">✓</span> Contratos y obligaciones</li>
                  <li className="flex items-center gap-2"><span className="text-blue-700 font-bold">✓</span> Daños y perjuicios</li>
                  <li className="flex items-center gap-2"><span className="text-blue-700 font-bold">✓</span> Sucesiones y herencias</li>
                  <li className="flex items-center gap-2"><span className="text-blue-700 font-bold">✓</span> Responsabilidad extracontractual</li>
                </ul>
              </div>

              {/* Materia Administrativa */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 reveal fade-up delay-2">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Materia Administrativa</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">
                  Cuando el Estado o las instituciones no respetan tus derechos, actuamos. Recursos
                  administrativos, amparos de salud y defensa ante organismos públicos para que
                  la legalidad siempre prevalezca.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2"><span className="text-blue-700 font-bold">✓</span> Recursos y reclamaciones</li>
                  <li className="flex items-center gap-2"><span className="text-blue-700 font-bold">✓</span> Amparos de salud</li>
                  <li className="flex items-center gap-2"><span className="text-blue-700 font-bold">✓</span> Defensa ante organismos públicos</li>
                  <li className="flex items-center gap-2"><span className="text-blue-700 font-bold">✓</span> Contencioso-administrativo</li>
                </ul>
              </div>

              {/* Materia Familiar */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 reveal fade-up delay-3">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.999 2.999 0 0 0 17.2 7H16c-.83 0-1.58.5-1.91 1.28L12.5 12 10.91 8.28C10.58 7.5 9.83 7 9 7H7.8c-1.32 0-2.47.86-2.76 2.37L2.5 16H5v6h3v-6h2.5l1.5-4 1.5 4H16v6h4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Materia Familiar</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">
                  Las situaciones familiares requieren sensibilidad, precisión y discreción.
                  Acompañamos a nuestros clientes en cada etapa del proceso con empatía y firmeza,
                  asegurando el bienestar de toda la familia.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2"><span className="text-blue-700 font-bold">✓</span> Divorcios y separaciones</li>
                  <li className="flex items-center gap-2"><span className="text-blue-700 font-bold">✓</span> Alimentos y cuidado personal</li>
                  <li className="flex items-center gap-2"><span className="text-blue-700 font-bold">✓</span> Acuerdos prenupciales y pactos</li>
                  <li className="flex items-center gap-2"><span className="text-blue-700 font-bold">✓</span> Compensaciones y liquidaciones</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Historia / Storytelling Section */}
        <section className="py-24 bg-blue-900 text-white" id="historia">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-blue-300 uppercase tracking-widest text-sm font-semibold mb-3 reveal fade-left">
                  Nuestra Historia
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 reveal fade-left delay-1">
                  Más de 20 años construyendo justicia, <span className="text-blue-300">caso a caso</span>
                </h2>
                <div className="h-1 w-24 bg-blue-400 mb-8 reveal fade-left delay-1"></div>
                <p className="text-blue-100 text-lg leading-relaxed mb-6 reveal fade-left delay-2">
                  El Estudio Jurídico Cervantes nació con una misión clara: acercar el derecho a las
                  personas que más lo necesitan. Fundado por profesionales con vocación de servicio,
                  el estudio fue creciendo de la mano de cada cliente que confió en nosotros en los
                  momentos más difíciles de su vida.
                </p>
                <p className="text-blue-100 text-lg leading-relaxed reveal fade-left delay-3">
                  A lo largo de más de dos décadas, hemos atravesado cientos de procesos judiciales
                  y extrajudiciales, siempre guiados por tres principios inquebrantables:{' '}
                  <strong className="text-white">ética, conocimiento y compromiso</strong>. Cada caso
                  es único, cada persona merece atención personalizada y una estrategia a su medida.
                  Porque para nosotros, el derecho no es solo una profesión — es una responsabilidad.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-800 rounded-xl p-6 text-center reveal scale-in delay-1">
                  <p className="text-4xl font-extrabold text-white mb-1">+20</p>
                  <p className="text-blue-300 text-sm">Años de Experiencia</p>
                </div>
                <div className="bg-blue-800 rounded-xl p-6 text-center reveal scale-in delay-2">
                  <p className="text-4xl font-extrabold text-white mb-1">+500</p>
                  <p className="text-blue-300 text-sm">Clientes Acompañados</p>
                </div>
                <div className="bg-blue-800 rounded-xl p-6 text-center reveal scale-in delay-2">
                  <p className="text-4xl font-extrabold text-white mb-1">+300</p>
                  <p className="text-blue-300 text-sm">Casos Resueltos</p>
                </div>
                <div className="bg-blue-800 rounded-xl p-6 text-center reveal scale-in delay-3">
                  <p className="text-4xl font-extrabold text-white mb-1">3</p>
                  <p className="text-blue-300 text-sm">Áreas Especializadas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alianzas Section */}
        <section className="py-20 bg-white" id="alianzas">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 reveal fade-up">Nuestras Alianzas</h2>
            <div className="h-1 w-24 bg-blue-800 mx-auto mb-6 reveal fade-up delay-1"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12 reveal fade-up delay-2">
              Participamos en alianzas con redes intervinientes que reúnen a firmas correspondientes
              a las de mayor reputación de nuestro país y de la región.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <img
                alt="Alianza 1"
                className="h-24 object-contain reveal scale-in delay-1"
                src={opcion1}
              />
              <img
                alt="Alianza 2"
                className="h-24 object-contain reveal scale-in delay-2"
                src={opcion2}
              />
              <img
                alt="Alianza 3"
                className="h-24 object-contain reveal scale-in delay-3"
                src={opcion3}
              />
              <img
                alt="Alianza 4"
                className="h-24 object-contain reveal scale-in delay-4"
                src={opcion4}
              />
            </div>
          </div>
        </section>

        {/* Nosotros Section */}
        <section className="py-20 bg-gray-50" id="nosotros">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 reveal fade-up">Nosotros</h2>
            <div className="h-1 w-24 bg-blue-800 mx-auto mb-12 reveal fade-up delay-1"></div>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 reveal fade-up delay-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <svg className="w-12 h-12 text-blue-800 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                    <p className="text-gray-600">Años de Experiencia</p>
                    <p className="text-3xl font-bold text-blue-800">+20</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <svg className="w-12 h-12 text-blue-800 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 3.13c2.1 0 3.8 1.7 3.8 3.8v1.7c0 2.1-1.7 3.8-3.8 3.8v7.1c0 1.1-.9 2-2 2s-2-.9-2-2v-7.1c-2.1 0-3.8-1.7-3.8-3.8V6.93c0-2.1 1.7-3.8 3.8-3.8h4z"/>
                    </svg>
                    <p className="text-gray-600">Clientes Satisfechos</p>
                    <p className="text-3xl font-bold text-blue-800">+500</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <svg className="w-12 h-12 text-blue-800 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L3 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
                    </svg>
                    <p className="text-gray-600">Casos Resueltos</p>
                    <p className="text-3xl font-bold text-blue-800">+300</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <svg className="w-12 h-12 text-blue-800 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                    <p className="text-gray-600">Juicios Atravesados</p>
                    <p className="text-3xl font-bold text-blue-800">+49</p>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Nuestro Compromiso</h3>
                    <p className="text-gray-600">
                      En Estudio Jurídico Cervantes, nos enorgullece ofrecer un servicio legal integral,
                      caracterizado por la transparencia, la dedicación y la búsqueda incansable de la justicia.
                      Nos distinguimos por implementar prácticas que precisan y promueven los avances de la
                      ciencia jurídica, siempre en resguardo de sus intereses.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Contáctenos</h3>
                    <p className="text-gray-600">
                      Estamos aquí para ayudarle. Póngase en contacto para una consulta y descubra cómo podemos
                      asistirle en sus necesidades legales. En Estudio Jurídico Cervantes, su tranquilidad y
                      seguridad jurídica son nuestra prioridad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contacto Section */}
        <section className="py-20 bg-white" id="contacto">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 reveal fade-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Líneas de Contacto</h2>
                <div className="h-1 w-24 bg-blue-800 mb-6"></div>
                <p className="text-gray-600 mb-8">
                  En Jurídico Cervantes, creemos que la comunicación es fundamental para resolver problemas.
                  Por favor, no dude en contactarnos a través de cualquiera de nuestros canales.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-800 mr-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span className="text-gray-700">(81) 1234 5678</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-800 mr-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span className="text-gray-700">contacto@cervantesjuridico.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-800 mr-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="text-gray-700">Av. Constitución #1234, Colonia Centro, Monterrey, Nuevo León, C.P. 64000</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center reveal fade-right">
                <img 
                  alt="Logo Cervantes" 
                  className="max-w-xs md:max-w-sm" 
                  src={cervantesPhoto} 
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Estudio Jurídico Cervantes. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a className="hover:text-gray-300 transition-colors" href="#" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a className="hover:text-gray-300 transition-colors" href="#" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
                </svg>
              </a>
              <a className="hover:text-gray-300 transition-colors" href="#" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.729C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM20.452 20.452h-3.56v-5.604c0-1.337-.027-3.06-1.865-3.06-1.865 0-2.15 1.455-2.15 2.957v5.707h-3.56V9h3.415v1.561h.05c.475-.9 1.637-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.455v6.286z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;

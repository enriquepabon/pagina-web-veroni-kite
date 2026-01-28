import Link from 'next/link';
import { Button } from '@/components/ui';
import { formatPrice } from '@/lib/utils';

// Datos de cursos
const cursos = [
  {
    id: 'curso-completo',
    nombre: 'Curso Completo',
    duracion: '10 horas',
    precio: 2500000,
    descripcion: 'Domina el kitesurf desde cero hasta volar de forma independiente.',
    caracteristicas: ['Teoría completa', 'Práctica en agua', 'Equipo incluido', 'Certificación'],
    popular: true,
  },
  {
    id: 'medio-curso',
    nombre: 'Medio Curso',
    duracion: '5 horas',
    precio: 1500000,
    descripcion: 'Ideal para quienes tienen algo de experiencia o tiempo limitado.',
    caracteristicas: ['Teoría básica', 'Práctica en agua', 'Equipo incluido'],
    popular: false,
  },
  {
    id: 'clase-puntual',
    nombre: 'Clase Puntual',
    duracion: '1 hora',
    precio: 250000,
    descripcion: 'Perfecciona técnicas específicas o prueba el deporte.',
    caracteristicas: ['Instructor dedicado', 'Equipo incluido'],
    popular: false,
  },
];

// Características destacadas
const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'Instructores Certificados',
    description: 'Aprende con profesionales certificados internacionalmente con años de experiencia.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
    title: 'Condiciones Perfectas',
    description: 'Salinas del Rey ofrece vientos consistentes y aguas planas ideales para aprender.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Flexibilidad Total',
    description: 'Horarios adaptados a ti y a las mejores condiciones de viento del día.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: 'Equipo Premium',
    description: 'Material de última generación de las mejores marcas del mercado.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-cyan-800 to-teal-700" />

        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Wave pattern overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255,255,255,0.05)"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Aprende a Volar
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Sobre el Agua
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Descubre el kitesurf en Salinas del Rey, Colombia. Vientos perfectos, 
            instructores expertos y la aventura de tu vida te esperan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/cursos" size="lg">
              Ver Cursos
            </Button>
            <Button href="/reservar" variant="outline" size="lg">
              Reservar Ahora
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-cyan-400">500+</div>
              <div className="text-white/60">Alumnos Felices</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400">10+</div>
              <div className="text-white/60">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400">300+</div>
              <div className="text-white/60">Días de Viento/Año</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400">5⭐</div>
              <div className="text-white/60">Calificación</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir Veroni Kite?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Somos tu mejor opción para aprender kitesurf en la costa caribeña colombiana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Cursos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elige el programa que mejor se adapte a tus objetivos y disponibilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cursos.map((curso) => (
              <div
                key={curso.id}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  curso.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
              >
                {curso.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Más Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{curso.nombre}</h3>
                  <p className="text-gray-500 mb-4">{curso.duracion}</p>
                  <div className="text-3xl font-bold text-cyan-600 mb-4">
                    {formatPrice(curso.precio)}
                  </div>
                  <p className="text-gray-600 mb-6">{curso.descripcion}</p>
                  <ul className="space-y-2 mb-6">
                    {curso.caracteristicas.map((caracteristica, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-cyan-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={`/cursos/${curso.id}`}
                    fullWidth
                    variant={curso.popular ? 'primary' : 'outline'}
                  >
                    Ver Detalles
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/cursos"
              className="text-cyan-600 hover:text-cyan-700 font-semibold inline-flex items-center"
            >
              Ver todos los cursos y opciones
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-900 via-cyan-800 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para la Aventura?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Únete a cientos de kitesurfistas que han aprendido con nosotros. 
            Tu próxima aventura comienza con un mensaje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/reservar" size="lg" variant="secondary">
              Reservar Clase
            </Button>
            <a
              href="https://wa.me/573001234567?text=Hola!%20Quiero%20información%20sobre%20clases%20de%20kitesurf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full transition-all duration-200 shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Salinas del Rey
                <br />
                <span className="text-cyan-600">Tu Paraíso del Kitesurf</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ubicado en la costa caribeña colombiana, Salinas del Rey ofrece condiciones 
                excepcionales para el kitesurf durante casi todo el año. Vientos consistentes 
                de 15-25 nudos, aguas planas y cálidas, y un ambiente relajado hacen de este 
                lugar el destino perfecto para aprender y perfeccionar tu técnica.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg
                    className="w-6 h-6 text-cyan-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  300+ días de viento al año
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    className="w-6 h-6 text-cyan-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Aguas planas ideales para principiantes
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    className="w-6 h-6 text-cyan-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Temperatura del agua 26-28°C
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    className="w-6 h-6 text-cyan-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  A solo 2 horas de Barranquilla
                </li>
              </ul>
              <Button href="/salinas-del-rey">Descubre Salinas del Rey</Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                <span className="text-white/50 text-lg">Imagen de Salinas del Rey</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-cyan-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Salinas del Rey</div>
                    <div className="text-sm text-gray-500">Costa Caribeña, Colombia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

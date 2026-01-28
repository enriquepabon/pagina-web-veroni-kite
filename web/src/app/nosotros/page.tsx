import { Metadata } from 'next';
import { Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description:
    'Conoce a Veroni Kite School, tu escuela de kitesurf en Salinas del Rey, Colombia. Nuestra historia, misión y el equipo detrás de tus mejores aventuras en el agua.',
};

const valores = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: 'Pasión',
    description:
      'El kitesurf no es solo un deporte para nosotros, es nuestra forma de vida. Esa pasión la transmitimos en cada clase.',
  },
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
    title: 'Seguridad',
    description:
      'Tu seguridad es nuestra prioridad número uno. Utilizamos equipos de última generación y seguimos protocolos estrictos.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Comunidad',
    description:
      'Más que una escuela, somos una familia de amantes del viento y el mar. Únete a nuestra comunidad.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'Excelencia',
    description:
      'Nos comprometemos a brindarte la mejor experiencia de aprendizaje posible, superando siempre tus expectativas.',
  },
];

const timeline = [
  {
    year: '2014',
    title: 'El Comienzo',
    description:
      'Veroni descubre las increíbles condiciones de viento de Salinas del Rey y decide compartir su pasión.',
  },
  {
    year: '2016',
    title: 'Primera Escuela',
    description:
      'Abrimos oficialmente como escuela de kitesurf, con nuestro primer grupo de alumnos entusiastas.',
  },
  {
    year: '2018',
    title: 'Certificación Internacional',
    description:
      'Obtenemos certificaciones IKO y nos convertimos en una escuela reconocida internacionalmente.',
  },
  {
    year: '2020',
    title: 'Expansión',
    description:
      'Ampliamos nuestro equipo de instructores y renovamos todo nuestro material a las últimas tecnologías.',
  },
  {
    year: '2024',
    title: 'Líderes en la Región',
    description:
      'Nos consolidamos como la escuela de referencia en la costa caribeña colombiana con más de 500 alumnos.',
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-900 via-cyan-800 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Somos más que una escuela de kitesurf. Somos una comunidad de apasionados por el viento,
            el mar y la aventura.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-600 mb-6">
                Todo comenzó con un sueño y una tabla. Veroni, un apasionado del kitesurf, descubrió
                las condiciones perfectas de Salinas del Rey hace más de una década. Lo que empezó
                como un lugar personal de práctica, se convirtió en la misión de compartir esta
                experiencia única con el mundo.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Hoy, Veroni Kite School es la escuela líder de kitesurf en la costa caribeña
                colombiana. Hemos formado a más de 500 kitesurfistas de todas partes del mundo, desde
                principiantes absolutos hasta riders avanzados que buscan perfeccionar su técnica.
              </p>
              <p className="text-lg text-gray-600">
                Nuestra filosofía es simple: crear kitesurfistas seguros, competentes y, sobre todo,
                apasionados. Porque sabemos que una vez que vuelas sobre el agua, ya no hay vuelta
                atrás.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                <span className="text-white/50 text-lg">Foto del Equipo</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-cyan-500 text-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-cyan-100">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían todo lo que hacemos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{valor.title}</h3>
                <p className="text-gray-600">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Trayectoria</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un viaje de pasión, dedicación y crecimiento constante.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-cyan-200 my-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-sky-900 via-cyan-800 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Nuestra Misión</h3>
              <p className="text-lg text-white/80">
                Inspirar y capacitar a personas de todo el mundo para que experimenten la libertad y
                la emoción del kitesurf de manera segura, profesional y divertida, mientras
                promovemos el respeto por el medio ambiente marino.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Nuestra Visión</h3>
              <p className="text-lg text-white/80">
                Ser reconocidos como la escuela de kitesurf líder en Latinoamérica, formando una
                comunidad global de kitesurfistas apasionados que comparten nuestro amor por el
                deporte y la naturaleza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ¿Listo para Ser Parte de Nuestra Historia?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a la familia Veroni Kite y comienza tu aventura en el kitesurf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/cursos" size="lg">
              Explorar Cursos
            </Button>
            <Button href="/instructores" variant="outline" size="lg">
              Conocer Instructores
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

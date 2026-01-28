import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Cursos de Kitesurf',
  description:
    'Descubre nuestros cursos de kitesurf en Salinas del Rey, Colombia. Desde principiantes hasta avanzados, tenemos el programa perfecto para ti.',
};

const cursos = [
  {
    id: 'curso-completo',
    nombre: 'Curso Completo',
    subtitulo: 'De Cero a Kitesurfista',
    duracion: '10 horas',
    precio: 2500000,
    descripcion:
      'Nuestro programa más completo. Diseñado para llevarte desde cero hasta volar de forma independiente. Incluye teoría, práctica en tierra y agua, y todo el equipo necesario.',
    caracteristicas: [
      'Teoría completa del kitesurf',
      'Montaje y control del kite en tierra',
      'Body drag y water relaunch',
      'Water start y primeros metros',
      'Navegación independiente',
      'Equipo completo incluido',
      'Certificación IKO disponible',
      'Fotos y videos de tus sesiones',
    ],
    incluye: ['10 horas de clase', 'Todo el equipo', 'Chaleco salvavidas', 'Radio comunicación'],
    ideal: 'Principiantes que quieren dominar el kitesurf',
    popular: true,
    imagen: '/images/curso-completo.jpg',
  },
  {
    id: 'medio-curso',
    nombre: 'Medio Curso',
    subtitulo: 'Inicio Rápido',
    duracion: '5 horas',
    precio: 1500000,
    descripcion:
      'Perfecto para quienes tienen tiempo limitado o algo de experiencia previa. Cubre los fundamentos esenciales para empezar a disfrutar del kitesurf.',
    caracteristicas: [
      'Teoría básica del kitesurf',
      'Control del kite en tierra',
      'Body drag básico',
      'Introducción al water start',
      'Equipo completo incluido',
    ],
    incluye: ['5 horas de clase', 'Todo el equipo', 'Chaleco salvavidas', 'Radio comunicación'],
    ideal: 'Quienes tienen tiempo limitado o experiencia previa',
    popular: false,
    imagen: '/images/medio-curso.jpg',
  },
  {
    id: 'clase-puntual',
    nombre: 'Clase Puntual',
    subtitulo: 'Sesión Individual',
    duracion: '1 hora',
    precio: 250000,
    descripcion:
      'Ideal para perfeccionar técnicas específicas, refrescar conocimientos o simplemente probar el deporte antes de comprometerte con un curso completo.',
    caracteristicas: [
      'Instructor dedicado 1:1',
      'Enfoque en tus necesidades específicas',
      'Equipo incluido',
      'Flexibilidad de horario',
    ],
    incluye: ['1 hora de clase', 'Todo el equipo', 'Chaleco salvavidas'],
    ideal: 'Riders con experiencia o quienes quieren probar el deporte',
    popular: false,
    imagen: '/images/clase-puntual.jpg',
  },
  {
    id: 'alquiler-equipos',
    nombre: 'Alquiler de Equipos',
    subtitulo: 'Para Riders Independientes',
    duracion: '1 hora',
    precio: 250000,
    descripcion:
      'Si ya eres un kitesurfista experimentado, alquila nuestro equipo de última generación y disfruta de las increíbles condiciones de Salinas del Rey.',
    caracteristicas: [
      'Kites de última generación',
      'Tablas para todos los niveles',
      'Arneses disponibles',
      'Asistencia en playa',
    ],
    incluye: ['Kite completo', 'Tabla', 'Arnés', 'Bomba'],
    ideal: 'Kitesurfistas experimentados visitando la zona',
    popular: false,
    imagen: '/images/alquiler.jpg',
  },
];

const niveles = [
  {
    nivel: 'Principiante',
    descripcion: 'Nunca has practicado kitesurf',
    cursoRecomendado: 'Curso Completo',
    color: 'from-green-400 to-emerald-500',
  },
  {
    nivel: 'Básico',
    descripcion: 'Has tomado algunas clases pero no navegas independiente',
    cursoRecomendado: 'Medio Curso o Clases Puntuales',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    nivel: 'Intermedio',
    descripcion: 'Navegas pero quieres mejorar técnica',
    cursoRecomendado: 'Clases Puntuales',
    color: 'from-orange-400 to-amber-500',
  },
  {
    nivel: 'Avanzado',
    descripcion: 'Buscas perfeccionar trucos o freestyle',
    cursoRecomendado: 'Clases Puntuales o Alquiler',
    color: 'from-purple-400 to-pink-500',
  },
];

export default function CursosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-900 via-cyan-800 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestros Cursos</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Programas diseñados para todos los niveles. Desde tu primera cometa hasta maniobras
            avanzadas, tenemos el curso perfecto para ti.
          </p>
        </div>
      </section>

      {/* Level Selector */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            ¿Cuál es tu nivel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {niveles.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold mb-4`}
                >
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.nivel}</h3>
                <p className="text-gray-600 mb-3 text-sm">{item.descripcion}</p>
                <p className="text-cyan-600 font-medium text-sm">
                  Recomendado: {item.cursoRecomendado}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {cursos.map((curso, index) => (
              <div
                key={curso.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                    <span className="text-white/50 text-lg">{curso.nombre}</span>
                    {curso.popular && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Más Popular
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-cyan-600 font-medium">{curso.subtitulo}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{curso.duracion}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{curso.nombre}</h2>
                  <p className="text-lg text-gray-600 mb-6">{curso.descripcion}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {curso.caracteristicas.slice(0, 6).map((caracteristica, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0"
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
                        <span className="text-sm">{caracteristica}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 mb-6">
                    <div>
                      <span className="text-sm text-gray-500">Precio</span>
                      <div className="text-3xl font-bold text-cyan-600">
                        {formatPrice(curso.precio)}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href={`/cursos/${curso.id}`}>Ver Detalles</Button>
                    <Button href="/reservar" variant="outline">
                      Reservar Ahora
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Tienes Preguntas?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Consulta nuestra sección de preguntas frecuentes o contáctanos directamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/faqs">Ver FAQs</Button>
            <a
              href="https://wa.me/573001234567?text=Hola!%20Tengo%20preguntas%20sobre%20los%20cursos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

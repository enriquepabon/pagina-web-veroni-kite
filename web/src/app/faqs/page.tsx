'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Button } from '@/components/ui';

const faqs = [
  {
    categoria: 'Antes de Empezar',
    preguntas: [
      {
        pregunta: '¿Necesito experiencia previa para aprender kitesurf?',
        respuesta:
          'No, no necesitas ninguna experiencia previa. Nuestro Curso Completo está diseñado específicamente para principiantes absolutos. Empezamos desde los conceptos más básicos y te guiamos paso a paso hasta que puedas navegar de forma independiente.',
      },
      {
        pregunta: '¿Qué edad mínima se requiere?',
        respuesta:
          'Aceptamos alumnos desde los 12 años (con autorización de los padres). No hay límite de edad máxima, ¡hemos enseñado a personas de 60+ años! Lo importante es tener ganas de aprender y una condición física razonable.',
      },
      {
        pregunta: '¿Necesito saber nadar?',
        respuesta:
          'Sí, es importante saber nadar con confianza. Aunque siempre usarás chaleco salvavidas durante las clases, necesitas sentirte cómodo en el agua. No necesitas ser un nadador olímpico, pero sí poder nadar al menos 50 metros sin dificultad.',
      },
      {
        pregunta: '¿Qué condición física necesito?',
        respuesta:
          'El kitesurf es más técnica que fuerza, pero una condición física básica ayuda. Si puedes caminar, nadar y tienes movilidad normal, estás listo. No necesitas ser un atleta, pero una buena salud general es importante.',
      },
    ],
  },
  {
    categoria: 'Sobre las Clases',
    preguntas: [
      {
        pregunta: '¿Cuánto tiempo toma aprender kitesurf?',
        respuesta:
          'Con nuestro Curso Completo de 10 horas, la mayoría de los alumnos logran navegar de forma independiente. El tiempo exacto varía según la persona, las condiciones de viento y la frecuencia de práctica. Algunos aprenden más rápido, otros necesitan más tiempo, ¡y está bien!',
      },
      {
        pregunta: '¿Las clases son individuales o grupales?',
        respuesta:
          'Ofrecemos ambas opciones. Las clases individuales permiten un progreso más rápido y atención personalizada. Las grupales (máximo 2-3 personas) son más económicas y divertidas para aprender con amigos. Tú eliges lo que prefieras.',
      },
      {
        pregunta: '¿Qué incluye el precio del curso?',
        respuesta:
          'Todo el equipo necesario (kite, tabla, arnés, chaleco), instructor certificado, seguro durante las clases, y sistema de comunicación por radio. Solo necesitas traer ropa cómoda, protector solar y ganas de aprender.',
      },
      {
        pregunta: '¿Qué pasa si no hay viento el día de mi clase?',
        respuesta:
          'Reprogramamos sin costo adicional. Salinas del Rey tiene viento casi todos los días, pero la naturaleza manda. Monitoreamos constantemente las condiciones y te avisamos con anticipación si necesitamos cambiar la fecha.',
      },
    ],
  },
  {
    categoria: 'Seguridad',
    preguntas: [
      {
        pregunta: '¿Es peligroso el kitesurf?',
        respuesta:
          'Como cualquier deporte acuático, tiene riesgos, pero con la instrucción adecuada es muy seguro. Usamos equipos de seguridad modernos, seguimos protocolos estrictos y nuestras clases son en zonas controladas. La seguridad es nuestra prioridad número uno.',
      },
      {
        pregunta: '¿Qué equipo de seguridad usan?',
        respuesta:
          'Todos los alumnos usan chaleco salvavidas, casco (opcional pero recomendado), y sistema de suelta rápida. Nuestros kites tienen sistemas de seguridad de última generación. Además, usamos radios para comunicación constante.',
      },
      {
        pregunta: '¿Tienen seguro?',
        respuesta:
          'Sí, todos nuestros alumnos están cubiertos por un seguro de accidentes durante las clases. También contamos con seguro de responsabilidad civil. Te recomendamos tener tu propio seguro de viaje si vienes del extranjero.',
      },
    ],
  },
  {
    categoria: 'Logística',
    preguntas: [
      {
        pregunta: '¿Cuál es la mejor época para hacer kitesurf en Salinas del Rey?',
        respuesta:
          'Salinas del Rey tiene excelentes condiciones casi todo el año. La temporada alta de viento es de diciembre a abril, con vientos consistentes de 15-25 nudos. Sin embargo, tenemos buenas condiciones también de junio a agosto. Los meses más variables son mayo, septiembre y octubre.',
      },
      {
        pregunta: '¿Cómo llego a Salinas del Rey?',
        respuesta:
          'Salinas del Rey está a aproximadamente 2 horas de Barranquilla. Puedes llegar en carro propio, taxi, o podemos ayudarte a coordinar transporte. El aeropuerto más cercano es el Ernesto Cortissoz de Barranquilla.',
      },
      {
        pregunta: '¿Tienen recomendaciones de alojamiento?',
        respuesta:
          'Sí, tenemos convenios con varios hostales y hoteles en la zona con descuentos especiales para nuestros alumnos. Desde opciones económicas hasta boutique hotels. Contáctanos y te ayudamos a encontrar el lugar perfecto.',
      },
      {
        pregunta: '¿Puedo dejar mis cosas mientras tomo la clase?',
        respuesta:
          'Sí, tenemos un área segura donde puedes dejar tus pertenencias mientras estás en el agua. Sin embargo, te recomendamos no traer objetos de valor innecesarios.',
      },
    ],
  },
  {
    categoria: 'Pagos y Reservas',
    preguntas: [
      {
        pregunta: '¿Cómo puedo reservar?',
        respuesta:
          'Puedes reservar directamente en nuestra web, por WhatsApp, o por email. Requerimos un depósito del 30% para confirmar tu reserva, y el resto lo pagas el día de la clase.',
      },
      {
        pregunta: '¿Qué métodos de pago aceptan?',
        respuesta:
          'Aceptamos transferencias bancarias, tarjetas de crédito/débito a través de nuestra pasarela de pagos, y efectivo. Para pagos internacionales, podemos coordinar opciones adicionales.',
      },
      {
        pregunta: '¿Puedo cancelar mi reserva?',
        respuesta:
          'Sí, con más de 48 horas de anticipación te devolvemos el 100% del depósito. Entre 24-48 horas, el 50%. Con menos de 24 horas no hay reembolso, pero puedes reprogramar sujeto a disponibilidad.',
      },
    ],
  },
];

function FAQItem({
  pregunta,
  respuesta,
  isOpen,
  onClick,
}: {
  pregunta: string;
  respuesta: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-4 flex items-center justify-between text-left hover:text-cyan-600 transition-colors"
      >
        <span className="font-medium text-gray-900 pr-4">{pregunta}</span>
        <svg
          className={`w-5 h-5 text-cyan-500 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 animate-fadeIn">
          <p>{respuesta}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-900 via-cyan-800 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Preguntas Frecuentes</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre nuestros cursos y el kitesurf en
            general.
          </p>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqs.map((categoria, catIndex) => (
              <div key={catIndex} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    {catIndex + 1}
                  </span>
                  {categoria.categoria}
                </h2>
                <div className="bg-gray-50 rounded-2xl p-6">
                  {categoria.preguntas.map((faq, faqIndex) => (
                    <FAQItem
                      key={faqIndex}
                      pregunta={faq.pregunta}
                      respuesta={faq.respuesta}
                      isOpen={openItems[`${catIndex}-${faqIndex}`] || false}
                      onClick={() => toggleItem(`${catIndex}-${faqIndex}`)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-sky-900 via-cyan-800 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Aún Tienes Preguntas?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            No dudes en contactarnos. Estamos aquí para ayudarte y resolver todas tus dudas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573001234567?text=Hola!%20Tengo%20una%20pregunta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-full transition-all duration-200 shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:info@veronikite.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-200 border border-white/20"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

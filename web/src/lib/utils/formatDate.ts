/**
 * Formatea una fecha en español
 * @param date - Fecha a formatear
 * @param options - Opciones de formato
 * @returns Fecha formateada como string
 */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('es-CO', options).format(dateObj);
}

/**
 * Formatea una fecha y hora en español
 * @param date - Fecha a formatear
 * @returns Fecha y hora formateada como string
 */
export function formatDateTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj);
}

/**
 * Obtiene la hora formateada
 * @param date - Fecha de la que extraer la hora
 * @returns Hora formateada como string
 */
export function formatTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('es-CO', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj);
}

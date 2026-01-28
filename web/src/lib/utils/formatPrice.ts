/**
 * Formatea un precio en COP (Peso Colombiano)
 * @param amount - Monto a formatear
 * @returns Precio formateado como string
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formatea un precio en USD
 * @param amount - Monto a formatear
 * @returns Precio formateado como string
 */
export function formatPriceUSD(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

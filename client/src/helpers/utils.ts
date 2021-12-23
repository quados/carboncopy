/**
 * Converts a 6 digit hex number together with a opacity to a 8 digit Hex
 * @param hexColor Hex string of the color
 * @param opacity Value between 0 and 1 for opacity
 * @returns 8 Digit Hex value with opacity
 */
export const colorWithOpacity = (hexColor: string, opacity: number) => {
  return hexColor + (opacity > 0 ? Math.floor(opacity * 255).toString(16) : "00")
}

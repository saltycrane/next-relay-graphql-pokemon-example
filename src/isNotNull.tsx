/**
 * isNotNull - use this in an `Array.filter` to tell TypeScript that the
 * returned array does not contain `null` or `undefined`.
 *
 * Example usage:
 *
 *   const itemsWithoutNulls = itemsWithNulls.filter(isNotNull)
 */
export function isNotNull<T extends unknown>(arg: T): arg is NonNullable<T> {
  return arg !== null && arg !== undefined;
}

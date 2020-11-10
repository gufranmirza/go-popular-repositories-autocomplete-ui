/* eslint-disable */

export function HasProperty(
  obj: Record<string, any>,
  property: string,
): boolean {
  let result = false;
  if (obj) {
    for (const key in obj) {
      // eslint-disable-line no-restricted-syntax
      if ({}.hasOwnProperty.call(obj, key) && property === key) {
        result = true;
        break;
      }
    }
  }
  return result;
}

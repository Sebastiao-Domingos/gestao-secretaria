export function isEmptyString(str: string): boolean {
  return !(typeof str === "string") || str.trim() == "";
}

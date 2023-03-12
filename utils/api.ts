export function verifyId(id: any): boolean {
  return !!id && Number.isSafeInteger(Number.parseInt(id));
}

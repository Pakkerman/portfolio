export function validateString(value: unknown, maxLen: number): boolean {
  if (!value || typeof value !== 'string') return false
  if (value.length > maxLen) return false
  return true
}

export function getErrorMessage(error: unknown): string {
  let message: string
  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message)
  } else if (typeof error === 'string') {
    message = error
  } else {
    message = 'Something went wrong'
  }

  return message
}

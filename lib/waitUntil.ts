import { Timeout } from './timeout'

export async function waitUntil(
  description: string,
  fn: () => Promise<boolean> | boolean,
  timeout: number = Timeout.Default
): Promise<boolean> {
  const start = Date.now()
  while (Date.now() - start < timeout) {
    const result = await fn()
    const timeToWait = 100 + (Date.now() - start) / 10000
    if (result === true) {
      return true
    }

    await new Promise((resolve) => setTimeout(resolve, timeToWait))
  }

  throw new Error(`waitUntil ${description}: Timed out (${timeout}ms)`)
}

/* eslint-disable no-console */
import { format } from 'util'

// Used to declare and use global decorators and parameters, etc... (global config)
import { setProjectAnnotations } from '@storybook/react'

import globalStorybookConfig from './.storybook/preview'

setProjectAnnotations(globalStorybookConfig)

// Remove "Error: Not implemented: window.scrollTo"
const noop = () => {}
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true })

// Transform some logs into exceptions
const nativeConsoleError = console.error

// Stub scrollIntoView
window.HTMLElement.prototype.scrollIntoView = jest.fn()

console.error = (...args) => {
  // Keep default behaviour
  nativeConsoleError.apply(console, args)

  if (typeof args[0] === 'string') {
    const message = args[0]

    if (
      message.startsWith(
        'Warning: A component is changing an uncontrolled input to be controlled'
      ) ||
      message.startsWith(
        'Warning: Encountered two children with the same key'
      ) ||
      message.startsWith(
        'Warning: Each child in a list should have a unique "key" prop'
      ) ||
      message.startsWith(
        'Warning: React does not recognize the `%s` prop on a DOM element.'
      ) ||
      message.startsWith(
        "Warning: It looks like you're using the wrong act()"
      ) ||
      message.startsWith(
        'Warning: The current testing environment is not configured to support act'
      ) ||
      message.startsWith('Warning: You seem to have overlapping act() calls')
    ) {
      throw new Error(format(...args))
    }
    // Add other behaviors here
  }
}
process.on('unhandledRejection', (reason: unknown & { stack: never }, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
  console.log('Unhandled Rejection stack', reason?.stack)
})

/* eslint-enable no-console */

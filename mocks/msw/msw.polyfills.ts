// msw.polyfills.ts
import 'fast-text-encoding'
// This file was adapted from: https://github.com/facebook/react-native/issues/27741#issuecomment-2362901032
import { polyfill } from 'react-native-polyfill-globals/src/fetch'
import 'react-native-url-polyfill/auto'
// 👇 https://stackoverflow.com/a/77744609/14056591
import { ReadableStream as ReadableStreamPolyfill } from 'web-streams-polyfill/dist/ponyfill'

polyfill()

// @ts-ignore
globalThis.ReadableStream = ReadableStreamPolyfill

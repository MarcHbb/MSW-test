import './mocks/msw/msw.polyfills'
import { server } from './mocks/msw/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

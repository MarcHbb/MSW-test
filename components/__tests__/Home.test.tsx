import { screen, render } from '@testing-library/react-native';


import { Home } from '../Home';

describe('Home', () => {
    it('renders without crashing', () => {
        render(<Home />);
    });
});
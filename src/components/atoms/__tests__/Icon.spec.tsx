import { render } from '@testing-library/react';
import Icon, { IconProps } from '../Icon';

const makeSut = (props: IconProps) => render(<Icon {...props} />);

describe('(UNIT) Icon Atom', () => {
    it('renders a component', () => {
        const { container } = makeSut({ name: 'facebook' });

        expect(container).toBeInstanceOf(HTMLElement);
    });
});

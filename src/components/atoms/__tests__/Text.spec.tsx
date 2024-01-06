import { render } from '@testing-library/react';
import { Text, TextProps } from '../Text';

const makeSut = (props: TextProps) => render(<Text {...props} />);

describe('(UNIT) Text Atom', () => {
    it('renders a component', () => {
        const { container } = makeSut({ text: 'Hello World' });

        expect(container).toBeInstanceOf(HTMLElement);
    });

    it('renders a text', () => {
        const { getByText } = makeSut({ text: 'Hello World' });

        const textElement = getByText('Hello World');

        expect(textElement).toBeDefined();
    });

    it('renders a text with a custom class', () => {
        const { getByTestId } = makeSut({
            text: 'Hello World',
            className: 'custom-class',
        });

        const textElement = getByTestId('text-atom');

        expect(textElement).toBeDefined();
        expect(textElement).toHaveClass('custom-class');
    });
});

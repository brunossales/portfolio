import { render, act, fireEvent } from '@testing-library/react';
import { Navbar } from '../Navbar';

const className =
    'w-full h-1/6 border-0 border-solid border-b-2 border-b-white flex justify-between items-center bg-custom-light-purple px-16';

const makeSut = () => render(<Navbar />);

describe('(UNIT) Navbar Component', () => {
    it('should render the navbar', () => {
        const { getByTestId } = makeSut();

        const navbar = getByTestId('navbar');

        expect(navbar).toBeInTheDocument();
    });

    it('should render the navbar with the correct props', () => {
        const { getByTestId } = makeSut();

        const navbar = getByTestId('navbar');

        expect(navbar).toHaveAttribute('data-testid', 'navbar');
        expect(navbar).toHaveClass(className);
    });

    it('should render correct links withs correct props', () => {
        const { getByTestId } = makeSut();

        const navbar = getByTestId('navbar');
        const linkCareer = getByTestId('career');

        expect(navbar).toHaveTextContent('Início');
        expect(navbar).toHaveTextContent('Carreira');
        expect(navbar).toHaveTextContent('Sobre');
        expect(navbar).toHaveTextContent('Projetos');
        expect(navbar).toHaveTextContent('Contato');

        expect(linkCareer).toHaveAttribute('data-testid', 'career');
        expect(linkCareer).toHaveAttribute('href', '/career');
        expect(linkCareer).toHaveTextContent('Carreira');
    });

    it('should render the navbar with responsive links and button', () => {
        const { getByTestId, queryByTestId } = render(
            <div className="max-w-md">
                <Navbar />
            </div>
        );

        const navButton = getByTestId('mobile-menu-button');
        const navMenu = queryByTestId('mobile-menu');
        const homeMobile = queryByTestId('home-mobile');

        expect(navMenu).not.toBeInTheDocument();
        expect(homeMobile).not.toBeInTheDocument();

        expect(navButton).toBeInTheDocument();

        fireEvent(navButton, new MouseEvent('click', { bubbles: true }));

        act(() => {
            const navMenu = getByTestId('mobile-menu');
            const homeMobile = getByTestId('home-mobile');

            expect(navMenu).toHaveTextContent('Início');
            expect(homeMobile).toBeInTheDocument();
        });
    });
});

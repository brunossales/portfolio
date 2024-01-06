import { render } from '@testing-library/react';
import { IconLink } from '../IconLink';
import { Github } from 'lucide-react';

jest.mock('next/dynamic', () => () => {
    const DynamicComponent = () => <Github />;
    DynamicComponent.displayName = 'DynamicComponent';
    return DynamicComponent;
});

const Container = IconLink.Container;

describe('(UNIT) IconLink', () => {
    it('should render IconLinkContainer', () => {
        const { getByText } = render(<Container>IconLink</Container>);

        expect(getByText('IconLink')).toBeInTheDocument();
    });

    it('should render Icon', () => {
        const { container } = render(<IconLink.Icon icon="github" />);

        expect(container).toBeInTheDocument();
    });

    it('should render Link', () => {
        const { getByText } = render(
            <IconLink.Link href="https://github.com" label="Github" />
        );

        expect(getByText('Github')).toBeInTheDocument();
    });

    it('should render Icon and call with correct props', () => {
        const { container } = render(<IconLink.Icon icon="github" />);

        expect(container.firstChild).toHaveAttribute(
            'class',
            'lucide lucide-github '
        );
    });

    it('should render Link and call with correct props', () => {
        const { container } = render(
            <IconLink.Link href="label.com" label="github" />
        );

        expect(container.firstChild).toHaveAttribute('href', 'label.com');
        expect(container.firstChild).toHaveAttribute('target', '_blank');
    });
});

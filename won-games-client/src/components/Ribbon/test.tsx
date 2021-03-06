import { screen } from '@testing-library/react';

import Ribbon from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the primary color', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/)).toHaveStyle({
      backgroundColor: '#f231a5',
    });
  });

  it('should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/)).toHaveStyle({
      backgroundColor: '#3CD3C1',
    });
  });

  it('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem',
    });
  });

  it('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});

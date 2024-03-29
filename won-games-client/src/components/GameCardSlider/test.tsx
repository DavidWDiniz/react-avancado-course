import 'match-media-mock';
import { renderWithTheme } from 'utils/tests/helpers';
import { screen } from '@testing-library/react';

import GameCardSlider from '.';

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
];

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA',
    });
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA',
    });
  });
});

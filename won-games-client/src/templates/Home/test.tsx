import 'match-media-mock';
import { screen } from '@testing-library/react';
import Home from './index';
import { renderWithTheme } from '../../utils/tests/helpers';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import bannersMock from 'components/BannerSlider/mock';

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock,
};

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home {...props} />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /contact us/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);
  });

  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />);
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /upcoming/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /free games/i }),
    ).toBeInTheDocument();
  });

  it('should render section elements', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);
    expect(screen.getAllByText(/red dead is back!/i)).toHaveLength(3);
  });
});

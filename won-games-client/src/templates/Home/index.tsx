import Menu from '../../components/Menu';
import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import { BannerProps } from '../../components/Banner';
import { GameCardProps } from '../../components/GameCard';
import Highlight, { HighlightProps } from '../../components/Highlight';
import BannerSlider from '../../components/BannerSlider';
import GameCardSlider from '../../components/GameCardSlider';
import * as S from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  upcomingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

const Home = ({
  banners,
  freeHighlight,
  mostPopularHighlight,
  mostPopularGames,
  newGames,
  upcomingHighlight,
  freeGames,
  upcomingGames,
  upcomingMoreGames,
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </S.SectionMostPopular>
    </Container>

    <Container>
      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcoming
        </Heading>
        <GameCardSlider items={upcomingGames} />
        <Highlight {...upcomingHighlight} />
        <GameCardSlider items={upcomingMoreGames} />
      </S.SectionUpcoming>
    </Container>

    <Container>
      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free games
        </Heading>
        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </S.SectionFreeGames>
    </Container>
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Home;

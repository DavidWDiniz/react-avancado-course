import * as S from './styles';
import Slider, { SliderSettings } from '../Slider';
import GameCard, { GameCardProps } from '../GameCard';
import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
} from '@styled-icons/material-outlined';

export type GameCardSliderProps = {
  items: GameCardProps[];
  color?: 'white' | 'black';
};

const settings: SliderSettings = {
  prevArrow: <ArrowLeft aria-label="previous games" />,
  nextArrow: <ArrowRight aria-label="next games" />,
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
};

const GameCardSlider = ({ items, color = 'white' }: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item) => (
        <GameCard key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default GameCardSlider;

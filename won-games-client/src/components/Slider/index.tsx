import SlickSlider, { Settings } from 'react-slick';
import { ReactNode } from 'react';

import * as S from './styles';

export type SliderSettings = Settings;

export type SliderProps = {
  children: ReactNode;
  settings: SliderSettings;
};

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
);

export default Slider;

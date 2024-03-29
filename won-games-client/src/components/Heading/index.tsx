import * as S from './styles';
import { ReactNode } from 'react';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: ReactNode;
  color?: 'black' | 'white';
  lineLeft?: boolean;
  lineBottom?: boolean;
  size?: 'small' | 'medium' | 'huge';
  lineColor?: LineColors;
};

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary',
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
);

export default Heading;

import * as S from './styles';
import Button from '../Button';
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: string;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const Banner = ({
  buttonLabel,
  buttonLink,
  img,
  subtitle,
  title,
  ribbon,
  ribbonColor,
  ribbonSize,
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
);

export default Banner;

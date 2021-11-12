import { Story, Meta } from '@storybook/react';
import GameCard, { GameCardProps } from '.';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Red dead redemption 2',
    developer: 'Rockstar Games',
    img:
      'https://www.rockstargames.com/reddeadredemption2/dist/img/global/social/ea95b42f4d8029ac2510571cc8dbdae4.jpg',
    price: 'R$ 250,00',
    promotionalPrice: 'R$ 200,00',
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' },
  },
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary',
};

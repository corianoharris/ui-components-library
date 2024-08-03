import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Meta, StoryObj } from '@storybook/angular';
import IconComponent from './icon.component';
import { moduleMetadata } from '@storybook/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUp, faCableCar } from '@fortawesome/free-solid-svg-icons';
import { faIconsList } from './icons';

const svg = "/icons/rocket.svg";

export default {
  title: 'Components/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    faIcon: {
      control: {
        type: 'select',
        options: faIconsList.map(icon => icon.value.iconName),
      },
      mapping: Object.fromEntries(faIconsList.map(icon => [icon.value.iconName, icon.value])),
    },
    showFaIcon: { control: 'boolean' },
    showSvgIcon: { control: 'boolean' },
    svgIconSrc: { control: 'text' },
    faIconWeight: {
      control: {
        type: 'select',
        options: ['light', 'thin', 'regular', 'solid']
      },
    },
    faIconSize: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'lg', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']
      },
    },
    iconWidth: { control: 'number' },
    iconHeight: { control: 'number' },
    ariaLabelIcon: { control: 'text' },
    altText: { control: 'text' },
  },
} as Meta<IconComponent>;

type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {
    faIcon: faCableCar,
    showFaIcon: true,
    showSvgIcon: false,
    faIconWeight: 'regular',
    faIconSize: '1x',
    iconWidth: 24,
    iconHeight: 24,
    ariaLabelIcon: 'Case',
    altText: 'Case',
    svgIconSrc: svg,
  },
};

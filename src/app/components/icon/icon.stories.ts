import { IconDefinition, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
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
      if: { arg: 'showFaIcon' },
      options: faIconsList.map(option => option.label),
      control: { type: 'select' },
      mapping: faIconsList.reduce<{ [key: string]: IconDefinition }>((acc, cur) => {
        acc[cur.label] = cur.value;
        return acc;
      }, {}),
      onchange: (faIconName: string | IconDefinition) => {
        let faIcon: IconDefinition;
        let faPrefix: IconPrefix;
        let faIdentifier: IconName;
        if (typeof faIconName === 'string') {
          const option = faIconsList.find(option => option.label === faIconName);
          if (!option) throw new Error(`Icon "${faIconName}" not found.`);
          faIcon = option.value;
          faPrefix = option.value.prefix;
          faIdentifier = option.value.iconName;
        } else {
          faIcon = faIconName;
        }
        return {
          faPrefix: faIcon.prefix,
          faIdentifier: faIcon.iconName,
          faIcon: faIcon.icon,
        };
      },
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
    faIconSize:
      { control: 'number' }
    ,
    iconWidth: { control: 'number' },
    iconHeight: { control: 'number' },
    ariaLabel: { control: 'text' },
    altText: { control: 'text' },
    faIconAriaLabel: { control: 'text'},
  },
} as Meta<IconComponent>;

type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {
    faIcon: faCableCar,
    showFaIcon: true,
    showSvgIcon: false,
    faIconWeight: 'regular',
    faIconSize: 24,
    iconWidth: 24,
    iconHeight: 24,
    ariaLabel: '',
    altText: '',
    svgIconSrc: svg,
  },
};

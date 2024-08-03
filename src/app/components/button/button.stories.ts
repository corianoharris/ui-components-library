import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { faIconsList } from '../icon/icons';
import { IconDefinition, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    text: { 
      control: 'text' 
    },
    type: { 
      control: { 
        type: 'select', 
        options: ['button', 'submit', 'reset'] 
      } 
    },
    isDisabled: { 
      control: 'boolean' 
    },
    showIconLeft: { 
      control: 'boolean' 
    },
    showIconRight: { 
      control: 'boolean' 
    },
    showFaIconLeft: { 
      control: 'boolean' 
    },
    showFaIconRight: { 
      control: 'boolean' 
    },
    showSvgIconLeft: { 
      control: 'boolean' 
    },
    showSvgIconRight: { 
      control: 'boolean' 
    },
    faIconLeft: { 
      if: { arg: 'showFaIconLeft && !showSvgIconLeft' },
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
          // faPrefix: faIcon.prefix,
          // faIdentifier: faIcon.iconName,
          icon: faIcon.icon,
        };
      },
    },
    faIconRight: { 
      // if: { arg: 'showIconRight && showFaIconRight && !showSvgIconRight' },
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
          // faPrefix: faIcon.prefix,
          // faIdentifier: faIcon.iconName,
          icon: faIcon.icon,
        };
      },
    },
    svgIconLeft: { 
      if: { arg: 'showSvgIconLeft && !showFaIconLeft' },
      control: { type: 'text' }
    },
    svgIconRight: { 
      if: { arg: 'showSvgIconRight && !showFaIconRight' },
      control: { type: 'text' }
    },
    clicked: { 
      action: 'clicked' 
    }
  }
  ,
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    text: 'Click me',
    type: 'button',
    isDisabled: false,
    showIconLeft: false,
    showIconRight: false,
    showFaIconLeft: false,
    showFaIconRight: false,
    showSvgIconLeft: false,
    showSvgIconRight: false,
    faIconLeft: faCoffee,
    faIconRight: faCoffee,
    svgIconLeft: '',
    svgIconRight: '',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};

export const Submit: Story = {
  args: {
    ...Default.args,
    text: 'Submit',
    type: 'submit',
  },
};

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
    showIconLeft: true,
    showIconRight: true,
    showFaIconLeft: true,
    showSvgIconLeft: false,
    faIconLeft: faCoffee,
    faIconRight: faCoffee,
    isDisabled: false,
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    text: 'Tertiary Button',
    variant: 'tertiary',
  },
};

export const Destructive: Story = {
  args: {
    text: 'Destructive Button',
    variant: 'destructive',
  },
};

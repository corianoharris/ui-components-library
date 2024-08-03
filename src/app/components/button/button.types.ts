import { SafeResourceUrl } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  faIconLeft?: any;
  faIconRight?: any;
  variant: ButtonVariant;
  text: string;
  showFaIconLeft?: boolean;
  showFaIconRight?: boolean;
  showSvgIconLeft?: boolean;
  showSvgIconRight?: boolean;
  isText?: boolean;
  showIconLeft?: boolean;
  showIconRight?: boolean;
  svgIconLeft?: SafeResourceUrl;
  svgIconRight?: SafeResourceUrl;
  size: ButtonSize;
  isDisabled: boolean;
  onClick: EventEmitter<Event>;
  clicked: EventEmitter<void>;
}
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {SafeResourceUrl } from '@angular/platform-browser';


export type IconComponentProps = {
    useDefaultAria?: boolean;
    ariaLabelContainer?: string;
    ariaLabelIcon?: string;
    altText?: string;
    srOnlyContent?: string;
    ariaLabel?: string;
    faIconSize?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
    iconHeight?: number;
    iconWidth?: number;
    showFaIcon?: boolean;
    faIcon?: IconDefinition;
    showSvgIcon?: boolean;
    svgIconSrc?: SafeResourceUrl | string;
    faIconWeight?: 'light' | 'thin' | 'regular' | 'solid';
  }
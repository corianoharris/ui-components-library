import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {SafeResourceUrl } from '@angular/platform-browser';


export type IconComponentProps = {
    useDefaultAria?: boolean;
    ariaLabelContainer?: string;
    altText?: string;
    srOnlyContent?: string;
    ariaLabel?: string;
    faIconSize?: number;
    iconHeight?: number;
    iconWidth?: number;
    showFaIcon?: boolean;
    faIcon?: IconDefinition;
    showSvgIcon?: boolean;
    svgIconSrc?: SafeResourceUrl | string;
    faIconWeight?: 'light' | 'thin' | 'regular' | 'solid';
  }
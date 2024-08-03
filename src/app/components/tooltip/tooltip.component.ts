import { Component, Input, NO_ERRORS_SCHEMA, OnInit, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipProps } from './tooltip.types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-tooltip',
    standalone: true,
    imports: [CommonModule],
    schemas: [NO_ERRORS_SCHEMA],
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.css'],
})
export default class TooltipComponent implements TooltipProps {
    @Input() title?: string = ''
    @Input() content?: string = ''; // Content to be displayed in the tooltip
    @Input() boxShadow: boolean = false; 
    @Input() isVisible: boolean = false;// Option to add a box shadow
    @Input() arrowPosition: 'left-center' | 'left-top' | 'left-bottom' | 'top-center' | 'top-left' | 'top-right' | 'right-top'| 'right-center'| 'right-bottom'| 'bottom-center' | 'bottom-left' | 'bottom-right' | 'none' = 'left-top'; 

    faTimes = faTimes;
    tooltipId: string;

    constructor(private elementRef: ElementRef) {
      this.tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`;
    }

    ngOnInit() {
      const triggerElement = this.elementRef.nativeElement.querySelector('[data-tooltip-trigger]');
      if (triggerElement) {
        triggerElement.setAttribute('aria-describedby', this.tooltipId);
      }
    }

    @HostListener('mouseenter') onMouseEnter() {
      this.showTooltip();
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.hideTooltip();
    }


    showTooltip() {
      this.isVisible = true;
    }
  
    hideTooltip() {
      this.isVisible = false;
    }
  
    closeTooltip(event: Event) {
      event.stopPropagation();
      this.hideTooltip();
    }
    
    // Position of the tooltip arrow 

    public get classes(): string {
        let mode = '';

        switch (this.arrowPosition) {
            case 'left-center':
                mode = 'left-center';
                break;
            case 'left-top':
                mode = 'left-top';
                break;
            case 'left-bottom':
                mode = 'left-bottom';
                break;
            case 'top-center':
                mode = 'top-center';
                break;
            case 'top-left':
                mode = 'top-left';
                break;
            case 'top-right':
                mode = 'top-right';
                break;
            case 'right-top':
                mode = 'right-top';
                break;
            case 'right-center':
                mode = 'right-center';
                break;
            case 'right-bottom':
                mode = 'right-bottom';
                break;
            case 'bottom-center':
                mode = 'bottom-center';
                break;
            case 'bottom-left':
                mode = 'bottom-left';
                break;
            case 'bottom-right':
                mode = 'bottom-right';
                break;
            case 'none':
                mode = 'none';
                break;
            default:
                mode = ''; // Handle other cases if needed
                break;
        }

        // Add the conditional box shadow class if boxShadow is true
        const boxShadowClass = this.boxShadow ? ' tooltip--box-shadow' : '';

        // Return the combined classes with or without the box shadow class
        return `tooltip-wrapper tooltip tooltip__position--${mode} ${boxShadowClass}`;
    }
}

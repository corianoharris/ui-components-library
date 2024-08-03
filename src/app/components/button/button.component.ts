import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import IconComponent from '../icon';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ButtonVariant, ButtonSize, ButtonProps } from './button.types';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faIconsList } from '../icon/icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [CommonModule, IconComponent, FontAwesomeModule],
})
export class ButtonComponent implements ButtonProps {
  @Input() faIconLeft: IconDefinition | string = faQuestion;
  @Input() faIconRight: IconDefinition | string = faQuestion; 
  @Input() variant: ButtonVariant = 'primary'; 
  @Input() text: string = '';
  @Input() type: string = '';
  @Input() showFaIconLeft?: boolean;
  @Input() showFaIconRight?: boolean;
  @Input() showSvgIconLeft?: boolean;
  @Input() showSvgIconRight?: boolean;
  @Input() isText?: boolean;
  @Input() showIconLeft?: boolean;
  @Input() showIconRight?: boolean;
  @Input() svgIconLeft?: SafeResourceUrl | undefined = "icons/rocket.svg";
  @Input() svgIconRight?: SafeResourceUrl  | undefined = "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/osa.svg";
  @Input() size: ButtonSize = 'medium';
  @Input() isDisabled: boolean = false;
  @Output() onClick = new EventEmitter<Event>();
  @Output() clicked = new EventEmitter<void>();
 
  public get classes(): string {
    const mode = `button--${this.variant}`;
    return `button button--${this.size} ${mode}`;
  }

  handleClick(event: Event) {
    this.onClick.emit(event);
    this.clicked.emit();
  }

  getIcon(icon: IconDefinition | string): IconDefinition {
    if (typeof icon === 'string') {
      const foundIcon = faIconsList.find(i => i.label === icon);
      return foundIcon ? foundIcon.value : faQuestion; // Return a default icon if not found
    }
    return icon || faQuestion; // Return the icon if it's already an IconDefinition, or a default if it's null/undefined
  }
}
import { CommonModule } from '@angular/common';
import { Component, Input, NO_ERRORS_SCHEMA, OnInit, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faIconsList } from './icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IconComponentProps } from './icon.types';

@Component({
  selector: 'icon',
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA],
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export default class IconComponent implements IconComponentProps {
  @Input() useDefaultAria? = false;
  @Input() ariaLabelContainer? = '';
  @Input() ariaLabel? = '';
  @Input() altText = '';
  @Input() srOnlyContent? = '';
  @Input() faIconSize = 24;
  @Input() iconHeight? = 24;
  @Input() iconWidth? = 24;
  @Input() showFaIcon? = false;
  @Input() faIcon: IconDefinition = faQuestion;
  @Input() showSvgIcon? = false;
  @Input() svgIconSrc?: SafeResourceUrl | string = "/icons/rocket.svg";
  @Input() faIconWeight: 'light' | 'thin' | 'regular' | 'solid' = 'regular';

  constructor(private _sanitizer: DomSanitizer) {}


  ngOnInit(): void {
    if (typeof this.svgIconSrc === 'string') {
      this.svgIconSrc = this._sanitizer.bypassSecurityTrustResourceUrl("/icons/rocket.svg");
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['faIcon']) {
      this.ariaLabel = this.faIcon.iconName
    }
  }

  

  getFontAwesomeIcon(): string {
    let weightClass = '';

    switch (this.faIconWeight) {
      case 'light':
        weightClass = 'fal'; // Font Awesome Light
        break;
      case 'thin':
        weightClass = 'fat'; // Font Awesome Thin
        break;
      case 'regular':
        weightClass = 'far'; // Font Awesome Regular
        break;
      case 'solid':
        weightClass = 'fas'; // Font Awesome Solid
        break;
    }

    return `${weightClass} fa-${this.faIcon?.iconName} fa-${this.faIconSize}`;
  }
}

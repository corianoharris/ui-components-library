import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideZoneChangeDetection } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconDefinition, IconPack } from '@fortawesome/fontawesome-svg-core';
import { faIconsList } from './components/icon/icons';

// Function to configure Font Awesome icons
export function configureIcons(library: FaIconLibrary) {
  // Spread the array of IconDefinition values into the addIcons method
  library.addIcons(...faIconsList.map(icon => icon.value));
}

// Application configuration
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    FontAwesomeModule,
    {
      provide: FaIconLibrary,
      useFactory: configureIcons,
      deps: [FaIconLibrary]
    }
  ],
};


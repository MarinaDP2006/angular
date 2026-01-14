import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/application';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));

import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
// this is done to make sure that typescript knows about all the rxjs operations
import './rxjsOperations';


platformBrowserDynamic().bootstrapModule(AppModule)

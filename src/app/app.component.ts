import {Component, inject} from '@angular/core';
import {RequestService} from './request.service';


@Component({
  selector: 'app-root',
  imports: [],
  template: "{{url}}",
})
export class AppComponent{

  private requestService = inject(RequestService)
  url = this.requestService.getUrl();
}

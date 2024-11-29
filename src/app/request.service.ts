import {inject, Injectable, REQUEST} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  request = inject(REQUEST, {optional: true});

  constructor() {
    console.log(
      "provided request is null", this.request === null);
  }

  getUrl() {
    return this.request?.url;
  }
}


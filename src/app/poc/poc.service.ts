import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/Rx';

import { Observable } from 'rxjs/';
import { POC } from './poc.model';

@Injectable()
export class PocService {

  constructor(private http: Http) { }

  getPOCs() {
    return this.http.get('http://localhost:3000/portfolio')
                    .map(this.extractPOCData)
                    .catch(this.handleError);
  }

addPOC(poc: POC) {
  // when POSTing json data, set up Headers and Options as below
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({ headers: headers });

  const body = JSON.stringify(poc);
  
  return this.http.post('http://localhost:3000/portfolio/', body, options)
            .map((response: Response) => {
              console.log(response);
              response.json();
            })
            .catch(this.handleError);
}

  private extractPOCData(res: Response) {
    const body = res.json();
    // obj is the property name that was defined in the JSON object that was sent back by the server
    return body.obj;
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
  console.log(error);
  return Observable.throw(errMsg);
  }
}

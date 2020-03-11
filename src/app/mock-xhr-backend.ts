import { HttpEvent, HttpRequest, HttpResponse, HttpBackend } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

export class MockXHRBackend implements HttpBackend {

  private mediaItems = [
    {
      macDeviceId: 'e8:4e:06:78:8d:67',
      temperature: '20.6',
      humidityRel: '16.0 ',
      date: '2020-03-10 14:57:43.354'    
    },
    {
      macDeviceId: 'e8:4e:06:78:8d:67',
      temperature: '20.6',
      humidityRel: '16.0 ',
      date: '2020-03-10 14:56:54.941'
    }
  ];

  handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    return new Observable((responseObserver: Observer<HttpResponse<any>>) => {
      let responseOptions;
      switch (request.method) {
        case 'GET':
          if (request.url === 'dht11') {

            let mediaItems;
            mediaItems = this.mediaItems;
            
            responseOptions = {
              body: {mediaItems: JSON.parse(JSON.stringify(mediaItems))},
              status: 200
            };
          } else
              console.log('GET not supported url ' + request.url);
          
          break;
        case 'POST':
          console.log('POST method not implemented');
        break;
        case 'DELETE':
          console.log('POST method not implemented');
        break;
      }

      const responseObject = new HttpResponse(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => {
      };
    });
  }
}

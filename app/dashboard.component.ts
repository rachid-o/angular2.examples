import { Component } from '@angular/core';
import { SlowService } from './slow.service';

@Component({
  selector: 'my-dashboard',
  styleUrls: ['app/dashboard.component.css'],
  templateUrl: 'app/dashboard.component.html',
})

export class DashboardComponent {

    constructor(private slowService: SlowService) {
    }

    promiseCall() {
        console.log('clicked promiseCall');
        this.slowService.promiseCall().then(result => {
            console.log(result);
            console.log('Done ===>>>  Het duurde ff, maar dat was het wachten dubbeldwars waard.');
        })
        .catch(error => console.error('ERROR during slowCall: ', error));
    }

    observableCall() {
        console.log('clicked observableCall');
        this.slowService.observableCall().subscribe(
            (result: any) => console.log('  subscribe.next:', result),
            (error: any) => console.log('  Error occured:', error),
            () => console.log('<<<===   Done   ===>>>') );
    }

}

import { Component } from '@angular/core';
import { SlowService } from './slow.service';
import { ObservableService } from './observable.service';

@Component({
  selector: 'my-dashboard',
  styleUrls: ['app/dashboard.component.css'],
  templateUrl: 'app/dashboard.component.html',
})

export class DashboardComponent {

    constructor(private slowService: SlowService,
        private observableService: ObservableService) {
    }

    promiseCall() {
        console.log('\nclicked promiseCall');
        this.slowService.promiseCall().then(result => {
            console.log(result);
            console.log('Done ===>>>  Het duurde ff, maar dat was het wachten dubbeldwars waard.\n');
        })
        .catch(error => console.error('ERROR during slowCall: ', error));
    }

    observableCall() {
        console.log('\nclicked observableCall');
        this.slowService.observableCall().subscribe(
            (result: any) => console.log('  subscribe.next:', result),
            (error: any) => console.error('  Error occured:', error),
            () => console.log('<<<===   Done   ===>>>\n') );
    }

    subject() {
        console.log('\nsubject() clicked');
        this.observableService.behaviorSubject().subscribe(
            (result: any) => console.log('subject() next:', result),
            (error: any) => console.error('  Error occured:', error),
            () => console.log('<<<===   subject() completed   ===>>>\n') );
    }

}

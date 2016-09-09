import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { SlowService } from './slow.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-heroes',
    styleUrls: ['app/heroes.component.css'],
    templateUrl: 'app/heroes.component.html',
    directives: [HeroDetailComponent]    
})


export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    addingHero: boolean;
    constructor(
        private router: Router,
        private heroService: HeroService,
        private slowService: SlowService) { }
        
    onSelect(hero: Hero) { this.selectedHero = hero; }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes)
    }
    ngOnInit() {
        this.getHeroes();
    }

    slowCall() {
        this.slowService.mediumCall().then(result => { 
            console.log(result)
            console.log('Done ===>>>  Het duurde ff, maar dat was het wachten dubbeldwars waard.');
        })
        .catch(error => console.error('ERROR during slowCall: ', error));
    }

    observableCall() {
        this.slowService.observableCall()
                    // .map((response:any) => response)
                    .subscribe((result:any) => { 
            console.log(result)
        }, (error:any) => console.log('Error occured:', error), 
        () => console.log('Done ===>>>  Het duurde ff, maar dat was het wachten dubbeldwars waard.') );
    }

    gotoDetail(hero: Hero) {
        console.log('Hero', hero)
        this.router.navigate(['HeroDetail', { id: hero.id }]);
    }
    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }
    delete(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => console.error(error)); // TODO: Display error message
    }    
    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) { 
            this.getHeroes(); 
        }
    }
}

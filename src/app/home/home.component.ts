import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    jsonTextArea = new FormControl('');
    starsCount = 0;
    totalHours = 0;
    totalValue = 0;

    readonly subscriptions: Subscription[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.subscriptions.push(
            this.jsonTextArea.valueChanges.subscribe(v => this.parsePackage(v))
        );
    }

    parsePackage(pkg: string) {
        const jsonObj = JSON.parse(pkg);
        const dependencies = Object.keys(jsonObj.dependencies || {});
        const devDependencies = Object.keys(jsonObj.devDependencies || {});
        const allDependencies = dependencies.concat(devDependencies);

        console.log(allDependencies);

        this.http.post('https://api.npms.io/v2/package/mget', allDependencies).subscribe((resp: any[]) => {
            const arr = Object.values(resp).filter(repo => repo.collected && repo.collected.github);
            this.starsCount = arr.reduce((p, n) => n.collected.github.starsCount + p, 0);
            this.totalHours = this.starsCount / 100;
            this.totalValue = this.totalHours * 75;
        });
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}

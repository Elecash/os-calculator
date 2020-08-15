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
    priceHour = new FormControl(75);
    starsCount = 0;
    totalHours = 0;
    totalValue = 0;

    readonly subscriptions: Subscription[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.subscriptions.push(
            this.jsonTextArea.valueChanges.subscribe(value => this.parsePackage(value)),
            this.priceHour.valueChanges.subscribe(value => this.calculateValue())
        );
    }

    parsePackage(pkg: string) {
        const jsonObj = JSON.parse(pkg);
        const dependencies = Object.keys(jsonObj.dependencies || {});
        const devDependencies = Object.keys(jsonObj.devDependencies || {});
        const allDependencies = dependencies.concat(devDependencies);

        this.http.post('https://api.npms.io/v2/package/mget', allDependencies).subscribe((resp: any[]) => {
            this.parseResponse(resp);
        });
    }

    parseResponse(resp: any[]) {
        const responseArray = Object.values(resp).filter(repo => repo.collected && repo.collected.github);
        const pkgs = {};

        responseArray.forEach(pkg => {
            const organization = pkg.collected.metadata.name.split('/')[0];
            if (!pkgs[organization]) {
                pkgs[organization] = {
                    organization: organization,
                    starsCount: pkg.collected.github.starsCount,
                    score: pkg.score.final,
                    packages: [ pkg.collected.metadata.name ]
                };
            } else {
                pkgs[organization].packages.push(pkg.collected.metadata.name);
                pkgs[organization].score = pkgs[organization].score + pkg.score.final;
                pkgs[organization].starsCount = pkgs[organization].starsCount > pkg.collected.github.starsCount ?
                    pkgs[organization].starsCount :
                    pkg.collected.github.starsCount;
            }
        });

        const pkgsArray: any[] = Object.values(pkgs);

        this.starsCount = Math.round(pkgsArray.reduce((p, n) => (n.starsCount / n.packages.length) + p, 0));
        this.totalHours = Math.round(pkgsArray.reduce((p, n) => (n.starsCount * (n.score / n.packages.length) / 100) + p, 0));
        this.calculateValue();
    }

    calculateValue() {
        if (this.totalHours) {
            this.totalValue = Math.round(this.totalHours * this.priceHour.value);
        }
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}

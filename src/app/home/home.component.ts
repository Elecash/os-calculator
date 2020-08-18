import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {JSONValidator} from '../validators/json-validator';

@Component({
    selector: 'osc-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    jsonTextArea = new FormControl('', [JSONValidator]);
    priceHour = new FormControl(75);
    starsCount = 0;
    totalHours = 0;
    totalValue = 0;
    missingRepos = 0;

    readonly subscriptions: Subscription[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.subscriptions.push(
            this.jsonTextArea.valueChanges.subscribe(value => this.parsePackage(value)),
            this.priceHour.valueChanges.subscribe(value => this.calculateValue())
        );
    }

    onKeyDown(evt: KeyboardEvent) {
        if (evt.key === 'Tab') {
            evt.preventDefault();
            const textArea = evt.target as HTMLTextAreaElement;
            const start = textArea.selectionStart;
            const end = textArea.selectionEnd;
            const val = this.jsonTextArea.value;
            const spaces = '  ';

            this.jsonTextArea.patchValue(val.substring(0, start) + spaces + val.substring(end));
            textArea.selectionStart = textArea.selectionEnd = start + spaces.length;
        }
    }

    parsePackage(pkg: string) {
        let jsonObj;
        try {
            jsonObj = JSON.parse(pkg);
        } catch (error) {
            return;
        }

        const dependencies = Object.keys(jsonObj.dependencies || {});
        const devDependencies = Object.keys(jsonObj.devDependencies || {});
        const allDependencies = dependencies.concat(devDependencies);

        if (allDependencies.length > 0) {
            this.http.post('https://api.npms.io/v2/package/mget', allDependencies).subscribe((resp: any[]) => {
                this.parseResponse(resp);
            });
        }
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
        this.missingRepos = responseArray.length - pkgsArray.length;
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

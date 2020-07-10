import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
    providedIn: 'root',
})
export class PwaService {
    promptEvent: any;
    constructor(public swService: SwUpdate) {
        window.addEventListener('beforeinstallprompt', (event) => {
            this.promptEvent = event;
        });

        this.swService.available.subscribe((updateAvaible) => {
            this.swService.activateUpdate().then((resolve) => {
                window.location.reload();
            });
        });
    }
}

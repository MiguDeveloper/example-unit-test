import { EventEmitter } from '@angular/core';


export class Player2 {
    life: number;
    lifeChange = new EventEmitter<number>();

    constructor() {
        this.life = 100;
    }

    hit(knock: number) {
        if (knock >= this.life) {
            this.life = 0;
        } else {
            this.life -= knock;
        }

        this.lifeChange.emit(this.life);
    }

}
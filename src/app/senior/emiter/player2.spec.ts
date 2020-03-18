import { Player2 } from './player2';

describe('Player2 eventEmitter', () => {
    let player: Player2;

    beforeEach(() => {
        player = new Player2();
    })

    it('Emitir al recibir hit', () => {
        let newLife = 0;

        player.lifeChange.subscribe((life) => {
            newLife = life;
        });

        player.hit(3000);

        expect(newLife).toBe(0);
    })

    it('Emitir al recibir hit menor', () => {
        let newLife = 0;

        player.lifeChange.subscribe((life) => {
            newLife = life;
        });

        player.hit(50);

        expect(newLife).toBe(50);
    })
})
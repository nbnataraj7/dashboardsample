import { trigger, state, transition, style, animate } from '@angular/animations';

export let expandCollapse = trigger('expandMenuItems', [
    state('void', style({ opacity: 0 })),
    state('open', style({ display: 'block' })),
    state('close', style({ display: 'none' })),

    transition('open <=> close', [
        animate(2000)
    ])
]);

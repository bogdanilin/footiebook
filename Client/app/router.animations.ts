import { trigger, animate, style, transition } from '@angular/animations';

export function routerTransition() {
    return trigger('routerTransition', [
        transition('void => *', [
            style({ transform: 'translateX(0%)' }),
            animate(0)
        ])
    ]);
}

export function hostStyle() {
    return {
        '[@routerTransition]': '',
        '[style.display]': '"block"',

        // '[style.position]': '"absolute"'
    };
}

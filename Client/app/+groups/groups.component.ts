﻿import { Component } from '@angular/core';
import { routerTransition, hostStyle } from '../router.animations';

@Component({
    selector: 'fb-groups',
    styleUrls: ['./groups.component.scss'],
    templateUrl: './groups.component.html',
    animations: [routerTransition()],
    // tslint:disable-next-line:use-host-property-decorator
    host: hostStyle()
})
export class GroupsComponent { }

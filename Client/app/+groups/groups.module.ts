import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { routing } from './groups.routes';
import { GroupsComponent } from './groups.component';

@NgModule({
    imports: [
        routing,
        SharedModule
    ],
    providers: [],
    declarations: [
        GroupsComponent
    ]
})
export class GroupsModule { }

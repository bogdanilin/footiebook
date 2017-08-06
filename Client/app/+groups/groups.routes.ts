import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './groups.component';

const routes: Routes = [
    {
        path: '', component: GroupsComponent
    },
];

export const routing = RouterModule.forChild(routes);

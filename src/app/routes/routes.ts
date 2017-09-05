import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'manageproduct', loadChildren: './manage-product/manage-product.module#ManageProductModule' },
            { path: 'manageprofile', loadChildren: './manage-profile/manage-profile.module#ManageProfileModule' },
            { path: 'managemasterdata', loadChildren: './dashboard/dashboard.module#DashboardModule' }
        ]
    },


    // Not found
    { path: '**', redirectTo: 'login' }

];

import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';
import { InboxComponent } from '../applications/inbox/inbox.component';
import { ComposeComponent } from '../applications/compose/compose.component';
import { ContactGridComponent } from '../applications/contact-grid/contact-grid.component';
import { FileDocumentsComponent } from '../file-manager/file-documents/file-documents.component';
import { FileMediaComponent } from '../file-manager/file-media/file-media.component';
import { FileImagesComponent } from '../file-manager/file-images/file-images.component';
import { TypographyComponent } from '../ui-elements/typography/typography.component';
import { UiTabsComponent } from '../ui-elements/ui-tabs/ui-tabs.component';
import { UiButtonsComponent } from '../ui-elements/ui-buttons/ui-buttons.component';
import { UiBootstrapComponent } from '../ui-elements/ui-bootstrap/ui-bootstrap.component';
import { UiIconsComponent } from '../ui-elements/ui-icons/ui-icons.component';
import { UiColorsComponent } from '../ui-elements/ui-colors/ui-colors.component';
import { UiListGroupComponent } from '../ui-elements/ui-list-group/ui-list-group.component';
import { UiMediaObjectComponent } from '../ui-elements/ui-media-object/ui-media-object.component';
import { UiModalsComponent } from '../ui-elements/ui-modals/ui-modals.component';
import { UiProgressbarsComponent } from '../ui-elements/ui-progressbars/ui-progressbars.component';
import { UiNotificationsComponent } from '../ui-elements/ui-notifications/ui-notifications.component';
import { AppChatComponent } from '../applications/app-chat/app-chat.component';
import { TableNormalComponent } from '../tables/table-normal/table-normal.component';
import { PageBlankComponent } from '../pages/page-blank/page-blank.component';
import { PageProfileComponent } from '../pages/page-profile/page-profile.component';
import { PageProfileV2Component } from '../pages/page-profile-v2/page-profile-v2.component';
import { PageGalleryComponent } from '../pages/page-gallery/page-gallery.component';
import { PageTimelineComponent } from '../pages/page-timeline/page-timeline.component';
import { PagePricingComponent } from '../pages/page-pricing/page-pricing.component';
import { PageInvoicesComponent } from '../pages/page-invoices/page-invoices.component';
import { PageInvoicesV2Component } from '../pages/page-invoices-v2/page-invoices-v2.component';
import { PageSearchResultsComponent } from '../pages/page-search-results/page-search-results.component';
import { PageHelperClassComponent } from '../pages/page-helper-class/page-helper-class.component';
import { PageTeamsBoardComponent } from '../pages/page-teams-board/page-teams-board.component';
import { PageProjectsListComponent } from '../pages/page-projects-list/page-projects-list.component';
import { PageTestimonialsComponent } from '../pages/page-testimonials/page-testimonials.component';
import { PageFaqComponent } from '../pages/page-faq/page-faq.component';
import { AppCalendarComponent } from '../applications/app-calendar/app-calendar.component';
import { ChartEchartComponent } from '../charts/chart-echart/chart-echart.component';
import { FormsValidationComponent } from '../form/forms-validation/forms-validation.component';
import { BlogPostComponent } from '../blogs/blog-post/blog-post.component';
import { BlogListComponent } from '../blogs/blog-list/blog-list.component';
import { BlogDetailsComponent } from '../blogs/blog-details/blog-details.component';
import { FormsBasicComponent } from '../form/forms-basic/forms-basic.component';
import { WidgetsEcommerceComponent } from '../widgets/widgets-ecommerce/widgets-ecommerce.component';
import { WidgetsBlogComponent } from '../widgets/widgets-blog/widgets-blog.component';
import { WidgetsWeatherComponent } from '../widgets/widgets-weather/widgets-weather.component';
import { WidgetsDataComponent } from '../widgets/widgets-data/widgets-data.component';

const routes: Routes = [   
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo:'dashboard'},
            {
                path: 'dashboard',
                children: [
                    { path: '', redirectTo: 'index', pathMatch: 'full' },
                    { path: 'index', component: IndexComponent, data: { title: 'Dashboard :: Analytical :: Lucid Angular' } },
                ]
            },
            { 
                path: 'app',
                children: [
                    {
                        path: 'app-inbox',
                        children: [
                            { path: '', pathMatch: 'full', component: InboxComponent, data: { title: 'App :: Inbox :: Lucid Angular' }  },
                            { path: 'compose', component: ComposeComponent, data: { title: 'App :: Compose :: Lucid Angular' } }
                        ]
                    },
                    { path: 'app-chat', component: AppChatComponent, data: { title: 'App :: Chat :: Lucid Angular' } },
                    { path: 'app-contact-grid', component: ContactGridComponent, data: { title: 'App :: Contacts :: Lucid Angular' } },
                    { path: 'app-calendar', component: AppCalendarComponent, data: { title: 'App :: Calendar :: Lucid Angular' } },
                    
                ]
            },
            {
                path: 'ui-elements',
                children: [
                    { path: '', redirectTo: 'typography', pathMatch: 'full' },
                    { path: 'typography', component: TypographyComponent, data: { title: 'UI Elements :: Typography :: Lucid Angular' } },
                    { path: 'ui-tabs', component: UiTabsComponent, data: { title: 'UI Elements :: Tabs :: Lucid Angular' } },
                    { path: 'ui-buttons', component: UiButtonsComponent, data: { title: 'UI Elements :: Buttons :: Lucid Angular' } },
                    { path: 'ui-bootstrap', component: UiBootstrapComponent, data: { title: 'UI Elements :: Bootstrap :: Lucid Angular' } },
                    { path: 'ui-icons', component: UiIconsComponent, data: { title: 'UI Elements :: Icons :: Lucid Angular' } },
                    { path: 'ui-colors', component: UiColorsComponent, data: { title: 'UI Elements :: Colors :: Lucid Angular' } },
                    { path: 'ui-list-group', component: UiListGroupComponent, data: { title: 'UI Elements :: Lists :: Lucid Angular' } },
                    { path: 'ui-media-object', component: UiMediaObjectComponent, data: { title: 'UI Elements :: Media :: Lucid Angular' } },
                    { path: 'ui-modal', component: UiModalsComponent, data: { title: 'UI Elements :: Modal :: Lucid Angular' } },
                    { path: 'ui-progressbars', component: UiProgressbarsComponent, data: { title: 'UI Elements :: Prograssbars :: Lucid Angular' } },
                    { path: 'ui-notifications', component: UiNotificationsComponent, data: { title: 'UI Elements :: Notifications :: Lucid Angular' } },
                ]
            },
            {
                path: 'file-manager',
                children: [
                    { path: '', redirectTo: 'file-documents', pathMatch: 'full' },
                    { path: 'file-documents', component: FileDocumentsComponent, data: { title: 'File Manager :: Documents :: Lucid Angular' } },
                    { path: 'file-media', component: FileMediaComponent, data: { title: 'File Manager :: Media :: Lucid Angular' } },
                    { path: 'file-images', component: FileImagesComponent, data: { title: 'File Manager :: Images :: Lucid Angular' } }
                ]
            },
            {
                path: 'tables',
                children: [
                    { path: '', redirectTo: 'table-normal', pathMatch: 'full' },
                    { path: 'table-normal', component: TableNormalComponent, data: { title: 'Tables :: Normal Tables :: Lucid Angular' }  },
                ]
            },
            {
                path: 'pages',
                children: [
                    { path: '', redirectTo: 'page-blank', pathMatch: 'full' },
                    { path: 'page-blank', component: PageBlankComponent, data: { title: 'Pages :: Blank :: Lucid Angular' }  },
                    { path: 'page-profile', component: PageProfileComponent, data: { title: 'Pages :: Profile :: Lucid Angular' } },
                    { path: 'page-profile2', component: PageProfileV2Component, data: { title: 'Pages :: Profile - V2 :: Lucid Angular' } },
                    { path: 'page-gallery', component: PageGalleryComponent, data: { title: 'Pages :: Gallery :: Lucid Angular' } },
                    { path: 'page-timeline', component: PageTimelineComponent, data: { title: 'Pages :: Timeline :: Lucid Angular' } },
                    { path: 'page-pricing', component: PagePricingComponent, data: { title: 'Pages :: Pricing :: Lucid Angular' } },
                    { path: 'page-invoices', component: PageInvoicesComponent, data: { title: 'Pages :: Invoices :: Lucid Angular' } },
                    { path: 'page-invoices2', component: PageInvoicesV2Component, data: { title: 'Pages :: Invoices - V2 :: Lucid Angular' } },
                    { path: 'page-search-results', component: PageSearchResultsComponent, data: { title: 'Pages :: Search Results :: Lucid Angular' } },
                    { path: 'page-helper-class', component: PageHelperClassComponent, data: { title: 'Pages :: Classes :: Lucid Angular' } },
                    { path: 'page-teams-board', component: PageTeamsBoardComponent, data: { title: 'Pages :: Team :: Lucid Angular' } },
                    { path: 'page-projects-list', component: PageProjectsListComponent, data: { title: 'Pages :: Projects :: Lucid Angular' } },
                    { path: 'page-maintenance', component: PageProjectsListComponent, data: { title: 'Pages :: Maintenance :: Lucid Angular' } },
                    { path: 'page-testimonials', component: PageTestimonialsComponent, data: { title: 'Pages :: Testimonials :: Lucid Angular' } },
                    { path: 'page-faq', component: PageFaqComponent, data: { title: 'Pages :: Faq :: Lucid Angular' } },
                    
                ]
            },
            {
                path: 'charts',
                children: [
                    { path: '', redirectTo: 'chart-echarts', pathMatch: 'full' },
                    { path: 'chart-echarts', component: ChartEchartComponent, data: { title: 'Charts :: E-Charts :: Lucid Angular' } },
                ]
            },
            {
                path: 'forms',
                children: [
                    { path: '', redirectTo: 'forms-validation', pathMatch: 'full' },
                    { path: 'forms-validation', component: FormsValidationComponent, data: { title: 'Form Validations :: Forms :: Lucid Angular' } },
                    { path: 'forms-basic', component: FormsBasicComponent, data: { title: 'Form Basic :: Forms :: Lucid Angular' } }
                ]
            },
            {
                path: 'blogs',
                children: [
                    { path: '', redirectTo: 'blog-post', pathMatch: 'full' },
                    { path: 'blog-post', component: BlogPostComponent, data: { title: 'Blog Post :: Blog :: Lucid Angular' } },
                    { path: 'blog-list', component: BlogListComponent, data: { title: 'Blog List :: Blog :: Lucid Angular' } },
                    { path: 'blog-details', component: BlogDetailsComponent, data: { title: 'Blog Details :: Blog :: Lucid Angular' } }
                ]
            },
            {
                path: 'widgets',
                children: [
                    { path: '', redirectTo: 'widgets-data', pathMatch: 'full' },
                    { path: 'widgets-data', component: WidgetsDataComponent, data: { title: 'Widgets Data :: Widgets :: Lucid Angular' } },
                    { path: 'widgets-weather', component: WidgetsWeatherComponent, data: { title: 'Widgets Weather :: Widgets :: Lucid Angular' } },
                    { path: 'widgets-blog', component: WidgetsBlogComponent, data: { title: 'Widgets Blog :: Widgets :: Lucid Angular' } },
                    { path: 'widgets-ecommerce', component: WidgetsEcommerceComponent, data: { title: 'Widgets eCommerce :: Widgets :: Lucid Angular' } }
                ]
            }
        ]
    },
    
];

export const routing = RouterModule.forChild(routes);
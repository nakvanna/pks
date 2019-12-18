import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'home',
                    component: () => import('./views/Home.vue')
                },
                {
                    path: '/page2',
                    name: 'page-2',
                    component: () => import('./views/Page2.vue'),
                    meta: {
                        pageTitle: 'អ្នកប្រើប្រាស់',
                        rule: 'editor'
                    }
                },
                {
                    path: '/student',
                    name: 'student',
                    component: () => import('./views/student/Student'),
                    meta: {
                        pageTitle: 'សិស្ស',
                        rule: 'editor'
                    }
                },
                {
                    path: '/setting',
                    name: 'setting',
                    component: () => import('./views/setting/Setting'),
                    meta: {
                        pageTitle: 'ការកំណត់',
                        rule: 'editor'
                    }
                },
                {
                    path: '/service',
                    name: 'service',
                    component: () => import('./views/service/Service'),
                    meta: {
                        pageTitle: 'ប្រភេទសេវាកម្ម',
                        rule: 'editor'
                    }
                },
                {
                    path: '/employee',
                    name: 'employee',
                    component: () => import('./views/employee/Employee'),
                    meta: {
                        pageTitle: 'ចុះឈ្មោះបុគ្គលិក',
                        rule: 'editor'
                    }
                },
                {
                    path: '/study-year',
                    name: 'study-year',
                    component: () => import('./views/study-year/StudyYear'),
                    meta: {
                        pageTitle: 'ចុះឈ្មោះតាមឆ្នាំសិក្សា',
                        rule: 'editor'
                    }
                },
                {
                    path: '/service-package',
                    name: 'service-package',
                    component: () => import('./views/service-packet/ServicePackage'),
                    meta: {
                        pageTitle: 'ការទិញកញ្ចប់សេវាកម្ម',
                        rule: 'editor'
                    }
                },
                {
                    path: '/payment',
                    name: 'payment',
                    component: () => import('./views/payment/Payment'),
                    meta: {
                        pageTitle: 'ការបង់លុយ',
                        rule: 'editor'
                    }
                },
                {
                    path: '/report',
                    name: 'report',
                    component: () => import('./views/report/Report'),
                    meta: {
                        pageTitle: 'របាយការណ៌',
                        rule: 'editor'
                    }
                },
                {
                    path: '/import',
                    name: 'import',
                    component: () => import('./views/import/Excel'),
                    meta: {
                        pageTitle: 'Import Data',
                        rule: 'editor'
                    }
                },
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('./layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/pages/login',
                    name: 'page-login',
                    component: () => import('./views/pages/Login.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue')
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
});

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
});

export default router

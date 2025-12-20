import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import general5d934c from './general'
import homeA31aa7 from './home'
import timelapse94134e from './timelapse'
import drone508586 from './drone'
import portfolioE55e31 from './portfolio'
import contact from './contact'
import user from './user'
import setting from './setting'
/**
* @see routes/dashboard.php:9
* @route '/dashboard/general'
*/
export const general = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: general.url(options),
    method: 'get',
})

general.definition = {
    methods: ["get","head"],
    url: '/dashboard/general',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:9
* @route '/dashboard/general'
*/
general.url = (options?: RouteQueryOptions) => {
    return general.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:9
* @route '/dashboard/general'
*/
general.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: general.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:9
* @route '/dashboard/general'
*/
general.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: general.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:9
* @route '/dashboard/general'
*/
const generalForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: general.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:9
* @route '/dashboard/general'
*/
generalForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: general.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:9
* @route '/dashboard/general'
*/
generalForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: general.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

general.form = generalForm

/**
* @see routes/dashboard.php:10
* @route '/dashboard/social-links'
*/
export const socialLinks = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: socialLinks.url(options),
    method: 'get',
})

socialLinks.definition = {
    methods: ["get","head"],
    url: '/dashboard/social-links',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:10
* @route '/dashboard/social-links'
*/
socialLinks.url = (options?: RouteQueryOptions) => {
    return socialLinks.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:10
* @route '/dashboard/social-links'
*/
socialLinks.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: socialLinks.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:10
* @route '/dashboard/social-links'
*/
socialLinks.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: socialLinks.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:10
* @route '/dashboard/social-links'
*/
const socialLinksForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: socialLinks.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:10
* @route '/dashboard/social-links'
*/
socialLinksForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: socialLinks.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:10
* @route '/dashboard/social-links'
*/
socialLinksForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: socialLinks.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

socialLinks.form = socialLinksForm

/**
* @see routes/dashboard.php:11
* @route '/dashboard/footer-menu'
*/
export const footerMenu = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: footerMenu.url(options),
    method: 'get',
})

footerMenu.definition = {
    methods: ["get","head"],
    url: '/dashboard/footer-menu',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:11
* @route '/dashboard/footer-menu'
*/
footerMenu.url = (options?: RouteQueryOptions) => {
    return footerMenu.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:11
* @route '/dashboard/footer-menu'
*/
footerMenu.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: footerMenu.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:11
* @route '/dashboard/footer-menu'
*/
footerMenu.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: footerMenu.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:11
* @route '/dashboard/footer-menu'
*/
const footerMenuForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: footerMenu.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:11
* @route '/dashboard/footer-menu'
*/
footerMenuForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: footerMenu.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:11
* @route '/dashboard/footer-menu'
*/
footerMenuForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: footerMenu.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

footerMenu.form = footerMenuForm

/**
* @see routes/dashboard.php:12
* @route '/dashboard/navbar-menu'
*/
export const navbarMenu = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: navbarMenu.url(options),
    method: 'get',
})

navbarMenu.definition = {
    methods: ["get","head"],
    url: '/dashboard/navbar-menu',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:12
* @route '/dashboard/navbar-menu'
*/
navbarMenu.url = (options?: RouteQueryOptions) => {
    return navbarMenu.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:12
* @route '/dashboard/navbar-menu'
*/
navbarMenu.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: navbarMenu.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:12
* @route '/dashboard/navbar-menu'
*/
navbarMenu.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: navbarMenu.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:12
* @route '/dashboard/navbar-menu'
*/
const navbarMenuForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: navbarMenu.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:12
* @route '/dashboard/navbar-menu'
*/
navbarMenuForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: navbarMenu.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:12
* @route '/dashboard/navbar-menu'
*/
navbarMenuForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: navbarMenu.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

navbarMenu.form = navbarMenuForm

/**
* @see routes/dashboard.php:15
* @route '/dashboard/home'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/dashboard/home',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:15
* @route '/dashboard/home'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:15
* @route '/dashboard/home'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:15
* @route '/dashboard/home'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:15
* @route '/dashboard/home'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:15
* @route '/dashboard/home'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:15
* @route '/dashboard/home'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see routes/dashboard.php:29
* @route '/dashboard/timelapse'
*/
export const timelapse = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timelapse.url(options),
    method: 'get',
})

timelapse.definition = {
    methods: ["get","head"],
    url: '/dashboard/timelapse',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:29
* @route '/dashboard/timelapse'
*/
timelapse.url = (options?: RouteQueryOptions) => {
    return timelapse.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:29
* @route '/dashboard/timelapse'
*/
timelapse.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timelapse.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:29
* @route '/dashboard/timelapse'
*/
timelapse.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: timelapse.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:29
* @route '/dashboard/timelapse'
*/
const timelapseForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: timelapse.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:29
* @route '/dashboard/timelapse'
*/
timelapseForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: timelapse.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:29
* @route '/dashboard/timelapse'
*/
timelapseForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: timelapse.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

timelapse.form = timelapseForm

/**
* @see routes/dashboard.php:30
* @route '/dashboard/drone'
*/
export const drone = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: drone.url(options),
    method: 'get',
})

drone.definition = {
    methods: ["get","head"],
    url: '/dashboard/drone',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:30
* @route '/dashboard/drone'
*/
drone.url = (options?: RouteQueryOptions) => {
    return drone.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:30
* @route '/dashboard/drone'
*/
drone.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: drone.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:30
* @route '/dashboard/drone'
*/
drone.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: drone.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:30
* @route '/dashboard/drone'
*/
const droneForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: drone.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:30
* @route '/dashboard/drone'
*/
droneForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: drone.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:30
* @route '/dashboard/drone'
*/
droneForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: drone.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

drone.form = droneForm

/**
* @see routes/dashboard.php:31
* @route '/dashboard/portfolio'
*/
export const portfolio = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: portfolio.url(options),
    method: 'get',
})

portfolio.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:31
* @route '/dashboard/portfolio'
*/
portfolio.url = (options?: RouteQueryOptions) => {
    return portfolio.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:31
* @route '/dashboard/portfolio'
*/
portfolio.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: portfolio.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:31
* @route '/dashboard/portfolio'
*/
portfolio.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: portfolio.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:31
* @route '/dashboard/portfolio'
*/
const portfolioForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: portfolio.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:31
* @route '/dashboard/portfolio'
*/
portfolioForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: portfolio.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:31
* @route '/dashboard/portfolio'
*/
portfolioForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: portfolio.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

portfolio.form = portfolioForm

/**
* @see routes/dashboard.php:76
* @route '/dashboard/projects'
*/
export const projects = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})

projects.definition = {
    methods: ["get","head"],
    url: '/dashboard/projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:76
* @route '/dashboard/projects'
*/
projects.url = (options?: RouteQueryOptions) => {
    return projects.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:76
* @route '/dashboard/projects'
*/
projects.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:76
* @route '/dashboard/projects'
*/
projects.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projects.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:76
* @route '/dashboard/projects'
*/
const projectsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: projects.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:76
* @route '/dashboard/projects'
*/
projectsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: projects.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:76
* @route '/dashboard/projects'
*/
projectsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: projects.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

projects.form = projectsForm

/**
* @see routes/dashboard.php:81
* @route '/dashboard/main-content'
*/
export const mainContent = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mainContent.url(options),
    method: 'get',
})

mainContent.definition = {
    methods: ["get","head"],
    url: '/dashboard/main-content',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:81
* @route '/dashboard/main-content'
*/
mainContent.url = (options?: RouteQueryOptions) => {
    return mainContent.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:81
* @route '/dashboard/main-content'
*/
mainContent.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mainContent.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:81
* @route '/dashboard/main-content'
*/
mainContent.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: mainContent.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:81
* @route '/dashboard/main-content'
*/
const mainContentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mainContent.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:81
* @route '/dashboard/main-content'
*/
mainContentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mainContent.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:81
* @route '/dashboard/main-content'
*/
mainContentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mainContent.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

mainContent.form = mainContentForm

/**
* @see routes/dashboard.php:86
* @route '/dashboard/project/{id}'
*/
export const project = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: project.url(args, options),
    method: 'get',
})

project.definition = {
    methods: ["get","head"],
    url: '/dashboard/project/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:86
* @route '/dashboard/project/{id}'
*/
project.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return project.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see routes/dashboard.php:86
* @route '/dashboard/project/{id}'
*/
project.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: project.url(args, options),
    method: 'get',
})

/**
* @see routes/dashboard.php:86
* @route '/dashboard/project/{id}'
*/
project.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: project.url(args, options),
    method: 'head',
})

/**
* @see routes/dashboard.php:86
* @route '/dashboard/project/{id}'
*/
const projectForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: project.url(args, options),
    method: 'get',
})

/**
* @see routes/dashboard.php:86
* @route '/dashboard/project/{id}'
*/
projectForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: project.url(args, options),
    method: 'get',
})

/**
* @see routes/dashboard.php:86
* @route '/dashboard/project/{id}'
*/
projectForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: project.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

project.form = projectForm

/**
* @see routes/dashboard.php:95
* @route '/dashboard/client-assign'
*/
export const clientAssign = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clientAssign.url(options),
    method: 'get',
})

clientAssign.definition = {
    methods: ["get","head"],
    url: '/dashboard/client-assign',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:95
* @route '/dashboard/client-assign'
*/
clientAssign.url = (options?: RouteQueryOptions) => {
    return clientAssign.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:95
* @route '/dashboard/client-assign'
*/
clientAssign.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clientAssign.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:95
* @route '/dashboard/client-assign'
*/
clientAssign.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: clientAssign.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:95
* @route '/dashboard/client-assign'
*/
const clientAssignForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clientAssign.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:95
* @route '/dashboard/client-assign'
*/
clientAssignForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clientAssign.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:95
* @route '/dashboard/client-assign'
*/
clientAssignForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clientAssign.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

clientAssign.form = clientAssignForm

const dashboard = {
    general: Object.assign(general, general5d934c),
    socialLinks: Object.assign(socialLinks, socialLinks),
    footerMenu: Object.assign(footerMenu, footerMenu),
    navbarMenu: Object.assign(navbarMenu, navbarMenu),
    home: Object.assign(home, homeA31aa7),
    timelapse: Object.assign(timelapse, timelapse94134e),
    drone: Object.assign(drone, drone508586),
    portfolio: Object.assign(portfolio, portfolioE55e31),
    contact: Object.assign(contact, contact),
    user: Object.assign(user, user),
    setting: Object.assign(setting, setting),
    projects: Object.assign(projects, projects),
    mainContent: Object.assign(mainContent, mainContent),
    project: Object.assign(project, project),
    clientAssign: Object.assign(clientAssign, clientAssign),
}

export default dashboard
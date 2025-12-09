import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see routes/web.php:27
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:27
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see routes/web.php:27
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see routes/web.php:27
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see routes/web.php:27
* @route '/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see routes/web.php:27
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see routes/web.php:27
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see routes/web.php:31
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:31
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see routes/web.php:31
* @route '/register'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see routes/web.php:31
* @route '/register'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see routes/web.php:31
* @route '/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see routes/web.php:31
* @route '/register'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see routes/web.php:31
* @route '/register'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm

/**
* @see routes/web.php:7
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:7
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see routes/web.php:7
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:7
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see routes/web.php:7
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:7
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:7
* @route '/'
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
* @see routes/web.php:11
* @route '/timelapse'
*/
export const timelapse = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timelapse.url(options),
    method: 'get',
})

timelapse.definition = {
    methods: ["get","head"],
    url: '/timelapse',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:11
* @route '/timelapse'
*/
timelapse.url = (options?: RouteQueryOptions) => {
    return timelapse.definition.url + queryParams(options)
}

/**
* @see routes/web.php:11
* @route '/timelapse'
*/
timelapse.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timelapse.url(options),
    method: 'get',
})

/**
* @see routes/web.php:11
* @route '/timelapse'
*/
timelapse.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: timelapse.url(options),
    method: 'head',
})

/**
* @see routes/web.php:11
* @route '/timelapse'
*/
const timelapseForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: timelapse.url(options),
    method: 'get',
})

/**
* @see routes/web.php:11
* @route '/timelapse'
*/
timelapseForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: timelapse.url(options),
    method: 'get',
})

/**
* @see routes/web.php:11
* @route '/timelapse'
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
* @see routes/web.php:15
* @route '/contact'
*/
export const contact = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})

contact.definition = {
    methods: ["get","head"],
    url: '/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:15
* @route '/contact'
*/
contact.url = (options?: RouteQueryOptions) => {
    return contact.definition.url + queryParams(options)
}

/**
* @see routes/web.php:15
* @route '/contact'
*/
contact.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})

/**
* @see routes/web.php:15
* @route '/contact'
*/
contact.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contact.url(options),
    method: 'head',
})

/**
* @see routes/web.php:15
* @route '/contact'
*/
const contactForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contact.url(options),
    method: 'get',
})

/**
* @see routes/web.php:15
* @route '/contact'
*/
contactForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contact.url(options),
    method: 'get',
})

/**
* @see routes/web.php:15
* @route '/contact'
*/
contactForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contact.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

contact.form = contactForm

/**
* @see routes/web.php:19
* @route '/portfolio'
*/
export const portfolio = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: portfolio.url(options),
    method: 'get',
})

portfolio.definition = {
    methods: ["get","head"],
    url: '/portfolio',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:19
* @route '/portfolio'
*/
portfolio.url = (options?: RouteQueryOptions) => {
    return portfolio.definition.url + queryParams(options)
}

/**
* @see routes/web.php:19
* @route '/portfolio'
*/
portfolio.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: portfolio.url(options),
    method: 'get',
})

/**
* @see routes/web.php:19
* @route '/portfolio'
*/
portfolio.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: portfolio.url(options),
    method: 'head',
})

/**
* @see routes/web.php:19
* @route '/portfolio'
*/
const portfolioForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: portfolio.url(options),
    method: 'get',
})

/**
* @see routes/web.php:19
* @route '/portfolio'
*/
portfolioForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: portfolio.url(options),
    method: 'get',
})

/**
* @see routes/web.php:19
* @route '/portfolio'
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
* @see routes/web.php:23
* @route '/drone'
*/
export const drone = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: drone.url(options),
    method: 'get',
})

drone.definition = {
    methods: ["get","head"],
    url: '/drone',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:23
* @route '/drone'
*/
drone.url = (options?: RouteQueryOptions) => {
    return drone.definition.url + queryParams(options)
}

/**
* @see routes/web.php:23
* @route '/drone'
*/
drone.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: drone.url(options),
    method: 'get',
})

/**
* @see routes/web.php:23
* @route '/drone'
*/
drone.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: drone.url(options),
    method: 'head',
})

/**
* @see routes/web.php:23
* @route '/drone'
*/
const droneForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: drone.url(options),
    method: 'get',
})

/**
* @see routes/web.php:23
* @route '/drone'
*/
droneForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: drone.url(options),
    method: 'get',
})

/**
* @see routes/web.php:23
* @route '/drone'
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
* @see routes/web.php:35
* @route '/user'
*/
export const user = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(options),
    method: 'get',
})

user.definition = {
    methods: ["get","head"],
    url: '/user',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:35
* @route '/user'
*/
user.url = (options?: RouteQueryOptions) => {
    return user.definition.url + queryParams(options)
}

/**
* @see routes/web.php:35
* @route '/user'
*/
user.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(options),
    method: 'get',
})

/**
* @see routes/web.php:35
* @route '/user'
*/
user.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: user.url(options),
    method: 'head',
})

/**
* @see routes/web.php:35
* @route '/user'
*/
const userForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url(options),
    method: 'get',
})

/**
* @see routes/web.php:35
* @route '/user'
*/
userForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url(options),
    method: 'get',
})

/**
* @see routes/web.php:35
* @route '/user'
*/
userForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

user.form = userForm

/**
* @see routes/web.php:39
* @route '/singlepage'
*/
export const singlepage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: singlepage.url(options),
    method: 'get',
})

singlepage.definition = {
    methods: ["get","head"],
    url: '/singlepage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:39
* @route '/singlepage'
*/
singlepage.url = (options?: RouteQueryOptions) => {
    return singlepage.definition.url + queryParams(options)
}

/**
* @see routes/web.php:39
* @route '/singlepage'
*/
singlepage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: singlepage.url(options),
    method: 'get',
})

/**
* @see routes/web.php:39
* @route '/singlepage'
*/
singlepage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: singlepage.url(options),
    method: 'head',
})

/**
* @see routes/web.php:39
* @route '/singlepage'
*/
const singlepageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: singlepage.url(options),
    method: 'get',
})

/**
* @see routes/web.php:39
* @route '/singlepage'
*/
singlepageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: singlepage.url(options),
    method: 'get',
})

/**
* @see routes/web.php:39
* @route '/singlepage'
*/
singlepageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: singlepage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

singlepage.form = singlepageForm

/**
* @see routes/dashboard.php:7
* @route '/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:7
* @route '/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:7
* @route '/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:7
* @route '/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:7
* @route '/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:7
* @route '/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:7
* @route '/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

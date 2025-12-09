import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see routes/dashboard.php:112
* @route '/dashboard/drone/innerhero'
*/
export const innerhero = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: innerhero.url(options),
    method: 'get',
})

innerhero.definition = {
    methods: ["get","head"],
    url: '/dashboard/drone/innerhero',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:112
* @route '/dashboard/drone/innerhero'
*/
innerhero.url = (options?: RouteQueryOptions) => {
    return innerhero.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:112
* @route '/dashboard/drone/innerhero'
*/
innerhero.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:112
* @route '/dashboard/drone/innerhero'
*/
innerhero.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: innerhero.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:112
* @route '/dashboard/drone/innerhero'
*/
const innerheroForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:112
* @route '/dashboard/drone/innerhero'
*/
innerheroForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:112
* @route '/dashboard/drone/innerhero'
*/
innerheroForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: innerhero.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

innerhero.form = innerheroForm

/**
* @see routes/dashboard.php:116
* @route '/dashboard/drone/pagemanager'
*/
export const pagemanager = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pagemanager.url(options),
    method: 'get',
})

pagemanager.definition = {
    methods: ["get","head"],
    url: '/dashboard/drone/pagemanager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:116
* @route '/dashboard/drone/pagemanager'
*/
pagemanager.url = (options?: RouteQueryOptions) => {
    return pagemanager.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:116
* @route '/dashboard/drone/pagemanager'
*/
pagemanager.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pagemanager.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:116
* @route '/dashboard/drone/pagemanager'
*/
pagemanager.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pagemanager.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:116
* @route '/dashboard/drone/pagemanager'
*/
const pagemanagerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pagemanager.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:116
* @route '/dashboard/drone/pagemanager'
*/
pagemanagerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pagemanager.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:116
* @route '/dashboard/drone/pagemanager'
*/
pagemanagerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pagemanager.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pagemanager.form = pagemanagerForm

const drone = {
    innerhero: Object.assign(innerhero, innerhero),
    pagemanager: Object.assign(pagemanager, pagemanager),
}

export default drone
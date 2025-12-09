import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see routes/dashboard.php:53
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
* @see routes/dashboard.php:53
* @route '/dashboard/drone/innerhero'
*/
innerhero.url = (options?: RouteQueryOptions) => {
    return innerhero.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:53
* @route '/dashboard/drone/innerhero'
*/
innerhero.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:53
* @route '/dashboard/drone/innerhero'
*/
innerhero.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: innerhero.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:53
* @route '/dashboard/drone/innerhero'
*/
const innerheroForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:53
* @route '/dashboard/drone/innerhero'
*/
innerheroForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:53
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
* @see routes/dashboard.php:54
* @route '/dashboard/drone/detailsection'
*/
export const detailsection = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detailsection.url(options),
    method: 'get',
})

detailsection.definition = {
    methods: ["get","head"],
    url: '/dashboard/drone/detailsection',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:54
* @route '/dashboard/drone/detailsection'
*/
detailsection.url = (options?: RouteQueryOptions) => {
    return detailsection.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:54
* @route '/dashboard/drone/detailsection'
*/
detailsection.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detailsection.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:54
* @route '/dashboard/drone/detailsection'
*/
detailsection.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detailsection.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:54
* @route '/dashboard/drone/detailsection'
*/
const detailsectionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detailsection.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:54
* @route '/dashboard/drone/detailsection'
*/
detailsectionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detailsection.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:54
* @route '/dashboard/drone/detailsection'
*/
detailsectionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detailsection.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

detailsection.form = detailsectionForm

/**
* @see routes/dashboard.php:55
* @route '/dashboard/drone/videosection'
*/
export const videosection = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: videosection.url(options),
    method: 'get',
})

videosection.definition = {
    methods: ["get","head"],
    url: '/dashboard/drone/videosection',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:55
* @route '/dashboard/drone/videosection'
*/
videosection.url = (options?: RouteQueryOptions) => {
    return videosection.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:55
* @route '/dashboard/drone/videosection'
*/
videosection.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: videosection.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:55
* @route '/dashboard/drone/videosection'
*/
videosection.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: videosection.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:55
* @route '/dashboard/drone/videosection'
*/
const videosectionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: videosection.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:55
* @route '/dashboard/drone/videosection'
*/
videosectionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: videosection.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:55
* @route '/dashboard/drone/videosection'
*/
videosectionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: videosection.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

videosection.form = videosectionForm

/**
* @see routes/dashboard.php:56
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
* @see routes/dashboard.php:56
* @route '/dashboard/drone/pagemanager'
*/
pagemanager.url = (options?: RouteQueryOptions) => {
    return pagemanager.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:56
* @route '/dashboard/drone/pagemanager'
*/
pagemanager.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pagemanager.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:56
* @route '/dashboard/drone/pagemanager'
*/
pagemanager.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pagemanager.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:56
* @route '/dashboard/drone/pagemanager'
*/
const pagemanagerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pagemanager.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:56
* @route '/dashboard/drone/pagemanager'
*/
pagemanagerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pagemanager.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:56
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
    detailsection: Object.assign(detailsection, detailsection),
    videosection: Object.assign(videosection, videosection),
    pagemanager: Object.assign(pagemanager, pagemanager),
}

export default drone
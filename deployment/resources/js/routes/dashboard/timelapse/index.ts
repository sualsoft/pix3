import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see routes/dashboard.php:49
* @route '/dashboard/timelapse/innerhero'
*/
export const innerhero = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: innerhero.url(options),
    method: 'get',
})

innerhero.definition = {
    methods: ["get","head"],
    url: '/dashboard/timelapse/innerhero',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:49
* @route '/dashboard/timelapse/innerhero'
*/
innerhero.url = (options?: RouteQueryOptions) => {
    return innerhero.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:49
* @route '/dashboard/timelapse/innerhero'
*/
innerhero.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:49
* @route '/dashboard/timelapse/innerhero'
*/
innerhero.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: innerhero.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:49
* @route '/dashboard/timelapse/innerhero'
*/
const innerheroForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:49
* @route '/dashboard/timelapse/innerhero'
*/
innerheroForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:49
* @route '/dashboard/timelapse/innerhero'
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
* @see routes/dashboard.php:50
* @route '/dashboard/timelapse/detailsection'
*/
export const detailsection = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detailsection.url(options),
    method: 'get',
})

detailsection.definition = {
    methods: ["get","head"],
    url: '/dashboard/timelapse/detailsection',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:50
* @route '/dashboard/timelapse/detailsection'
*/
detailsection.url = (options?: RouteQueryOptions) => {
    return detailsection.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:50
* @route '/dashboard/timelapse/detailsection'
*/
detailsection.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detailsection.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:50
* @route '/dashboard/timelapse/detailsection'
*/
detailsection.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detailsection.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:50
* @route '/dashboard/timelapse/detailsection'
*/
const detailsectionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detailsection.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:50
* @route '/dashboard/timelapse/detailsection'
*/
detailsectionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detailsection.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:50
* @route '/dashboard/timelapse/detailsection'
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
* @see routes/dashboard.php:51
* @route '/dashboard/timelapse/videosection'
*/
export const videosection = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: videosection.url(options),
    method: 'get',
})

videosection.definition = {
    methods: ["get","head"],
    url: '/dashboard/timelapse/videosection',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:51
* @route '/dashboard/timelapse/videosection'
*/
videosection.url = (options?: RouteQueryOptions) => {
    return videosection.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:51
* @route '/dashboard/timelapse/videosection'
*/
videosection.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: videosection.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:51
* @route '/dashboard/timelapse/videosection'
*/
videosection.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: videosection.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:51
* @route '/dashboard/timelapse/videosection'
*/
const videosectionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: videosection.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:51
* @route '/dashboard/timelapse/videosection'
*/
videosectionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: videosection.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:51
* @route '/dashboard/timelapse/videosection'
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
* @see routes/dashboard.php:52
* @route '/dashboard/timelapse/pagemanager'
*/
export const pagemanager = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pagemanager.url(options),
    method: 'get',
})

pagemanager.definition = {
    methods: ["get","head"],
    url: '/dashboard/timelapse/pagemanager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:52
* @route '/dashboard/timelapse/pagemanager'
*/
pagemanager.url = (options?: RouteQueryOptions) => {
    return pagemanager.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:52
* @route '/dashboard/timelapse/pagemanager'
*/
pagemanager.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pagemanager.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:52
* @route '/dashboard/timelapse/pagemanager'
*/
pagemanager.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pagemanager.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:52
* @route '/dashboard/timelapse/pagemanager'
*/
const pagemanagerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pagemanager.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:52
* @route '/dashboard/timelapse/pagemanager'
*/
pagemanagerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pagemanager.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:52
* @route '/dashboard/timelapse/pagemanager'
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

/**
* @see routes/dashboard.php:53
* @route '/dashboard/timelapse/seo'
*/
export const seo = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: seo.url(options),
    method: 'get',
})

seo.definition = {
    methods: ["get","head"],
    url: '/dashboard/timelapse/seo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:53
* @route '/dashboard/timelapse/seo'
*/
seo.url = (options?: RouteQueryOptions) => {
    return seo.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:53
* @route '/dashboard/timelapse/seo'
*/
seo.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: seo.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:53
* @route '/dashboard/timelapse/seo'
*/
seo.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: seo.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:53
* @route '/dashboard/timelapse/seo'
*/
const seoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: seo.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:53
* @route '/dashboard/timelapse/seo'
*/
seoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: seo.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:53
* @route '/dashboard/timelapse/seo'
*/
seoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: seo.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

seo.form = seoForm

const timelapse = {
    innerhero: Object.assign(innerhero, innerhero),
    detailsection: Object.assign(detailsection, detailsection),
    videosection: Object.assign(videosection, videosection),
    pagemanager: Object.assign(pagemanager, pagemanager),
    seo: Object.assign(seo, seo),
}

export default timelapse
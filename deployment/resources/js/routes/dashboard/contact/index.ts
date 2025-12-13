import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see routes/dashboard.php:42
* @route '/dashboard/contact/innerhero'
*/
export const innerhero = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: innerhero.url(options),
    method: 'get',
})

innerhero.definition = {
    methods: ["get","head"],
    url: '/dashboard/contact/innerhero',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:42
* @route '/dashboard/contact/innerhero'
*/
innerhero.url = (options?: RouteQueryOptions) => {
    return innerhero.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:42
* @route '/dashboard/contact/innerhero'
*/
innerhero.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:42
* @route '/dashboard/contact/innerhero'
*/
innerhero.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: innerhero.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:42
* @route '/dashboard/contact/innerhero'
*/
const innerheroForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:42
* @route '/dashboard/contact/innerhero'
*/
innerheroForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:42
* @route '/dashboard/contact/innerhero'
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
* @see routes/dashboard.php:43
* @route '/dashboard/contact/map'
*/
export const map = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: map.url(options),
    method: 'get',
})

map.definition = {
    methods: ["get","head"],
    url: '/dashboard/contact/map',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:43
* @route '/dashboard/contact/map'
*/
map.url = (options?: RouteQueryOptions) => {
    return map.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:43
* @route '/dashboard/contact/map'
*/
map.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: map.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:43
* @route '/dashboard/contact/map'
*/
map.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: map.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:43
* @route '/dashboard/contact/map'
*/
const mapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: map.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:43
* @route '/dashboard/contact/map'
*/
mapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: map.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:43
* @route '/dashboard/contact/map'
*/
mapForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: map.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

map.form = mapForm

/**
* @see routes/dashboard.php:44
* @route '/dashboard/contact/seo'
*/
export const seo = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: seo.url(options),
    method: 'get',
})

seo.definition = {
    methods: ["get","head"],
    url: '/dashboard/contact/seo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:44
* @route '/dashboard/contact/seo'
*/
seo.url = (options?: RouteQueryOptions) => {
    return seo.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:44
* @route '/dashboard/contact/seo'
*/
seo.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: seo.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:44
* @route '/dashboard/contact/seo'
*/
seo.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: seo.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:44
* @route '/dashboard/contact/seo'
*/
const seoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: seo.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:44
* @route '/dashboard/contact/seo'
*/
seoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: seo.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:44
* @route '/dashboard/contact/seo'
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

const contact = {
    innerhero: Object.assign(innerhero, innerhero),
    map: Object.assign(map, map),
    seo: Object.assign(seo, seo),
}

export default contact
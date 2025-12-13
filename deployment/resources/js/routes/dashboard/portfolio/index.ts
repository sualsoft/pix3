import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see routes/dashboard.php:35
* @route '/dashboard/portfolio/innerhero'
*/
export const innerhero = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: innerhero.url(options),
    method: 'get',
})

innerhero.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/innerhero',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:35
* @route '/dashboard/portfolio/innerhero'
*/
innerhero.url = (options?: RouteQueryOptions) => {
    return innerhero.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:35
* @route '/dashboard/portfolio/innerhero'
*/
innerhero.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:35
* @route '/dashboard/portfolio/innerhero'
*/
innerhero.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: innerhero.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:35
* @route '/dashboard/portfolio/innerhero'
*/
const innerheroForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:35
* @route '/dashboard/portfolio/innerhero'
*/
innerheroForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:35
* @route '/dashboard/portfolio/innerhero'
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
* @see routes/dashboard.php:36
* @route '/dashboard/portfolio/items'
*/
export const items = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: items.url(options),
    method: 'get',
})

items.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:36
* @route '/dashboard/portfolio/items'
*/
items.url = (options?: RouteQueryOptions) => {
    return items.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:36
* @route '/dashboard/portfolio/items'
*/
items.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: items.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:36
* @route '/dashboard/portfolio/items'
*/
items.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: items.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:36
* @route '/dashboard/portfolio/items'
*/
const itemsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: items.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:36
* @route '/dashboard/portfolio/items'
*/
itemsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: items.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:36
* @route '/dashboard/portfolio/items'
*/
itemsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: items.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

items.form = itemsForm

/**
* @see routes/dashboard.php:37
* @route '/dashboard/portfolio/seo'
*/
export const seo = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: seo.url(options),
    method: 'get',
})

seo.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolio/seo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:37
* @route '/dashboard/portfolio/seo'
*/
seo.url = (options?: RouteQueryOptions) => {
    return seo.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:37
* @route '/dashboard/portfolio/seo'
*/
seo.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: seo.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:37
* @route '/dashboard/portfolio/seo'
*/
seo.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: seo.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:37
* @route '/dashboard/portfolio/seo'
*/
const seoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: seo.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:37
* @route '/dashboard/portfolio/seo'
*/
seoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: seo.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:37
* @route '/dashboard/portfolio/seo'
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

const portfolio = {
    innerhero: Object.assign(innerhero, innerhero),
    items: Object.assign(items, items),
    seo: Object.assign(seo, seo),
}

export default portfolio
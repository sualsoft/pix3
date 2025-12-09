import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see routes/dashboard.php:33
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
* @see routes/dashboard.php:33
* @route '/dashboard/portfolio/innerhero'
*/
innerhero.url = (options?: RouteQueryOptions) => {
    return innerhero.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:33
* @route '/dashboard/portfolio/innerhero'
*/
innerhero.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:33
* @route '/dashboard/portfolio/innerhero'
*/
innerhero.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: innerhero.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:33
* @route '/dashboard/portfolio/innerhero'
*/
const innerheroForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:33
* @route '/dashboard/portfolio/innerhero'
*/
innerheroForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: innerhero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:33
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
* @see routes/dashboard.php:34
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
* @see routes/dashboard.php:34
* @route '/dashboard/portfolio/items'
*/
items.url = (options?: RouteQueryOptions) => {
    return items.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:34
* @route '/dashboard/portfolio/items'
*/
items.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: items.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:34
* @route '/dashboard/portfolio/items'
*/
items.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: items.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:34
* @route '/dashboard/portfolio/items'
*/
const itemsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: items.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:34
* @route '/dashboard/portfolio/items'
*/
itemsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: items.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:34
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

const portfolio = {
    innerhero: Object.assign(innerhero, innerhero),
    items: Object.assign(items, items),
}

export default portfolio
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see routes/dashboard.php:13
* @route '/dashboard/general/cta'
*/
export const cta = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cta.url(options),
    method: 'get',
})

cta.definition = {
    methods: ["get","head"],
    url: '/dashboard/general/cta',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:13
* @route '/dashboard/general/cta'
*/
cta.url = (options?: RouteQueryOptions) => {
    return cta.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:13
* @route '/dashboard/general/cta'
*/
cta.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cta.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:13
* @route '/dashboard/general/cta'
*/
cta.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cta.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:13
* @route '/dashboard/general/cta'
*/
const ctaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cta.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:13
* @route '/dashboard/general/cta'
*/
ctaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cta.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:13
* @route '/dashboard/general/cta'
*/
ctaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cta.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

cta.form = ctaForm

const general = {
    cta: Object.assign(cta, cta),
}

export default general
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see routes/dashboard.php:65
* @route '/dashboard/setting'
*/
export const setting = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setting.url(options),
    method: 'get',
})

setting.definition = {
    methods: ["get","head"],
    url: '/dashboard/setting',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:65
* @route '/dashboard/setting'
*/
setting.url = (options?: RouteQueryOptions) => {
    return setting.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:65
* @route '/dashboard/setting'
*/
setting.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setting.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:65
* @route '/dashboard/setting'
*/
setting.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: setting.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:65
* @route '/dashboard/setting'
*/
const settingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setting.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:65
* @route '/dashboard/setting'
*/
settingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setting.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:65
* @route '/dashboard/setting'
*/
settingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setting.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

setting.form = settingForm

const setting = {
    setting: Object.assign(setting, setting),
}

export default setting
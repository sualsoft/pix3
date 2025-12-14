import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ServicePageController::index
* @see app/Http/Controllers/ServicePageController.php:11
* @route '/api/service-pages'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/service-pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServicePageController::index
* @see app/Http/Controllers/ServicePageController.php:11
* @route '/api/service-pages'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicePageController::index
* @see app/Http/Controllers/ServicePageController.php:11
* @route '/api/service-pages'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicePageController::index
* @see app/Http/Controllers/ServicePageController.php:11
* @route '/api/service-pages'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServicePageController::index
* @see app/Http/Controllers/ServicePageController.php:11
* @route '/api/service-pages'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicePageController::index
* @see app/Http/Controllers/ServicePageController.php:11
* @route '/api/service-pages'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicePageController::index
* @see app/Http/Controllers/ServicePageController.php:11
* @route '/api/service-pages'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\ServicePageController::store
* @see app/Http/Controllers/ServicePageController.php:48
* @route '/api/service-pages'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/service-pages',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ServicePageController::store
* @see app/Http/Controllers/ServicePageController.php:48
* @route '/api/service-pages'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicePageController::store
* @see app/Http/Controllers/ServicePageController.php:48
* @route '/api/service-pages'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ServicePageController::store
* @see app/Http/Controllers/ServicePageController.php:48
* @route '/api/service-pages'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ServicePageController::store
* @see app/Http/Controllers/ServicePageController.php:48
* @route '/api/service-pages'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ServicePageController::update
* @see app/Http/Controllers/ServicePageController.php:94
* @route '/api/service-pages/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/api/service-pages/{id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ServicePageController::update
* @see app/Http/Controllers/ServicePageController.php:94
* @route '/api/service-pages/{id}'
*/
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicePageController::update
* @see app/Http/Controllers/ServicePageController.php:94
* @route '/api/service-pages/{id}'
*/
update.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ServicePageController::update
* @see app/Http/Controllers/ServicePageController.php:94
* @route '/api/service-pages/{id}'
*/
const updateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ServicePageController::update
* @see app/Http/Controllers/ServicePageController.php:94
* @route '/api/service-pages/{id}'
*/
updateForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\ServicePageController::destroy
* @see app/Http/Controllers/ServicePageController.php:145
* @route '/api/service-pages/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/service-pages/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ServicePageController::destroy
* @see app/Http/Controllers/ServicePageController.php:145
* @route '/api/service-pages/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicePageController::destroy
* @see app/Http/Controllers/ServicePageController.php:145
* @route '/api/service-pages/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ServicePageController::destroy
* @see app/Http/Controllers/ServicePageController.php:145
* @route '/api/service-pages/{id}'
*/
const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ServicePageController::destroy
* @see app/Http/Controllers/ServicePageController.php:145
* @route '/api/service-pages/{id}'
*/
destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\ServicePageController::show
* @see app/Http/Controllers/ServicePageController.php:24
* @route '/{category}/{slug}'
*/
export const show = (args: { category: string | number, slug: string | number } | [category: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/{category}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServicePageController::show
* @see app/Http/Controllers/ServicePageController.php:24
* @route '/{category}/{slug}'
*/
show.url = (args: { category: string | number, slug: string | number } | [category: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            category: args[0],
            slug: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: args.category,
        slug: args.slug,
    }

    return show.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServicePageController::show
* @see app/Http/Controllers/ServicePageController.php:24
* @route '/{category}/{slug}'
*/
show.get = (args: { category: string | number, slug: string | number } | [category: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicePageController::show
* @see app/Http/Controllers/ServicePageController.php:24
* @route '/{category}/{slug}'
*/
show.head = (args: { category: string | number, slug: string | number } | [category: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServicePageController::show
* @see app/Http/Controllers/ServicePageController.php:24
* @route '/{category}/{slug}'
*/
const showForm = (args: { category: string | number, slug: string | number } | [category: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicePageController::show
* @see app/Http/Controllers/ServicePageController.php:24
* @route '/{category}/{slug}'
*/
showForm.get = (args: { category: string | number, slug: string | number } | [category: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServicePageController::show
* @see app/Http/Controllers/ServicePageController.php:24
* @route '/{category}/{slug}'
*/
showForm.head = (args: { category: string | number, slug: string | number } | [category: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const ServicePageController = { index, store, update, destroy, show }

export default ServicePageController
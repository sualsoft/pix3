import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserPageController::getProjectData
* @see app/Http/Controllers/UserPageController.php:46
* @route '/api/user-project'
*/
export const getProjectData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getProjectData.url(options),
    method: 'get',
})

getProjectData.definition = {
    methods: ["get","head"],
    url: '/api/user-project',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserPageController::getProjectData
* @see app/Http/Controllers/UserPageController.php:46
* @route '/api/user-project'
*/
getProjectData.url = (options?: RouteQueryOptions) => {
    return getProjectData.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::getProjectData
* @see app/Http/Controllers/UserPageController.php:46
* @route '/api/user-project'
*/
getProjectData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getProjectData.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getProjectData
* @see app/Http/Controllers/UserPageController.php:46
* @route '/api/user-project'
*/
getProjectData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getProjectData.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserPageController::getProjectData
* @see app/Http/Controllers/UserPageController.php:46
* @route '/api/user-project'
*/
const getProjectDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getProjectData.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getProjectData
* @see app/Http/Controllers/UserPageController.php:46
* @route '/api/user-project'
*/
getProjectDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getProjectData.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getProjectData
* @see app/Http/Controllers/UserPageController.php:46
* @route '/api/user-project'
*/
getProjectDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getProjectData.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getProjectData.form = getProjectDataForm

/**
* @see \App\Http\Controllers\UserPageController::updateProject
* @see app/Http/Controllers/UserPageController.php:56
* @route '/api/user-project/info'
*/
export const updateProject = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProject.url(options),
    method: 'post',
})

updateProject.definition = {
    methods: ["post"],
    url: '/api/user-project/info',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserPageController::updateProject
* @see app/Http/Controllers/UserPageController.php:56
* @route '/api/user-project/info'
*/
updateProject.url = (options?: RouteQueryOptions) => {
    return updateProject.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::updateProject
* @see app/Http/Controllers/UserPageController.php:56
* @route '/api/user-project/info'
*/
updateProject.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProject.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::updateProject
* @see app/Http/Controllers/UserPageController.php:56
* @route '/api/user-project/info'
*/
const updateProjectForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProject.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::updateProject
* @see app/Http/Controllers/UserPageController.php:56
* @route '/api/user-project/info'
*/
updateProjectForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProject.url(options),
    method: 'post',
})

updateProject.form = updateProjectForm

/**
* @see \App\Http\Controllers\UserPageController::storeFile
* @see app/Http/Controllers/UserPageController.php:67
* @route '/api/user-project/file'
*/
export const storeFile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeFile.url(options),
    method: 'post',
})

storeFile.definition = {
    methods: ["post"],
    url: '/api/user-project/file',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserPageController::storeFile
* @see app/Http/Controllers/UserPageController.php:67
* @route '/api/user-project/file'
*/
storeFile.url = (options?: RouteQueryOptions) => {
    return storeFile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::storeFile
* @see app/Http/Controllers/UserPageController.php:67
* @route '/api/user-project/file'
*/
storeFile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeFile.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::storeFile
* @see app/Http/Controllers/UserPageController.php:67
* @route '/api/user-project/file'
*/
const storeFileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeFile.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::storeFile
* @see app/Http/Controllers/UserPageController.php:67
* @route '/api/user-project/file'
*/
storeFileForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeFile.url(options),
    method: 'post',
})

storeFile.form = storeFileForm

/**
* @see \App\Http\Controllers\UserPageController::destroyFile
* @see app/Http/Controllers/UserPageController.php:106
* @route '/api/user-project/file/{id}'
*/
export const destroyFile = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyFile.url(args, options),
    method: 'delete',
})

destroyFile.definition = {
    methods: ["delete"],
    url: '/api/user-project/file/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\UserPageController::destroyFile
* @see app/Http/Controllers/UserPageController.php:106
* @route '/api/user-project/file/{id}'
*/
destroyFile.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyFile.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::destroyFile
* @see app/Http/Controllers/UserPageController.php:106
* @route '/api/user-project/file/{id}'
*/
destroyFile.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyFile.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\UserPageController::destroyFile
* @see app/Http/Controllers/UserPageController.php:106
* @route '/api/user-project/file/{id}'
*/
const destroyFileForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyFile.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::destroyFile
* @see app/Http/Controllers/UserPageController.php:106
* @route '/api/user-project/file/{id}'
*/
destroyFileForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyFile.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyFile.form = destroyFileForm

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/api/dashboard'
*/
const index79e8db78b7285f47b9383df06923ad39 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index79e8db78b7285f47b9383df06923ad39.url(options),
    method: 'get',
})

index79e8db78b7285f47b9383df06923ad39.definition = {
    methods: ["get","head"],
    url: '/api/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/api/dashboard'
*/
index79e8db78b7285f47b9383df06923ad39.url = (options?: RouteQueryOptions) => {
    return index79e8db78b7285f47b9383df06923ad39.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/api/dashboard'
*/
index79e8db78b7285f47b9383df06923ad39.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index79e8db78b7285f47b9383df06923ad39.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/api/dashboard'
*/
index79e8db78b7285f47b9383df06923ad39.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index79e8db78b7285f47b9383df06923ad39.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/api/dashboard'
*/
const index79e8db78b7285f47b9383df06923ad39Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index79e8db78b7285f47b9383df06923ad39.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/api/dashboard'
*/
index79e8db78b7285f47b9383df06923ad39Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index79e8db78b7285f47b9383df06923ad39.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/api/dashboard'
*/
index79e8db78b7285f47b9383df06923ad39Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index79e8db78b7285f47b9383df06923ad39.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index79e8db78b7285f47b9383df06923ad39.form = index79e8db78b7285f47b9383df06923ad39Form
/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/user'
*/
const index4f74708015d25e186d2d80ed42af2d9a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'get',
})

index4f74708015d25e186d2d80ed42af2d9a.definition = {
    methods: ["get","head"],
    url: '/user',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9a.url = (options?: RouteQueryOptions) => {
    return index4f74708015d25e186d2d80ed42af2d9a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/user'
*/
const index4f74708015d25e186d2d80ed42af2d9aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:12
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4f74708015d25e186d2d80ed42af2d9a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index4f74708015d25e186d2d80ed42af2d9a.form = index4f74708015d25e186d2d80ed42af2d9aForm

export const index = {
    '/api/dashboard': index79e8db78b7285f47b9383df06923ad39,
    '/user': index4f74708015d25e186d2d80ed42af2d9a,
}

const UserPageController = { getProjectData, updateProject, storeFile, destroyFile, index }

export default UserPageController
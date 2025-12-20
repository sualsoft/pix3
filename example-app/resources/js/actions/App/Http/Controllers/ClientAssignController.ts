import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ClientAssignController::assignUserToProject
* @see app/Http/Controllers/ClientAssignController.php:16
* @route '/api/client-assign/assign-user'
*/
export const assignUserToProject = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignUserToProject.url(options),
    method: 'post',
})

assignUserToProject.definition = {
    methods: ["post"],
    url: '/api/client-assign/assign-user',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ClientAssignController::assignUserToProject
* @see app/Http/Controllers/ClientAssignController.php:16
* @route '/api/client-assign/assign-user'
*/
assignUserToProject.url = (options?: RouteQueryOptions) => {
    return assignUserToProject.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientAssignController::assignUserToProject
* @see app/Http/Controllers/ClientAssignController.php:16
* @route '/api/client-assign/assign-user'
*/
assignUserToProject.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignUserToProject.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientAssignController::assignUserToProject
* @see app/Http/Controllers/ClientAssignController.php:16
* @route '/api/client-assign/assign-user'
*/
const assignUserToProjectForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: assignUserToProject.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientAssignController::assignUserToProject
* @see app/Http/Controllers/ClientAssignController.php:16
* @route '/api/client-assign/assign-user'
*/
assignUserToProjectForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: assignUserToProject.url(options),
    method: 'post',
})

assignUserToProject.form = assignUserToProjectForm

/**
* @see \App\Http\Controllers\ClientAssignController::createAndAssignUser
* @see app/Http/Controllers/ClientAssignController.php:40
* @route '/api/client-assign/create-user'
*/
export const createAndAssignUser = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createAndAssignUser.url(options),
    method: 'post',
})

createAndAssignUser.definition = {
    methods: ["post"],
    url: '/api/client-assign/create-user',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ClientAssignController::createAndAssignUser
* @see app/Http/Controllers/ClientAssignController.php:40
* @route '/api/client-assign/create-user'
*/
createAndAssignUser.url = (options?: RouteQueryOptions) => {
    return createAndAssignUser.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientAssignController::createAndAssignUser
* @see app/Http/Controllers/ClientAssignController.php:40
* @route '/api/client-assign/create-user'
*/
createAndAssignUser.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createAndAssignUser.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientAssignController::createAndAssignUser
* @see app/Http/Controllers/ClientAssignController.php:40
* @route '/api/client-assign/create-user'
*/
const createAndAssignUserForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createAndAssignUser.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientAssignController::createAndAssignUser
* @see app/Http/Controllers/ClientAssignController.php:40
* @route '/api/client-assign/create-user'
*/
createAndAssignUserForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createAndAssignUser.url(options),
    method: 'post',
})

createAndAssignUser.form = createAndAssignUserForm

/**
* @see \App\Http\Controllers\ClientAssignController::getAssignedUsers
* @see app/Http/Controllers/ClientAssignController.php:72
* @route '/api/client-assign/project/{projectId}/users'
*/
export const getAssignedUsers = (args: { projectId: string | number } | [projectId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAssignedUsers.url(args, options),
    method: 'get',
})

getAssignedUsers.definition = {
    methods: ["get","head"],
    url: '/api/client-assign/project/{projectId}/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClientAssignController::getAssignedUsers
* @see app/Http/Controllers/ClientAssignController.php:72
* @route '/api/client-assign/project/{projectId}/users'
*/
getAssignedUsers.url = (args: { projectId: string | number } | [projectId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { projectId: args }
    }

    if (Array.isArray(args)) {
        args = {
            projectId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        projectId: args.projectId,
    }

    return getAssignedUsers.definition.url
            .replace('{projectId}', parsedArgs.projectId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientAssignController::getAssignedUsers
* @see app/Http/Controllers/ClientAssignController.php:72
* @route '/api/client-assign/project/{projectId}/users'
*/
getAssignedUsers.get = (args: { projectId: string | number } | [projectId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAssignedUsers.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClientAssignController::getAssignedUsers
* @see app/Http/Controllers/ClientAssignController.php:72
* @route '/api/client-assign/project/{projectId}/users'
*/
getAssignedUsers.head = (args: { projectId: string | number } | [projectId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAssignedUsers.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ClientAssignController::getAssignedUsers
* @see app/Http/Controllers/ClientAssignController.php:72
* @route '/api/client-assign/project/{projectId}/users'
*/
const getAssignedUsersForm = (args: { projectId: string | number } | [projectId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAssignedUsers.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClientAssignController::getAssignedUsers
* @see app/Http/Controllers/ClientAssignController.php:72
* @route '/api/client-assign/project/{projectId}/users'
*/
getAssignedUsersForm.get = (args: { projectId: string | number } | [projectId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAssignedUsers.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClientAssignController::getAssignedUsers
* @see app/Http/Controllers/ClientAssignController.php:72
* @route '/api/client-assign/project/{projectId}/users'
*/
getAssignedUsersForm.head = (args: { projectId: string | number } | [projectId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAssignedUsers.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getAssignedUsers.form = getAssignedUsersForm

const ClientAssignController = { assignUserToProject, createAndAssignUser, getAssignedUsers }

export default ClientAssignController
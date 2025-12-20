import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserPageController::getProjectData
* @see app/Http/Controllers/UserPageController.php:79
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
* @see app/Http/Controllers/UserPageController.php:79
* @route '/api/user-project'
*/
getProjectData.url = (options?: RouteQueryOptions) => {
    return getProjectData.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::getProjectData
* @see app/Http/Controllers/UserPageController.php:79
* @route '/api/user-project'
*/
getProjectData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getProjectData.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getProjectData
* @see app/Http/Controllers/UserPageController.php:79
* @route '/api/user-project'
*/
getProjectData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getProjectData.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserPageController::getProjectData
* @see app/Http/Controllers/UserPageController.php:79
* @route '/api/user-project'
*/
const getProjectDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getProjectData.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getProjectData
* @see app/Http/Controllers/UserPageController.php:79
* @route '/api/user-project'
*/
getProjectDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getProjectData.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getProjectData
* @see app/Http/Controllers/UserPageController.php:79
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
* @see \App\Http\Controllers\UserPageController::getAllProjects
* @see app/Http/Controllers/UserPageController.php:67
* @route '/api/user-projects'
*/
export const getAllProjects = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAllProjects.url(options),
    method: 'get',
})

getAllProjects.definition = {
    methods: ["get","head"],
    url: '/api/user-projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserPageController::getAllProjects
* @see app/Http/Controllers/UserPageController.php:67
* @route '/api/user-projects'
*/
getAllProjects.url = (options?: RouteQueryOptions) => {
    return getAllProjects.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::getAllProjects
* @see app/Http/Controllers/UserPageController.php:67
* @route '/api/user-projects'
*/
getAllProjects.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAllProjects.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getAllProjects
* @see app/Http/Controllers/UserPageController.php:67
* @route '/api/user-projects'
*/
getAllProjects.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAllProjects.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserPageController::getAllProjects
* @see app/Http/Controllers/UserPageController.php:67
* @route '/api/user-projects'
*/
const getAllProjectsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAllProjects.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getAllProjects
* @see app/Http/Controllers/UserPageController.php:67
* @route '/api/user-projects'
*/
getAllProjectsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAllProjects.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getAllProjects
* @see app/Http/Controllers/UserPageController.php:67
* @route '/api/user-projects'
*/
getAllProjectsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getAllProjects.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getAllProjects.form = getAllProjectsForm

/**
* @see \App\Http\Controllers\UserPageController::getProjectBySlug
* @see app/Http/Controllers/UserPageController.php:210
* @route '/api/user-project/slug/{slug}'
*/
export const getProjectBySlug = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getProjectBySlug.url(args, options),
    method: 'get',
})

getProjectBySlug.definition = {
    methods: ["get","head"],
    url: '/api/user-project/slug/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserPageController::getProjectBySlug
* @see app/Http/Controllers/UserPageController.php:210
* @route '/api/user-project/slug/{slug}'
*/
getProjectBySlug.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slug: args.slug,
    }

    return getProjectBySlug.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::getProjectBySlug
* @see app/Http/Controllers/UserPageController.php:210
* @route '/api/user-project/slug/{slug}'
*/
getProjectBySlug.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getProjectBySlug.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getProjectBySlug
* @see app/Http/Controllers/UserPageController.php:210
* @route '/api/user-project/slug/{slug}'
*/
getProjectBySlug.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getProjectBySlug.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserPageController::getProjectBySlug
* @see app/Http/Controllers/UserPageController.php:210
* @route '/api/user-project/slug/{slug}'
*/
const getProjectBySlugForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getProjectBySlug.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getProjectBySlug
* @see app/Http/Controllers/UserPageController.php:210
* @route '/api/user-project/slug/{slug}'
*/
getProjectBySlugForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getProjectBySlug.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getProjectBySlug
* @see app/Http/Controllers/UserPageController.php:210
* @route '/api/user-project/slug/{slug}'
*/
getProjectBySlugForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getProjectBySlug.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getProjectBySlug.form = getProjectBySlugForm

/**
* @see \App\Http\Controllers\UserPageController::updateProject
* @see app/Http/Controllers/UserPageController.php:89
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
* @see app/Http/Controllers/UserPageController.php:89
* @route '/api/user-project/info'
*/
updateProject.url = (options?: RouteQueryOptions) => {
    return updateProject.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::updateProject
* @see app/Http/Controllers/UserPageController.php:89
* @route '/api/user-project/info'
*/
updateProject.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProject.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::updateProject
* @see app/Http/Controllers/UserPageController.php:89
* @route '/api/user-project/info'
*/
const updateProjectForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProject.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::updateProject
* @see app/Http/Controllers/UserPageController.php:89
* @route '/api/user-project/info'
*/
updateProjectForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProject.url(options),
    method: 'post',
})

updateProject.form = updateProjectForm

/**
* @see \App\Http\Controllers\UserPageController::storeFile
* @see app/Http/Controllers/UserPageController.php:100
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
* @see app/Http/Controllers/UserPageController.php:100
* @route '/api/user-project/file'
*/
storeFile.url = (options?: RouteQueryOptions) => {
    return storeFile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::storeFile
* @see app/Http/Controllers/UserPageController.php:100
* @route '/api/user-project/file'
*/
storeFile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeFile.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::storeFile
* @see app/Http/Controllers/UserPageController.php:100
* @route '/api/user-project/file'
*/
const storeFileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeFile.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::storeFile
* @see app/Http/Controllers/UserPageController.php:100
* @route '/api/user-project/file'
*/
storeFileForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeFile.url(options),
    method: 'post',
})

storeFile.form = storeFileForm

/**
* @see \App\Http\Controllers\UserPageController::destroyFile
* @see app/Http/Controllers/UserPageController.php:139
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
* @see app/Http/Controllers/UserPageController.php:139
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
* @see app/Http/Controllers/UserPageController.php:139
* @route '/api/user-project/file/{id}'
*/
destroyFile.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyFile.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\UserPageController::destroyFile
* @see app/Http/Controllers/UserPageController.php:139
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
* @see app/Http/Controllers/UserPageController.php:139
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
* @see \App\Http\Controllers\UserPageController::createProject
* @see app/Http/Controllers/UserPageController.php:150
* @route '/api/user-project/create'
*/
export const createProject = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createProject.url(options),
    method: 'post',
})

createProject.definition = {
    methods: ["post"],
    url: '/api/user-project/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserPageController::createProject
* @see app/Http/Controllers/UserPageController.php:150
* @route '/api/user-project/create'
*/
createProject.url = (options?: RouteQueryOptions) => {
    return createProject.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::createProject
* @see app/Http/Controllers/UserPageController.php:150
* @route '/api/user-project/create'
*/
createProject.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createProject.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::createProject
* @see app/Http/Controllers/UserPageController.php:150
* @route '/api/user-project/create'
*/
const createProjectForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createProject.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::createProject
* @see app/Http/Controllers/UserPageController.php:150
* @route '/api/user-project/create'
*/
createProjectForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createProject.url(options),
    method: 'post',
})

createProject.form = createProjectForm

/**
* @see \App\Http\Controllers\UserPageController::updateProjectDetails
* @see app/Http/Controllers/UserPageController.php:167
* @route '/api/user-project/{id}'
*/
export const updateProjectDetails = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProjectDetails.url(args, options),
    method: 'put',
})

updateProjectDetails.definition = {
    methods: ["put"],
    url: '/api/user-project/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\UserPageController::updateProjectDetails
* @see app/Http/Controllers/UserPageController.php:167
* @route '/api/user-project/{id}'
*/
updateProjectDetails.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updateProjectDetails.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::updateProjectDetails
* @see app/Http/Controllers/UserPageController.php:167
* @route '/api/user-project/{id}'
*/
updateProjectDetails.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProjectDetails.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\UserPageController::updateProjectDetails
* @see app/Http/Controllers/UserPageController.php:167
* @route '/api/user-project/{id}'
*/
const updateProjectDetailsForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProjectDetails.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::updateProjectDetails
* @see app/Http/Controllers/UserPageController.php:167
* @route '/api/user-project/{id}'
*/
updateProjectDetailsForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProjectDetails.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateProjectDetails.form = updateProjectDetailsForm

/**
* @see \App\Http\Controllers\UserPageController::deleteProject
* @see app/Http/Controllers/UserPageController.php:186
* @route '/api/user-project/{id}'
*/
export const deleteProject = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteProject.url(args, options),
    method: 'delete',
})

deleteProject.definition = {
    methods: ["delete"],
    url: '/api/user-project/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\UserPageController::deleteProject
* @see app/Http/Controllers/UserPageController.php:186
* @route '/api/user-project/{id}'
*/
deleteProject.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return deleteProject.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::deleteProject
* @see app/Http/Controllers/UserPageController.php:186
* @route '/api/user-project/{id}'
*/
deleteProject.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteProject.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\UserPageController::deleteProject
* @see app/Http/Controllers/UserPageController.php:186
* @route '/api/user-project/{id}'
*/
const deleteProjectForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteProject.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::deleteProject
* @see app/Http/Controllers/UserPageController.php:186
* @route '/api/user-project/{id}'
*/
deleteProjectForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteProject.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteProject.form = deleteProjectForm

/**
* @see \App\Http\Controllers\UserPageController::getSingleProject
* @see app/Http/Controllers/UserPageController.php:202
* @route '/api/user-project/{id}'
*/
export const getSingleProject = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSingleProject.url(args, options),
    method: 'get',
})

getSingleProject.definition = {
    methods: ["get","head"],
    url: '/api/user-project/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserPageController::getSingleProject
* @see app/Http/Controllers/UserPageController.php:202
* @route '/api/user-project/{id}'
*/
getSingleProject.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getSingleProject.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::getSingleProject
* @see app/Http/Controllers/UserPageController.php:202
* @route '/api/user-project/{id}'
*/
getSingleProject.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSingleProject.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getSingleProject
* @see app/Http/Controllers/UserPageController.php:202
* @route '/api/user-project/{id}'
*/
getSingleProject.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getSingleProject.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserPageController::getSingleProject
* @see app/Http/Controllers/UserPageController.php:202
* @route '/api/user-project/{id}'
*/
const getSingleProjectForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSingleProject.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getSingleProject
* @see app/Http/Controllers/UserPageController.php:202
* @route '/api/user-project/{id}'
*/
getSingleProjectForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSingleProject.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getSingleProject
* @see app/Http/Controllers/UserPageController.php:202
* @route '/api/user-project/{id}'
*/
getSingleProjectForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getSingleProject.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getSingleProject.form = getSingleProjectForm

/**
* @see \App\Http\Controllers\UserPageController::refreshProjectPage
* @see app/Http/Controllers/UserPageController.php:324
* @route '/api/user-project/{id}/refresh'
*/
export const refreshProjectPage = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: refreshProjectPage.url(args, options),
    method: 'post',
})

refreshProjectPage.definition = {
    methods: ["post"],
    url: '/api/user-project/{id}/refresh',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserPageController::refreshProjectPage
* @see app/Http/Controllers/UserPageController.php:324
* @route '/api/user-project/{id}/refresh'
*/
refreshProjectPage.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return refreshProjectPage.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::refreshProjectPage
* @see app/Http/Controllers/UserPageController.php:324
* @route '/api/user-project/{id}/refresh'
*/
refreshProjectPage.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: refreshProjectPage.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::refreshProjectPage
* @see app/Http/Controllers/UserPageController.php:324
* @route '/api/user-project/{id}/refresh'
*/
const refreshProjectPageForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: refreshProjectPage.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::refreshProjectPage
* @see app/Http/Controllers/UserPageController.php:324
* @route '/api/user-project/{id}/refresh'
*/
refreshProjectPageForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: refreshProjectPage.url(args, options),
    method: 'post',
})

refreshProjectPage.form = refreshProjectPageForm

/**
* @see \App\Http\Controllers\UserPageController::createPageFromTemplate
* @see app/Http/Controllers/UserPageController.php:355
* @route '/api/user-project/template'
*/
export const createPageFromTemplate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createPageFromTemplate.url(options),
    method: 'post',
})

createPageFromTemplate.definition = {
    methods: ["post"],
    url: '/api/user-project/template',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserPageController::createPageFromTemplate
* @see app/Http/Controllers/UserPageController.php:355
* @route '/api/user-project/template'
*/
createPageFromTemplate.url = (options?: RouteQueryOptions) => {
    return createPageFromTemplate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::createPageFromTemplate
* @see app/Http/Controllers/UserPageController.php:355
* @route '/api/user-project/template'
*/
createPageFromTemplate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createPageFromTemplate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::createPageFromTemplate
* @see app/Http/Controllers/UserPageController.php:355
* @route '/api/user-project/template'
*/
const createPageFromTemplateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createPageFromTemplate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::createPageFromTemplate
* @see app/Http/Controllers/UserPageController.php:355
* @route '/api/user-project/template'
*/
createPageFromTemplateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createPageFromTemplate.url(options),
    method: 'post',
})

createPageFromTemplate.form = createPageFromTemplateForm

/**
* @see \App\Http\Controllers\UserPageController::getMainDashboardContent
* @see app/Http/Controllers/UserPageController.php:218
* @route '/api/dashboard/main-content'
*/
export const getMainDashboardContent = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMainDashboardContent.url(options),
    method: 'get',
})

getMainDashboardContent.definition = {
    methods: ["get","head"],
    url: '/api/dashboard/main-content',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserPageController::getMainDashboardContent
* @see app/Http/Controllers/UserPageController.php:218
* @route '/api/dashboard/main-content'
*/
getMainDashboardContent.url = (options?: RouteQueryOptions) => {
    return getMainDashboardContent.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::getMainDashboardContent
* @see app/Http/Controllers/UserPageController.php:218
* @route '/api/dashboard/main-content'
*/
getMainDashboardContent.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMainDashboardContent.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getMainDashboardContent
* @see app/Http/Controllers/UserPageController.php:218
* @route '/api/dashboard/main-content'
*/
getMainDashboardContent.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getMainDashboardContent.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserPageController::getMainDashboardContent
* @see app/Http/Controllers/UserPageController.php:218
* @route '/api/dashboard/main-content'
*/
const getMainDashboardContentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMainDashboardContent.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getMainDashboardContent
* @see app/Http/Controllers/UserPageController.php:218
* @route '/api/dashboard/main-content'
*/
getMainDashboardContentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMainDashboardContent.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::getMainDashboardContent
* @see app/Http/Controllers/UserPageController.php:218
* @route '/api/dashboard/main-content'
*/
getMainDashboardContentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMainDashboardContent.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getMainDashboardContent.form = getMainDashboardContentForm

/**
* @see \App\Http\Controllers\UserPageController::updateMainDashboardContent
* @see app/Http/Controllers/UserPageController.php:235
* @route '/api/dashboard/main-content'
*/
export const updateMainDashboardContent = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateMainDashboardContent.url(options),
    method: 'post',
})

updateMainDashboardContent.definition = {
    methods: ["post"],
    url: '/api/dashboard/main-content',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserPageController::updateMainDashboardContent
* @see app/Http/Controllers/UserPageController.php:235
* @route '/api/dashboard/main-content'
*/
updateMainDashboardContent.url = (options?: RouteQueryOptions) => {
    return updateMainDashboardContent.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::updateMainDashboardContent
* @see app/Http/Controllers/UserPageController.php:235
* @route '/api/dashboard/main-content'
*/
updateMainDashboardContent.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateMainDashboardContent.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::updateMainDashboardContent
* @see app/Http/Controllers/UserPageController.php:235
* @route '/api/dashboard/main-content'
*/
const updateMainDashboardContentForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateMainDashboardContent.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::updateMainDashboardContent
* @see app/Http/Controllers/UserPageController.php:235
* @route '/api/dashboard/main-content'
*/
updateMainDashboardContentForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateMainDashboardContent.url(options),
    method: 'post',
})

updateMainDashboardContent.form = updateMainDashboardContentForm

/**
* @see \App\Http\Controllers\UserPageController::addMainDashboardSection
* @see app/Http/Controllers/UserPageController.php:261
* @route '/api/dashboard/main-section'
*/
export const addMainDashboardSection = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addMainDashboardSection.url(options),
    method: 'post',
})

addMainDashboardSection.definition = {
    methods: ["post"],
    url: '/api/dashboard/main-section',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserPageController::addMainDashboardSection
* @see app/Http/Controllers/UserPageController.php:261
* @route '/api/dashboard/main-section'
*/
addMainDashboardSection.url = (options?: RouteQueryOptions) => {
    return addMainDashboardSection.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::addMainDashboardSection
* @see app/Http/Controllers/UserPageController.php:261
* @route '/api/dashboard/main-section'
*/
addMainDashboardSection.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addMainDashboardSection.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::addMainDashboardSection
* @see app/Http/Controllers/UserPageController.php:261
* @route '/api/dashboard/main-section'
*/
const addMainDashboardSectionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addMainDashboardSection.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserPageController::addMainDashboardSection
* @see app/Http/Controllers/UserPageController.php:261
* @route '/api/dashboard/main-section'
*/
addMainDashboardSectionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addMainDashboardSection.url(options),
    method: 'post',
})

addMainDashboardSection.form = addMainDashboardSectionForm

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:13
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
* @see app/Http/Controllers/UserPageController.php:13
* @route '/api/dashboard'
*/
index79e8db78b7285f47b9383df06923ad39.url = (options?: RouteQueryOptions) => {
    return index79e8db78b7285f47b9383df06923ad39.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:13
* @route '/api/dashboard'
*/
index79e8db78b7285f47b9383df06923ad39.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index79e8db78b7285f47b9383df06923ad39.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:13
* @route '/api/dashboard'
*/
index79e8db78b7285f47b9383df06923ad39.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index79e8db78b7285f47b9383df06923ad39.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:13
* @route '/api/dashboard'
*/
const index79e8db78b7285f47b9383df06923ad39Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index79e8db78b7285f47b9383df06923ad39.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:13
* @route '/api/dashboard'
*/
index79e8db78b7285f47b9383df06923ad39Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index79e8db78b7285f47b9383df06923ad39.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:13
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
* @see app/Http/Controllers/UserPageController.php:13
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
* @see app/Http/Controllers/UserPageController.php:13
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9a.url = (options?: RouteQueryOptions) => {
    return index4f74708015d25e186d2d80ed42af2d9a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:13
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:13
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:13
* @route '/user'
*/
const index4f74708015d25e186d2d80ed42af2d9aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:13
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::index
* @see app/Http/Controllers/UserPageController.php:13
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

/**
* @see \App\Http\Controllers\UserPageController::show
* @see app/Http/Controllers/UserPageController.php:45
* @route '/user/{slug}'
*/
export const show = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/user/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserPageController::show
* @see app/Http/Controllers/UserPageController.php:45
* @route '/user/{slug}'
*/
show.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slug: args.slug,
    }

    return show.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserPageController::show
* @see app/Http/Controllers/UserPageController.php:45
* @route '/user/{slug}'
*/
show.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::show
* @see app/Http/Controllers/UserPageController.php:45
* @route '/user/{slug}'
*/
show.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserPageController::show
* @see app/Http/Controllers/UserPageController.php:45
* @route '/user/{slug}'
*/
const showForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::show
* @see app/Http/Controllers/UserPageController.php:45
* @route '/user/{slug}'
*/
showForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserPageController::show
* @see app/Http/Controllers/UserPageController.php:45
* @route '/user/{slug}'
*/
showForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const UserPageController = { getProjectData, getAllProjects, getProjectBySlug, updateProject, storeFile, destroyFile, createProject, updateProjectDetails, deleteProject, getSingleProject, refreshProjectPage, createPageFromTemplate, getMainDashboardContent, updateMainDashboardContent, addMainDashboardSection, index, show }

export default UserPageController
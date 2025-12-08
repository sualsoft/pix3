import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SettingsController::updateGeneral
* @see app/Http/Controllers/SettingsController.php:14
* @route '/api/settings/general'
*/
export const updateGeneral = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateGeneral.url(options),
    method: 'post',
})

updateGeneral.definition = {
    methods: ["post"],
    url: '/api/settings/general',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateGeneral
* @see app/Http/Controllers/SettingsController.php:14
* @route '/api/settings/general'
*/
updateGeneral.url = (options?: RouteQueryOptions) => {
    return updateGeneral.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateGeneral
* @see app/Http/Controllers/SettingsController.php:14
* @route '/api/settings/general'
*/
updateGeneral.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateGeneral.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateGeneral
* @see app/Http/Controllers/SettingsController.php:14
* @route '/api/settings/general'
*/
const updateGeneralForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateGeneral.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateGeneral
* @see app/Http/Controllers/SettingsController.php:14
* @route '/api/settings/general'
*/
updateGeneralForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateGeneral.url(options),
    method: 'post',
})

updateGeneral.form = updateGeneralForm

/**
* @see \App\Http\Controllers\SettingsController::uploadLogo
* @see app/Http/Controllers/SettingsController.php:31
* @route '/api/settings/upload-logo'
*/
export const uploadLogo = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadLogo.url(options),
    method: 'post',
})

uploadLogo.definition = {
    methods: ["post"],
    url: '/api/settings/upload-logo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::uploadLogo
* @see app/Http/Controllers/SettingsController.php:31
* @route '/api/settings/upload-logo'
*/
uploadLogo.url = (options?: RouteQueryOptions) => {
    return uploadLogo.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::uploadLogo
* @see app/Http/Controllers/SettingsController.php:31
* @route '/api/settings/upload-logo'
*/
uploadLogo.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadLogo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::uploadLogo
* @see app/Http/Controllers/SettingsController.php:31
* @route '/api/settings/upload-logo'
*/
const uploadLogoForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadLogo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::uploadLogo
* @see app/Http/Controllers/SettingsController.php:31
* @route '/api/settings/upload-logo'
*/
uploadLogoForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadLogo.url(options),
    method: 'post',
})

uploadLogo.form = uploadLogoForm

/**
* @see \App\Http\Controllers\SettingsController::updateSocial
* @see app/Http/Controllers/SettingsController.php:52
* @route '/api/settings/social'
*/
export const updateSocial = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateSocial.url(options),
    method: 'post',
})

updateSocial.definition = {
    methods: ["post"],
    url: '/api/settings/social',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateSocial
* @see app/Http/Controllers/SettingsController.php:52
* @route '/api/settings/social'
*/
updateSocial.url = (options?: RouteQueryOptions) => {
    return updateSocial.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateSocial
* @see app/Http/Controllers/SettingsController.php:52
* @route '/api/settings/social'
*/
updateSocial.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateSocial.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateSocial
* @see app/Http/Controllers/SettingsController.php:52
* @route '/api/settings/social'
*/
const updateSocialForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSocial.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateSocial
* @see app/Http/Controllers/SettingsController.php:52
* @route '/api/settings/social'
*/
updateSocialForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSocial.url(options),
    method: 'post',
})

updateSocial.form = updateSocialForm

/**
* @see \App\Http\Controllers\SettingsController::updateFooter
* @see app/Http/Controllers/SettingsController.php:71
* @route '/api/settings/footer'
*/
export const updateFooter = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateFooter.url(options),
    method: 'post',
})

updateFooter.definition = {
    methods: ["post"],
    url: '/api/settings/footer',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateFooter
* @see app/Http/Controllers/SettingsController.php:71
* @route '/api/settings/footer'
*/
updateFooter.url = (options?: RouteQueryOptions) => {
    return updateFooter.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateFooter
* @see app/Http/Controllers/SettingsController.php:71
* @route '/api/settings/footer'
*/
updateFooter.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateFooter.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateFooter
* @see app/Http/Controllers/SettingsController.php:71
* @route '/api/settings/footer'
*/
const updateFooterForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateFooter.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateFooter
* @see app/Http/Controllers/SettingsController.php:71
* @route '/api/settings/footer'
*/
updateFooterForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateFooter.url(options),
    method: 'post',
})

updateFooter.form = updateFooterForm

/**
* @see \App\Http\Controllers\SettingsController::updateNavbar
* @see app/Http/Controllers/SettingsController.php:90
* @route '/api/settings/navbar'
*/
export const updateNavbar = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateNavbar.url(options),
    method: 'post',
})

updateNavbar.definition = {
    methods: ["post"],
    url: '/api/settings/navbar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateNavbar
* @see app/Http/Controllers/SettingsController.php:90
* @route '/api/settings/navbar'
*/
updateNavbar.url = (options?: RouteQueryOptions) => {
    return updateNavbar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateNavbar
* @see app/Http/Controllers/SettingsController.php:90
* @route '/api/settings/navbar'
*/
updateNavbar.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateNavbar.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateNavbar
* @see app/Http/Controllers/SettingsController.php:90
* @route '/api/settings/navbar'
*/
const updateNavbarForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateNavbar.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateNavbar
* @see app/Http/Controllers/SettingsController.php:90
* @route '/api/settings/navbar'
*/
updateNavbarForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateNavbar.url(options),
    method: 'post',
})

updateNavbar.form = updateNavbarForm

/**
* @see \App\Http\Controllers\SettingsController::updateCta
* @see app/Http/Controllers/SettingsController.php:109
* @route '/api/settings/cta'
*/
export const updateCta = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateCta.url(options),
    method: 'post',
})

updateCta.definition = {
    methods: ["post"],
    url: '/api/settings/cta',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateCta
* @see app/Http/Controllers/SettingsController.php:109
* @route '/api/settings/cta'
*/
updateCta.url = (options?: RouteQueryOptions) => {
    return updateCta.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateCta
* @see app/Http/Controllers/SettingsController.php:109
* @route '/api/settings/cta'
*/
updateCta.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateCta.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateCta
* @see app/Http/Controllers/SettingsController.php:109
* @route '/api/settings/cta'
*/
const updateCtaForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateCta.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateCta
* @see app/Http/Controllers/SettingsController.php:109
* @route '/api/settings/cta'
*/
updateCtaForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateCta.url(options),
    method: 'post',
})

updateCta.form = updateCtaForm

/**
* @see \App\Http\Controllers\SettingsController::updateHero
* @see app/Http/Controllers/SettingsController.php:126
* @route '/api/settings/hero'
*/
export const updateHero = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateHero.url(options),
    method: 'post',
})

updateHero.definition = {
    methods: ["post"],
    url: '/api/settings/hero',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateHero
* @see app/Http/Controllers/SettingsController.php:126
* @route '/api/settings/hero'
*/
updateHero.url = (options?: RouteQueryOptions) => {
    return updateHero.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateHero
* @see app/Http/Controllers/SettingsController.php:126
* @route '/api/settings/hero'
*/
updateHero.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateHero.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateHero
* @see app/Http/Controllers/SettingsController.php:126
* @route '/api/settings/hero'
*/
const updateHeroForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateHero.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateHero
* @see app/Http/Controllers/SettingsController.php:126
* @route '/api/settings/hero'
*/
updateHeroForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateHero.url(options),
    method: 'post',
})

updateHero.form = updateHeroForm

/**
* @see \App\Http\Controllers\SettingsController::updateServices
* @see app/Http/Controllers/SettingsController.php:163
* @route '/api/settings/services'
*/
export const updateServices = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateServices.url(options),
    method: 'post',
})

updateServices.definition = {
    methods: ["post"],
    url: '/api/settings/services',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateServices
* @see app/Http/Controllers/SettingsController.php:163
* @route '/api/settings/services'
*/
updateServices.url = (options?: RouteQueryOptions) => {
    return updateServices.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateServices
* @see app/Http/Controllers/SettingsController.php:163
* @route '/api/settings/services'
*/
updateServices.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateServices.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateServices
* @see app/Http/Controllers/SettingsController.php:163
* @route '/api/settings/services'
*/
const updateServicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateServices.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateServices
* @see app/Http/Controllers/SettingsController.php:163
* @route '/api/settings/services'
*/
updateServicesForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateServices.url(options),
    method: 'post',
})

updateServices.form = updateServicesForm

/**
* @see \App\Http\Controllers\SettingsController::updateWhy
* @see app/Http/Controllers/SettingsController.php:211
* @route '/api/settings/why'
*/
export const updateWhy = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateWhy.url(options),
    method: 'post',
})

updateWhy.definition = {
    methods: ["post"],
    url: '/api/settings/why',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateWhy
* @see app/Http/Controllers/SettingsController.php:211
* @route '/api/settings/why'
*/
updateWhy.url = (options?: RouteQueryOptions) => {
    return updateWhy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateWhy
* @see app/Http/Controllers/SettingsController.php:211
* @route '/api/settings/why'
*/
updateWhy.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateWhy.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateWhy
* @see app/Http/Controllers/SettingsController.php:211
* @route '/api/settings/why'
*/
const updateWhyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateWhy.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateWhy
* @see app/Http/Controllers/SettingsController.php:211
* @route '/api/settings/why'
*/
updateWhyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateWhy.url(options),
    method: 'post',
})

updateWhy.form = updateWhyForm

/**
* @see \App\Http\Controllers\SettingsController::updateAbout
* @see app/Http/Controllers/SettingsController.php:230
* @route '/api/settings/about'
*/
export const updateAbout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateAbout.url(options),
    method: 'post',
})

updateAbout.definition = {
    methods: ["post"],
    url: '/api/settings/about',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateAbout
* @see app/Http/Controllers/SettingsController.php:230
* @route '/api/settings/about'
*/
updateAbout.url = (options?: RouteQueryOptions) => {
    return updateAbout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateAbout
* @see app/Http/Controllers/SettingsController.php:230
* @route '/api/settings/about'
*/
updateAbout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateAbout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateAbout
* @see app/Http/Controllers/SettingsController.php:230
* @route '/api/settings/about'
*/
const updateAboutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateAbout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateAbout
* @see app/Http/Controllers/SettingsController.php:230
* @route '/api/settings/about'
*/
updateAboutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateAbout.url(options),
    method: 'post',
})

updateAbout.form = updateAboutForm

/**
* @see \App\Http\Controllers\SettingsController::updateGallery
* @see app/Http/Controllers/SettingsController.php:243
* @route '/api/settings/gallery'
*/
export const updateGallery = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateGallery.url(options),
    method: 'post',
})

updateGallery.definition = {
    methods: ["post"],
    url: '/api/settings/gallery',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateGallery
* @see app/Http/Controllers/SettingsController.php:243
* @route '/api/settings/gallery'
*/
updateGallery.url = (options?: RouteQueryOptions) => {
    return updateGallery.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateGallery
* @see app/Http/Controllers/SettingsController.php:243
* @route '/api/settings/gallery'
*/
updateGallery.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateGallery.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateGallery
* @see app/Http/Controllers/SettingsController.php:243
* @route '/api/settings/gallery'
*/
const updateGalleryForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateGallery.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateGallery
* @see app/Http/Controllers/SettingsController.php:243
* @route '/api/settings/gallery'
*/
updateGalleryForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateGallery.url(options),
    method: 'post',
})

updateGallery.form = updateGalleryForm

const SettingsController = { updateGeneral, uploadLogo, updateSocial, updateFooter, updateNavbar, updateCta, updateHero, updateServices, updateWhy, updateAbout, updateGallery }

export default SettingsController
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SettingsController::updateGeneral
* @see app/Http/Controllers/SettingsController.php:17
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
* @see app/Http/Controllers/SettingsController.php:17
* @route '/api/settings/general'
*/
updateGeneral.url = (options?: RouteQueryOptions) => {
    return updateGeneral.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateGeneral
* @see app/Http/Controllers/SettingsController.php:17
* @route '/api/settings/general'
*/
updateGeneral.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateGeneral.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateGeneral
* @see app/Http/Controllers/SettingsController.php:17
* @route '/api/settings/general'
*/
const updateGeneralForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateGeneral.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateGeneral
* @see app/Http/Controllers/SettingsController.php:17
* @route '/api/settings/general'
*/
updateGeneralForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateGeneral.url(options),
    method: 'post',
})

updateGeneral.form = updateGeneralForm

/**
* @see \App\Http\Controllers\SettingsController::uploadLogo
* @see app/Http/Controllers/SettingsController.php:34
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
* @see app/Http/Controllers/SettingsController.php:34
* @route '/api/settings/upload-logo'
*/
uploadLogo.url = (options?: RouteQueryOptions) => {
    return uploadLogo.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::uploadLogo
* @see app/Http/Controllers/SettingsController.php:34
* @route '/api/settings/upload-logo'
*/
uploadLogo.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadLogo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::uploadLogo
* @see app/Http/Controllers/SettingsController.php:34
* @route '/api/settings/upload-logo'
*/
const uploadLogoForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadLogo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::uploadLogo
* @see app/Http/Controllers/SettingsController.php:34
* @route '/api/settings/upload-logo'
*/
uploadLogoForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadLogo.url(options),
    method: 'post',
})

uploadLogo.form = uploadLogoForm

/**
* @see \App\Http\Controllers\SettingsController::updateSocial
* @see app/Http/Controllers/SettingsController.php:55
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
* @see app/Http/Controllers/SettingsController.php:55
* @route '/api/settings/social'
*/
updateSocial.url = (options?: RouteQueryOptions) => {
    return updateSocial.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateSocial
* @see app/Http/Controllers/SettingsController.php:55
* @route '/api/settings/social'
*/
updateSocial.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateSocial.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateSocial
* @see app/Http/Controllers/SettingsController.php:55
* @route '/api/settings/social'
*/
const updateSocialForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSocial.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateSocial
* @see app/Http/Controllers/SettingsController.php:55
* @route '/api/settings/social'
*/
updateSocialForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSocial.url(options),
    method: 'post',
})

updateSocial.form = updateSocialForm

/**
* @see \App\Http\Controllers\SettingsController::updateFooter
* @see app/Http/Controllers/SettingsController.php:74
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
* @see app/Http/Controllers/SettingsController.php:74
* @route '/api/settings/footer'
*/
updateFooter.url = (options?: RouteQueryOptions) => {
    return updateFooter.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateFooter
* @see app/Http/Controllers/SettingsController.php:74
* @route '/api/settings/footer'
*/
updateFooter.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateFooter.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateFooter
* @see app/Http/Controllers/SettingsController.php:74
* @route '/api/settings/footer'
*/
const updateFooterForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateFooter.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateFooter
* @see app/Http/Controllers/SettingsController.php:74
* @route '/api/settings/footer'
*/
updateFooterForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateFooter.url(options),
    method: 'post',
})

updateFooter.form = updateFooterForm

/**
* @see \App\Http\Controllers\SettingsController::updateNavbar
* @see app/Http/Controllers/SettingsController.php:93
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
* @see app/Http/Controllers/SettingsController.php:93
* @route '/api/settings/navbar'
*/
updateNavbar.url = (options?: RouteQueryOptions) => {
    return updateNavbar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateNavbar
* @see app/Http/Controllers/SettingsController.php:93
* @route '/api/settings/navbar'
*/
updateNavbar.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateNavbar.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateNavbar
* @see app/Http/Controllers/SettingsController.php:93
* @route '/api/settings/navbar'
*/
const updateNavbarForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateNavbar.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateNavbar
* @see app/Http/Controllers/SettingsController.php:93
* @route '/api/settings/navbar'
*/
updateNavbarForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateNavbar.url(options),
    method: 'post',
})

updateNavbar.form = updateNavbarForm

/**
* @see \App\Http\Controllers\SettingsController::updateCta
* @see app/Http/Controllers/SettingsController.php:112
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
* @see app/Http/Controllers/SettingsController.php:112
* @route '/api/settings/cta'
*/
updateCta.url = (options?: RouteQueryOptions) => {
    return updateCta.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateCta
* @see app/Http/Controllers/SettingsController.php:112
* @route '/api/settings/cta'
*/
updateCta.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateCta.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateCta
* @see app/Http/Controllers/SettingsController.php:112
* @route '/api/settings/cta'
*/
const updateCtaForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateCta.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateCta
* @see app/Http/Controllers/SettingsController.php:112
* @route '/api/settings/cta'
*/
updateCtaForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateCta.url(options),
    method: 'post',
})

updateCta.form = updateCtaForm

/**
* @see \App\Http\Controllers\SettingsController::updateHero
* @see app/Http/Controllers/SettingsController.php:129
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
* @see app/Http/Controllers/SettingsController.php:129
* @route '/api/settings/hero'
*/
updateHero.url = (options?: RouteQueryOptions) => {
    return updateHero.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateHero
* @see app/Http/Controllers/SettingsController.php:129
* @route '/api/settings/hero'
*/
updateHero.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateHero.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateHero
* @see app/Http/Controllers/SettingsController.php:129
* @route '/api/settings/hero'
*/
const updateHeroForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateHero.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateHero
* @see app/Http/Controllers/SettingsController.php:129
* @route '/api/settings/hero'
*/
updateHeroForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateHero.url(options),
    method: 'post',
})

updateHero.form = updateHeroForm

/**
* @see \App\Http\Controllers\SettingsController::updateServices
* @see app/Http/Controllers/SettingsController.php:166
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
* @see app/Http/Controllers/SettingsController.php:166
* @route '/api/settings/services'
*/
updateServices.url = (options?: RouteQueryOptions) => {
    return updateServices.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateServices
* @see app/Http/Controllers/SettingsController.php:166
* @route '/api/settings/services'
*/
updateServices.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateServices.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateServices
* @see app/Http/Controllers/SettingsController.php:166
* @route '/api/settings/services'
*/
const updateServicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateServices.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateServices
* @see app/Http/Controllers/SettingsController.php:166
* @route '/api/settings/services'
*/
updateServicesForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateServices.url(options),
    method: 'post',
})

updateServices.form = updateServicesForm

/**
* @see \App\Http\Controllers\SettingsController::updateWhy
* @see app/Http/Controllers/SettingsController.php:214
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
* @see app/Http/Controllers/SettingsController.php:214
* @route '/api/settings/why'
*/
updateWhy.url = (options?: RouteQueryOptions) => {
    return updateWhy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateWhy
* @see app/Http/Controllers/SettingsController.php:214
* @route '/api/settings/why'
*/
updateWhy.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateWhy.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateWhy
* @see app/Http/Controllers/SettingsController.php:214
* @route '/api/settings/why'
*/
const updateWhyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateWhy.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateWhy
* @see app/Http/Controllers/SettingsController.php:214
* @route '/api/settings/why'
*/
updateWhyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateWhy.url(options),
    method: 'post',
})

updateWhy.form = updateWhyForm

/**
* @see \App\Http\Controllers\SettingsController::updateAbout
* @see app/Http/Controllers/SettingsController.php:233
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
* @see app/Http/Controllers/SettingsController.php:233
* @route '/api/settings/about'
*/
updateAbout.url = (options?: RouteQueryOptions) => {
    return updateAbout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateAbout
* @see app/Http/Controllers/SettingsController.php:233
* @route '/api/settings/about'
*/
updateAbout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateAbout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateAbout
* @see app/Http/Controllers/SettingsController.php:233
* @route '/api/settings/about'
*/
const updateAboutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateAbout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateAbout
* @see app/Http/Controllers/SettingsController.php:233
* @route '/api/settings/about'
*/
updateAboutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateAbout.url(options),
    method: 'post',
})

updateAbout.form = updateAboutForm

/**
* @see \App\Http\Controllers\SettingsController::updateGallery
* @see app/Http/Controllers/SettingsController.php:246
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
* @see app/Http/Controllers/SettingsController.php:246
* @route '/api/settings/gallery'
*/
updateGallery.url = (options?: RouteQueryOptions) => {
    return updateGallery.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateGallery
* @see app/Http/Controllers/SettingsController.php:246
* @route '/api/settings/gallery'
*/
updateGallery.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateGallery.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateGallery
* @see app/Http/Controllers/SettingsController.php:246
* @route '/api/settings/gallery'
*/
const updateGalleryForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateGallery.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateGallery
* @see app/Http/Controllers/SettingsController.php:246
* @route '/api/settings/gallery'
*/
updateGalleryForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateGallery.url(options),
    method: 'post',
})

updateGallery.form = updateGalleryForm

/**
* @see \App\Http\Controllers\SettingsController::updateHomeSeo
* @see app/Http/Controllers/SettingsController.php:1080
* @route '/api/settings/home-seo'
*/
export const updateHomeSeo = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateHomeSeo.url(options),
    method: 'post',
})

updateHomeSeo.definition = {
    methods: ["post"],
    url: '/api/settings/home-seo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateHomeSeo
* @see app/Http/Controllers/SettingsController.php:1080
* @route '/api/settings/home-seo'
*/
updateHomeSeo.url = (options?: RouteQueryOptions) => {
    return updateHomeSeo.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateHomeSeo
* @see app/Http/Controllers/SettingsController.php:1080
* @route '/api/settings/home-seo'
*/
updateHomeSeo.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateHomeSeo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateHomeSeo
* @see app/Http/Controllers/SettingsController.php:1080
* @route '/api/settings/home-seo'
*/
const updateHomeSeoForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateHomeSeo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateHomeSeo
* @see app/Http/Controllers/SettingsController.php:1080
* @route '/api/settings/home-seo'
*/
updateHomeSeoForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateHomeSeo.url(options),
    method: 'post',
})

updateHomeSeo.form = updateHomeSeoForm

/**
* @see \App\Http\Controllers\SettingsController::updateContactHero
* @see app/Http/Controllers/SettingsController.php:294
* @route '/api/settings/contact-hero'
*/
export const updateContactHero = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateContactHero.url(options),
    method: 'post',
})

updateContactHero.definition = {
    methods: ["post"],
    url: '/api/settings/contact-hero',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateContactHero
* @see app/Http/Controllers/SettingsController.php:294
* @route '/api/settings/contact-hero'
*/
updateContactHero.url = (options?: RouteQueryOptions) => {
    return updateContactHero.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateContactHero
* @see app/Http/Controllers/SettingsController.php:294
* @route '/api/settings/contact-hero'
*/
updateContactHero.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateContactHero.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateContactHero
* @see app/Http/Controllers/SettingsController.php:294
* @route '/api/settings/contact-hero'
*/
const updateContactHeroForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateContactHero.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateContactHero
* @see app/Http/Controllers/SettingsController.php:294
* @route '/api/settings/contact-hero'
*/
updateContactHeroForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateContactHero.url(options),
    method: 'post',
})

updateContactHero.form = updateContactHeroForm

/**
* @see \App\Http\Controllers\SettingsController::updateContactMap
* @see app/Http/Controllers/SettingsController.php:546
* @route '/api/settings/contact-map'
*/
export const updateContactMap = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateContactMap.url(options),
    method: 'post',
})

updateContactMap.definition = {
    methods: ["post"],
    url: '/api/settings/contact-map',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateContactMap
* @see app/Http/Controllers/SettingsController.php:546
* @route '/api/settings/contact-map'
*/
updateContactMap.url = (options?: RouteQueryOptions) => {
    return updateContactMap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateContactMap
* @see app/Http/Controllers/SettingsController.php:546
* @route '/api/settings/contact-map'
*/
updateContactMap.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateContactMap.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateContactMap
* @see app/Http/Controllers/SettingsController.php:546
* @route '/api/settings/contact-map'
*/
const updateContactMapForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateContactMap.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateContactMap
* @see app/Http/Controllers/SettingsController.php:546
* @route '/api/settings/contact-map'
*/
updateContactMapForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateContactMap.url(options),
    method: 'post',
})

updateContactMap.form = updateContactMapForm

/**
* @see \App\Http\Controllers\SettingsController::updateContactSeo
* @see app/Http/Controllers/SettingsController.php:804
* @route '/api/settings/contact-seo'
*/
export const updateContactSeo = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateContactSeo.url(options),
    method: 'post',
})

updateContactSeo.definition = {
    methods: ["post"],
    url: '/api/settings/contact-seo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateContactSeo
* @see app/Http/Controllers/SettingsController.php:804
* @route '/api/settings/contact-seo'
*/
updateContactSeo.url = (options?: RouteQueryOptions) => {
    return updateContactSeo.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateContactSeo
* @see app/Http/Controllers/SettingsController.php:804
* @route '/api/settings/contact-seo'
*/
updateContactSeo.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateContactSeo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateContactSeo
* @see app/Http/Controllers/SettingsController.php:804
* @route '/api/settings/contact-seo'
*/
const updateContactSeoForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateContactSeo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateContactSeo
* @see app/Http/Controllers/SettingsController.php:804
* @route '/api/settings/contact-seo'
*/
updateContactSeoForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateContactSeo.url(options),
    method: 'post',
})

updateContactSeo.form = updateContactSeoForm

/**
* @see \App\Http\Controllers\SettingsController::updatePortfolioSeo
* @see app/Http/Controllers/SettingsController.php:873
* @route '/api/settings/portfolio-seo'
*/
export const updatePortfolioSeo = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updatePortfolioSeo.url(options),
    method: 'post',
})

updatePortfolioSeo.definition = {
    methods: ["post"],
    url: '/api/settings/portfolio-seo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updatePortfolioSeo
* @see app/Http/Controllers/SettingsController.php:873
* @route '/api/settings/portfolio-seo'
*/
updatePortfolioSeo.url = (options?: RouteQueryOptions) => {
    return updatePortfolioSeo.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updatePortfolioSeo
* @see app/Http/Controllers/SettingsController.php:873
* @route '/api/settings/portfolio-seo'
*/
updatePortfolioSeo.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updatePortfolioSeo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updatePortfolioSeo
* @see app/Http/Controllers/SettingsController.php:873
* @route '/api/settings/portfolio-seo'
*/
const updatePortfolioSeoForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatePortfolioSeo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updatePortfolioSeo
* @see app/Http/Controllers/SettingsController.php:873
* @route '/api/settings/portfolio-seo'
*/
updatePortfolioSeoForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatePortfolioSeo.url(options),
    method: 'post',
})

updatePortfolioSeo.form = updatePortfolioSeoForm

/**
* @see \App\Http\Controllers\SettingsController::updateDroneSeo
* @see app/Http/Controllers/SettingsController.php:942
* @route '/api/settings/drone-seo'
*/
export const updateDroneSeo = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateDroneSeo.url(options),
    method: 'post',
})

updateDroneSeo.definition = {
    methods: ["post"],
    url: '/api/settings/drone-seo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateDroneSeo
* @see app/Http/Controllers/SettingsController.php:942
* @route '/api/settings/drone-seo'
*/
updateDroneSeo.url = (options?: RouteQueryOptions) => {
    return updateDroneSeo.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateDroneSeo
* @see app/Http/Controllers/SettingsController.php:942
* @route '/api/settings/drone-seo'
*/
updateDroneSeo.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateDroneSeo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateDroneSeo
* @see app/Http/Controllers/SettingsController.php:942
* @route '/api/settings/drone-seo'
*/
const updateDroneSeoForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateDroneSeo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateDroneSeo
* @see app/Http/Controllers/SettingsController.php:942
* @route '/api/settings/drone-seo'
*/
updateDroneSeoForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateDroneSeo.url(options),
    method: 'post',
})

updateDroneSeo.form = updateDroneSeoForm

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseSeo
* @see app/Http/Controllers/SettingsController.php:1011
* @route '/api/settings/timelapse-seo'
*/
export const updateTimelapseSeo = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateTimelapseSeo.url(options),
    method: 'post',
})

updateTimelapseSeo.definition = {
    methods: ["post"],
    url: '/api/settings/timelapse-seo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseSeo
* @see app/Http/Controllers/SettingsController.php:1011
* @route '/api/settings/timelapse-seo'
*/
updateTimelapseSeo.url = (options?: RouteQueryOptions) => {
    return updateTimelapseSeo.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseSeo
* @see app/Http/Controllers/SettingsController.php:1011
* @route '/api/settings/timelapse-seo'
*/
updateTimelapseSeo.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateTimelapseSeo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseSeo
* @see app/Http/Controllers/SettingsController.php:1011
* @route '/api/settings/timelapse-seo'
*/
const updateTimelapseSeoForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateTimelapseSeo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseSeo
* @see app/Http/Controllers/SettingsController.php:1011
* @route '/api/settings/timelapse-seo'
*/
updateTimelapseSeoForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateTimelapseSeo.url(options),
    method: 'post',
})

updateTimelapseSeo.form = updateTimelapseSeoForm

/**
* @see \App\Http\Controllers\SettingsController::updatePortfolioHero
* @see app/Http/Controllers/SettingsController.php:357
* @route '/api/settings/portfolio-hero'
*/
export const updatePortfolioHero = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updatePortfolioHero.url(options),
    method: 'post',
})

updatePortfolioHero.definition = {
    methods: ["post"],
    url: '/api/settings/portfolio-hero',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updatePortfolioHero
* @see app/Http/Controllers/SettingsController.php:357
* @route '/api/settings/portfolio-hero'
*/
updatePortfolioHero.url = (options?: RouteQueryOptions) => {
    return updatePortfolioHero.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updatePortfolioHero
* @see app/Http/Controllers/SettingsController.php:357
* @route '/api/settings/portfolio-hero'
*/
updatePortfolioHero.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updatePortfolioHero.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updatePortfolioHero
* @see app/Http/Controllers/SettingsController.php:357
* @route '/api/settings/portfolio-hero'
*/
const updatePortfolioHeroForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatePortfolioHero.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updatePortfolioHero
* @see app/Http/Controllers/SettingsController.php:357
* @route '/api/settings/portfolio-hero'
*/
updatePortfolioHeroForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatePortfolioHero.url(options),
    method: 'post',
})

updatePortfolioHero.form = updatePortfolioHeroForm

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseHero
* @see app/Http/Controllers/SettingsController.php:420
* @route '/api/settings/timelapse-hero'
*/
export const updateTimelapseHero = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateTimelapseHero.url(options),
    method: 'post',
})

updateTimelapseHero.definition = {
    methods: ["post"],
    url: '/api/settings/timelapse-hero',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseHero
* @see app/Http/Controllers/SettingsController.php:420
* @route '/api/settings/timelapse-hero'
*/
updateTimelapseHero.url = (options?: RouteQueryOptions) => {
    return updateTimelapseHero.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseHero
* @see app/Http/Controllers/SettingsController.php:420
* @route '/api/settings/timelapse-hero'
*/
updateTimelapseHero.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateTimelapseHero.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseHero
* @see app/Http/Controllers/SettingsController.php:420
* @route '/api/settings/timelapse-hero'
*/
const updateTimelapseHeroForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateTimelapseHero.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseHero
* @see app/Http/Controllers/SettingsController.php:420
* @route '/api/settings/timelapse-hero'
*/
updateTimelapseHeroForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateTimelapseHero.url(options),
    method: 'post',
})

updateTimelapseHero.form = updateTimelapseHeroForm

/**
* @see \App\Http\Controllers\SettingsController::updateDroneHero
* @see app/Http/Controllers/SettingsController.php:483
* @route '/api/settings/drone-hero'
*/
export const updateDroneHero = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateDroneHero.url(options),
    method: 'post',
})

updateDroneHero.definition = {
    methods: ["post"],
    url: '/api/settings/drone-hero',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateDroneHero
* @see app/Http/Controllers/SettingsController.php:483
* @route '/api/settings/drone-hero'
*/
updateDroneHero.url = (options?: RouteQueryOptions) => {
    return updateDroneHero.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateDroneHero
* @see app/Http/Controllers/SettingsController.php:483
* @route '/api/settings/drone-hero'
*/
updateDroneHero.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateDroneHero.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateDroneHero
* @see app/Http/Controllers/SettingsController.php:483
* @route '/api/settings/drone-hero'
*/
const updateDroneHeroForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateDroneHero.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateDroneHero
* @see app/Http/Controllers/SettingsController.php:483
* @route '/api/settings/drone-hero'
*/
updateDroneHeroForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateDroneHero.url(options),
    method: 'post',
})

updateDroneHero.form = updateDroneHeroForm

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseDetail
* @see app/Http/Controllers/SettingsController.php:567
* @route '/api/settings/timelapse-detail'
*/
export const updateTimelapseDetail = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateTimelapseDetail.url(options),
    method: 'post',
})

updateTimelapseDetail.definition = {
    methods: ["post"],
    url: '/api/settings/timelapse-detail',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseDetail
* @see app/Http/Controllers/SettingsController.php:567
* @route '/api/settings/timelapse-detail'
*/
updateTimelapseDetail.url = (options?: RouteQueryOptions) => {
    return updateTimelapseDetail.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseDetail
* @see app/Http/Controllers/SettingsController.php:567
* @route '/api/settings/timelapse-detail'
*/
updateTimelapseDetail.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateTimelapseDetail.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseDetail
* @see app/Http/Controllers/SettingsController.php:567
* @route '/api/settings/timelapse-detail'
*/
const updateTimelapseDetailForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateTimelapseDetail.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseDetail
* @see app/Http/Controllers/SettingsController.php:567
* @route '/api/settings/timelapse-detail'
*/
updateTimelapseDetailForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateTimelapseDetail.url(options),
    method: 'post',
})

updateTimelapseDetail.form = updateTimelapseDetailForm

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseVideos
* @see app/Http/Controllers/SettingsController.php:627
* @route '/api/settings/timelapse-videos'
*/
export const updateTimelapseVideos = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateTimelapseVideos.url(options),
    method: 'post',
})

updateTimelapseVideos.definition = {
    methods: ["post"],
    url: '/api/settings/timelapse-videos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseVideos
* @see app/Http/Controllers/SettingsController.php:627
* @route '/api/settings/timelapse-videos'
*/
updateTimelapseVideos.url = (options?: RouteQueryOptions) => {
    return updateTimelapseVideos.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseVideos
* @see app/Http/Controllers/SettingsController.php:627
* @route '/api/settings/timelapse-videos'
*/
updateTimelapseVideos.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateTimelapseVideos.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseVideos
* @see app/Http/Controllers/SettingsController.php:627
* @route '/api/settings/timelapse-videos'
*/
const updateTimelapseVideosForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateTimelapseVideos.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateTimelapseVideos
* @see app/Http/Controllers/SettingsController.php:627
* @route '/api/settings/timelapse-videos'
*/
updateTimelapseVideosForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateTimelapseVideos.url(options),
    method: 'post',
})

updateTimelapseVideos.form = updateTimelapseVideosForm

/**
* @see \App\Http\Controllers\SettingsController::updateDroneDetail
* @see app/Http/Controllers/SettingsController.php:665
* @route '/api/settings/drone-detail'
*/
export const updateDroneDetail = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateDroneDetail.url(options),
    method: 'post',
})

updateDroneDetail.definition = {
    methods: ["post"],
    url: '/api/settings/drone-detail',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateDroneDetail
* @see app/Http/Controllers/SettingsController.php:665
* @route '/api/settings/drone-detail'
*/
updateDroneDetail.url = (options?: RouteQueryOptions) => {
    return updateDroneDetail.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateDroneDetail
* @see app/Http/Controllers/SettingsController.php:665
* @route '/api/settings/drone-detail'
*/
updateDroneDetail.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateDroneDetail.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateDroneDetail
* @see app/Http/Controllers/SettingsController.php:665
* @route '/api/settings/drone-detail'
*/
const updateDroneDetailForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateDroneDetail.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateDroneDetail
* @see app/Http/Controllers/SettingsController.php:665
* @route '/api/settings/drone-detail'
*/
updateDroneDetailForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateDroneDetail.url(options),
    method: 'post',
})

updateDroneDetail.form = updateDroneDetailForm

/**
* @see \App\Http\Controllers\SettingsController::updateProfile
* @see app/Http/Controllers/SettingsController.php:760
* @route '/api/settings/profile'
*/
export const updateProfile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProfile.url(options),
    method: 'post',
})

updateProfile.definition = {
    methods: ["post"],
    url: '/api/settings/profile',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::updateProfile
* @see app/Http/Controllers/SettingsController.php:760
* @route '/api/settings/profile'
*/
updateProfile.url = (options?: RouteQueryOptions) => {
    return updateProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::updateProfile
* @see app/Http/Controllers/SettingsController.php:760
* @route '/api/settings/profile'
*/
updateProfile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProfile.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateProfile
* @see app/Http/Controllers/SettingsController.php:760
* @route '/api/settings/profile'
*/
const updateProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProfile.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::updateProfile
* @see app/Http/Controllers/SettingsController.php:760
* @route '/api/settings/profile'
*/
updateProfileForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProfile.url(options),
    method: 'post',
})

updateProfile.form = updateProfileForm

/**
* @see \App\Http\Controllers\SettingsController::storeAdmin
* @see app/Http/Controllers/SettingsController.php:785
* @route '/api/settings/new-admin'
*/
export const storeAdmin = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeAdmin.url(options),
    method: 'post',
})

storeAdmin.definition = {
    methods: ["post"],
    url: '/api/settings/new-admin',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::storeAdmin
* @see app/Http/Controllers/SettingsController.php:785
* @route '/api/settings/new-admin'
*/
storeAdmin.url = (options?: RouteQueryOptions) => {
    return storeAdmin.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::storeAdmin
* @see app/Http/Controllers/SettingsController.php:785
* @route '/api/settings/new-admin'
*/
storeAdmin.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeAdmin.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::storeAdmin
* @see app/Http/Controllers/SettingsController.php:785
* @route '/api/settings/new-admin'
*/
const storeAdminForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeAdmin.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::storeAdmin
* @see app/Http/Controllers/SettingsController.php:785
* @route '/api/settings/new-admin'
*/
storeAdminForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeAdmin.url(options),
    method: 'post',
})

storeAdmin.form = storeAdminForm

const SettingsController = { updateGeneral, uploadLogo, updateSocial, updateFooter, updateNavbar, updateCta, updateHero, updateServices, updateWhy, updateAbout, updateGallery, updateHomeSeo, updateContactHero, updateContactMap, updateContactSeo, updatePortfolioSeo, updateDroneSeo, updateTimelapseSeo, updatePortfolioHero, updateTimelapseHero, updateDroneHero, updateTimelapseDetail, updateTimelapseVideos, updateDroneDetail, updateProfile, storeAdmin }

export default SettingsController
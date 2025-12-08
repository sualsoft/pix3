import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see routes/dashboard.php:36
* @route '/dashboard/home/hero'
*/
export const hero = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hero.url(options),
    method: 'get',
})

hero.definition = {
    methods: ["get","head"],
    url: '/dashboard/home/hero',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:36
* @route '/dashboard/home/hero'
*/
hero.url = (options?: RouteQueryOptions) => {
    return hero.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:36
* @route '/dashboard/home/hero'
*/
hero.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:36
* @route '/dashboard/home/hero'
*/
hero.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: hero.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:36
* @route '/dashboard/home/hero'
*/
const heroForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: hero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:36
* @route '/dashboard/home/hero'
*/
heroForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: hero.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:36
* @route '/dashboard/home/hero'
*/
heroForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: hero.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

hero.form = heroForm

/**
* @see routes/dashboard.php:40
* @route '/dashboard/home/about'
*/
export const about = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

about.definition = {
    methods: ["get","head"],
    url: '/dashboard/home/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:40
* @route '/dashboard/home/about'
*/
about.url = (options?: RouteQueryOptions) => {
    return about.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:40
* @route '/dashboard/home/about'
*/
about.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:40
* @route '/dashboard/home/about'
*/
about.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: about.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:40
* @route '/dashboard/home/about'
*/
const aboutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:40
* @route '/dashboard/home/about'
*/
aboutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:40
* @route '/dashboard/home/about'
*/
aboutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

about.form = aboutForm

/**
* @see routes/dashboard.php:44
* @route '/dashboard/home/services'
*/
export const services = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

services.definition = {
    methods: ["get","head"],
    url: '/dashboard/home/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:44
* @route '/dashboard/home/services'
*/
services.url = (options?: RouteQueryOptions) => {
    return services.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:44
* @route '/dashboard/home/services'
*/
services.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:44
* @route '/dashboard/home/services'
*/
services.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: services.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:44
* @route '/dashboard/home/services'
*/
const servicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:44
* @route '/dashboard/home/services'
*/
servicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:44
* @route '/dashboard/home/services'
*/
servicesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

services.form = servicesForm

/**
* @see routes/dashboard.php:48
* @route '/dashboard/home/testimonials'
*/
export const testimonials = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: testimonials.url(options),
    method: 'get',
})

testimonials.definition = {
    methods: ["get","head"],
    url: '/dashboard/home/testimonials',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:48
* @route '/dashboard/home/testimonials'
*/
testimonials.url = (options?: RouteQueryOptions) => {
    return testimonials.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:48
* @route '/dashboard/home/testimonials'
*/
testimonials.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: testimonials.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:48
* @route '/dashboard/home/testimonials'
*/
testimonials.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: testimonials.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:48
* @route '/dashboard/home/testimonials'
*/
const testimonialsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: testimonials.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:48
* @route '/dashboard/home/testimonials'
*/
testimonialsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: testimonials.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:48
* @route '/dashboard/home/testimonials'
*/
testimonialsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: testimonials.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

testimonials.form = testimonialsForm

/**
* @see routes/dashboard.php:52
* @route '/dashboard/home/why-pix3'
*/
export const whyPix3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: whyPix3.url(options),
    method: 'get',
})

whyPix3.definition = {
    methods: ["get","head"],
    url: '/dashboard/home/why-pix3',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:52
* @route '/dashboard/home/why-pix3'
*/
whyPix3.url = (options?: RouteQueryOptions) => {
    return whyPix3.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:52
* @route '/dashboard/home/why-pix3'
*/
whyPix3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: whyPix3.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:52
* @route '/dashboard/home/why-pix3'
*/
whyPix3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: whyPix3.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:52
* @route '/dashboard/home/why-pix3'
*/
const whyPix3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: whyPix3.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:52
* @route '/dashboard/home/why-pix3'
*/
whyPix3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: whyPix3.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:52
* @route '/dashboard/home/why-pix3'
*/
whyPix3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: whyPix3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

whyPix3.form = whyPix3Form

/**
* @see routes/dashboard.php:56
* @route '/dashboard/home/gallery'
*/
export const gallery = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gallery.url(options),
    method: 'get',
})

gallery.definition = {
    methods: ["get","head"],
    url: '/dashboard/home/gallery',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:56
* @route '/dashboard/home/gallery'
*/
gallery.url = (options?: RouteQueryOptions) => {
    return gallery.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:56
* @route '/dashboard/home/gallery'
*/
gallery.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gallery.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:56
* @route '/dashboard/home/gallery'
*/
gallery.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: gallery.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:56
* @route '/dashboard/home/gallery'
*/
const galleryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gallery.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:56
* @route '/dashboard/home/gallery'
*/
galleryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gallery.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:56
* @route '/dashboard/home/gallery'
*/
galleryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gallery.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

gallery.form = galleryForm

/**
* @see routes/dashboard.php:60
* @route '/dashboard/home/cta'
*/
export const cta = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cta.url(options),
    method: 'get',
})

cta.definition = {
    methods: ["get","head"],
    url: '/dashboard/home/cta',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/dashboard.php:60
* @route '/dashboard/home/cta'
*/
cta.url = (options?: RouteQueryOptions) => {
    return cta.definition.url + queryParams(options)
}

/**
* @see routes/dashboard.php:60
* @route '/dashboard/home/cta'
*/
cta.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cta.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:60
* @route '/dashboard/home/cta'
*/
cta.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cta.url(options),
    method: 'head',
})

/**
* @see routes/dashboard.php:60
* @route '/dashboard/home/cta'
*/
const ctaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cta.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:60
* @route '/dashboard/home/cta'
*/
ctaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cta.url(options),
    method: 'get',
})

/**
* @see routes/dashboard.php:60
* @route '/dashboard/home/cta'
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

const home = {
    hero: Object.assign(hero, hero),
    about: Object.assign(about, about),
    services: Object.assign(services, services),
    testimonials: Object.assign(testimonials, testimonials),
    whyPix3: Object.assign(whyPix3, whyPix3),
    gallery: Object.assign(gallery, gallery),
    cta: Object.assign(cta, cta),
}

export default home
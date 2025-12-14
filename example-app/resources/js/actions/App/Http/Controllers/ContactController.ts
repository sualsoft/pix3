import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContactController::sendEmail
* @see app/Http/Controllers/ContactController.php:11
* @route '/api/contact-send'
*/
export const sendEmail = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendEmail.url(options),
    method: 'post',
})

sendEmail.definition = {
    methods: ["post"],
    url: '/api/contact-send',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContactController::sendEmail
* @see app/Http/Controllers/ContactController.php:11
* @route '/api/contact-send'
*/
sendEmail.url = (options?: RouteQueryOptions) => {
    return sendEmail.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::sendEmail
* @see app/Http/Controllers/ContactController.php:11
* @route '/api/contact-send'
*/
sendEmail.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendEmail.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ContactController::sendEmail
* @see app/Http/Controllers/ContactController.php:11
* @route '/api/contact-send'
*/
const sendEmailForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendEmail.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ContactController::sendEmail
* @see app/Http/Controllers/ContactController.php:11
* @route '/api/contact-send'
*/
sendEmailForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendEmail.url(options),
    method: 'post',
})

sendEmail.form = sendEmailForm

const ContactController = { sendEmail }

export default ContactController
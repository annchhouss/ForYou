import {formspreeEndpoint} from '../config/formspree'

export async function sendToFormspree(data, type) {
    const formData = new FormData()
    
    formData.append('name', data.name || '')
    formData.append('email', data.email || '')
    
    if (data.phone !== undefined) {
        formData.append('phone', data.phone)
    }
    
    if (type === 'contactForm') {
        formData.append('eventType', Array.isArray(data.eventType) ? data.eventType.join(', ') : (data.eventType || ''))
        formData.append('budget', Array.isArray(data.budget) ? `${data.budget[0]} - ${data.budget[1]}` : (data.budget || ''))
    }
    
    if (data.message) {
        formData.append('message', data.message)
    }
    
    formData.append('formType', type)

    try {
        const response = await fetch(formspreeEndpoint, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        
        return response.ok
    } catch (error) {
        console.error('Formspree error:', error)
        return false
    }
}

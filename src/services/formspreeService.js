import {formspreeEndpoint} from '../config/formspree'

export async function sendToFormspree(data, type) {
    const formData = new FormData()

    formData.append('Имя', data.name || '')
    formData.append('Телефон', data.phone || '')
    formData.append('Почта', data.email || '—')

    if (type === 'contactForm') {
        formData.append('Тип мероприятия', Array.isArray(data.eventType) ? data.eventType.join(', ') : (data.eventType || ''))
        formData.append('Бюджет', Array.isArray(data.budget) ? `${data.budget[0]} - ${data.budget[1]}` : (data.budget || ''))
    }

    if (data.message) {
        formData.append('Сообщение', data.message)
    }

    formData.append('Тип формы', type === 'contactForm' ? 'Заявка' : 'Сотрудничество')

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

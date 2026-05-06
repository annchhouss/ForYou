const ALLOWED_EMAIL_DOMAINS = new Set([
    'gmail.com',
    'yandex.ru',
    'ya.ru',
    'mail.ru',
    'bk.ru',
    'inbox.ru',
    'list.ru',
    'rambler.ru',
    'outlook.com',
    'hotmail.com',
    'live.com',
    'icloud.com',
    'yahoo.com',
    'proton.me',
    'protonmail.com',
    'aol.com',
    'zoho.com'
])

export function digitsOnly(value) {
    return String(value ?? '').replace(/\D/g, '')
}

export function normalizeRuPhoneDigits(value) {
    const digits = digitsOnly(value)

    if (digits.length === 0) return '7'

    if (digits.startsWith('8')) return '7' + digits.slice(1, 11)
    if (digits.startsWith('7')) return digits.slice(0, 11)
    return ('7' + digits).slice(0, 11)
}

export function formatRuPhone(value) {
    const digits = normalizeRuPhoneDigits(value)

    const d1 = digits.slice(0, 1)
    const d2 = digits.slice(1, 4)
    const d3 = digits.slice(4, 7)
    const d4 = digits.slice(7, 9) 
    const d5 = digits.slice(9, 11)

    if (digits.length <= 1) return `+${d1}`
    if (digits.length <= 4) return `+${d1} (${d2}`
    if (digits.length <= 7) return `+${d1} (${d2}) ${d3}`
    if (digits.length <= 9) return `+${d1} (${d2}) ${d3}-${d4}`
    return `+${d1} (${d2}) ${d3}-${d4}-${d5}`
}

export function validateRuPhone(value) {
    const digits = normalizeRuPhoneDigits(value)
    if (digits.length !== 11) {
        return 'Введите номер полностью (11 цифр). Пример: +7 (999) 999-99-99'
    }
    if (!digits.startsWith('7')) {
        return 'Номер должен начинаться с +7'
    }
    return ''
}

export function validateEmailCommonDomains(value) {
    const email = String(value ?? '').trim().toLowerCase()
    if (!email) return 'Почта обязательна для заполнения'

    const atIndex = email.indexOf('@')
    if (atIndex <= 0 || atIndex === email.length - 1) {
        return 'Укажите корректную почту (должен быть символ @)'
    }

    const [local, domain] = email.split('@')
    if (!local || !domain) return 'Укажите корректную почту'

    if (!ALLOWED_EMAIL_DOMAINS.has(domain)) {
        return 'Домен почты не поддерживается. Используйте общепринятые домены (например, gmail.com, yandex.ru, mail.ru)'
    }

    return ''
}


import {describe, it, expect} from 'vitest'
import {ADMIN_LOGIN_ERROR, checkAdminPassword} from '@/utils/adminLoginCheck.js'

describe('Админка — вход по паролю', () => {
    it('ошибка «Неверный пароль», если пароль не совпал', () => {
        const r = checkAdminPassword('не_тот_пароль', 'admin')
        expect(r.ok).toBe(false)
        expect(r.error).toBe(ADMIN_LOGIN_ERROR)
    })
})

import {readFileSync} from 'node:fs'
import {fileURLToPath} from 'node:url'
import {dirname, join} from 'node:path'
import {describe, it, expect} from 'vitest'

const loginViewPath = join(dirname(fileURLToPath(import.meta.url)), '../../admin/templates/login.view.php')

describe('Страница входа в админ-панель', () => {
    it('Вывод ошибки при неверном пароле', () => {
        const html = readFileSync(loginViewPath, 'utf-8')
        expect(html).toContain('login-error')
        expect(html).toContain('htmlspecialchars($error)')
    })
})

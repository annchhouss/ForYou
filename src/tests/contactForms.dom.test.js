import {describe, it, expect, vi, beforeEach} from 'vitest'
import {nextTick} from 'vue'
import {mount, flushPromises} from '@vue/test-utils'
import AppContactForm from '@/components/ui/AppContactForm/AppContactForm.vue'
import AppContactModal from '@/components/ui/AppContactModal/AppContactModal.vue'
import * as formspreeService from '@/services/formspreeService'

const AGREEMENT_REQUIRED_TEXT =
    'Необходимо согласие на обработку персональных данных. Поле обязательно для заполнения.'

vi.mock('@/services/formspreeService', () => ({
    sendToFormspree: vi.fn(() => Promise.resolve(true))
}))

beforeEach(() => {
    vi.clearAllMocks()
    globalThis.fetch = vi.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({success: true})
        })
    )
})

describe('Формы — согласие на ПД (чекбокс обязателен)', () => {
    it('«Контакты»: без галочки — видна ошибка, заявка не уходит на сервер', async () => {
        const wrapper = mount(AppContactForm)

        await wrapper.get('[placeholder="Введите Ваше имя*"]').setValue('Тест')
        await wrapper.get('[placeholder="+7 (XXX) XXX-XX-XX"]').setValue('+79991234567')

        await wrapper.find('form').trigger('submit')
        await flushPromises()

        const err = wrapper.find('.agreement-error')
        expect(err.exists()).toBe(true)
        expect(err.text()).toBe(AGREEMENT_REQUIRED_TEXT)
        expect(err.text()).toMatch(/обязательно/i)

        expect(formspreeService.sendToFormspree).not.toHaveBeenCalled()
        expect(globalThis.fetch).not.toHaveBeenCalled()
    })

    it('Модальное окно: без галочки — видна ошибка, заявка не уходит на сервер', async () => {
        const wrapper = mount(AppContactModal, {
            props: {isOpen: true},
            attachTo: document.body
        })
        await nextTick()
        await flushPromises()

        const root = document.querySelector('.modal-overlay')
        expect(root).toBeTruthy()

        const nameInput = root.querySelector('input[placeholder="Введите ваше имя"]')
        const phoneInput = root.querySelector('input[placeholder="+7 (XXX) XXX-XX-XX"]')
        nameInput.value = 'Тест'
        nameInput.dispatchEvent(new InputEvent('input', {bubbles: true}))
        phoneInput.value = '+79991234567'
        phoneInput.dispatchEvent(new InputEvent('input', {bubbles: true}))
        await nextTick()

        root.querySelector('.modal-form').dispatchEvent(
            new Event('submit', {bubbles: true, cancelable: true})
        )
        await flushPromises()

        const err = root.querySelector('.agreement-error')
        expect(err).toBeTruthy()
        expect(err.textContent).toBe(AGREEMENT_REQUIRED_TEXT)

        expect(formspreeService.sendToFormspree).not.toHaveBeenCalled()
        expect(globalThis.fetch).not.toHaveBeenCalled()

        wrapper.unmount()
    })
})

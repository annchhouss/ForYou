<script setup>
import {ref, computed} from 'vue'

import AppButton from '@/components/ui/AppButton/AppButton.vue'

import {eventTypes} from '@models/homeData'
import {sendToFormspree} from '@/services/formspreeService'
import {formatRuPhone, validateEmailCommonDomains, validateRuPhone} from '@/utils/contactFormValidation'

const props = defineProps({
    initialBudget: {
        type: Array,
        default: () => [200000, 500000]
    }
})

const emit = defineEmits(['submit'])

const form = ref({
    name: '',
    email: '',
    phone: '',
    eventType: [],
    budget: props.initialBudget,
    message: '',
    agreement: false
})

const MIN_BUDGET = 50000
const MAX_BUDGET = 1000000
const RANGE = MAX_BUDGET - MIN_BUDGET

const minPosition = computed(() => {
    return ((form.value.budget[0] - MIN_BUDGET) / RANGE) * 100 + '%'
})

const maxPosition = computed(() => {
    return ((form.value.budget[1] - MIN_BUDGET) / RANGE) * 100 + '%'
})

function formatPrice(value) {
    return new Intl.NumberFormat('ru-RU').format(value)
}

function ensureMinLessThanMax(changedIndex) {
    if (form.value.budget[0] > form.value.budget[1]) {
        if (changedIndex === 0) {
            form.value.budget[0] = form.value.budget[1]
        } else {
            form.value.budget[1] = form.value.budget[0]
        }
    }
}

const isLoading = ref(false)
const submitError = ref('')
const submitSuccess = ref(false)

const agreementError = ref('')
const fieldErrors = ref({
    phone: '',
    email: ''
})

function onPhoneInput(e) {
    const next = formatRuPhone(e?.target?.value ?? form.value.phone)
    form.value.phone = next
    fieldErrors.value.phone = ''
}

function onPhoneFocus() {
    if (!form.value.phone) form.value.phone = '+7'
}

function onEmailInput() {
    fieldErrors.value.email = ''
}

const handleSubmit = async () => {
    fieldErrors.value.phone = validateRuPhone(form.value.phone)
    fieldErrors.value.email = validateEmailCommonDomains(form.value.email)
    if (fieldErrors.value.phone || fieldErrors.value.email) return

    if (form.value.agreement !== true) {
        agreementError.value =
            'Необходимо согласие на обработку персональных данных. Поле обязательно для заполнения.'
        return
    }
    agreementError.value = ''

    isLoading.value = true
    submitError.value = ''
    submitSuccess.value = false

    try {
        const [emailSent, backendResponse] = await Promise.all([
            sendToFormspree(form.value, 'contactForm'),
            fetch('/api/submit.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...form.value,
                    formType: 'contactForm'
                })
            })
        ])

        const backendResult = await backendResponse.json()

        if (backendResult.success) {
            submitSuccess.value = true
            form.value = {
                name: '',
                email: '',
                phone: '',
                eventType: [],
                budget: props.initialBudget,
                message: '',
                agreement: false
            }
            fieldErrors.value = { phone: '', email: '' }
            emit('submit', { success: true })
        } else {
            submitError.value = backendResult.message || 'Ошибка при отправке'
        }
    } catch (error) {
        submitError.value = 'Ошибка сети: ' + error.message
    } finally {
        isLoading.value = false
    }
}
</script> 

<template>
    <section class="contact-form-section">
        <div class="container">
            <form
                class="contact-form"
                @submit.prevent="handleSubmit"
            >
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Имя</label>
                        <div class="form-input-wrapper">
                            <input
                                v-model="form.name"
                                type="text"
                                class="form-input"
                                placeholder="Введите Ваше имя*"
                                required
                                />
                            <div class="form-input-line"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Телефон</label>
                        <div class="form-input-wrapper">
                            <input
                                v-model="form.phone"
                                type="tel"
                                class="form-input"
                                placeholder="+7 (XXX) XXX-XX-XX"
                                required
                                inputmode="tel"
                                @focus="onPhoneFocus"
                                @input="onPhoneInput"
                            />
                            <div class="form-input-line"></div>
                        </div>
                        <div v-if="fieldErrors.phone" class="field-error">
                            {{ fieldErrors.phone }}
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Почта</label>
                    <div class="form-input-wrapper">
                        <input
                            v-model="form.email"
                            type="email"
                            class="form-input"
                            placeholder="example@email.com"
                            required
                            @input="onEmailInput"
                        />
                        <div class="form-input-line"></div>
                    </div>
                    <div v-if="fieldErrors.email" class="field-error">
                        {{ fieldErrors.email }}
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label form-label--checklist">Какое у Вас мероприятие?</label>
                    <div class="event-types">
                        <label
                            v-for="eventType in eventTypes"
                            :key="eventType.id"
                            class="event-type-label"
                        >
                            <input
                                v-model="form.eventType"
                                type="checkbox"
                                :value="eventType.value"
                                class="event-type-input"
                                />
                            <span class="custom-checkbox">
                                <span class="checkmark">✓</span>
                            </span>
                            <span class="event-type-text">{{ eventType.label }}</span>
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Ваш Бюджет</label>
                    <p class="form-sublabel">Выберите диапазон</p>
                    <div class="budget-slider-wrapper">
                        <div class="budget-slider-container">
                            <div class="budget-slider-track"></div>
                            <div class="budget-slider-range"
                                :style="{
                                    left: minPosition,
                                    width: ((form.budget[1] - form.budget[0]) / RANGE) * 100 + '%'
                                }"
                            />
                            <input
                                v-model.number="form.budget[0]"
                                type="range"
                                :min="MIN_BUDGET"
                                :max="MAX_BUDGET"
                                step="1000"
                                class="budget-slider budget-slider-min"
                                @input="ensureMinLessThanMax(0)"
                            />
                            <input
                                v-model.number="form.budget[1]"
                                type="range"
                                :min="MIN_BUDGET"
                                :max="MAX_BUDGET"
                                step="1000"
                                class="budget-slider budget-slider-max"
                                @input="ensureMinLessThanMax(1)"
                            />
                            <div
                                class="slider-value slider-value-min"
                                :style="{ left: minPosition }"
                            >
                                {{ formatPrice(form.budget[0]) }}₽
                            </div>
                            <div
                                class="slider-value slider-value-max"
                                :style="{ left: maxPosition }"
                            >
                                {{ formatPrice(form.budget[1]) }}₽
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Ваше Сообщение</label>
                    <div class="form-input-wrapper">
                        <textarea
                            v-model="form.message"
                            class="form-textarea"
                            placeholder="Введите сообщение"
                            rows="4"
                        >
                        </textarea>
                        <div class="form-input-line"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="agreement-label">
                        <input
                            v-model="form.agreement"
                            type="checkbox"
                            class="agreement-checkbox"
                        />
                        <span class="agreement-text">
                            Я согласен на обработку
                            <a href="/soglasie.pdf" target="_blank" class="agreement-link">персональных данных</a>
                        </span>
                    </label>
                    <div v-if="agreementError" class="agreement-error">
                        {{ agreementError }}
                    </div>
                </div>
                <div v-if="submitSuccess" class="success-message">
                    ✓ Заявка успешно отправлена!
                </div>
                <div v-if="submitError" class="error-message">
                    {{ submitError }}
                </div>
                <AppButton
                    type="submit"
                    variant="primary"
                    size="large"
                    class="submit-button"
                    :disabled="isLoading"
                >
                    {{ isLoading ? 'Отправка...' : 'Отправить' }}
                </AppButton>
            </form>
        </div>
    </section>
</template>

<style lang="scss">
@use './AppContactForm.scss';
</style>
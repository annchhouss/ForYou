<script setup>
import {ref} from 'vue'
import AppButton from '@/components/ui/AppButton/AppButton.vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['close'])

const form = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
})

const isLoading = ref(false)
const submitError = ref('')
const submitSuccess = ref(false)

const closeModal = () => {
    emit('close')
}

const handleSubmit = async () => {
    isLoading.value = true
    submitError.value = ''
    submitSuccess.value = false
    
    try {
        const response = await fetch('/api/submit.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...form.value,
                formType: 'contactModal'
            })
        })
        
        const result = await response.json()
        
        if (result.success) {
            submitSuccess.value = true
            resetForm()
            closeModal()
        } else {
            submitError.value = result.message || 'Ошибка при отправке'
        }
    } catch (error) {
        submitError.value = 'Ошибка сети: ' + error.message
    } finally {
        isLoading.value = false
    }
}

const resetForm = () => {
    form.value = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }
}
</script>

<template>
    <Teleport to="body">
        <div
            v-if="isOpen"
            class="modal-overlay"
        >
            <div class="modal-container">
                <button
                    class="modal-close"
                    aria-label="Закрыть"
                    @click="closeModal"
                >
                    ×
                </button>
                <div class="modal-banner">
                    <div class="modal-banner__overlay">
                        <h2 class="modal-banner__title">Спасибо за Ваш интерес к нашему Декор-агенству</h2>
                        <p class="modal-banner__description">Мы будем рады услышать ваши идеи и обсудить, как
                            создать неповторимую
                            атмосферу вашего события. Выберите удобный способ связаться с нами:</p>
                    </div>
                </div>
                <div class="modal-form-wrapper">
                    <div v-if="submitSuccess" class="success-message">
                        ✓ Заявка успешно отправлена!
                    </div>
                    <div v-if="submitError" class="error-message">
                        {{ submitError }}
                    </div>
                    <form
                        class="modal-form"
                        @submit.prevent="handleSubmit"
                    >
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Имя *</label>
                                <input
                                    v-model="form.name"
                                    type="text"
                                    class="form-input"
                                    placeholder="Введите ваше имя"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label class="form-label">Почта *</label>
                                <input
                                    v-model="form.email"
                                    type="email"
                                    class="form-input"
                                    placeholder="example@email.com"
                                    required
                                />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Телефон *</label>
                            <input
                                v-model="form.phone"
                                type="tel"
                                class="form-input"
                                placeholder="+7 (XXX) XXX-XX-XX"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label class="form-label">Сообщение</label>
                            <textarea
                                v-model="form.message"
                                class="form-textarea"
                                placeholder="Опишите вашу задачу или вопрос..."
                                rows="4"
                            />
                        </div>
                        <AppButton
                            type="submit"
                            variant="primary"
                            size="large"
                            class="submit-button"
                            :disabled="isLoading"
                        >
                            {{ isLoading ? 'Отправка...' : 'Отправить заявку' }}
                        </AppButton>
                    </form>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss">
@use './AppContactModal.scss';
</style>
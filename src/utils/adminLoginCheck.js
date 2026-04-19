export const ADMIN_LOGIN_ERROR = 'Неверный пароль'

export function checkAdminPassword(enteredPassword, expectedPassword) {
    if (enteredPassword === expectedPassword) {
        return {ok: true}
    }
    return {ok: false, error: ADMIN_LOGIN_ERROR}
}

export const checkEmail = (email: string | null | undefined) => {
    const decimal = new RegExp(/(@)(.)/);
    return email && decimal.test(email)
}

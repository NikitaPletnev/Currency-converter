export const checkPassword = (password: string | null | undefined): boolean => {
    const decimal = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/);
    return decimal.test(password || '');
}

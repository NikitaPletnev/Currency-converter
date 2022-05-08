export const checkUserName = (userName: string | null | undefined ): boolean => {
    return !!userName && userName.length > 5
}

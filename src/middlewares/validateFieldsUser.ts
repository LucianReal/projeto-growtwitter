function validateFieldsUser(data: any): boolean {
    if (!data.name || !data.email || !data.username || !data.password) {
        return false;
    }
    return true;
}

export default validateFieldsUser;
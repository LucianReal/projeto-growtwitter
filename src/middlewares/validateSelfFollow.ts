function validateSelfFollow(data1: any, data2: any): boolean {
    if (data1.id === data2.id) {
        return false;
    }
    return true;
}

export default validateSelfFollow;
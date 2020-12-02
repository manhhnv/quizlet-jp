export const getMembers = (members: any) => {
    return {
        type: 'GET_MEMBERS',
        payload: members
    }
}
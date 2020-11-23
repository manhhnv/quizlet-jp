export type Api = {
    url: string;
    method: string;
}
export type RegisterInput = {
    username: string;
    birthday: string;
    email: string;
    password: string;
}
export type LoginInput = {
    email: string;
    password: string;
}
export type AccessRolePopupProps = {
    user?: any;
    showModal: boolean;
    closePopup?: any;
    handleMax?: any;
}
export type ModuleCreate = {
    name: string;
    public: boolean;
    max_score: number;
    description: string;
}

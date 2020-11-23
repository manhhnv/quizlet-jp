export enum HTTP_METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
export type Api = {
    url: string;
    method: HTTP_METHOD;
}
export type ActionStore = {
    type: string;
    payload?: any;
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
export type CreateFolderInput = {
    name: string;
    public: boolean;
    description?: string;
}
export type UpdateFolderInput = {
    name?: string;
    public?: boolean;
    description?: string;
}

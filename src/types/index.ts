export interface RegisterInfo {
    name: string;
    email: string;
    password: string;
}

export interface LoginInfo {
    email: string;
    password: string;
}

export interface CategoryInfo {
    id: string;
    name: string;
    status: boolean;
}

export type CreateInfo = Omit<CategoryInfo, 'id'>
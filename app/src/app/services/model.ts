export interface ICategories {
    id: string;
}

export interface IFacts {
    categories: [string];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
}

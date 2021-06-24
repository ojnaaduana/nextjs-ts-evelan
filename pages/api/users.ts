import axios from 'axios';

export interface UserProps {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export const fetchUsers = async (data: {
    page: number;
    perPage: number;
}): Promise<any> => {
    const { page, perPage } = data;
    const res = await axios.get(
        `https://reqres.in/api/users?page=${page}&per_page=${perPage}`
    );
    return res.data;
};

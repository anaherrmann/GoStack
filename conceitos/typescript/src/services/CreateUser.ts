
interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>;
}

function createUser({name, email, password}: CreateUserData) {
    const user = {
        name,
        email,
        password
    }
}

export default createUser;
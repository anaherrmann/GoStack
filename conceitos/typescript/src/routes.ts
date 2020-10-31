import { Request, Response } from 'express';
import createUser from './services/CreateUser';

function helloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'herrmannluiza@gmail.com',
        password: 'blibil',
        techs: ['Node.js', 'ReactJS', 'React Native'],
    });

    return response.json({ message: 'Hello World' });
}

export default helloWorld;
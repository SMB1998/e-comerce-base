import type { NextApiRequest, NextApiResponse } from 'next';

import { jwt } from '../../../utils';

type Data = 
| { message: string }
| {
    token: string;
    user: {
        email: string;
        name: string;
        role: string;
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch( req.method ) {
        case 'POST':
            return loginUser(req, res)

        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}

const loginUser = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    const { email = '', password = ''  } = req.body;

    console.log(req.body, "SI LLEGA AL MENOS")

    /*await db.connect();
    const user = await User.findOne({ email });
    await db.disconnect();

    if ( !user ) {
        return res.status(400).json({ message: 'Correo o contraseña no válidos - EMAIL' })
    }
    
    if ( !bcrypt.compareSync( password, user.password! ) ) {
        return res.status(400).json({ message: 'Correo o contraseña no válidos - Password' })
    }

    const { role, name, _id } = user*/

    const token = jwt.signToken( "1", "desarrollador3@auditbrain.com" );

    return res.status(200).json({
        token, //jwt
        user: {
            email:"desarrollador3@auditbrain.com", role:"admin", name:"Santiago Muñoz"
        }
    })


}

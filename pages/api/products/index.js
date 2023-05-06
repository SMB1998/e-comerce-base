
import products from '../fakeDB'


export default function handler(req, res) {

    switch( req.method ) {
        case 'GET':
            return getProducts( req, res )

        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

const getProducts = async(req, res) => {
    
    const { gender = 'all' } = req.query;

    


    return res.status(200).json( gender !== 'all' ? products.filter((product) => {
            return product.gender === gender
    }): products);

}

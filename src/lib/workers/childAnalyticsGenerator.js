import { ordersMappingAndMerge } from '../services/ordersMappingAndMerge';
import { analyticsGenerator } from '../analyticsGenerator';
import { Shopify, Woocommerce } from '../../fakeData/ecommercesData';


const ordersMerge = ordersMappingAndMerge({Shopify, Woocommerce});

const totalOrdersDB = {
    "total_billing": 0,
    "people": [
                
    ]
}
const result = analyticsGenerator(totalOrdersDB, ordersMerge);

console.log(result);
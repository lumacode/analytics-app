

export const ordersMappingAndMerge = (ecommerces) => {

    let ordersResult = [];

    ecommerces.Shopify.forEach(order => {

        if(order.payment_status === "payed"){
            ordersResult.push({
                    name: order.customer.name,
                    email: order.customer.email,
                    avg_ticket: 0,
                    total: parseFloat(order.price)
                })
        }

    });

    ecommerces.Woocommerce.forEach(order => {

        if(order["payment-stats"] === "completed"){
            ordersResult.push({
                name: order.customer.name,
                email: order.customer.email,
                avg_ticket: 0,
                total: parseFloat(order.money)
            })
        }

    });

    return ordersResult;

}
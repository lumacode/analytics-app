//Recursive function
export const analyticsGenerator = (totalOrdersDB, _merged, _count=0)  => {
    
    let merged = _merged;
    let recursiveOrders = totalOrdersDB;
    let count = _count;
    let totalTmp = 0;

    if(count < merged.length){

        const avg_total = merged.filter(orderMergeFind => orderMergeFind.email === merged[count].email)

        if(avg_total){
            avg_total.forEach(avg => {
            totalTmp += avg.total
            });
        }

        recursiveOrders.people.forEach(order => {

            if(order.email === merged[count].email){
                order.quantity_orders++
                recursiveOrders.total_billing += merged[count].total;
                order.avg_ticket = parseFloat((totalTmp / order.quantity_orders).toFixed(2));
            }

        });

          if(!recursiveOrders.people.find(orderFind => orderFind.email === merged[count].email)){
  
              recursiveOrders.people.push({
                  name: merged[count].name, 
                  email: merged[count].email,
                  avg_ticket : merged[count].total / 1,
                  quantity_orders: 1
              });

              recursiveOrders.total_billing += merged[count].total;
              
          }

        count++
        analyticsGenerator(recursiveOrders, merged, count);
    }

    return recursiveOrders;

}
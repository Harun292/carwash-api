
import Bill from "../models/bill.js";


export const addBill = async (customer_id,programs,price) => {
    const bill = await Bill.query().insert({
        programs:programs,
        customer_id:customer_id,
        price:price
      });
    
      return bill;
    };
import {addBill } from "../services/bill.service.js";

export const addBillController= async (req, res, next) =>{
    try {
        const addedBill = await addBill(
          req.body.id,
          req.body.programs,
          req.body.price
        );
        res.status(201).send({
          message: 'Bill successfully added',
          bill: addedBill,
        });
      } catch (error) {
        next(error);
      }
}
import sqlConfig from "../configs/db.js";
import mssql from "mssql";

class SubscriberController {
  async getSubscribers(req, res) {
    try {
      await mssql.connect(sqlConfig);
      const result = await mssql.query`select * from SUBSCRIBERS`;
      res.json(result.recordset);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new SubscriberController();

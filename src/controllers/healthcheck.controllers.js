import { APIResponse } from "../utils/api-response.js";

const healthCheck = (req, res) => {
  try {
    res
      .status(200)
      .json(new APIResponse(200, { message: "Our server is Health" }));
  } catch (error) {}
};

export { healthCheck };

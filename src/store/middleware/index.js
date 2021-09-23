import { applyMiddleware } from "redux";
import { loginMiddleware } from "./loginMiddleWare";

export default applyMiddleware(
    loginMiddleware
)
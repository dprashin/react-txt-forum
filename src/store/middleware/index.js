import { applyMiddleware } from "redux";
import { loginMiddleware } from "./loginMiddleWare";
import { sessionMiddleware } from "./sessionMiddleware";

export default applyMiddleware(
    loginMiddleware,
    sessionMiddleware
)
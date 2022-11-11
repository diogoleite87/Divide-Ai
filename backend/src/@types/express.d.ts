import { User } from "../entities";

declare global {
    namespace Express {
        export interface Request {
            user: Partial<User>
        }
    }
}
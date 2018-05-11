import { User } from "./user.model";

export interface Update {
    _id: string;
    modifiedBy: User | string;
    modifiedDate: Date;
    updateDetails: string;
}
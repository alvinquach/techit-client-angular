import { Unit } from "./unit.model";

export interface User {
    _id?: string;
    department?: string;
    email?: string;
    phoneNumber?: string;
    enabled: boolean;
    firstName: string;
    lastName: string;
    position: string;
    username: string;
    unit: Unit | string;
}
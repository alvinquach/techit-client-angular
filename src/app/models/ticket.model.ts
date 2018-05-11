import { User } from "./user.model";
import { Unit } from "./unit.model";
import { Update } from "./update.model";

export interface Ticket {
    completionDetails?: string;
    details?: string;
    location?: string;
    priority: string;
    createdDate?: Date;
    startDate?: Date;
    endDate?: Date;
    lastUpdated?: Date;
    status: string;
    subject: string;
    createdBy?: User | string;
    unit: Unit | string;
    technicians: (User | string)[];
    updates: (Update | string)[];
}
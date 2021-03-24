
import { PersonalDetails } from './personaldetails';
import { ContactDetails } from './contactdetails';
export class Employee {
    userDetailsId: number | undefined;
    userName: string | undefined;
    password: null;
    roleId: number | undefined;
    role: string | undefined;
    status: string | undefined;
    personalDetails: PersonalDetails | undefined;
    contactDetails: ContactDetails | undefined;
    educations: null;
    employments: null;
    immigrations: null;
    languages: null;
    reportingTo: null;
    skills: null;
    licences: null;
    memberships: null;
    attachments: null;
    constructor(){}
}

export interface Customer {
    custNum: number;
    route?: number;
    account?: number;
    sub?: number;
    cycle?: number;
    status?: string;
    activationDate?: Date;
    driverLicense?: string;
    socSecNum?: string;
    workPhone?: string;
    homePhone?: string;
    lastName?: string;
    firstName?: string;
    billAddress1?: string;
    billAddress2?: string;
    billCity?: string;
    billState?: string;
    billZip?: string;
    serviceAddress?: string;
    paymentComment?: string;
    pastDue?: number;
    currentDue?: number;
    totalDue?: number;
    budgetPymtAmt?: number;
    draftActive?: string;
    lateDate?: Date;
    email?: string;
    password?: string;
}

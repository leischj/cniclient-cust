export interface PaymentEntry {
  pmtEntryId: number;
  custNum: number;
  createDate?: Date;
  exportDate?: Date;
  status?: number;
  pmtType?: string;
  pmtAmount?: number;
  pmtFee?: number;
  reference?: string;
  processor?: string;
}

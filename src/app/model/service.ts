export interface Service {
  srvcId: number;
  lineId?: number;
  custNum?: number;
  status?: string;
  srvcClass?: string;
  srvcCategory?: string;
  srvcRate?: string;
  srvcLC?: string;
  srvcTax?: string;
  srvcType?: string;
  srvcDesc?: string;
  depositDate?: Date;
  depositNum?: string;
  depositAmt?: number;
}

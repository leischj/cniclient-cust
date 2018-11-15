export interface Transaction {
  histId: number;
  custNum?: number;
  postDate?: Date;
  tranSource?: string;
  tranDesc?: string;
  tranCount?: number;
  amount?: number;
  isBudget?: boolean;
  resultBalance?: number;
  resultBudget?: number;
}

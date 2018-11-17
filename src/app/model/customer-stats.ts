

export interface CustomerStats {
  total: number;
  active: number;
  withEmail: number;
  withBudgetPayments: number;
  withBankDraft: number;
  paidInFull: number;
  pastDue: number;
  currentDue: number;
  totalPastDue: number;
  averagePastDue: number;
}

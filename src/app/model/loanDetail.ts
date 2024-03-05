export interface LoanDetail {
    paymentStatus: Boolean;
    amount: number;
    username: String;
    title: String;
    loanId: number,
    userId: number,
    bookId: number,
    loanDate: Date,
    dueDate: Date,
    returnDate: Date,
    status: String
}
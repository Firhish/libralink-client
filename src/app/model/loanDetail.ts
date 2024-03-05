export interface LoanDetail {
    title: String;
    loanId: number,
    userId: number,
    bookId: number,
    loanDate: Date,
    dueDate: Date,
    returnDate: Date,
    status: String
}
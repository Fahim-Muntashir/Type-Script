{
    // access modifiers

    class BankAccount{
  public readonly id: number;
  public name: string;
    private balance: number;

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this.balance = balance;
    
        }
        
        addDeposit(amount: number) {
            this.balance = this.balance + amount;
        }
        getBalance() {
            return this.balance;
        }
    }
    const goribManuserAccount = new BankAccount(111, 'Mister Gorib', 30);

    // goribManuserAccount.id = 333;

    goribManuserAccount.addDeposit(5500);
const myBalance=  goribManuserAccount.getBalance;

    console.log(myBalance)
}
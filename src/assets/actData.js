// Note: To view PDFs, you cannot use arrays like for screenshots

const quizData = [
    {
        id: 1,
        name: "Activity #1 - Variables",
        source: "none",
        score: "10/20",
        screnshots: "/pdf/act1.pdf",
        labels: "none",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 2,
        name: "Activity #2 - Operators",
        source: "none",
        score: "10/20",
        screnshots: "/pdf/act2.pdf",
        labels: "none",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 3,
        name: "Activity #3 - ATM",
        source: "/codeStuff/SecureATMSystemAbril.java",
        score: "10/20",
        screnshots: ["/images/ss/act3/3-Winput.png", "/images/ss/act3/3-Cinput.png", "/images/ss/act3/3-Blocked.png", "/images/ss/act3/3-Choice.png",
            "/images/ss/act3/3-CBal.png", "/images/ss/act3/3-DepMon.png", "/images/ss/act3/3-DepMon0.png"
        ],
        labels: ["Wrong PIN Input", "Correct PIN Input", "Attempts Run Out after Multiple Wrong PIN Attempts",
            "User Inputs wrong Choice", "User Checks Balance", "User Deposits Money","User Deposits 0 Money", "User Withdraws Money", "User Attempts to Withdraw More than 2,000",
            "User Attempts to Withdraw More than Balance", "User Exits ATM"
        ],
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 4,
        name: "Activity #4 - SPS",
        source: "/codeStuff/StudentPaymentSystemAbril.java",
        score: "10/20",
        screnshots: ["/images/ss/act4/4-InputNName.png", "/images/ss/act4/4-InputNID.png", "/images/ss/act4/4-InputWTFee.png", "/images/ss/act4/4-Input0TFee.png",
            "/images/ss/act4/4-SInput.png", "/images/ss/act4/4-BInput.png", "/images/ss/act4/4-InChoice.png", "/images/ss/act4/4-P-In0Pay.png", "/images/ss/act4/4-CBal.png", "/images/ss/act4/4-ADisc.png",
            "/images/ss/act4/4-ADisc-Sc.png", "/images/ss/act4/4-ADisc-Rs.png", "/images/ss/act4/4-ADiscBlock.png", "/images/ss/act4/4-ADisc-WChoice.png",
            "/images/ss/act4/4-P-InGreatPay.png", "/images/ss/act4/4-P-InPay.png", "/images/ss/act4/4-P-InPayFull.png", "/images/ss/act4/4-FullPayInteract.png", 
            "/images/ss/act4/4-ExitFull.png", "/images/ss/act4/4-ExitRemain.png"
        ],
        labels: ["Input Validation – No Name Inputted", "Input Validation – No Student ID Inputted", "Input Validation – Wrong Input for Tuition Fee",
            "Input Validation – 0 Input for Tuition Fee", "Successful User Inputting ", "Input Validation – Blank Input", "Input Validation – Invalid Choice",
            "Payment Choice – User Inputs 0 as Payment", "User Check its Balance", "User Applies for Discount", "User Applies for Discount – Is a Scholar", "User Applies for Discount – Is a Regular Student",
            "User tries to apply for another discount", "Apply Discount – Wrong Choice", "User tries to Pay more than Tuition Amount", "User Pays to reduce Tuition Amount", 
            "User Pays Tuition Fee – Fully Paid", "User Tries to interact with other options while Fully Paid", "User Exits - Fully Paid", "User Exits – Not Fully Paid"
        ],
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 5,
        name: "Activity #5 - Expense Tracker",
        source: "/codeStuff/ExpenseTrackerAbril.java",
        score: "10/20",
        screnshots: ["/images/ss/act5/MenuValid.png", "/images/ss/act5/AddBudget-Valid.png", "/images/ss/act5/AddBudget-MoreValid.png", "/images/ss/act5/AddBudget-MoreB.png", "/images/ss/act5/AddBudget-Exit.png",
            "/images/ss/act5/AddExpenses-NoB.png", "/images/ss/act5/AddExpenses-Valid.png", "/images/ss/act5/AddExpenses-More.png", "/images/ss/act5/DisExpense-NoE.png", "/images/ss/act5/DisExpense-BO.png", "/images/ss/act5/DisExpense-BS.png", 
            "/images/ss/act5/AddExpCat-Valid.png", "/images/ss/act5/AddExpCat-Add.png", "/images/ss/act5/AddExpenses-NewCat.png", "/images/ss/act5/AddExpenses-OnlyLatest.png", "/images/ss/act5/COB-NoB.png", "/images/ss/act5/COB.png",
            "/images/ss/act5/Exit.png"
        ],
        labels: ["Menu – Input Validation", "Add Budget – User Inputs Blank and Enters Budget", "Add Budget – Add More Input Validation", "Add Budget – User Adds More Budget", "Add Budget – User Exits Add Budget", 
            "Add Expenses – When there is No Budget Yet", "Add Expenses – Initial Input of Expenses with Some Input Validation", "Add Expenses – User Adds More Expenses", "Display Expenses – When there is No Expenses", 
            "Display Expenses – Budget Overrun", "Display Expenses – Budget is Sufficient", "Add Expense Category – Input Validation", "Add Expense Category – Category Added", "Add Expenses – Option that Pops Out when another Expense Category is added", 
            "Add Expenses – Modify Only latest addition", "Compute for Remaining Budget – When there is no Budget or Expenses", "Compute for Remaining Budget", "Program Exit"],
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    
    
]

export default quizData;
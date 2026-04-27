// Note: To view PDFs, you cannot use arrays like for screenshots

const quizData = [
    {
        id: 1,
        name: "Activity #1 - Variables",
        source: "none",
        score: "27/30",
        screnshots: "/pdf/act1.pdf",
        labels: "none",
        info: "The First activity was about variable identification and what a specific code block does. It has 3 parts, Part A was the variable identification, and it made me learn more about the differences in variable storage and how their type and data type affects those. Part B was more on the code block and determining what happens first without outputs. It made me think deeper of what is happening under the hood when an object instance is declared, and how it affect their memory use. Last part was the outputs of Part B, nothing much to say about it as looking at Part B explains what happened here."
    },
    {
        id: 2,
        name: "Activity #2 - Operators",
        source: "none",
        score: "30/30",
        screnshots: "/pdf/act2.pdf",
        labels: "none",
        info: "The Second Activity has more coding stuff. It was all about applying variable manipulation using operators and also of course bitwise operators. The first 2 Numbers were not that hard as it is just simple application of Operators. But the 3rd one was much more harder, as it would make you think about what and what to use due to the amount of restrictions. But it made me reflect on how to use the operators to my own doing while also following specific restrictions."
    },
    {
        id: 3,
        name: "Activity #3 - ATM",
        source: "/codeStuff/SecureATMSystemAbril.java",
        score: "27/30",
        screnshots: ["/images/ss/act3/3-Winput.png", "/images/ss/act3/3-Cinput.png", "/images/ss/act3/3-Blocked.png", "/images/ss/act3/3-Choice.png",
            "/images/ss/act3/3-CBal.png", "/images/ss/act3/3-DepMon.png", "/images/ss/act3/3-DepMon0.png"
        ],
        labels: ["Wrong PIN Input", "Correct PIN Input", "Attempts Run Out after Multiple Wrong PIN Attempts",
            "User Inputs wrong Choice", "User Checks Balance", "User Deposits Money","User Deposits 0 Money", "User Withdraws Money", "User Attempts to Withdraw More than 2,000",
            "User Attempts to Withdraw More than Balance", "User Exits ATM"
        ],
        info: "The Third Activity is the first fully Coded Assignment we had, we were tasked to create a 'secure' ATM System that has us hard code an account for the user to access, it made great use of what we've learned so far, such as applying how to use the Scanner from java.util, how to use switches and loops to create a full fledge menu based application, and also it made great applications to input validation so that the user wouldn't do anything that isn't intended for them to do. It was somewhat challenging but overall it made me apply my learnings about the current lessons we had at that time. The user must first enter their PIN and if its incorrect, an attempts counter would count the attempts on how many did the user made, and if it reached 3. Their Session would be blocked. But when they do get through, they would be met with a menu, which have the following, an option to show the user balance, an option if the user wants to deposit, an option if the user wants to withdraw, but it has constraints to prevent the user from withdrawing from 0 or withdrawing their balance or 2000. Then Lastly, it exits the ATM."
    },
    {
        id: 4,
        name: "Activity #4 - SPS",
        source: "/codeStuff/StudentPaymentSystemAbril.java",
        score: "27/30",
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
        info: "The fourth Activity is the second fully Coded Assignment we had, and to not repeat myself further, all activities that we're going to have are fully coded assignments. We were tasked to create a Student Payment System, that has many checks and input validation. We also used Scanner here. First the user would enter their name and IDs, and if either are blank, they wouldn't get through. Next is the tuition fee to input, which would also not allow the user to enter without a proper value. When that is finished, it will now go to the application proper, each selection of the options would increase a tracker for transactions that you did. The choices on the menu are the Pay Tuition that would allow them pay tuition, which does not allow bigger than tuition payments, and detects if the payed amount of the user would make the user fully paid, Next is to check the balance, Next is for application for discount which would ask the user if they are a regular student or not, them being a scholar would grant them 20% discount, them being a Regular Student would make them not have any discounts. If the user is already fully paid, all options except for exiting would get locked and be inaccessible. Exiting would show the final Review which shows the user's name, total transactions and final balance."
    },
    {
        id: 5,
        name: "Activity #5 - Expense Tracker",
        source: "/codeStuff/ExpenseTrackerAbril.java",
        score: "30/30",
        screnshots: ["/images/ss/act5/MenuValid.png", "/images/ss/act5/AddBudget-Valid.png", "/images/ss/act5/AddBudget-MoreValid.png", "/images/ss/act5/AddBudget-MoreB.png", "/images/ss/act5/AddBudget-Exit.png",
            "/images/ss/act5/AddExpenses-NoB.png", "/images/ss/act5/AddExpenses-Valid.png", "/images/ss/act5/AddExpenses-More.png", "/images/ss/act5/DisExpense-NoE.png", "/images/ss/act5/DisExpense-BO.png", "/images/ss/act5/DisExpense-BS.png", 
            "/images/ss/act5/AddExpCat-Valid.png", "/images/ss/act5/AddExpCat-Add.png", "/images/ss/act5/AddExpenses-NewCat.png", "/images/ss/act5/AddExpenses-OnlyLatest.png", "/images/ss/act5/COB-NoB.png", "/images/ss/act5/COB.png",
            "/images/ss/act5/Exit.png"
        ],
        labels: ["Menu – Input Validation", "Add Budget – User Inputs Blank and Enters Budget", "Add Budget – Add More Input Validation", "Add Budget – User Adds More Budget", "Add Budget – User Exits Add Budget", 
            "Add Expenses – When there is No Budget Yet", "Add Expenses – Initial Input of Expenses with Some Input Validation", "Add Expenses – User Adds More Expenses", "Display Expenses – When there is No Expenses", 
            "Display Expenses – Budget Overrun", "Display Expenses – Budget is Sufficient", "Add Expense Category – Input Validation", "Add Expense Category – Category Added", "Add Expenses – Option that Pops Out when another Expense Category is added", 
            "Add Expenses – Modify Only latest addition", "Compute for Remaining Budget – When there is no Budget or Expenses", "Compute for Remaining Budget", "Program Exit"],
        info: "The fifth Activity that we did is more about creating functions for another Menu Based application, an expenses tracker, which would first display the title on the first run. It is a coding activity that has many methods, as that is what we've tackled during this time. It will then display options for doing stuff, like Displaying or Adding the Budget, Add or Calculate Expenses, Display Only the Expenses, add an Expense Category from the first 3, to compute for a Remaining Budget, and then lastly to exit. The first one is needed to be filled out first, as each option is locked until a budget is set, it allows the user to enter an initial amount, then add more if they want. After adding the budget, they can now do the other options. The second option would firstly get the expenses the user had on food, Transportation, and other expenses as a start, add them all and show the budget. It also has a special feature if the user has already added another category using option 4. Then they can also access Option 3 for displaying the expenses and if the budget has been overrun already. Next is the fifth option, which just check if the budget is already overrun. Then option 6 would exit the menu."
    }
    
    
]

export default quizData;
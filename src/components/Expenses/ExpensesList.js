import "./ExpensesList.css"
import Expenseitem from "./Expenseitem"
const ExpensesList = props => {
    let expenseContent = <h2 className='expenses-list__fallback'>Found no expenses.</h2>;

    if (props.items.length === 0){
        return expenseContent;
    }
    return (<ul className="expenses-list">
      {props.items.map(expense => <Expenseitem
      key = {expense.id}
      title= {expense.title}
      amount={expense.amount}
      date={expense.date}
    />)}
    </ul>)
    
}

export default ExpensesList;
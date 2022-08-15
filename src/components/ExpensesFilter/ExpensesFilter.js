import "./ExpensesFilter.css";

function ExpenseFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onExpenseFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
// const [filter, setFilter] = useState(2020);
// const filterChangeHandler = (event) => {
//   setFilter(event.target.value);
//   props.onExpenseFilterChange(event.target.value);
// };

// return (
//   <select select={filter} onChange={filterChangeHandler}>
//     <option value="2020">2020</option>
//     <option value="2021">2021</option>
//     <option value="2022">2022</option>
//   </select>
// );

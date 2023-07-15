const ExpenseList = (props) => {
    return (
      <div>
        <h1>Transaction</h1>
        {props?.expenseList?.map((data) => (
          <div className="listItem">
            {data.createdAt} -- {data.value} -- <span className="capitalize">{data.type}</span>
          </div>
        ))}
      </div>
    );
}

export default ExpenseList;
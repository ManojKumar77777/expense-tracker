import { useState } from "react";

const ExpenseForm = (props) => {
    const [form, setForm] = useState({
        value: "",
        type: ""
    });
    const onChange = (name, value) => {
        setForm((prev) => ({
            ...prev,
            [name]:value
        }))
}
  const formSubmit = (e) => {
      e.preventDefault();
      var object = {
        createdAt: new Date().toLocaleString(),
        value: form.value,
        type: form.type,
      };
      props.handleExpenseList((prev) => [...prev, object])
      setForm({
        value: "",
        type: "",
      });
  };
  return (
    <div>
      <form onSubmit={(e) => formSubmit(e)}>
        <input
                  name="value"
                  type="number"
                  value={form.value}
                  required
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
        <br></br>
        <button type="submit" onClick={(e) => onChange("type", "add")}>
          Add
        </button>
        <button type="submit" onClick={(e) => onChange("type", "remove")}>
          remove
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;

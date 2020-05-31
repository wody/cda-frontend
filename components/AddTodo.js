import { useState } from "react";

export default function AddTodo(props) {
  const [todo, setTodo] = useState("");

  const save = () => {
    let severity = Math.random() * 3 + 1;
    fetch(process.env.NEXT_PUBLIC_API_BASE + "/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: todo, severity: severity }),
    }).then(() => {
      props.mutateTodo();
      props.mutateOpen();
    });
  };
  return (
    <div className="field has-addons">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="TODO"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <div className="control">
        <a className="button is-info" onClick={save}>
          Speichern
        </a>
      </div>
    </div>
  );
}

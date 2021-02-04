export default function TODOs(props) {
  const handleDone = async (id) => {
    await fetch(process.env.NEXT_PUBLIC_API_BASE + "/todo/toggle/" + id, {
      method: "PUT",
    });
    props.mutateTodo();
    props.mutateOpen();
  };

  const deleteDone = async () => {
    if (confirm("Alle erledigten ToDos löschen?")) {
      await fetch(process.env.NEXT_PUBLIC_API_BASE + "/todo/cleanup", {
        method: "DELETE",
      });
      props.mutateTodo();
    }
  };

  const deleteTodo = async (id) => {
    if (confirm("ToDo löschen?")) {
      await fetch(process.env.NEXT_PUBLIC_API_BASE + "/todo/" + id, {
        method: "DELETE",
      });
      props.mutateTodo();
      props.mutateOpen();
    }
  }

  function severityIcon(severity) {
    switch (severity) {
      case 1:
        return "fas fa-arrow-circle-down";
      case 2:
        return "fas fa-arrow-circle-right";
      case 3:
        return "fas fa-arrow-circle-up";
      default:
        return "";
    }
  }

  function severity(severity) {
    switch (severity) {
      case 1:
        return "icon has-text-success";
      case 2:
        return "icon has-text-warning";
      case 3:
        return "icon has-text-danger";
      default:
        return "icon has-text-info";
    }
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          <span className="has-margin-right-20">
            Liste der aktuellen Aufgaben
          </span>
          <button className="button is-danger" onClick={() => deleteDone()}>
            Erledigte Löschen
          </button>
        </h1>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>Schwere</th>
              <th>Hinzugefügt am</th>
              <th>Erledigt</th>
              <th>Löschen</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>
                  <span className={severity(row.severity)}>
                    <i className={severityIcon(row.severity)}></i>
                  </span>
                </td>
                <td>
                  <span className={row.done ? "tag is-success" : "tag"}>
                    {new Date(row.date_added).toLocaleDateString()}
                  </span>
                </td>
                <td>
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      checked={row.done}
                      onChange={() => handleDone(row.id)}
                    />
                  </label>
                </td>
                <td>
                  <span className="icon" onClick={() => deleteTodo(row.id)}>
                    <i className="fas fa-trash-alt"></i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

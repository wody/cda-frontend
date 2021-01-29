export default function TODOs(props) {
  const handleDone = async (id) => {
    await fetch(process.env.NEXT_PUBLIC_API_BASE + "/todo/toggle/" + id, {
      method: "PUT",
    });
    props.mutateTodo();
    props.mutateOpen();
  };

  const deleteDone = async () => {
    await fetch(process.env.NEXT_PUBLIC_API_BASE + "/todo/cleanup", {
      method: "DELETE",
    });
    props.mutateTodo();
  };

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
              <th>Hinzugefügt am</th>
              <th>Erledigt</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

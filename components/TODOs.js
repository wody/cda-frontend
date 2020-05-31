export default function TODOs(props) {
  const handleDone = (id) => {
    fetch(process.env.NEXT_PUBLIC_API_BASE + "/todo/toggle/" + id, {
      method: "PUT",
    }).then(() => {
      props.mutateTodo();
      props.mutateOpen();
    });
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Liste der aktuellen Aufgaben</h1>
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

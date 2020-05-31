import useSWR from "swr";
import fetcher from "libs/fetch";
import Dashboard from "components/Dashboard";
import TODOs from "components/TODOs";
import AddTodo from "components/AddTodo";

export default function Home() {
  const { data: data, mutate: mutateTodo, error } = useSWR(
    process.env.NEXT_PUBLIC_API_BASE + "/todo",
    fetcher
  );
  const { data: open, mutate: mutateOpen } = useSWR(
    process.env.NEXT_PUBLIC_API_BASE + "/todo/open",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div id="app">
      <section className="main-content hero is-primary is-medium">
        <div className="hero-body">
          <div className="container has-text-left">
            <div className="columns is-vcentered">
              <div className="column">
                <figure className="image is-128x128 is-pulled-right">
                  <img
                    className="is-rounded"
                    alt="CDApp"
                    src={process.env.PREFIX + "/logo.png"}
                  />
                </figure>
              </div>
              <div className="column">
                <h1 className="title">CDA Demonstration Application</h1>
                <h2 className="subtitle">Manage your tasks</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="columns">
          <div className="column">
            <div className="tile is-parent">
              <article className="tile is-child notification is-primary">
                <div className="content">
                  <p className="title">Dashboard</p>
                  <p className="subtitle">Quick overview</p>
                  <div className="content">
                    <Dashboard open={open}></Dashboard>
                  </div>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-success">
                <div className="content">
                  <p className="subtitle">Todo hinzufügen</p>
                  <div className="content">
                    <AddTodo
                      mutateOpen={mutateOpen}
                      mutateTodo={mutateTodo}
                    ></AddTodo>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="column is-8">
            <TODOs
              data={data}
              mutateOpen={mutateOpen}
              mutateTodo={mutateTodo}
            ></TODOs>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>CDA Demo App</strong> by{" "}
            <a href="https://www.sixsentix.com">Sixsentix Austria GmbH</a>.
          </p>
        </div>
      </footer>

      <style jsx>{`
        #app {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin-top: 60px;
        }
      `}</style>
    </div>
  );
}

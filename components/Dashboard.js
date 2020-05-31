export default function Dashboard(props) {
  return (
    <div className="container">
      Currently you have <span className="tag is-success">{props.open}</span> open
      tasks!
    </div>
  );
}

export default function Box(props) {
  return (
    <>
      <div className="box" onClick={props.onClick}>
        <h1>{props.value}</h1>
      </div>
    </>
  );
}

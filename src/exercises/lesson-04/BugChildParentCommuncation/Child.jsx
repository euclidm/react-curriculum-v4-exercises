export default function Child({incrementObj}) {
  return <button onClick={() => {incrementObj()}}>Increment Counter</button>;
}

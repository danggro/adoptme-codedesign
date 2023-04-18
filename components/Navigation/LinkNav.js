export default function LinkNav(props) {
  return (
    <li>
      <a href={props.href} className="text-xl text-primary hover:underline">
        {props.children}
      </a>
    </li>
  );
}

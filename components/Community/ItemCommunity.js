export default function ItemCommunity(props) {
  return (
    <div className="text-center w-[163px]">
      <h5 className="text-3xl text-primary">{props.num}+</h5>
      <p className="mt-4 text-lg text-secondary">{props.desc}</p>
    </div>
  );
}

import TextDesc from "./TextDesc";

export default function HeadSection(props) {
  return (
    <>
      <p className="text-lg uppercase text-primary/60">{props.section}</p>
      <h2
        className={`mt-1 text-3xl text-black ${props.center && "mx-auto"}`}
        style={{ maxWidth: `${props.wTitle}px` }}
      >
        {props.title}
      </h2>
      <div className="mt-6">
        <TextDesc>{props.desc}</TextDesc>
      </div>
    </>
  );
}

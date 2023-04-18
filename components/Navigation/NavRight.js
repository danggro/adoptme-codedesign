import Button from "../Button";
import Search from "./Search";

export default function NavRight() {
  return (
    <div className="flex items-center justify-between gap-6">
      <button>
        <Search />
      </button>
      <button className="text-xl text-primary hover:underline">Sign in</button>
      <Button variant="small">Sign up</Button>
    </div>
  );
}

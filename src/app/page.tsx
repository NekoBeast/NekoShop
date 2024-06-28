import Nav from "@/components/nav/page";
import Main from "@/components/home/page";
import "../scss/main.css";
export default function Home() {
  return (
    <>
      <div className="nav">
        <Nav />
      </div>
      <div className="main">
        <div className="img"></div>
        <Main />
      </div>
    </>
  );
}

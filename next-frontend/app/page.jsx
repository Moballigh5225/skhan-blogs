import Content from "./components/Content";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import NewsPaper from "./components/Newspaper";
export default function Page() {
  return (
    <div className="">
      <Hero />
      <Content />
      <Featured />
      <Contact />
      <NewsPaper />
    </div>
  );
}

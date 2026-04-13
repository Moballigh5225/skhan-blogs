import Hero from "./components/Hero";
import HomeFeaturedWritings from "./components/HomeFeaturedWritings";
import HomeLatestPosts from "./components/HomeLatestPosts";
import HomeVideoSection from "./components/HomeVideoSection";

export default function Page() {
  return (
    <div>
      <Hero />
      <HomeFeaturedWritings />
      <HomeLatestPosts />
      <HomeVideoSection />
    </div>
  );
}

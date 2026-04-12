import Hero from "./components/Hero";
import HomeFeaturedWritings from "./components/HomeFeaturedWritings";
import HomeLatestPosts from "./components/HomeLatestPosts";
import HomeAboutPreview from "./components/HomeAboutPreview";
import HomeBooksSection from "./components/HomeBooksSection";
import HomeVideoSection from "./components/HomeVideoSection";

export default function Page() {
  return (
    <div>
      <Hero />
      <HomeFeaturedWritings />
      <HomeLatestPosts />
      <HomeAboutPreview />
      <HomeBooksSection />
      <HomeVideoSection />
    </div>
  );
}

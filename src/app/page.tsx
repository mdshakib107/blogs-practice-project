import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

export const metadata = {
  title: "NexaBlog | Home",
  description: "This is the NexaBolg home page",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogsData = await res.json();

  return (
    <div className="my-10">
      <LatestBlogs blogs={blogsData} />
    </div>
  );
};

export default HomePage;

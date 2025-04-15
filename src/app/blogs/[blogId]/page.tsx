import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { Blog } from "@/types";

export const metadata = {
  title: "NexaBlog | Blog Details",
  description: "This is the NexaBolg blog details page",
};

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  const sortedBlogs = blogs.sort(
    (a: Blog, b: Blog) => Number(a.total_likes) - Number(b.total_likes)
  );
  const topBlogs = sortedBlogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
  return topBlogs;
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();

  return (
    <div className="my-10">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;

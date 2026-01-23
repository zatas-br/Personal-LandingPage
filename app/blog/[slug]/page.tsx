import { BlogPost } from "@/components/blog-templates/blog-post"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPost slug={params.slug} />
}

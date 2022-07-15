/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface BlogPostProps {
  id: string;
  title: string;
  body: string;
}

const BlogCard = ({ title, body }: BlogPostProps) => {
  return (
    <div
      class={tw`sm:w-3/12 shrink-0 basis-1/2 md:w-{2.5/12}  mx-5 my-5  p-5 border-2 border-pink-600	`}
    >
      {" "}
      <h1 class={tw`text-2xl my-2`}>{title}</h1>
      <p>{body}</p>
    </div>
  );
};
export default BlogCard;

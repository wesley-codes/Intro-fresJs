/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import BlogCard from "../islands/BlogCard.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

interface BlogType {
  id: string;
  title: string;
  body: string;
}

export const handler: Handlers<BlogType> = {
  async GET(_req, ctx) {
    console.log(ctx.params);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response) {
      return new Response("Blog not found", { status: 404 });
    }
    const blog = await response.json();
    return ctx.render(blog);
  },
};

const  Home = ({ data }: PageProps<BlogType[]>) =>{
 
  return (
    <div class={tw`w-full flex  border-4 flex-wrap	justify-center		`}>
      <div class={tw`flex flex-wrap justify-center `}>
        {data.map((item) => (
          <BlogCard title={item.title} body={item.body} id={item.id} />
        ))}
      </div>
    </div>
  );
}
export default Home
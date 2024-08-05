import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, "utf-8");
  const { data, content } = matter(source);
  const html = marked(content);
  return {
    date: data.date,
    title: data.title,
    body: html
  };
}

export async function getPosts() {
  const slugs = await getSlugs();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }
  return posts;
}

export async function getSlugs() {
  const suffix = ".md";
  const files = await readdir("content/posts");
  return files.filter((file) => file.endsWith(suffix)).map((file) => file.slice(0, -suffix.length));
}

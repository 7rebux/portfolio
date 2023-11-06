import solid from 'solid-start/vite';
import vercel from 'solid-start-vercel';
import { defineConfig } from 'vite';
import markdown from 'vite-plugin-solid-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  plugins: [
    markdown({
      rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
    }),
    solid({
      adapter: vercel(),
      extensions: ['.mdx', '.md'],
    }),
  ],
});

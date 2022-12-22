import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://kmkkiii.tech",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>ja-JP</language>`,
  });

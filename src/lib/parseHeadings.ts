import * as cheerio from 'cheerio';

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export const parseHeadingsFromHtml = (html: string): { headings: HeadingItem[]; contentWithIds: string } => {
  const $ = cheerio.load(html);
  const headings: HeadingItem[] = [];

  $("h2, h3").each((_, el) => {
    const $el = $(el);
    const text = $el.text();
    const tag = $el[0].tagName;
    const level = tag === "h2" ? 2 : 3;

    const id = $el.attr("id") || text.toLowerCase().replace(/\s+/g, "-");
    $el.attr("id", id);

    const existingClass = $el.attr("class") || "";
    const scrollMarginClass = "scroll-mt-24"; 
    $el.attr("class", `${existingClass} ${scrollMarginClass}`.trim());

    headings.push({ id, text, level });
  });

  const contentWithIds = $.html();
  return { headings, contentWithIds };
}

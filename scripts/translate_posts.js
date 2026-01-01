/**
 * This script automates the translation of weekly posts using a LLM.
 * You can run this with: node scripts/translate_posts.js
 */
import fs from "fs";
import path from "path";
import axios from "axios";

// --- CONFIGURATION ---
const SOURCE_DIR = "src/pages/posts";
const TARGET_DIR = "src/pages/en/posts";
const API_URL = "https://api.openai.com/v1/chat/completions"; // Or your preferred LLM API
const API_KEY = process.env.API_KEY;
const MODEL = "gpt-4"; // Or gemini-pro/etc.

// --- PROMPT ---
const SYSTEM_PROMPT = `You are a professional translator and tech blogger.
Translate the following Markdown content from Chinese to English.
- Keep the "engineer's cool and interesting" tone.
- Preserve all Markdown formatting (images, links, bold, etc.).
- Do NOT translate or modify the YAML frontmatter (the content between ---).
- Translate the titles and descriptions inside the content.
- Ensure technical terms are translated accurately.`;

async function translateContent(content) {
  if (!API_KEY) {
    console.error("ERROR: API_KEY is not set in environment variables.");
    return content;
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        model: MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: content },
        ],
        temperature: 0.3,
      },
      {
        headers: { Authorization: `Bearer ${API_KEY}` },
      },
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Translation failed:", error.message);
    return null;
  }
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function run() {
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  const files = fs.readdirSync(SOURCE_DIR).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const issueNumber = file.split("-")[0];

    // Check if any file with this issue number already exists in target
    const targetFiles = fs.readdirSync(TARGET_DIR);
    if (targetFiles.some((f) => f.startsWith(`${issueNumber}-`))) {
      console.log(`Skipping issue ${issueNumber} (already translated)`);
      continue;
    }

    console.log(`Translating ${file}...`);
    const sourcePath = path.join(SOURCE_DIR, file);
    const content = fs.readFileSync(sourcePath, "utf-8");

    const translated = await translateContent(content);

    if (translated) {
      // Extract a simple English title for the filename from the translated content
      // This is a naive implementation, ideally you'd ask the LLM for a slug
      const titleMatch =
        translated.match(/^# (.*)/m) || translated.match(/\*\*([\w\s]+)\*\*/);
      const title = titleMatch ? slugify(titleMatch[1]) : "issue";
      const targetFileName = `${issueNumber}-${title}.md`;
      const targetPath = path.join(TARGET_DIR, targetFileName);

      fs.writeFileSync(targetPath, translated);
      console.log(`Saved to ${targetPath}`);
    }

    // Rate limiting
    await new Promise((r) => setTimeout(r, 1000));
  }
}

run();

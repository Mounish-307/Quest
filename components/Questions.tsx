"use client";

import { useState } from "react";
import type { Question } from "@/lib/seed";

export default function Questions({ initial }: { initial: Question[] }) {
  const [questions, setQuestions] = useState<Question[]>(initial);
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = body.trim();
    if (!trimmed) return; // guard against empty body

    const newQuestion: Question = {
      id: crypto.randomUUID(),
      body: trimmed,
      author: author.trim() || "Anonymous",
    };

    // LOCAL STATE ONLY — no network call. This is what gets lost on refresh.
    setQuestions((qs) => [newQuestion, ...qs]);
    setBody("");
    setAuthor("");
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Ask a question…"
          className="w-full rounded-lg border p-3"
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full rounded-lg border p-3"
        />
        <button
          type="submit"
          disabled={!body.trim()}
          className="rounded-md border px-4 py-2 font-medium disabled:opacity-50"
        >
          Submit
        </button>
      </form>

      <ul className="space-y-3">
        {questions.map((q) => (
          <li
            key={q.id}
            className="flex items-center gap-3 rounded-lg border p-3"
          >
            <span className="flex-1">{q.body}</span>
            <span className="text-sm text-gray-500">{q.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

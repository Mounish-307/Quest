import Questions from "@/components/Questions";
import { SEED } from "@/lib/seed";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl p-8">
      <h1 className="mb-6 text-2xl font-bold">Q&amp;A</h1>
      <Questions initial={SEED} />
    </main>
  );
}

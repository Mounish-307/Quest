export type Question = {
  id: string;
  body: string;
  author: string;
};

// Hardcoded placeholder data — intentionally fake. Submissions made through
// the form are NOT stored here; a refresh resets the list to exactly this.
export const SEED: Question[] = [
  { id: "1", body: "What time do doors open for the event?", author: "Priya" },
  { id: "2", body: "Will the talks be recorded and shared afterwards?", author: "Marcus" },
  { id: "3", body: "Is there a vegetarian option for lunch?", author: "Aisha" },
];

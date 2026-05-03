import LetterFromEditor from "../components/LetterFromEditor";

export function meta() {
  return [
    { title: "Letter From the Editor" },
    { name: "description", content: "A letter from the editor in chief" },
  ];
}

export default function LetterFromEditorRoute() {
  return <LetterFromEditor />;
}

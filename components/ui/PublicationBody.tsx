import type { PublicationBlock } from "@/lib/publications";

interface PublicationBodyProps {
  content: PublicationBlock[];
}

export function PublicationBody({ content }: PublicationBodyProps) {
  return (
    <div className="prose-publication space-y-5">
      {content.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={`${block.text}-${index}`}
              className="pt-2 text-xl font-bold text-text-dark first:pt-0"
            >
              {block.text}
            </h2>
          );
        }

        return (
          <p key={`${block.text.slice(0, 24)}-${index}`} className="text-base leading-relaxed text-text-muted">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

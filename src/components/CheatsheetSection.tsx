import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SubSection {
  title: string;
  content: ReactNode;
}

interface CheatsheetSectionProps {
  id: string;
  letter: string;
  title: string;
  subsections: SubSection[];
}

const CheatsheetSection = ({
  id,
  letter,
  title,
  subsections,
}: CheatsheetSectionProps) => {
  return (
    <section className="bg-card card-elevated rounded-xl border border-burgundy-muted overflow-hidden">
      <div className="bg-burgundy-muted px-5 py-4 border-b border-burgundy-muted">
        <h2 className="flex items-center gap-3 text-xl font-bold text-burgundy-dark">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-burgundy text-primary-foreground text-sm font-bold">
            {letter}
          </span>
          {title}
        </h2>
      </div>
      <div className="p-4">
        <Accordion type="multiple" className="space-y-2">
          {subsections.map((sub, index) => (
            <AccordionItem
              key={`${id}-${index}`}
              value={`${id}-${index}`}
              className="border border-burgundy-muted rounded-lg overflow-hidden bg-cream"
            >
              <AccordionTrigger className="px-4 py-3 hover:bg-burgundy-muted/50 text-left font-medium text-foreground hover:no-underline">
                {sub.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2 bg-cream-dark">
                {sub.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default CheatsheetSection;

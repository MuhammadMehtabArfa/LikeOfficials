import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQ() {
  return (
    <section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          Questions and Answers
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-[800px]">
          <AccordionItem value="item-1" className="border px-3 mb-3 border-gray-300 rounded-lg">
            <AccordionTrigger className="no-underline">
              What is the average turnaround time for a project?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                Turnaround time depends on the project scope. Basic websites typically take 3-5 days, while more complex sites can take 7-14 days. We always provide an estimated timeline before starting.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border px-3 mb-3 border-gray-300 rounded-lg">
            <AccordionTrigger className="no-underline">
              Do you work on a subscription basis?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-muted-foreground">
                No, we offer project-based pricing with clear deliverables — no ongoing subscriptions, just a one-time payment for your website.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border px-3 mb-3 border-gray-300 rounded-lg">
            <AccordionTrigger className="no-underline">
              Can I hire you for a single request or a small update?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-muted-foreground">
                Yes! Whether it's a full website build or a minor update, we're here to help. Let us know your requirements, and we'll get it done.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border px-3 mb-3 border-gray-300 rounded-lg">
            <AccordionTrigger className="no-underline">
              What if I'm not satisfied with the final website?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-muted-foreground">
                We offer revisions until you're happy with the result. Our process ensures we work closely with you to deliver exactly what you need.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

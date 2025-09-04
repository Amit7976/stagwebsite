import { LoaderLink } from "@/components/ui/loaderLinks";
import {
  Megaphone,
  Rocket,
  Bug,
  Search,
  Code2,
  Database,
  Server,
  ShieldCheck,
} from "lucide-react";

const mainIcons = [
  { icon: Megaphone },
  { icon: Rocket },
  { icon: Bug },
  { icon: Search },
  { icon: Code2 },
];

const subIcons = [
  { icon: Database },
  { icon: Server },
  { icon: ShieldCheck },
  { icon: Megaphone },
];

export default function DiscoverMore({
  heading = "Discover More",
  description = "Add a touch of magic to your day. Explore our web development services.",
  main = mainIcons,
  sub = subIcons,
}: {
  heading?: string;
  description?: string;
  main?: { icon: React.ElementType }[];
  sub?: { icon: React.ElementType }[];
}) {
  return (
    <section className="relative bg-background py-6 md:py-24">
      <div className="relative z-0 container">
        <div className="flex w-full flex-col items-center gap-5">
          {/* Icons Grid */}
          <div className="w-full max-w-[43.125rem]">
            <LoaderLink
              href="/s/services"
              className="flex w-full items-end justify-center gap-[2.8%]"
            >
              {main.map(({ icon: Icon }, i) => (
                <div
                  key={i}
                  className={`relative w-full max-w-[8.25rem] origin-bottom ${
                    i === 0 || i === main.length - 1
                      ? "scale-[.83] opacity-70 blur-[3px]"
                      : "scale-90"
                  } overflow-hidden rounded-[20%] border border-neutral-0 dark:border-stone-800 bg-neutral-0 dark:bg-stone-900 shadow-[inset_0_1px_1px_0_var(--color-stone-200)] dark:shadow-[inset_0_1px_1px_0_var(--color-stone-700)]`}
                >
                  <div>
                    <div data-slot="aspect-ratio" className="flex">
                      <Icon className="p-8 dark:p-6 w-40 h-30 text-neutral-500 dark:text-neutral-300" />
                    </div>
                  </div>
                </div>
              ))}
            </LoaderLink>
            <div className="flex w-full items-start justify-center gap-[2.8%] pt-[3%]">
              {sub.map(({ icon: Icon }, i) => (
                <div
                  key={i}
                  className={`relative w-full max-w-[7.625rem] origin-bottom ${
                    i === 0 || i === sub.length - 1
                      ? "scale-[.83] opacity-70 blur-[3px]"
                      : "scale-90 opacity-90"
                  } overflow-hidden rounded-[20%] border border-stone-50 dark:border-stone-950 bg-neutral-0 dark:bg-stone-900 shadow-[inset_0_1px_1px_0_var(--color-stone-200)] dark:shadow-[inset_0_1px_1px_0_var(--color-stone-700)]`}
                >
                  <div>
                    <div data-slot="aspect-ratio" className="flex">
                      <Icon className="p-8 dark:p-6 w-40 h-30 text-neutral-500 dark:text-neutral-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center text-center font-sans2">
            <h1 className="mb-5 text-5xl leading-tight font-semibold text-foreground md:text-7xl">
              {heading}
            </h1>
            <p className="max-w-[35rem] text-xl text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

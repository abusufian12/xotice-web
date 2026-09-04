import SisterConcernCard from "@/components/ui/SisterConcernCard";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/types";

interface SisterConcernsProps {
  dict: Dictionary;
}

const sisterImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
];

export default function SisterConcerns({ dict }: SisterConcernsProps) {
  return (
    <section className="bg-charcoal py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={dict.sisterConcerns.label}
          title={dict.sisterConcerns.title}
          subtitle={dict.sisterConcerns.subtitle}
          light
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {dict.sisterConcerns.items.map((item, index) => (
            <SisterConcernCard
              key={item.name}
              number={item.number}
              name={item.name}
              category={item.category}
              description={item.description}
              image={sisterImages[index]}
              exploreLabel={dict.sisterConcerns.explore}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

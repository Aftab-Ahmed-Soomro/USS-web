import Image from "next/image";

const brandCards = [
  {
    // title: "AGENCY 8",
    image: "/assets/brands/agent.png",
    // instagram: "10.5K",
  },
  {
    // title: "SADIA PSYCHOLOGY",
    image: "/assets/brands/sadia-psychology.png",
    // instagram: "735K",
    // youtube: "859K",
  },
  {
    // title: "UNILEVER",
    image: "/assets/brands/unilever-forest.png",
    // instagram: "234K",
    // youtube: "29K",
    // mark: "U",
  },
  {
    // title: "ADIDAS UAE",
    image: "/assets/brands/adidas.png",
    // instagram: "200K",
  },
];

export function OnlyBrands() {
  return (
    <section className="relative z-10 px-6 pb-[100px] pt-[58px] text-white lg:pb-[111px]">
      <h2 className="text-center text-[31px] font-medium leading-tight tracking-[-0.4px] sm:text-[35px]">
        brands we work with
      </h2>

      <div className="mx-auto mt-[26px] grid max-w-[1150px] grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
        {brandCards.map((brand) => (
          <article
            className="group relative mx-auto aspect-[176/314] w-full max-w-[246px] overflow-hidden rounded-[22px] bg-[#151515]"
            key={brand.image}
          >
            <Image
              src={brand.image}
              alt="Brand campaign"
              fill
              sizes="(min-width: 1024px) 246px, (min-width: 640px) 42vw, 82vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </article>
        ))}
      </div>
    </section>
  );
}

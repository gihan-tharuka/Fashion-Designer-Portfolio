import { CTASection } from "@/components/CTASection";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import {
  formatPrice,
  getCollectionFinalSellingPrice,
  getCollectionProductionCost,
  getLookFinalSellingPrice,
  getLookProductionCost,
  lookPricing,
} from "@/lib/pricing";
import { getLook } from "@/lib/looks";
import Link from "next/link";

export const metadata = {
  title: "Garment Pricing | LUMENÉ",
  description:
    "Garment costing and pricing overview for the LUMENÉ Capsule Collection.",
};

const costRows = [
  ["Fabric usage", "fabricUsage", "text"],
  ["Fabric price / yard", "fabricPricePerYard", "price"],
  ["Fabric cost", "fabricCost", "price"],
  ["Batik or dye cost", "batikOrDyeCost", "price"],
  ["Sewing cost", "sewingCost", "price"],
  ["Trims cost", "trimsCost", "price"],
  ["Finishing cost", "finishingCost", "price"],
  ["Total production cost", "totalProductionCost", "price"],
  ["Profit margin", "profitMargin", "text"],
  ["Final selling price", "finalSellingPrice", "price"],
] as const;

export default function PricingPage() {
  const totalGarments = lookPricing.reduce(
    (total, look) => total + look.garments.length,
    0,
  );

  return (
    <main className="bg-[radial-gradient(circle_at_14%_10%,rgba(179,137,75,0.14),transparent_28rem),linear-gradient(180deg,#f8f0e3,#fffaf0_38%,#f3e5cf)]">
      <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="editorial-container grid min-h-[58svh] gap-12 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <Reveal>
            <div>
              <div className="flex items-center gap-5">
                <p className="eyebrow">Pricing Archive</p>
                <span className="h-px w-24 bg-gold/55" />
              </div>
              <h1 className="serif mt-6 max-w-5xl text-6xl font-semibold leading-[0.88] text-espresso sm:text-8xl lg:text-9xl">
                Garment pricing for the LUMENÉ Capsule Collection.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
                A portfolio costing page for the six-look collection, showing
                production cost, margin, and selling-price direction for each
                garment piece. Placeholder values are marked where supplier or
                finishing prices still need confirmation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border-y border-gold/30 py-7">
              <p className="eyebrow">Collection Total</p>
              <p className="serif mt-4 text-4xl font-semibold leading-none text-brown">
                {formatPrice(getCollectionFinalSellingPrice())}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                {lookPricing.length} looks, {totalGarments} garment pieces.
                Final archive valuation remains subject to material and
                finishing confirmation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-gold/18 bg-cream/35">
        <div className="editorial-container">
          <Reveal className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:items-end">
            <p className="eyebrow">Collection Pricing Overview</p>
            <h2 className="serif text-5xl font-semibold leading-[0.96] text-espresso sm:text-6xl">
              Costing as part of the design development record
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
            <OverviewPanel
              label="Production Cost"
              value={formatPrice(getCollectionProductionCost())}
              text="Combined material, surface, construction, trims, and finishing costs."
            />
            <OverviewPanel
              label="Final Selling Price"
              value={formatPrice(getCollectionFinalSellingPrice())}
              text="Portfolio selling-price direction after applied design margin."
            />
            <OverviewPanel
              label="Garment Pieces"
              value={String(totalGarments).padStart(2, "0")}
              text="Individual pieces across the six complete collection looks."
            />
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container">
          <Reveal className="mb-12 grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
            <p className="eyebrow">Six Look Pricing Sections</p>
            <div>
              <h2 className="serif text-5xl font-semibold leading-[0.96] text-espresso sm:text-6xl">
                Look-by-look garment cost breakdowns
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
                Each panel links back to its look detail page and expands into
                garment-level costing. This is a costing archive, not a
                checkout or ecommerce catalogue.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8">
            {lookPricing.map((pricingLook) => {
              const look = getLook(pricingLook.lookSlug);
              const productionCost = getLookProductionCost(pricingLook);
              const finalSellingPrice = getLookFinalSellingPrice(pricingLook);

              return (
                <Reveal key={pricingLook.lookSlug}>
                  <section className="border border-gold/22 bg-cream/34 p-4 shadow-[0_24px_80px_rgba(58,36,24,0.08)] sm:p-6 lg:p-8">
                    <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr]">
                      <ImagePlaceholder
                        src={
                          look?.modelImage ??
                          `/images/website/look${Number(pricingLook.lookNumber)}model.png`
                        }
                        alt={`Look ${pricingLook.lookNumber} ${pricingLook.lookName}`}
                        label={pricingLook.lookName}
                        fit="contain"
                        showLabel={false}
                        showSpotlight={false}
                        className="aspect-[4/5] bg-[#DCDBDB]"
                      />

                      <div>
                        <div className="flex flex-col gap-5 border-b border-gold/20 pb-7 lg:flex-row lg:items-start lg:justify-between">
                          <div>
                            <p className="eyebrow">Look {pricingLook.lookNumber}</p>
                            <h3 className="serif mt-3 text-4xl font-semibold leading-none text-espresso sm:text-5xl">
                              {pricingLook.lookName}
                            </h3>
                            {pricingLook.note ? (
                              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                                {pricingLook.note}
                              </p>
                            ) : null}
                          </div>
                          <Link
                            href={`/portfolio/${pricingLook.lookSlug}`}
                            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-gold/38 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-brown transition duration-500 hover:-translate-y-0.5 hover:border-gold hover:bg-cream/70 hover:text-espresso"
                          >
                            View look detail
                          </Link>
                        </div>

                        <div className="mt-7 grid gap-4 sm:grid-cols-3">
                          <Metric label="Garments" value={pricingLook.garments.length} />
                          <Metric
                            label="Production cost"
                            value={formatPrice(productionCost)}
                          />
                          <Metric
                            label="Final selling price"
                            value={formatPrice(finalSellingPrice)}
                          />
                        </div>

                        <div className="mt-8 grid gap-4">
                          {pricingLook.garments.map((garment, index) => (
                            <details
                              key={garment.garmentName}
                              className="group border border-brown/10 bg-ivory/58 p-5"
                              open={index === 0}
                            >
                              <summary className="focus-ring flex cursor-pointer list-none flex-col gap-4 outline-none sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                  <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-gold">
                                    Garment {String(index + 1).padStart(2, "0")}
                                  </p>
                                  <h4 className="serif mt-2 text-3xl font-semibold leading-none text-espresso">
                                    {garment.garmentName}
                                  </h4>
                                  <p className="mt-3 text-sm leading-7 text-muted">
                                    {garment.fabric}
                                  </p>
                                </div>
                                <div className="flex items-center gap-4 text-left sm:text-right">
                                  <div>
                                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">
                                      Final Price
                                    </p>
                                    <p className="mt-1 text-sm font-bold text-espresso">
                                      {formatPrice(garment.finalSellingPrice)}
                                    </p>
                                  </div>
                                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/34 text-lg leading-none text-gold transition duration-500 group-open:rotate-45">
                                    +
                                  </span>
                                </div>
                              </summary>

                              <div className="mt-6 overflow-x-auto border-t border-gold/18 pt-5">
                                <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
                                  <tbody>
                                    {costRows.map(([label, key, valueType]) => (
                                      <tr
                                        key={key}
                                        className="border-b border-brown/10 last:border-b-0"
                                      >
                                        <th className="w-64 py-3 pr-5 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-gold">
                                          {label}
                                        </th>
                                        <td className="py-3 text-muted">
                                          {valueType === "text"
                                            ? garment[key]
                                            : formatPrice(garment[key])}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </details>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-gold/18 bg-ivory/68">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <Reveal>
            <div>
              <p className="eyebrow">Pricing Calculation</p>
              <h2 className="serif mt-4 text-5xl font-semibold leading-[0.96] text-espresso sm:text-6xl">
                How each garment price is formed
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid gap-5 text-base leading-8 text-muted">
              <p>
                Production cost combines fabric cost, batik or dye work,
                sewing, trims, and finishing. The fabric cost is based on fabric
                usage multiplied by fabric price per yard when confirmed.
              </p>
              <p>
                Final selling price is calculated by applying the listed profit
                margin to total production cost. Where fabric rates, finishing
                choices, or specialist surface costs are still pending, the
                value is marked as To be finalised or Price on request.
              </p>
              <p>
                These figures are portfolio costing estimates for archive,
                presentation, and production planning. They do not represent
                ecommerce inventory, checkout pricing, or ready-to-ship stock.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container">
          <Reveal className="mb-10 grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
            <p className="eyebrow">Summary Table</p>
            <h2 className="serif text-5xl font-semibold leading-[0.96] text-espresso sm:text-6xl">
              Collection costing summary
            </h2>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto border border-gold/24 bg-cream/42">
              <table className="w-full min-w-[54rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-gold/24">
                    <SummaryHead>Look</SummaryHead>
                    <SummaryHead>Garments</SummaryHead>
                    <SummaryHead>Production Cost</SummaryHead>
                    <SummaryHead>Final Selling Price</SummaryHead>
                    <SummaryHead>Detail</SummaryHead>
                  </tr>
                </thead>
                <tbody>
                  {lookPricing.map((pricingLook) => (
                    <tr
                      key={pricingLook.lookSlug}
                      className="border-b border-brown/10 last:border-b-0"
                    >
                      <td className="px-5 py-5">
                        <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-gold">
                          Look {pricingLook.lookNumber}
                        </p>
                        <p className="serif mt-1 text-2xl font-semibold text-espresso">
                          {pricingLook.lookName}
                        </p>
                      </td>
                      <SummaryCell>{pricingLook.garments.length}</SummaryCell>
                      <SummaryCell>
                        {formatPrice(getLookProductionCost(pricingLook))}
                      </SummaryCell>
                      <SummaryCell>
                        {formatPrice(getLookFinalSellingPrice(pricingLook))}
                      </SummaryCell>
                      <td className="px-5 py-5">
                        <Link
                          href={`/portfolio/${pricingLook.lookSlug}`}
                          className="font-bold uppercase tracking-[0.12em] text-gold transition hover:text-espresso"
                        >
                          Open look
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Request the final LUMENÉ costing sheet."
        text="For studio review, production planning, collaboration, or portfolio assessment, contact the designer for confirmed costing and garment-specific notes."
        buttonText="Contact for Pricing"
        href="/#contact"
      />
    </main>
  );
}

function OverviewPanel({
  label,
  value,
  text,
}: {
  label: string;
  value: string;
  text: string;
}) {
  return (
    <StaggerItem>
      <div className="min-h-full border border-gold/22 bg-ivory/62 p-6">
        <p className="eyebrow">{label}</p>
        <p className="serif mt-5 text-4xl font-semibold leading-none text-espresso">
          {value}
        </p>
        <p className="mt-5 text-sm leading-7 text-muted">{text}</p>
      </div>
    </StaggerItem>
  );
}

function Metric({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="border border-gold/18 bg-cream/38 p-4">
      <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold">
        {label}
      </p>
      <p className="mt-3 text-sm font-bold text-espresso">{value}</p>
    </div>
  );
}

function SummaryHead({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-5 py-4 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-gold">
      {children}
    </th>
  );
}

function SummaryCell({ children }: { children: React.ReactNode }) {
  return <td className="px-5 py-5 text-sm font-semibold text-muted">{children}</td>;
}

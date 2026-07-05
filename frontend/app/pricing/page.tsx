import { CTASection } from "@/components/CTASection";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { getPricing } from "@/lib/backend-api";
import { mapBackendPricingToLookPricing } from "@/lib/backend-mappers";
import {
  formatPrice,
  getLookFinalSellingPrice,
  getLookProductionCost,
  lookPricing,
  sumPriceValues,
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

export default async function PricingPage() {
  const backendPricing = await getPricing();
  const pricingArchive = backendPricing
    ? mapBackendPricingToLookPricing(backendPricing)
    : lookPricing;

  const totalGarments = pricingArchive.reduce(
    (total, look) => total + look.garments.length,
    0,
  );

  return (
    <main className="site-shell bg-[radial-gradient(circle_at_14%_10%,rgba(179,137,75,0.14),transparent_28rem),linear-gradient(180deg,#f8f0e3,#fffaf0_38%,#f3e5cf)]">
      <section className="full-bleed-section relative isolate overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="editorial-container grid gap-10 lg:min-h-[58svh] lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <Reveal>
            <div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <p className="eyebrow">Pricing Archive</p>
                <span className="h-px w-16 bg-gold/55 sm:w-24" />
              </div>
              <h1 className="serif mt-6 max-w-5xl text-5xl font-semibold leading-[0.94] text-espresso sm:text-7xl lg:text-9xl lg:leading-[0.88]">
                Garment pricing for the LUMENÉ Capsule Collection.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:mt-8 sm:text-lg">
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
                {formatPrice(getCollectionFinalSellingPriceFromArchive(pricingArchive))}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                {pricingArchive.length} looks, {totalGarments} garment pieces.
                Final archive valuation remains subject to material and
                finishing confirmation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="full-bleed-section section-pad border-y border-gold/18 bg-cream/35">
        <div className="editorial-container">
          <Reveal className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:items-end">
            <p className="eyebrow">Collection Pricing Overview</p>
            <h2 className="serif text-4xl font-semibold leading-[0.98] text-espresso sm:text-6xl">
              Costing as part of the design development record
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
            <OverviewPanel
              label="Production Cost"
              value={formatPrice(getCollectionProductionCostFromArchive(pricingArchive))}
              text="Combined material, surface, construction, trims, and finishing costs."
            />
            <OverviewPanel
              label="Final Selling Price"
              value={formatPrice(getCollectionFinalSellingPriceFromArchive(pricingArchive))}
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

      <section className="full-bleed-section section-pad">
        <div className="editorial-container">
          <Reveal className="mb-12 grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
            <p className="eyebrow">Six Look Pricing Sections</p>
            <div>
              <h2 className="serif text-4xl font-semibold leading-[0.98] text-espresso sm:text-6xl">
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
            {pricingArchive.map((pricingLook) => {
              const look = getLook(pricingLook.lookSlug);
              const productionCost = getLookProductionCost(pricingLook);
              const finalSellingPrice = getLookFinalSellingPrice(pricingLook);

              return (
                <Reveal key={pricingLook.lookSlug}>
                  <section className="min-w-0 border border-gold/22 bg-cream/34 p-4 shadow-[0_24px_80px_rgba(58,36,24,0.08)] sm:p-6 lg:p-8">
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
                        <div className="flex min-w-0 flex-col gap-5 border-b border-gold/20 pb-7 lg:flex-row lg:items-start lg:justify-between">
                          <div className="min-w-0">
                            <p className="eyebrow">Look {pricingLook.lookNumber}</p>
                            <h3 className="serif mt-3 text-3xl font-semibold leading-none text-espresso sm:text-5xl">
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
                            className="focus-ring inline-flex min-h-11 w-full items-center justify-center rounded-full border border-gold/38 px-5 py-2.5 text-center text-xs font-bold uppercase tracking-[0.14em] text-brown transition duration-500 hover:-translate-y-0.5 hover:border-gold hover:bg-cream/70 hover:text-espresso sm:w-fit"
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
                              className="group min-w-0 border border-brown/10 bg-ivory/58 p-4 sm:p-5"
                              open={index === 0}
                            >
                              <summary className="focus-ring flex cursor-pointer list-none flex-col gap-4 outline-none sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                  <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-gold">
                                    Garment {String(index + 1).padStart(2, "0")}
                                  </p>
                                  <h4 className="serif mt-2 text-2xl font-semibold leading-tight text-espresso sm:text-3xl sm:leading-none">
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

                              <div className="mt-6 grid gap-2 border-t border-gold/18 pt-5 sm:hidden">
                                {costRows.map(([label, key, valueType]) => (
                                  <div
                                    key={key}
                                    className="grid gap-1 border-b border-brown/10 py-3 last:border-b-0"
                                  >
                                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold">
                                      {label}
                                    </p>
                                    <p className="text-sm leading-6 text-muted">
                                      {valueType === "text"
                                        ? garment[key]
                                        : formatPrice(garment[key])}
                                    </p>
                                  </div>
                                ))}
                              </div>

                              <div className="mt-6 hidden overflow-x-auto border-t border-gold/18 pt-5 sm:block">
                                <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
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

      <section className="full-bleed-section section-pad border-y border-gold/18 bg-ivory/68">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <Reveal>
            <div>
              <p className="eyebrow">Pricing Calculation</p>
              <h2 className="serif mt-4 text-4xl font-semibold leading-[0.98] text-espresso sm:text-6xl">
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

      <section className="full-bleed-section section-pad">
        <div className="editorial-container">
          <Reveal className="mb-10 grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
            <p className="eyebrow">Summary Table</p>
            <h2 className="serif text-4xl font-semibold leading-[0.98] text-espresso sm:text-6xl">
              Collection costing summary
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid gap-4 md:hidden">
              {pricingArchive.map((pricingLook) => (
                <SummaryCard key={pricingLook.lookSlug} pricingLook={pricingLook} />
              ))}
            </div>

            <div className="hidden overflow-x-auto border border-gold/24 bg-cream/42 md:block">
              <table className="w-full min-w-[50rem] border-collapse text-left">
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
                  {pricingArchive.map((pricingLook) => (
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
      <div className="min-h-full min-w-0 border border-gold/22 bg-ivory/62 p-5 sm:p-6">
        <p className="eyebrow">{label}</p>
        <p className="serif mt-5 break-words text-3xl font-semibold leading-none text-espresso sm:text-4xl">
          {value}
        </p>
        <p className="mt-5 text-sm leading-7 text-muted">{text}</p>
      </div>
    </StaggerItem>
  );
}

function Metric({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="min-w-0 border border-gold/18 bg-cream/38 p-4">
      <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold">
        {label}
      </p>
      <p className="mt-3 break-words text-sm font-bold text-espresso">{value}</p>
    </div>
  );
}

function SummaryCard({ pricingLook }: { pricingLook: (typeof lookPricing)[number] }) {
  return (
    <article className="border border-gold/24 bg-cream/42 p-4">
      <div className="border-b border-gold/18 pb-4">
        <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-gold">
          Look {pricingLook.lookNumber}
        </p>
        <h3 className="serif mt-2 text-3xl font-semibold leading-none text-espresso">
          {pricingLook.lookName}
        </h3>
      </div>

      <dl className="mt-4 grid gap-3 text-sm">
        <div className="flex items-start justify-between gap-4">
          <dt className="font-bold uppercase tracking-[0.12em] text-gold">
            Garments
          </dt>
          <dd className="font-semibold text-muted">{pricingLook.garments.length}</dd>
        </div>
        <div className="flex items-start justify-between gap-4">
          <dt className="font-bold uppercase tracking-[0.12em] text-gold">
            Production
          </dt>
          <dd className="text-right font-semibold text-muted">
            {formatPrice(getLookProductionCost(pricingLook))}
          </dd>
        </div>
        <div className="flex items-start justify-between gap-4">
          <dt className="font-bold uppercase tracking-[0.12em] text-gold">
            Final Price
          </dt>
          <dd className="text-right font-semibold text-muted">
            {formatPrice(getLookFinalSellingPrice(pricingLook))}
          </dd>
        </div>
      </dl>

      <Link
        href={`/portfolio/${pricingLook.lookSlug}`}
        className="focus-ring mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-gold/38 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-brown transition duration-500 hover:-translate-y-0.5 hover:border-gold hover:bg-cream/70 hover:text-espresso"
      >
        Open look
      </Link>
    </article>
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

function getCollectionProductionCostFromArchive(pricingArchive: typeof lookPricing) {
  return sumPriceValues(pricingArchive.map(getLookProductionCost));
}

function getCollectionFinalSellingPriceFromArchive(pricingArchive: typeof lookPricing) {
  return sumPriceValues(pricingArchive.map(getLookFinalSellingPrice));
}

"use client";

import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import type {
  AdminLookPayload,
  BackendAdminLookDetail,
  BackendLookImageType,
} from "@/lib/backend-types";

const imageTypes: BackendLookImageType[] = [
  "HERO",
  "LINEUP",
  "DEVELOPMENT",
  "MODEL",
  "FINAL_VIEWS",
  "PROCESS",
  "DETAIL",
];

type LookFormProps = {
  initialValue?: BackendAdminLookDetail | null;
  isSubmitting: boolean;
  submitLabel: string;
  error?: string | null;
  success?: string | null;
  onSubmit: (payload: AdminLookPayload) => Promise<void>;
};

type FormState = AdminLookPayload;

function toFormState(initialValue?: BackendAdminLookDetail | null): FormState {
  return {
    number: initialValue?.number ?? "",
    slug: initialValue?.slug ?? "",
    name: initialValue?.name ?? "",
    subtitle: initialValue?.subtitle ?? "",
    description: initialValue?.description ?? "",
    concept: initialValue?.concept ?? "",
    designDevelopment: initialValue?.designDevelopment ?? "",
    problemsAndImprovements: initialValue?.problemsAndImprovements ?? "",
    outcomeAndReflection: initialValue?.outcomeAndReflection ?? "",
    displayOrder: initialValue?.displayOrder ?? 1,
    isFeatured: initialValue?.isFeatured ?? false,
    images:
      initialValue?.images.map((image) => ({
        type: image.type,
        url: image.url,
        alt: image.alt,
        caption: image.caption ?? "",
        displayOrder: image.displayOrder,
      })) ?? [],
    tags:
      initialValue?.tags.map((tag) => ({
        label: tag.label,
        displayOrder: tag.displayOrder,
      })) ?? [],
    materials:
      initialValue?.materials.map((material) => ({
        label: material.label,
        value: material.value,
        displayOrder: material.displayOrder,
      })) ?? [],
  };
}

function inputClassName() {
  return "focus-ring min-h-12 rounded-md border border-gold/24 bg-ivory/70 px-4 text-base text-espresso outline-none transition duration-300 placeholder:text-muted/60";
}

function textareaClassName() {
  return "focus-ring min-h-32 rounded-md border border-gold/24 bg-ivory/70 px-4 py-3 text-base text-espresso outline-none transition duration-300 placeholder:text-muted/60";
}

export function LookForm({
  initialValue,
  isSubmitting,
  submitLabel,
  error,
  success,
  onSubmit,
}: LookFormProps) {
  const [form, setForm] = useState<FormState>(() => toFormState(initialValue));

  useEffect(() => {
    setForm(toFormState(initialValue));
  }, [initialValue]);

  const derivedSlug = useMemo(() => {
    if (form.slug.trim()) {
      return form.slug;
    }

    return form.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }, [form.name, form.slug]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await onSubmit({
      ...form,
      slug: derivedSlug.trim(),
      subtitle: form.subtitle?.trim() || null,
      concept: form.concept?.trim() || null,
      designDevelopment: form.designDevelopment?.trim() || null,
      problemsAndImprovements: form.problemsAndImprovements?.trim() || null,
      outcomeAndReflection: form.outcomeAndReflection?.trim() || null,
      images: form.images.map((image, index) => ({
        ...image,
        caption: image.caption?.trim() || null,
        displayOrder: image.displayOrder || index + 1,
      })),
      tags: form.tags.map((tag, index) => ({
        ...tag,
        displayOrder: tag.displayOrder || index + 1,
      })),
      materials: form.materials.map((material, index) => ({
        ...material,
        displayOrder: material.displayOrder || index + 1,
      })),
    });
  }

  return (
    <form className="grid gap-8" onSubmit={handleSubmit}>
      <section className="soft-card rounded-md p-7 sm:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
              Look Number
            </span>
            <input
              value={form.number}
              onChange={(event) => updateField("number", event.target.value)}
              className={inputClassName()}
              placeholder="01"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
              Display Order
            </span>
            <input
              type="number"
              min={0}
              value={form.displayOrder}
              onChange={(event) =>
                updateField("displayOrder", Number(event.target.value) || 0)
              }
              className={inputClassName()}
            />
          </label>
          <label className="grid gap-2">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
              Look Name
            </span>
            <input
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className={inputClassName()}
            />
          </label>
          <label className="grid gap-2">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
              Slug
            </span>
            <input
              value={form.slug}
              onChange={(event) => updateField("slug", event.target.value)}
              className={inputClassName()}
              placeholder={derivedSlug || "look-07"}
            />
          </label>
        </div>

        <label className="mt-5 grid gap-2">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
            Subtitle
          </span>
          <input
            value={form.subtitle ?? ""}
            onChange={(event) => updateField("subtitle", event.target.value)}
            className={inputClassName()}
          />
        </label>

        <label className="mt-5 grid gap-2">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
            Description
          </span>
          <textarea
            value={form.description}
            onChange={(event) => updateField("description", event.target.value)}
            className={textareaClassName()}
          />
        </label>

        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          <label className="grid gap-2">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
              Concept
            </span>
            <textarea
              value={form.concept ?? ""}
              onChange={(event) => updateField("concept", event.target.value)}
              className={textareaClassName()}
            />
          </label>
          <label className="grid gap-2">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
              Design Development
            </span>
            <textarea
              value={form.designDevelopment ?? ""}
              onChange={(event) =>
                updateField("designDevelopment", event.target.value)
              }
              className={textareaClassName()}
            />
          </label>
          <label className="grid gap-2">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
              Problems And Improvements
            </span>
            <textarea
              value={form.problemsAndImprovements ?? ""}
              onChange={(event) =>
                updateField("problemsAndImprovements", event.target.value)
              }
              className={textareaClassName()}
            />
          </label>
        </div>

        <label className="mt-5 grid gap-2">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
            Outcome And Reflection
          </span>
          <textarea
            value={form.outcomeAndReflection ?? ""}
            onChange={(event) =>
              updateField("outcomeAndReflection", event.target.value)
            }
            className={textareaClassName()}
          />
        </label>

        <label className="mt-5 inline-flex items-center gap-3 text-sm font-medium text-espresso">
          <input
            type="checkbox"
            checked={form.isFeatured}
            onChange={(event) => updateField("isFeatured", event.target.checked)}
            className="h-4 w-4 rounded border-gold/40 text-espresso focus:ring-espresso"
          />
          Featured look
        </label>
      </section>

      <RepeatableEditor
        title="Tags"
        description="Short labels used across the public portfolio."
        items={form.tags}
        onAdd={() =>
          updateField("tags", [
            ...form.tags,
            { label: "", displayOrder: form.tags.length + 1 },
          ])
        }
        onRemove={(index) =>
          updateField(
            "tags",
            form.tags.filter((_, itemIndex) => itemIndex !== index),
          )
        }
        renderItem={(item, index) => (
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_8rem]">
            <input
              value={item.label}
              onChange={(event) => {
                const next = [...form.tags];
                next[index] = { ...next[index], label: event.target.value };
                updateField("tags", next);
              }}
              className={inputClassName()}
              placeholder="Draping"
            />
            <input
              type="number"
              min={0}
              value={item.displayOrder}
              onChange={(event) => {
                const next = [...form.tags];
                next[index] = {
                  ...next[index],
                  displayOrder: Number(event.target.value) || 0,
                };
                updateField("tags", next);
              }}
              className={inputClassName()}
            />
          </div>
        )}
      />

      <RepeatableEditor
        title="Materials"
        description="Label and value pairs for the public materials section."
        items={form.materials}
        onAdd={() =>
          updateField("materials", [
            ...form.materials,
            { label: "", value: "", displayOrder: form.materials.length + 1 },
          ])
        }
        onRemove={(index) =>
          updateField(
            "materials",
            form.materials.filter((_, itemIndex) => itemIndex !== index),
          )
        }
        renderItem={(item, index) => (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_8rem]">
            <input
              value={item.label}
              onChange={(event) => {
                const next = [...form.materials];
                next[index] = { ...next[index], label: event.target.value };
                updateField("materials", next);
              }}
              className={inputClassName()}
              placeholder="Fabric"
            />
            <input
              value={item.value}
              onChange={(event) => {
                const next = [...form.materials];
                next[index] = { ...next[index], value: event.target.value };
                updateField("materials", next);
              }}
              className={inputClassName()}
              placeholder="Silk chiffon and cotton crepe"
            />
            <input
              type="number"
              min={0}
              value={item.displayOrder}
              onChange={(event) => {
                const next = [...form.materials];
                next[index] = {
                  ...next[index],
                  displayOrder: Number(event.target.value) || 0,
                };
                updateField("materials", next);
              }}
              className={inputClassName()}
            />
          </div>
        )}
      />

      <RepeatableEditor
        title="Images"
        description="Plain text image paths only in this phase."
        items={form.images}
        onAdd={() =>
          updateField("images", [
            ...form.images,
            {
              type: "HERO",
              url: "",
              alt: "",
              caption: "",
              displayOrder: form.images.length + 1,
            },
          ])
        }
        onRemove={(index) =>
          updateField(
            "images",
            form.images.filter((_, itemIndex) => itemIndex !== index),
          )
        }
        renderItem={(item, index) => (
          <div className="grid gap-4 xl:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1fr)_8rem]">
            <select
              value={item.type}
              onChange={(event) => {
                const next = [...form.images];
                next[index] = {
                  ...next[index],
                  type: event.target.value as BackendLookImageType,
                };
                updateField("images", next);
              }}
              className={inputClassName()}
            >
              {imageTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <input
              value={item.url}
              onChange={(event) => {
                const next = [...form.images];
                next[index] = { ...next[index], url: event.target.value };
                updateField("images", next);
              }}
              className={inputClassName()}
              placeholder="/images/website/look1.jpg"
            />
            <input
              value={item.alt}
              onChange={(event) => {
                const next = [...form.images];
                next[index] = { ...next[index], alt: event.target.value };
                updateField("images", next);
              }}
              className={inputClassName()}
              placeholder="Runway or flat sketch view"
            />
            <input
              type="number"
              min={0}
              value={item.displayOrder}
              onChange={(event) => {
                const next = [...form.images];
                next[index] = {
                  ...next[index],
                  displayOrder: Number(event.target.value) || 0,
                };
                updateField("images", next);
              }}
              className={inputClassName()}
            />
            <div className="xl:col-span-4">
              <input
                value={item.caption ?? ""}
                onChange={(event) => {
                  const next = [...form.images];
                  next[index] = { ...next[index], caption: event.target.value };
                  updateField("images", next);
                }}
                className={inputClassName()}
                placeholder="Optional caption"
              />
            </div>
          </div>
        )}
      />

      {error ? (
        <div className="rounded-md border border-rose/30 bg-rose/10 px-4 py-3 text-sm leading-6 text-brown">
          {error}
        </div>
      ) : null}

      {success ? (
        <div className="rounded-md border border-teal/30 bg-teal/10 px-4 py-3 text-sm leading-6 text-teal">
          {success}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-espresso bg-espresso px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-cream transition duration-500 hover:-translate-y-0.5 hover:bg-brown disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Saving..." : submitLabel}
        </button>
      </div>
    </form>
  );
}

type RepeatableEditorProps<T> = {
  title: string;
  description: string;
  items: T[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  renderItem: (item: T, index: number) => ReactNode;
};

function RepeatableEditor<T>({
  title,
  description,
  items,
  onAdd,
  onRemove,
  renderItem,
}: RepeatableEditorProps<T>) {
  return (
    <section className="soft-card rounded-md p-7 sm:p-8">
      <div className="flex flex-col gap-3 border-b border-gold/18 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">{title}</p>
          <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-brown/12 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-brown transition duration-500 hover:-translate-y-0.5 hover:border-gold hover:bg-cream/70 hover:text-espresso"
        >
          Add Item
        </button>
      </div>

      <div className="mt-6 grid gap-4">
        {items.length ? (
          items.map((item, index) => (
            <div key={index} className="rounded-md border border-brown/10 bg-cream/55 p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gold">
                  Item {index + 1}
                </p>
                <button
                  type="button"
                  onClick={() => onRemove(index)}
                  className="text-xs font-bold uppercase tracking-[0.16em] text-brown/80 transition hover:text-brown"
                >
                  Remove
                </button>
              </div>
              {renderItem(item, index)}
            </div>
          ))
        ) : (
          <div className="rounded-md border border-dashed border-brown/14 bg-cream/35 p-4 text-sm leading-7 text-muted">
            No items added yet.
          </div>
        )}
      </div>
    </section>
  );
}

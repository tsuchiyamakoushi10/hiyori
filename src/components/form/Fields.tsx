import type { ReactNode } from "react";

type Base = {
  name: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
};

function Label({ htmlFor, label, required, as: Tag = "label" }: { htmlFor?: string; label: string; required?: boolean; as?: "label" | "legend" }) {
  return (
    <Tag htmlFor={Tag === "label" ? htmlFor : undefined} className="flex items-center gap-2 font-serif text-[15px] font-semibold tracking-[0.04em]">
      {label}
      {required ? (
        <span className="rounded-full bg-peach-soft px-2 py-0.5 font-sans text-[11px] font-normal text-[#a2452f]">必須</span>
      ) : (
        <span className="rounded-full bg-bg2 px-2 py-0.5 font-sans text-[11px] font-normal text-brown">任意</span>
      )}
    </Tag>
  );
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-2 text-[13px] text-error">
      {error}
    </p>
  );
}

const inputClass =
  "mt-2 block w-full rounded-xl border bg-paper px-4 py-3 text-[16px] leading-relaxed outline-none transition-colors focus:border-sage-deep focus:ring-2 focus:ring-sage-soft aria-[invalid=true]:border-error";

export function TextField({ name, label, required, error, hint, type = "text", autoComplete, placeholder }: Base & { type?: string; autoComplete?: string; placeholder?: string }) {
  const id = `f-${name}`;
  return (
    <div>
      <Label htmlFor={id} label={label} required={required} />
      {hint && <p className="mt-1 text-[12px] text-brown">{hint}</p>}
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputClass} border-line`}
      />
      <ErrorText id={`${id}-error`} error={error} />
    </div>
  );
}

export function TextArea({ name, label, required, error, hint, rows = 6 }: Base & { rows?: number }) {
  const id = `f-${name}`;
  return (
    <div>
      <Label htmlFor={id} label={label} required={required} />
      {hint && <p className="mt-1 text-[12px] text-brown">{hint}</p>}
      <textarea
        id={id}
        name={name}
        rows={rows}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputClass} border-line`}
      />
      <ErrorText id={`${id}-error`} error={error} />
    </div>
  );
}

export function ChoiceField({
  name,
  label,
  required,
  error,
  options,
  onChange,
}: Base & { options: readonly string[]; onChange?: (value: string) => void }) {
  const id = `f-${name}`;
  return (
    <fieldset aria-describedby={error ? `${id}-error` : undefined} aria-invalid={!!error}>
      <Label as="legend" label={label} required={required} />
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o} className="relative">
            <input
              type="radio"
              name={name}
              value={o}
              onChange={() => onChange?.(o)}
              className="peer absolute inset-0 opacity-0"
              {...(o === options[0] ? { id } : {})}
            />
            <span className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-line bg-paper px-5 text-[14px] transition-colors peer-checked:border-brown peer-checked:bg-brown peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sage-deep hover:border-brown">
              {o}
            </span>
          </label>
        ))}
      </div>
      <ErrorText id={`${id}-error`} error={error} />
    </fieldset>
  );
}

export function AgreeField({ error, children }: { error?: string; children: ReactNode }) {
  return (
    <div>
      <label className="flex min-h-11 cursor-pointer items-center justify-center gap-3">
        <input
          id="f-agree"
          type="checkbox"
          name="agree"
          aria-invalid={!!error}
          aria-describedby={error ? "f-agree-error" : undefined}
          className="size-5 accent-[var(--brown)]"
        />
        <span>{children}</span>
      </label>
      <div className="text-center">
        <ErrorText id="f-agree-error" error={error} />
      </div>
    </div>
  );
}

// 人には見えないハニーポット
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        このフィールドは入力しないでください
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

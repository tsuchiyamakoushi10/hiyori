export function SubmitButton({ sending, message, label = "送信する" }: { sending: boolean; message: string; label?: string }) {
  return (
    <div className="text-center">
      <p role="alert" className="mb-4 min-h-[1em] text-[14px] text-error">
        {message}
      </p>
      <button
        type="submit"
        disabled={sending}
        className="btn inline-flex min-h-14 min-w-[260px] items-center justify-between gap-4 rounded-full bg-brown px-9 text-[15px] tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#87705f] disabled:cursor-wait disabled:opacity-60"
      >
        <span>{sending ? "送信しています…" : label}</span>
        <span className="btn-arrow" aria-hidden="true" />
      </button>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Room = { name: string; src: string; alt: string; body: string };

function Photo({ room, sizes, className, onOpen }: { room: Room; sizes: string; className: string; onOpen: (room: Room) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(room)}
      className={`zoom-on-hover group relative block w-full cursor-zoom-in overflow-hidden ${className}`}
      aria-label={`${room.name}の写真を拡大する`}
    >
      <Image src={room.src} alt={room.alt} fill sizes={sizes} className="object-cover" />
    </button>
  );
}

// 写真はクリックで拡大。<dialog> を使うので Esc キーで閉じられ、フォーカスも戻る。
export function FacilityGallery({ main, rooms }: { main: Room; rooms: Room[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Room | null>(null);

  useEffect(() => {
    if (active) dialogRef.current?.showModal();
  }, [active]);

  const open = (room: Room) => setActive(room);

  return (
    <>
      <figure>
        <Photo room={main} onOpen={open} sizes="(min-width: 1240px) 1160px, 100vw" className="aspect-[16/10] rounded-[24px] sm:aspect-[21/9]" />
        <figcaption className="mt-5 sm:flex sm:items-baseline sm:gap-8">
          <h3 className="heading-3 shrink-0">{main.name}</h3>
          <p className="mt-1 text-brown sm:mt-0">{main.body}</p>
        </figcaption>
      </figure>

      <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2">
        {rooms.map((room) => (
          <li key={room.name}>
            <figure>
              <Photo room={room} onOpen={open} sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw" className="aspect-[3/2] rounded-[24px]" />
              <figcaption className="mt-4">
                <h3 className="heading-3">{room.name}</h3>
                <p className="mt-1 text-[14px] text-brown">{room.body}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        aria-label={active ? `${active.name}の写真` : undefined}
        className="m-auto w-[min(1100px,92vw)] max-w-none overflow-visible bg-transparent p-0 backdrop:bg-ink/70"
      >
        {active && (
          <div className="relative">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[20px] bg-paper">
              <Image src={active.src} alt={active.alt} fill sizes="92vw" className="object-contain" />
            </div>
            <p className="mt-3 text-center font-serif text-white">{active.name}</p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="absolute -top-14 right-0 grid size-11 place-items-center rounded-full bg-paper text-brown"
              aria-label="閉じる"
            >
              <span aria-hidden="true" className="absolute h-px w-5 rotate-45 bg-current" />
              <span aria-hidden="true" className="absolute h-px w-5 -rotate-45 bg-current" />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}

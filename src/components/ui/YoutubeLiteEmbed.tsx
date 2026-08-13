"use client";

import { Play } from "lucide-react";
import { useState } from "react";

type Props = {
  videoId: string;
  title: string;
};

export default function YoutubeLiteEmbed({ videoId, title }: Props) {
  const [play, setPlay] = useState(false);

  if (play) {
    return (
      <iframe
        className="size-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlay(true)}
      className="relative block size-full overflow-hidden"
      aria-label={`Play video: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        className="size-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <span className="absolute inset-0 bg-[#05245b]/25" />
      <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#0045bc] text-white shadow-lg">
        <Play size={28} fill="currentColor" className="ml-1" />
      </span>
    </button>
  );
}

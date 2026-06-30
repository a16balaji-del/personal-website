import Image from "next/image";
import type { PortfolioImage } from "@/data/portfolio";

type MediaFrameProps = {
  image: PortfolioImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function MediaFrame({
  image,
  className = "",
  priority = false,
  sizes = "(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) 42vw, 451px"
}: MediaFrameProps) {
  return (
    <div
      className={`group relative aspect-[451/361] overflow-hidden rounded-[24px] bg-soft sm:rounded-[39px] ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="image-zoom object-cover"
        style={{ objectPosition: image.objectPosition ?? "center" }}
      />
    </div>
  );
}

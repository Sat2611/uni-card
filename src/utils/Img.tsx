import Image from "next/image";

interface imgProp {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  baseImageUrl?: string;
  isNextImg?: boolean;
  priority?: boolean;
  loading?: any;
  quality?: any;
  objectFit?: any;
}

const myLoader: any = ({ src, width, quality }: imgProp) => {
  return `https://www.uni.cards${src}?w=${width}&q=${quality || 75}`;
};

const Img: React.FC<imgProp> = ({
  src,
  alt,
  className = "",
  baseImageUrl,
  isNextImg = false,
  loading = undefined,
  width,
  objectFit = "contain",
  height,

  priority = false,
}) => {
  if (isNextImg) {
    return (
      <Image
        src={src}
        loader={myLoader}
        alt={alt}
        width={width}
        height={height}
        className={className}
        placeholder='blur'
        blurDataURL={src}
        priority={priority}
        loading={loading}
      />
    );
  }
  return (
    <>
      <img src={`${src}`} alt={alt} className={`${className}`} />
    </>
  );
};

export default Img;

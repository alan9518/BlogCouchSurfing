import Image from 'next/image';

interface PostBodyProps {
  content: string;
  title: string;
  image: string;
}

export const PostBody = ({ title, image }: PostBodyProps) => {
  console.log('🚀 ~ PostBody ~ image:', image);
  return (
    <>
      <Image
        src={image}
        alt="post image"
        layout="responsive"
        width={500}
        height={300}
        className="rounded-sm"
      />
      <div>
        <h2 className="text-black font-semibold text-xl">{title}</h2>
      </div>
    </>
  );
};

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
        // src={'/posts/images/post_1.jpg'}
        src={image}
        alt="post image"
        layout="responsive"
        width={500}
        height={300}
        className="rounded-sm"
        placeholder="blur"
      />
      <div>
        <h2 className="text-black font-semibold text-xl">{title}</h2>
      </div>
    </>
  );
};

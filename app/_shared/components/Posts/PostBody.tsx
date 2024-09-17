import Image from 'next/image';
export const PostBody = () => {
  return (
    <>
      <Image
        src={'/posts/images/post_1.jpg'}
        alt="post image"
        layout="responsive"
        width={500}
        height={300}
        className="rounded-sm"
      />
      <div>
        <p>Such a beautiful view #blessed</p>
      </div>
    </>
  );
};

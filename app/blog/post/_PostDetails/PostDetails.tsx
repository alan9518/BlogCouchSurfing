interface PostDetailsProps {
  title: string;
  content: string;
  image: string;
  author: string;
  createdDate: string;
}
export const PostDetails = ({
  title,
  content,
  image,
  author,
  createdDate,
}: PostDetailsProps) => {
  console.log('🚀 ~ PostDetails ~ title:', title);
  return (
    <section className="flex flex-col items-start justify-start gap-2">
      <div
        className="w-full h-64"
        style={{ background: `url(${image})` }}
      ></div>
      <h2 className="text-2xl font-semibold mt-4">{title}</h2>
      <div className="flex items-center justify-start">
        <span className="capitalize  text-gray-500 font-light">
          by {author}
        </span>
        <span className="capitalize  text-gray-500 font-light">
          pulished on {createdDate}
        </span>
      </div>

      <p className="line">{content}</p>
    </section>
  );
};

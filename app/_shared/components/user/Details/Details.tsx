interface DetailsProps {
  firstName: string;
  lastName: string;
  email: string;
  dateCreated: string;
}
export const Details = ({
  firstName,
  lastName,
  email,
  dateCreated,
}: DetailsProps) => {
  return (
    <div className="w-full p-4">
      <ul className="flex flex-col items-start justify-between gap-2">
        <li>
          <span className="text-black font-semibold"> Full name: </span>
          <span className="text-gray-600">
            {firstName} {lastName}
          </span>
        </li>
        <li>
          <span className="text-black font-semibold"> Email: </span>
          <span className="text-gray-600"> {email} </span>
        </li>
        <li>
          <span className="text-black font-semibold"> Member since: </span>
          <span className="text-gray-600"> {dateCreated} </span>
        </li>
      </ul>
    </div>
  );
};

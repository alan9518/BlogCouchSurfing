interface NoDataMessageProps {
  message: string;
}
export const NoDataMessage = ({ message }: NoDataMessageProps) => (
  <div className="flex h-full min-h-64 w-full items-center justify-center">
    <p className="text-center text-xl font-semibold text-gray-300">{message}</p>
  </div>
);

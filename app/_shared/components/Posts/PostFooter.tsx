import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PostFooter = () => {
  return (
    <div className="flex items-center justify-end gap-4 ">
      <div className="flex items-center justify-start gap-2">
        <FontAwesomeIcon icon={faHeart} width={15} height={15} />
        <span>5.2k</span>
      </div>

      <div className="flex items-center justify-start  gap-2">
        <FontAwesomeIcon icon={faComment} width={15} height={15} />
        <span>54</span>
      </div>
    </div>
  );
};

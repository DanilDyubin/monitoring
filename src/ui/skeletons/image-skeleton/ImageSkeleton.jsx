import { Spinner } from '../../spinner/Spinner';
import s from './imageSkeleton.module.scss';

const ImageSkeleton = () => {
  return (
    <div className={s['image-skeleton']}>
      <Spinner size="small" />
    </div>
  );
};

export default ImageSkeleton;

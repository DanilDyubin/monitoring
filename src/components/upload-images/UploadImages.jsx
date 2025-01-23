// import { useState, useRef, useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { ImageContext } from '../../context/ImageContext';
// import Button from '../../ui/button/Button';

// import s from './uploadImages.module.scss';

// export const UploadImages = () => {
//   const [images, setImages] = useState([]);
//   const [drag, setDrag] = useState(false);

//   const navigate = useNavigate();

//   // const { urls, addImages } = useContext(ImageContext);
//   // console.log(urls);

//   const filePicker = useRef(null);
//   // API_KEY = 2c512d9968d02a61d78e9222a4213363
//   // URL = https://api.imgbb.com/1/upload?key=${apiKey}

//   // 'https://ibb.co/VD2LXrr/d8679c9faab3aea3688ece7f14c9eb22'

//   const handleImages = (e) => {
//     setImages(Array.from(e.target.files));
//   };

//   // const handleUpload = async () => {
//   //   if (!images.length) {
//   //     alert('please pick a file');
//   //     return;
//   //   }

//   //   let formData = new FormData();
//   //   images.forEach((image, i) => {
//   //     return formData.append(`image${i}`, image);
//   //   });
//   //   // formData.append('image', images);
//   //   console.log(formData);
//   //   let response = await fetch(
//   //     'https://api.imgbb.com/1/upload?key=2c512d9968d02a61d78e9222a4213363',
//   //     {
//   //       method: 'POST',
//   //       body: formData,
//   //     },
//   //   );

//   //   let result = await response.json();
//   //   console.log(result);
//   // };

//   const handleUpload = async () => {
//     if (!images.length) {
//       return;
//     }

//     let formData = new FormData();
//     images.forEach((image, i) => {
//       return formData.append('upl_img', image);
//     });
//     // formData.append('image', images);
//     console.log(formData);
//     let response = await fetch('https://msi.stage-detection.contextmachine.cloud/upload_images', {
//       method: 'POST',
//       body: formData,
//     });

//     let result = await response.json();
//     console.log(result);
//   };

//   const handleUploadImgBB = async () => {
//     if (!images.length) {
//       return;
//     }

//     const uploadedImages = [];

//     for (let image of images) {
//       let formData = new FormData();
//       formData.append('image', image);

//       try {
//         const response = await fetch(
//           'https://api.imgbb.com/1/upload?key=2c512d9968d02a61d78e9222a4213363',
//           {
//             method: 'POST',
//             body: formData,
//           },
//         );
//         const result = await response.json();

//         uploadedImages.push({
//           url: result.data.url,
//           deleteUrl: result.data.delete_url,
//         });

//         console.log(result.data.url);
//       } catch (error) {
//         console.error('Upload failed:', error);
//       }
//     }
//     // setUrls(uploadedImages);
//     console.log(uploadedImages);
//     // addImages(uploadedImages);
//     navigate('/form', { state: { images: uploadedImages } });
//   };

//   // '1e3b6309-1fc9-402d-ba67-23822cfcacf1'
//   // 'fb5dcafc-e446-4d21-84ca-d09e604ec98f'

//   const handleUploadImgMSI = async () => {
//     if (!images.length) {
//       return;
//     }

//     const uploadedImages = [];

//     for (let image of images) {
//       let formData = new FormData();
//       formData.append('image', image);

//       try {
//         const response = await fetch(
//           'https://msi.stage-detection.contextmachine.cloud/upload_images',
//           {
//             method: 'POST',
//             body: formData,
//           },
//         );
//         const result = await response.json();

//         // uploadedImages.push({
//         //   url: result.data.upload_img_ids,
//         //   deleteUrl: result.data.upload_img_ids,
//         // });

//         console.log(result);
//       } catch (error) {
//         console.error('Upload failed:', error);
//       }
//     }
//     console.log(uploadedImages);
//     // navigate('/form', { state: { images: uploadedImages } });
//   };

//   useEffect(() => {
//     // handleUploadImgBB();
//     handleUpload();
//   }, [images]);

//   const handleClick = () => {
//     filePicker.current.click(); // т/к мы скрыли input, при клике на button устанавливаем click и на input
//   };

//   const dragStartHandler = (e) => {
//     e.preventDefault();
//     setDrag(true);
//   };

//   const dragLeaveHandler = (e) => {
//     e.preventDefault();
//     setDrag(false);
//   };

//   const dropHandler = (e) => {
//     e.preventDefault();
//     setImages([...e.dataTransfer.files]);
//     setDrag(false);
//   };
//   console.log(images);

//   // const deleteImage = async (deleteUrl) => {
//   //   try {
//   //     const response = await fetch(deleteUrl, {
//   //       method: 'DELETE',
//   //     });

//   //     if (response.ok) {
//   //       console.log('Image deleted successfully');
//   //       console.log(response.status);
//   //     } else {
//   //       console.error('Failed to delete image:', response.statusText);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error occurred while deleting image:', error);
//   //   }
//   // };

//   return (
//     <div
//       className={s['images-upload']}
//       draggable="true"
//       onDragStart={(e) => dragStartHandler(e)}
//       onDragLeave={(e) => dragLeaveHandler(e)}
//       onDragOver={(e) => dragStartHandler(e)}
//       onDrop={(e) => dropHandler(e)}>
//       {drag ? <div className={s['images-upload__overlay']}>Отпустите файлы</div> : null}
//       <h3 className={s['images-upload__title']}>
//         Перетащите до 5 фотографий сюда
//         <br /> или
//       </h3>
//       <input
//         className={s['images-upload__input']}
//         type="file"
//         multiple
//         accept="image/*, .png, .jpg, .jpeg, .gif, .web, .svg"
//         name="images"
//         onChange={handleImages}
//         ref={filePicker}
//       />
//       <Button onClick={handleClick} title="Выберите файл" />
//       {/* <button onClick={handleUploadImgBB}>POST</button> */}
//       {/* <button
//         onClick={() => deleteImage('https://ibb.co/VD2LXrr/d8679c9faab3aea3688ece7f14c9eb22')}>
//         DELETE
//       </button> */}
//       {/* {urls.length > 0 ? urls.map((item, i) => <p key={i}>{item.url}</p>) : null}
//       <div>{urls.length}</div> */}
//       {/* <div>{url</div> */}
//       {/* <Link to="/form">TO FORM</Link> */}
//     </div>
//   );
// };

// export default UploadImages;

import { useState, useRef, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addImgsIds } from '../../redux/slices/scheduleSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ImageContext } from '../../context/ImageContext';
import { useUploadImages } from '../../hooks/useUploadImages';
import Button from '../../ui/button/Button';

import s from './uploadImages.module.scss';

export const UploadImages = () => {
  const [images, setImages] = useState([]);
  const [drag, setDrag] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { uploadImages } = useUploadImages();

  const filePicker = useRef(null);

  const handleImages = (e) => {
    setImages(Array.from(e.target.files)); // преобразуем объект files в массив
  };

  useEffect(() => {
    // handleUpload();
    if (images.length) {
      navigate('/form');
      uploadImages(images);
      // .then(() => {
      //   // После успеха — редирект
      //   navigate('/form');
      // })
      // .catch((err) => console.error(err));
    }
  }, [images]);

  const handleClick = () => {
    filePicker.current.click(); // т/к мы скрыли input, при клике на button устанавливаем click и на input
  };

  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const dropHandler = (e) => {
    e.preventDefault();
    setImages([...e.dataTransfer.files]);
    setDrag(false);
  };

  return (
    <div
      className={s['images-upload']}
      draggable="true"
      onDragStart={(e) => dragStartHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragOver={(e) => dragStartHandler(e)}
      onDrop={(e) => dropHandler(e)}>
      {drag ? <div className={s['images-upload__overlay']}>Отпустите файлы</div> : null}
      <h3 className={s['images-upload__title']}>
        Перетащите фотографии сюда
        <br /> или
      </h3>
      <input
        className={s['images-upload__input']}
        type="file"
        multiple
        accept="image/*, .png, .jpg, .jpeg, .gif, .web, .svg"
        name="images"
        onChange={handleImages}
        ref={filePicker}
      />
      <Button onClick={handleClick} title="Выберите файл" />
    </div>
  );
};

export default UploadImages;

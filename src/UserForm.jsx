import React from 'react'

const UserForm = (props) => {
  return (
    <div>{props.name}</div>
  )
}

// export default UserForm


// import React from 'react';
// import PropTypes from 'prop-types';

// import globalsService from '../../../services/GlobalsService';
// import { t } from '../../../services/i18nService';

// import styles from './capturedevice.scss';

// class CapturedPhoto extends React.PureComponent {
//     static propTypes = {
//         photo: PropTypes.object,
//     };

//     constructor(props) {
//         super(props);

//         this.state = {
//             photoData: null,
//         };
//     }

//     componentDidMount() {
//         const cachedPhotoData = localStorage.getItem('capturedPhotoData');
//         if (cachedPhotoData) {
//             this.setState({ photoData: cachedPhotoData });
//         }
//     }

//     componentDidUpdate(prevProps) {
//         const { photo } = this.props;
//         if (photo !== prevProps.photo) {
//             if (photo) {
//                 const reader = new FileReader();
//                 reader.onloadend = () => {
//                     const photoData = reader.result;
//                     this.setState({ photoData });
//                     localStorage.setItem('capturedPhotoData', photoData);
//                 };
//                 reader.readAsDataURL(photo);
//             } else {
//                 this.setState({ photoData: null });
//                 localStorage.removeItem('capturedPhotoData');
//             }
//         }
//     }

//     render() {
//         const { photoData } = this.state;

//         let className = styles.capturedPhoto;
//         let img = null;

//         const hasPhoto = photoData !== null;
//         const wrapperClassName = (!hasPhoto) ? styles.placeholderWrapper : null;

//         if (hasPhoto) {
//             img = (
//                 <img
//                     src={photoData}
//                     alt={t('idVerification.captureDevice.capturedPhotoAltText')}
//                     className={styles.capturedPhotoImage}
//                 />
//             );
//         } else {
//             const assetRoot = globalsService.getAssetRoot();
//             let webcamGrayPath = 'images/idverification/webcam-gray.svg';

//             if (assetRoot) {
//                 webcamGrayPath = `${assetRoot}/${webcamGrayPath}`;
//             }

//             className += ` ${styles.placeholder}`;
//             img = (
//                 <img
//                     src={webcamGrayPath}
//                     alt={t('idVerification.captureDevice.placeholderAltText')}
//                     className={styles.placeholderIcon}
//                 />
//             );
//         }

//         return (
//             <div className={className}>
//                 <div className={wrapperClassName}>
//                     {img}
//                 </div>
//             </div>
//         );
//     }
// }

// export default CapturedPhoto;


// *************************

// class CapturedPhoto extends React.PureComponent {
//   static propTypes = {
//       photo: PropTypes.object,
//   };

//   constructor(props) {
//       super(props);

//       const cachedPhotoData = localStorage.getItem('capturedPhotoData');
//       this.state = {
//           photoData: cachedPhotoData || null,
//       };
//   }

//   componentDidUpdate(prevProps) {
//       const { photo } = this.props;
//       if (photo !== prevProps.photo) {
//           if (photo) {
//               const reader = new FileReader();
//               reader.onloadend = () => {
//                   const photoData = reader.result;
//                   this.setState({ photoData });
//                   localStorage.setItem('capturedPhotoData', photoData);
//               };
//               reader.readAsDataURL(photo);
//           } else {
//               this.setState({ photoData: null });
//               localStorage.removeItem('capturedPhotoData');
//           }
//       }
//   }

//   componentWillUnmount() {
//       // Clean up any resources or event listeners if needed
//   }

//   render() {
//       const { photoData } = this.state;

//       let className = styles.capturedPhoto;
//       let img = null;

//       const hasPhoto = photoData !== null;
//       const wrapperClassName = (!hasPhoto) ? styles.placeholderWrapper : null;

//       if (hasPhoto) {
//           img = (
//               <img
//                   src={photoData}
//                   alt={t('idVerification.captureDevice.capturedPhotoAltText')}
//                   className={styles.capturedPhotoImage}
//               />
//           );
//       } else {
//           const assetRoot = globalsService.getAssetRoot();
//           let webcamGrayPath = 'images/idverification/webcam-gray.svg';

//           if (assetRoot) {
//               webcamGrayPath = `${assetRoot}/${webcamGrayPath}`;
//           }

//           className += ` ${styles.placeholder}`;
//           img = (
//               <img
//                   src={webcamGrayPath}
//                   alt={t('idVerification.captureDevice.placeholderAltText')}
//                   className={styles.placeholderIcon}
//               />
//           );
//       }

//       return (
//           <div className={className}>
//               <div className={wrapperClassName}>
//                   {img}
//               </div>
//           </div>
//       );
//   }
// }

// export default CapturedPhoto;

// **************************************

// class CapturedPhoto extends React.PureComponent {
//   static propTypes = {
//       photo: PropTypes.object,
//   };

//   constructor(props) {
//       super(props);

//       const cachedPhotoData = localStorage.getItem('capturedPhotoData');
//       this.photoData = cachedPhotoData || null;
//   }

//   componentDidUpdate(prevProps) {
//       const { photo } = this.props;
//       if (photo !== prevProps.photo) {
//           if (photo) {
//               const reader = new FileReader();
//               reader.onloadend = () => {
//                   const photoData = reader.result;
//                   this.photoData = photoData;
//                   localStorage.setItem('capturedPhotoData', photoData);
//               };
//               reader.readAsDataURL(photo);
//           } else {
//               this.photoData = null;
//               localStorage.removeItem('capturedPhotoData');
//           }
//       }
//   }

//   componentWillUnmount() {
//       // Clean up any resources or event listeners if needed
//   }

//   render() {
//       const { photoData } = this;

//       let className = styles.capturedPhoto;
//       let img = null;

//       const hasPhoto = photoData !== null;
//       const wrapperClassName = (!hasPhoto) ? styles.placeholderWrapper : null;

//       if (hasPhoto) {
//           img = (
//               <img
//                   src={photoData}
//                   alt={t('idVerification.captureDevice.capturedPhotoAltText')}
//                   className={styles.capturedPhotoImage}
//               />
//           );
//       } else {
//           const assetRoot = globalsService.getAssetRoot();
//           let webcamGrayPath = 'images/idverification/webcam-gray.svg';

//           if (assetRoot) {
//               webcamGrayPath = `${assetRoot}/${webcamGrayPath}`;
//           }

//           className += ` ${styles.placeholder}`;
//           img = (
//               <img
//                   src={webcamGrayPath}
//                   alt={t('idVerification.captureDevice.placeholderAltText')}
//                   className={styles.placeholderIcon}
//               />
//           );
//       }

//       return (
//           <div className={className}>
//               <div className={wrapperClassName}>
//                   {img}
//               </div>
//           </div>
//       );
//   }
// }

// export default CapturedPhoto;

// **************************************************

// import React from 'react';
// import PropTypes from 'prop-types';

// import globalsService from '../../../services/GlobalsService';
// import { t } from '../../../services/i18nService';

// import styles from './capturedevice.scss';

// class CapturedPhoto extends React.PureComponent {
//     static propTypes = {
//         photo: PropTypes.object,
//     };

//     constructor(props) {
//         super(props);

//         const cachedPhotoData = localStorage.getItem('capturedPhotoData');
//         this.state = {
//             photoData: cachedPhotoData || null,
//         };
//     }

//     componentDidUpdate(prevProps) {
//         const { photo } = this.props;
//         if (photo !== prevProps.photo) {
//             if (photo) {
//                 const reader = new FileReader();
//                 reader.onloadend = () => {
//                     const photoData = reader.result;
//                     localStorage.setItem('capturedPhotoData', photoData);
//                     this.updatePhotoData(photoData);
//                 };
//                 reader.readAsDataURL(photo);
//             } else {
//                 localStorage.removeItem('capturedPhotoData');
//                 this.updatePhotoData(null);
//             }
//         }
//     }

//     updatePhotoData(photoData) {
//         this.setState({ photoData });
//     }

//     render() {
//         const { photoData } = this.state;

//         let className = styles.capturedPhoto;
//         let img = null;

//         const hasPhoto = photoData !== null;
//         const wrapperClassName = !hasPhoto ? styles.placeholderWrapper : null;

//         if (hasPhoto) {
//             img = (
//                 <img
//                     src={photoData}
//                     alt={t('idVerification.captureDevice.capturedPhotoAltText')}
//                     className={styles.capturedPhotoImage}
//                 />
//             );
//         } else {
//             const assetRoot = globalsService.getAssetRoot();
//             let webcamGrayPath = 'images/idverification/webcam-gray.svg';

//             if (assetRoot) {
//                 webcamGrayPath = `${assetRoot}/${webcamGrayPath}`;
//             }

//             className += ` ${styles.placeholder}`;
//             img = (
//                 <img
//                     src={webcamGrayPath}
//                     alt={t('idVerification.captureDevice.placeholderAltText')}
//                     className={styles.placeholderIcon}
//                 />
//             );
//         }

//         return (
//             <div className={className}>
//                 <div className={wrapperClassName}>
//                     {img}
//                 </div>
//             </div>
//         );
//     }
// }

// export default CapturedPhoto;


// ********************************************?

// import React from 'react';
// import PropTypes from 'prop-types';

// import ExitTestButton from '../../testOverview/ExitTestButton';
// import NextButton from './NextButton';

// /**
//  * This component allows either:
//  * - go to the next step if the photo is approved, or,
//  * - to quit the test if the photo is rejected.
//  *
//  * As a rejected photo prevents you from continuing the test, it is better to
//  * directly add a button to quit the test. This way, if the student fails to
//  * take a valid photo, they can still end the test and try again later.
//  */
// class CapturedPhotoCheckpointNavigationButton extends React.PureComponent {
//     static propTypes = {
//         approved: PropTypes.bool.isRequired,
//         onNext: PropTypes.func.isRequired,
//     };

//     handleNext = () => {
//         this.props.onNext();
//         localStorage.removeItem('capturedPhotoData');
//     };

//     render() {
//         const { approved } = this.props;

//         if (approved) {
//             return <NextButton onNext={this.handleNext} />;
//         }

//         return <ExitTestButton showButtonForNonLockdown />;
//     }
// }

// export default CapturedPhotoCheckpointNavigationButton;

// import {useRef} from 'react';
// export const FileUploader = ({onFileSelectSuccess,onFileSelectError}) => {
    

//     const handleFileInput = (e) => {
//         // handle validations
//         const file = e.target.files[0];
//         if (file.size > 1024)
//           onFileSelectError({ error: "File size cannot exceed more than 1MB" });
//         else onFileSelectSuccess(file);
//       };

//     return (
//         <div className="file-uploader">
//             <input type="file" onChange={handleFileInput}/>
            
//         </div>
//     )
// }
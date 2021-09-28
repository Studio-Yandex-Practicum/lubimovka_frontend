// import React, { useRef, useState, useEffect, FC, useCallback } from 'react';
// import cn from 'classnames';

// import { Icon } from '../../icon';

// import styles from './input-file.module.css';

// interface IInputFileContainer {
//     typesListFiles?: string[],
//     cb?: (file: File) => void,
// }

// export const InputFileContainer: FC<IInputFileContainer> = () => {
//     // Удаляю файл при нажатии на крестик
//   const fileOnDelete = (input: HTMLInputElement): void => {
//     // Удаляю с тэга
//     input.value = '';

//     // Файл удаляю для отправки на сервер
//     setFile(null);
//     setMessageError('');

//     setNameFile('');
//   };

//     // Удаление файла
//     const handlerDeteleFile = (): void => {
//         if (inputRef.current) {
//           const input: HTMLInputElement = inputRef.current;
//           fileOnDelete(input);
//         }
//       };

//     return (
//         nameFile && (
//             <div className={ cn(styles.conteiner) }>
//               <button onClick={ handlerDeteleFile } className={ cn(styles.delete) } >
//                 {
//                   <Icon glyph='cross' className={styles.iconDelete} fill='white' />
//                 }
//               </button>
//               <p className={ cn(styles.name) }>
//                 { nameFile }
//               </p>
//             </div>
//           )
//         }
//     );
// };

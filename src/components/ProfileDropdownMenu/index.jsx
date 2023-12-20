import { useRef, useEffect, memo } from 'react';

import classNames from 'classnames';

import style from './ProfileDropdownMenu.module.scss';

export const ProfileDropdownMenu = memo(({openModal, dropDownMenuHandler, buttonProfileRef}) => {   

  const dropdownRef = useRef(null);   

  const wrapperStyle = classNames({
      [style.ProfileDropdownMenu_wrapper]: true,
      [style.close]: !!(!openModal),
      // [style.open]: openModal
  });

  // useEffect(() => {
  //     if(!openModal) return;

  //     const handleOutsideClick = (event) => {
  //       if (!dropdownRef.current.contains(event.target) || !buttonProfileRef.current.contains(event.target)) {
  //         dropDownMenuHandler();
  //       }
  //     };
  
  //     document.addEventListener('mousedown', handleOutsideClick);
  
  //     return () => {
  //       document.removeEventListener('mousedown', handleOutsideClick);
  //     };
  //   }, [openModal]);

  return (
      <div className={wrapperStyle} ref={dropdownRef}>
          <p>hello world</p>
      </div>
  )
});

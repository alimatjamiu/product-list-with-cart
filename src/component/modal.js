// import { useEffect, useRef, useState } from "react";
// import { CgClose } from "react-icons/cg";

// const Modal = ({
//   children,
//   isOpen,
//   onClose,
//   withCloseButton = true,
//   type = "soft",
// }) => {
//   const contentRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(isOpen);

//   // Handle clicking outside modal to close
//   const handleClickOutside = (e) => {
//     if (contentRef.current && !contentRef.current.contains(e.target)) {
//       if (type === "soft") {
//         handleClose();
//       }
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         if (type === "soft") {
//           handleClose();
//         }
//       }
//     };

//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//       window.addEventListener("keydown", handleKeyDown);
//       setIsVisible(true); // Show modal immediately when opened
//     } else {
//       document.body.style.overflow = "auto";
//       setTimeout(() => setIsVisible(false), 300); // Delay unmounting after animation
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [isOpen]);

//   const handleClose = () => {
//     setTimeout(() => onClose(), 100); // Ensure animation finishes before unmounting
//   };

//   if (!isVisible) return null; // Completely remove from DOM after animation

//   return (
//     <div>
//       {/* Backdrop */}
//       <div
//         className={`fixed inset-0 bg-black transition-opacity duration-300 ${
//           isOpen ? "opacity-50 z-[99]" : "opacity-0 -z-[9999] invisible"
//         }`}
//       ></div>

//       {/* Modal Content */}
//       <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[999] overflow-hidden">
//         <div
//           ref={contentRef}
//           className={`relative bg-white py-5 rounded-md transition-all duration-300 transform max-h-[88vh] h-max ${
//             isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
//           }`}
//           onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
//         >
//           {/* Header */}
//           {withCloseButton ? (
//             <button className="absolute right-5 top-5" onClick={handleClose}>
//               <CgClose size={23} className="text-neutrals600" />
//             </button>
//           ) : null}

//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
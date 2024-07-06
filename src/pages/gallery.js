import BlogHeader from "../components/blogHeader";
import React, { useState, useEffect } from "react";

const testImage = "pics/selection_sort.png";
const alt = "Selection sort has never seemed so fun";
const description =
  "Selection sort is a simple sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.";

const ImageZoom = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <div className="galleryImage">
        <img src={src} alt={alt} onClick={handleOpen} />
        <p>{alt}</p>
      </div>

      {isOpen && (
        <div className="popupSheet" onClick={handleClose}>
          <div className="popupSheetDiv" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleClose} aria-label="Close image">
              &times;
            </button>
            <img src={src} alt={alt} />
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Gallery() {
  const message = "Gallery";
  const message2 = "some of my dump pics";

  return (
    <div className="pageBase">
      <div className="blogSheet">
        <BlogHeader header={message} belowHeader={message2} />
        <ImageZoom src={testImage} alt={alt} />
      </div>
    </div>
  );
}

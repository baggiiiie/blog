import BlogHeader from "../components/blogHeader";
import React, { useState, useEffect } from "react";

const testImage = "pics/selection_sort.png";
const alt = "Selection sort has never seemed so fun";
const description =
  "Selection sort is a simple sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.";

const image2 = "pics/we_dance.png";
const alt2 = "Who doesn't love a good time like this";
const description2 = "But it ain't gonna be the same";

const image3 = "pics/life_view.jpg";
const alt3 = "philosophy sunday - July 7, 24";
const description3 =
  "wrote this down in the morning. was reading Designing Your Life. coincidentally watched this video just now, found this sentence completely mesmerizing: 'you are the universe attempting to figure itself out, don't end it because you got confused.' https://youtu.be/35s4-3T5dJY?si=r-4nwy8sWi6IPA20&t=327";

const ImageZoom = ({ src, alt, description }) => {
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
          <div className="popupSheetDiv" onClick={handleClose}>
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
  const message2 = "some of my dumb pics";

  return (
    <div className="pageBase">
      <div className="blogSheet">
        <BlogHeader header={message} belowHeader={message2} />
        <ImageZoom src={testImage} alt={alt} description={description} />
        <ImageZoom src={image2} alt={alt2} description={description2} />
        <ImageZoom src={image3} alt={alt3} description={description3} />
      </div>
    </div>
  );
}

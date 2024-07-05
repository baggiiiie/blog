import BlogHeader from "../components/blogHeader";
// import TestImage from "pics/test.png";

const testImage = "pics/selection_sort.png";
const alt = "Selection sort has never seemed so fun";
const description =
  "Selection sort is a simple sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.";

export function Pictures({ image, alt, description }) {
  return (
    <div className="imageContainer">
      <img src={image} alt={alt} />
      <p className="imageContainerPicText">{alt}</p>
      <p className="imageContainerDescription">{description}</p>
    </div>
  );
}

export default function Gallery() {
  const message = "Gallery";
  const message2 = "some of my dump pics";

  return (
    <div className="pageBase">
      <div className="blogSheet">
        <BlogHeader header={message} belowHeader={message2} />
        <Pictures image={testImage} alt={alt} description={description} />
      </div>
    </div>
  );
}

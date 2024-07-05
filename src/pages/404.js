import Link from "next/link";
import BlogHeader from "../components/blogHeader";

export default function Custom404() {
  const message = "baggiiiie have not yet written this page...";
  const message2 =
    "but you can find a more interesting one if u kindly take my redirection";

  return (
    <div className="pageBase">
      <div className="blogSheet">
        <BlogHeader header={message} belowHeader={message2} />
        <div className="text-center">
          <Link href="https://indieblog.page/random">
            - &gt; no more 404 &lt; -
          </Link>
        </div>
      </div>
    </div>
  );
}

import Navbar from "@/components/Navbar/Navbar";
import { useDocumentTitle } from "@/utils/hooks/useDocumentTitle";

export default function AboutUs() {
  useDocumentTitle("AboutUs");
  return (
    <>
      <Navbar />
      <main>AboutUs</main>
    </>
  );
}

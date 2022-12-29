import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";
import PdfTemplate from "./PdfTemplate";

export default function App() {
  const content = ReactDOMServer.renderToString(<PdfTemplate />);

  console.log(content);

  const handleGeneratePdf = async () => {
    const doc = new jsPDF({
      orientation: "landscape",
      format: "a4",
      unit: "px"
    });

    doc.html(content, {
      async callback(doc) {
        await doc.save("document");
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleGeneratePdf}>Generate</button>
      <PdfTemplate />
    </div>
  );
}

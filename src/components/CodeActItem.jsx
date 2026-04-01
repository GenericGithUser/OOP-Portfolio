import CodeRender from "./CodeRender"
import { useEffect, useState, useRef } from "react"
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function CodeActItem({ name, source, score, screenshots, info, labels }){
    const [content, setContent] = useState("");
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [containerWidth, setContainerWidth] = useState(null);
    const containerRef = useRef(null);

    function onLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(()=>{
        fetch(source)
        .then((res)=> res.text())
        .then((data)=> setContent(data))
        .catch((e)=> console.log(e))
    }, [])
    
    const setPDFSize = () =>{
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    }

    useEffect(()=>{
      setPDFSize();
      window.addEventListener('resize', setPDFSize);
      return () =>{
        window.removeEventListener('reset', setPDFSize)
      }
    }, []);

    return (
      <>
        <div className="codeBox bg-green1-cus p-2 rounded-2xl flex-col border-green4-cus border-5 overflow-auto w-[80vw] justify-items-center max-[500px]:w-[90vw]">
          <h1 className="title font-bold text-2xl text-center">
            {name} | Score: {score}
          </h1>
          <div className="actCodeStuff flex flex-col justify-center items-center">
            {source == "none" ? (
              <div className="pdfView">
                <Document
                  file={screenshots}
                  onLoadSuccess={onLoadSuccess}
                  className="border-4 border-amber-200 rounded-2xl overflow-auto max-[900px]:w-[70vw] max-[500px]:w-[80vw] "
                >
                  <Page
                    pageNumber={pageNumber}
                    size="Legal"
                    className=""
                    width={containerWidth}
                  ></Page>
                </Document>
                <div className="pageNav text-center">
                  <a
                    href={screenshots}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold underline text-amber-950"
                  >
                    Open in New Tab?
                  </a>
                  <p>
                    Page {pageNumber} of {numPages}{" "}
                  </p>
                  <button
                    type="button"
                    className="cursor-pointer bg-brown1-cus p-2 font-bold border-2 border-green5-cus rounded-2xl transition-all duration-100 ease-in-out hover:border-2 hover:border-green-950 "
                    onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer bg-brown1-cus p-2 font-bold border-2 border-green5-cus rounded-2xl transition-all duration-100 ease-in-out hover:border-2 hover:border-green-950 "
                    onClick={() =>
                      setPageNumber((p) => Math.min(numPages, p + 1))
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div className="codeExists">
                <CodeRender content={content}></CodeRender>
                <h1 className="title font-bold text-2xl text-center">
                  Screenshots:
                </h1>
                <div className="screenShotBox mb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-[500px]:grid-cols-1">
                  {/* <img src={screenshots} alt="missing" className="w-[30vw] border-3 border-amber-200 rounded-3xl"/> */}
                  {screenshots.map((x, index) => (
                    <div className="imgBox">
                      <a href={x} target="_blank">
                        <img
                          src={x}
                          alt="missing"
                          className="w-[30vw] border-3 border-amber-200 rounded-3xl max-[800px]:v-[70vw] max-[500px]:w-screen"
                        />
                      </a>
                      <p className="text-center font-bold text-brown1-cus">{labels[index]}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="infoBox border-t-4 border-green4-cus">
              <h2 className="font-bold text-xl">Explanation</h2>
              <p className="text-l  h-30">{info}</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default CodeActItem
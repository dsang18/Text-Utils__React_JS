export default function About(props){

  let myStyle={
    color: props.mode==="dark"?"white":"black",
    backgroundColor : props.mode==="dark"?"#2d2a2a":"white",
    border:"none",
    margin:0,
  }
  let borderStyle = {
    border: props.mode==="dark"?"1px solid white":"1px solid black",
    borderRadius : "5px",
  }
  let borderTop = {
    borderTop: props.mode==="dark"?"1px solid white":"1px solid black",
  }
  return(
    <div className="container">
      <h1>About Us</h1>
      <div className="container px-0 py-0"  style={borderStyle}>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingOne" style={{margin:0}}>
              <button
                className="accordion-button collapsed my-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={myStyle}
              >
                Analyze Your Text
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count of sentence count.
              </div>
            </div>

          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingTwo" style={borderTop}>
              <button
                className="accordion-button collapsed my-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={myStyle}
              >
                Free To Use
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" >
                TextUtils is a free character counter tool that provides instant character count word count & sentence count statistics for a given text. TextUtils reports the numbers of words & characters. Thus it is suitable for writing text with word/cvharacter limit.
              </div>
            </div>
          </div>


          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingThree" style={borderTop}>
              <button
                className="accordion-button collapsed my-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={myStyle}
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                This word counter software works in all web browsers such as chrome. FireFox, Internet Explorer, Safari, Opera. IT suites to count characters in posts, blogs, books, excel documents, pdf documents, essays.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

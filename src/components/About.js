import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    //     border: "1px solid white"
    // })
    // const [buttonText, setButtonText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === "black") {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //         setButtonText("Enable Light Mode")
    //     } else {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white",
    //             border: "1px solid white"
    //         })
    //         setButtonText("Enable Dark Mode")
    //     }
    // }
    return (
        <>
            <div className="container my-5 p-3"  style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item"  style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'dark' ? 'white' : 'black'  }}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'dark' ? 'white' : 'black'  }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'dark' ? 'white' : 'black'  }}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'dark' ? 'white' : 'black'  }} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'dark' ? 'white' : 'black'  }}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'dark' ? 'white' : 'black'  }} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container my-3">
                    <button onClick={toggleStyle} type="button" className="btn btn-primary">{buttonText}</button>
                </div> */}
            </div>
        </>
    )
}

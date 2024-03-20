import { useState } from 'react';
import './App.css';
import { MdArrowRight } from "react-icons/md";

function App() {
  const [show, setShow] = useState(0);
  function handleShow(i) {
    setShow(i);
    setShowSecond(0);
  }
  const [showSecond, setShowSecond] = useState(0)
  function handleShowSecond(i) {
    setShowSecond(i);
    setShowThird(0);
  }
  const [showThird, setShowThird] = useState(0);
  function handleShowThird(i) {
    setShowThird(i);
    setShowFourth(0);
  }

  const [showFourth, setShowFourth] = useState(0);
  function handleShowFourth(i) {
    setShowFourth(i);
  }

  return (
    <div className="App">
      <div className="starting"></div>
      <div className="horizontalline2" style={{ marginTop: "401px" }}></div>
      <div className='verticalline1'></div>
      <div className="horizontalline2" style={{ marginTop: "159px" }}></div>
      <div className='arrow1' style={{ marginTop: "144px" }}><MdArrowRight size={33} /></div>
      <div className="horizontalline2" style={{ marginTop: "288px", marginLeft: "-98px" }}></div>
      <div className='arrow1' style={{ marginTop: "272px" }}><MdArrowRight size={33} /></div>
      <div className="horizontalline2" style={{ marginTop: "401px", marginLeft: "-98px" }}></div>
      <div className='arrow1' style={{ marginTop: "49vh" }}><MdArrowRight size={33} /></div>
      <div className="horizontalline2" style={{ marginTop: "523px", marginLeft: "-98px" }}></div>
      <div className='arrow1' style={{ marginTop: "507px" }}><MdArrowRight size={33} /></div>
      <div className="horizontalline2" style={{ marginTop: "656px", marginLeft: "-98px" }}></div>
      <div className='arrow1' style={{ marginTop: "641px" }}><MdArrowRight size={33} /></div>

      <div className='data1'>
        <div className='reserch' onMouseOver={() => handleShow(1)} style={{ marginTop: "142", color: "white" }}>Reserch</div>
        <div className='Reserchmain' style={{ display: show === 1 ? "flex" : "none" }}>
          <div className='horizontalline3' style={{ marginTop: "18px" }}></div>
          <div className='arrow1' style={{ marginTop: "4px" }}><MdArrowRight size={30} /></div>
          <div className='horizontalline4' style={{ marginTop: "-3px", marginLeft: "-17px" }}></div>
          <div className='horizontalline3' style={{ marginTop: "-23px", marginLeft: "-7px" }}></div>
          <div className='arrow1' style={{ marginTop: "-36px" }}><MdArrowRight size={30} /></div>
          <div className='reserch' onMouseOver={() => handleShowSecond(11)} style={{ marginTop: "-45px", marginLeft: "-11px", color: "white" }}>External</div>

          <div className='Reserchmain' style={{ display: showSecond === 11 ? "flex" : "none" }}>
            <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
            <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
            <div className='horizontalline4' style={{ marginTop: "-6px", marginLeft: "-17px" }}></div>
            <div className='horizontalline3' style={{ marginTop: "-26px", marginLeft: "-7px" }}></div>
            <div className='arrow1' style={{ marginTop: "-40px" }}><MdArrowRight size={30} /></div>
            <div className='reserch' onMouseOver={() => handleShowThird(111)} style={{ marginTop: "-48px", marginLeft: "-12px", color: "white" }}>B2C</div>
            <div style={{ position: "fixed", top: "103px", left: "1071px" }}>
              <div className='Reserchmain' style={{ display: showThird === 111 ? "flex" : "none" }}>
                <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", color: "white" }}>Online</div>


                <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", color: "white" }}>Interview</div>

                <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", color: "white" }}>Public Data</div>

                <div style={{ position: "fixed", top: "107px", left: "1146px" }}>
                  <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                  <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", color: "white" }}>Health</div>
                </div>

                <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                  <h4>Positive Reviews</h4>
                </div>

                <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                  <h4>Total Reviews</h4>
                </div>

                <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                  <h4>Negative Reviews</h4>
                </div>

                <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                  <h4>Comments</h4>
                </div>

              </div>
            </div>
            <div style={{ position: "fixed", top: "147px", left: "773px" }}>
              <div className='horizontalline5'></div>
              <div className='horizontalline3' style={{ marginLeft: "72px", marginTop: "22px" }}></div>
              <div className='arrow1' style={{ marginLeft: "7px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
              <div className='reserch' onMouseOver={() => handleShowThird(112)} style={{ marginLeft: "155px", marginTop: "-40px", color: "white" }}>B2C</div>
              <div style={{ position: "fixed", top: "190px", left: "1070px" }}>
                <div className='Reserchmain' style={{ display: showThird === 112 ? "flex" : "none" }}>
                  <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                  <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                  <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                  <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", color: "white" }}>Online</div>

                  <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", color: "white" }}>Interview</div>

                  <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                  <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", color: "white" }}>Public Data</div>

                  <div style={{ position: "fixed", top: "195px", left: "1145px" }}>
                    <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                    <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", color: "white" }}>Health</div>
                  </div>

                  <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                  <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                  <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                    <h4>Positive Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                    <h4>Total Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                    <h4>Negative Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                    <h4>Comments</h4>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className='horizontalline5' style={{ position: "fixed", top: "186px", left: "403px" }}></div>
          <div className='horizontalline3' style={{ position: "fixed", top: "209px", left: "475px" }}></div>
          <div className='arrow1' style={{ position: "fixed", top: "195px", left: "554px" }}><MdArrowRight size={30} /></div>
          <div className='reserch' onMouseOver={() => handleShowSecond(12)} style={{ position: "fixed", top: "190px", left: "557px", color: "white" }}>Internal</div>
          <div style={{ position: "fixed", top: "230px", left: "699px" }}>
            <div className='Reserchmain' style={{ display: showSecond === 12 ? "flex" : "none" }}>
              <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
              <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
              <div className='horizontalline4' style={{ marginTop: "-6px", marginLeft: "-17px" }}></div>
              <div className='horizontalline3' style={{ marginTop: "-26px", marginLeft: "-7px" }}></div>
              <div className='arrow1' style={{ marginTop: "-40px" }}><MdArrowRight size={30} /></div>
              <div className='reserch' onMouseOver={() => handleShowThird(111)} style={{ marginTop: "-48px", marginLeft: "-12px", color: "white" }}>B2C</div>
              <div style={{ position: "fixed", top: "190px", left: "1070px" }}>
                <div className='Reserchmain' style={{ display: showThird === 111 ? "flex" : "none" }}>
                  <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                  <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                  <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                  <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", color: "white" }}>Online</div>

                  <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", color: "white" }}>Interview</div>

                  <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                  <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", color: "white" }}>Public Data</div>

                  <div style={{ position: "fixed", top: "195px", left: "1145px" }}>
                    <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                    <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", color: "white" }}>Health</div>
                  </div>

                  <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                  <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                  <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                    <h4>Positive Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                    <h4>Total Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                    <h4>Negative Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                    <h4>Comments</h4>
                  </div>

                </div>
              </div>

              <div style={{ position: "fixed", top: "233px", left: "773px" }}>
                <div className='horizontalline5'></div>
                <div className='horizontalline3' style={{ marginLeft: "72px", marginTop: "22px" }}></div>
                <div className='arrow1' style={{ marginLeft: "7px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                <div className='reserch' onMouseOver={() => handleShowThird(112)} style={{ marginLeft: "155px", marginTop: "-40px", color: "white" }}>B2C</div>
                <div style={{ position: "fixed", top: "279px", left: "1070px" }}>
                  <div className='Reserchmain' style={{ display: showThird === 112 ? "flex" : "none" }}>
                    <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                    <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                    <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                    <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", color: "white" }}>Online</div>

                    <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", color: "white" }}>Interview</div>

                    <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                    <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", color: "white" }}>Public Data</div>

                    <div style={{ position: "fixed", top: "283px", left: "1145px" }}>
                      <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                      <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                      <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                      <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", color: "white" }}>Health</div>
                    </div>

                    <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                    <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                    <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                      <h4>Positive Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                      <h4>Total Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                      <h4>Negative Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                      <h4>Comments</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div style={{ position: "fixed", top: "266px", left: "185px" }}>
        <div className='reserch' onMouseOver={() => handleShow(2)} style={{ backgroundColor: "rgb(94 158 238)" }}>Planning</div>
        <div className='Reserchmain' style={{ display: show === 2 ? "flex" : "none" }}>
          <div className='horizontalline3' style={{ marginTop: "18px" }}></div>
          <div className='arrow1' style={{ marginTop: "4px" }}><MdArrowRight size={30} /></div>
          <div className='horizontalline4' style={{ marginTop: "-3px", marginLeft: "-17px" }}></div>
          <div className='horizontalline3' style={{ marginTop: "-23px", marginLeft: "-7px" }}></div>
          <div className='arrow1' style={{ marginTop: "-36px" }}><MdArrowRight size={30} /></div>
          <div className='reserch' onMouseOver={() => handleShowSecond(11)} style={{ marginTop: "-45px", marginLeft: "-11px", backgroundColor: "rgb(94 158 238)" }}>PRD</div>
          <div>
            <div className='Reserchmain' style={{ display: showSecond === 11 ? "flex" : "none" }}>
              <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
              <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
              <div className='horizontalline4' style={{ marginTop: "-6px", marginLeft: "-17px" }}></div>
              <div className='horizontalline3' style={{ marginTop: "-26px", marginLeft: "-7px" }}></div>
              <div className='arrow1' style={{ marginTop: "-40px" }}><MdArrowRight size={30} /></div>
              <div className='reserch' onMouseOver={() => handleShowThird(111)} style={{ marginTop: "-48px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>B2C</div>
              <div style={{ position: "fixed", top: "230px", left: "1071px" }}>
                <div className='Reserchmain' style={{ display: showThird === 111 ? "flex" : "none" }}>
                  <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                  <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                  <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                  <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>Online</div>


                  <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>Interview</div>

                  <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                  <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>Public Data</div>

                  <div style={{ position: "fixed", top: "234px", left: "1146px" }}>
                    <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                    <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(94 158 238)" }}>Health</div>
                  </div>

                  <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                  <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                  <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                    <h4>Positive Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                    <h4>Total Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                    <h4>Negative Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                    <h4>Comments</h4>
                  </div>

                </div>
              </div>
              <div style={{ position: "fixed", top: "274px", left: "774px" }}>
                <div className='horizontalline5'></div>
                <div className='horizontalline3' style={{ marginLeft: "72px", marginTop: "22px" }}></div>
                <div className='arrow1' style={{ marginLeft: "7px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                <div className='reserch' onMouseOver={() => handleShowThird(112)} style={{ marginLeft: "155px", marginTop: "-40px", backgroundColor: "rgb(94 158 238)" }}>B2C</div>
                <div style={{ position: "fixed", top: "316px", left: "1070px" }}>
                  <div className='Reserchmain' style={{ display: showThird === 112 ? "flex" : "none" }}>
                    <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                    <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                    <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                    <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>Online</div>

                    <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>Interview</div>

                    <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                    <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>Public Data</div>

                    <div style={{ position: "fixed", top: "320px", left: "1145px" }}>
                      <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                      <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                      <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                      <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(94 158 238)" }}>Health</div>
                    </div>

                    <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                    <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                    <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                      <h4>Positive Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                      <h4>Total Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                      <h4>Negative Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                      <h4>Comments</h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='horizontalline5' style={{ position: "fixed", top: "313px", left: "403px" }}></div>
          <div className='horizontalline3' style={{ position: "fixed", top: "335px", left: "475px" }}></div>
          <div className='arrow1' style={{ position: "fixed", top: "321px", left: "554px" }}><MdArrowRight size={30} /></div>
          <div className='reserch' onMouseOver={() => handleShowSecond(12)} style={{ position: "fixed", top: "316px", left: "557px", backgroundColor: "rgb(94 158 238)" }}>Specs</div>
          <div style={{ position: "fixed", top: "365px", left: "699px" }} >
            <div className='Reserchmain' style={{ display: showSecond === 12 ? "flex" : "none" }}>
              <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
              <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
              <div className='horizontalline4' style={{ marginTop: "-6px", marginLeft: "-17px" }}></div>
              <div className='horizontalline3' style={{ marginTop: "-26px", marginLeft: "-7px" }}></div>
              <div className='arrow1' style={{ marginTop: "-40px" }}><MdArrowRight size={30} /></div>
              <div className='reserch' onMouseOver={() => handleShowThird(111)} style={{ marginTop: "-48px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>B2C</div>
              <div style={{ position: "fixed", top: "324px", left: "1071px" }}>
                <div className='Reserchmain' style={{ display: showThird === 111 ? "flex" : "none" }}>
                  <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                  <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                  <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                  <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>Online</div>


                  <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>Interview</div>

                  <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                  <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>Public Data</div>

                  <div style={{ position: "fixed", top: "327px", left: "1146px" }}>
                    <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                    <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(94 158 238)" }}>Health</div>
                  </div>

                  <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                  <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                  <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                    <h4>Positive Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                    <h4>Total Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                    <h4>Negative Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                    <h4>Comments</h4>
                  </div>

                </div>
              </div>
              <div style={{ position: "fixed", top: "368px", left: "774px" }}>
                <div className='horizontalline5'></div>
                <div className='horizontalline3' style={{ marginLeft: "72px", marginTop: "22px" }}></div>
                <div className='arrow1' style={{ marginLeft: "7px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                <div className='reserch' onMouseOver={() => handleShowThird(112)} style={{ marginLeft: "155px", marginTop: "-40px", backgroundColor: "rgb(94 158 238)" }}>B2C</div>
                <div style={{ position: "fixed", top: "410px", left: "1070px" }}>
                  <div className='Reserchmain' style={{ display: showThird === 112 ? "flex" : "none" }}>
                    <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                    <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                    <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                    <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>Online</div>

                    <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>Interview</div>

                    <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                    <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(94 158 238)" }}>Public Data</div>

                    <div style={{ position: "fixed", top: "414px", left: "1145px" }}>
                      <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                      <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                      <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                      <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(94 158 238)" }}>Health</div>
                    </div>

                    <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                    <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                    <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                      <h4>Positive Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                      <h4>Total Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                      <h4>Negative Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                      <h4>Comments</h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div style={{ position: "fixed", top: "381px", left: "185px" }}>
        <div className='reserch' onMouseOver={() => handleShow(3)} style={{ backgroundColor: "rgb(231 100 68)" }}>Desiging</div>
        <div className='Reserchmain' style={{ display: show === 3 ? "flex" : "none" }}>
          <div className='horizontalline3' style={{ marginTop: "18px" }}></div>
          <div className='arrow1' style={{ marginTop: "4px" }}><MdArrowRight size={30} /></div>
          <div className='horizontalline4' style={{ marginTop: "-3px", marginLeft: "-17px" }}></div>
          <div className='horizontalline3' style={{ marginTop: "-23px", marginLeft: "-7px" }}></div>
          <div className='arrow1' style={{ marginTop: "-36px" }}><MdArrowRight size={30} /></div>
          <div className='reserch' onMouseOver={() => handleShowSecond(11)} style={{ marginTop: "-45px", marginLeft: "-11px", backgroundColor: "rgb(231 100 68)" }}>Hardware</div>
          <div>
            <div className='Reserchmain' style={{ display: showSecond === 11 ? "flex" : "none" }}>
              <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
              <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
              <div className='horizontalline4' style={{ marginTop: "-6px", marginLeft: "-17px" }}></div>
              <div className='horizontalline3' style={{ marginTop: "-26px", marginLeft: "-7px" }}></div>
              <div className='arrow1' style={{ marginTop: "-40px" }}><MdArrowRight size={30} /></div>
              <div className='reserch' onMouseOver={() => handleShowThird(111)} style={{ marginTop: "-48px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>B2C</div>
              <div style={{ position: "fixed", top: "346px", left: "1071px" }}>
                <div className='Reserchmain' style={{ display: showThird === 111 ? "flex" : "none" }}>
                  <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                  <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                  <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                  <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>Online</div>


                  <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>Interview</div>

                  <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                  <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>Public Data</div>

                  <div style={{ position: "fixed", top: "350px", left: "1146px" }}>
                    <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                    <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(231 100 68)" }}>Health</div>
                  </div>

                  <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                  <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                  <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                    <h4>Positive Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                    <h4>Total Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                    <h4>Negative Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                    <h4>Comments</h4>
                  </div>

                </div>
              </div>
              <div style={{ position: "fixed", top: "389px", left: "774px" }}>
                <div className='horizontalline5'></div>
                <div className='horizontalline3' style={{ marginLeft: "72px", marginTop: "22px" }}></div>
                <div className='arrow1' style={{ marginLeft: "7px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                <div className='reserch' onMouseOver={() => handleShowThird(112)} style={{ marginLeft: "155px", marginTop: "-40px", backgroundColor: "rgb(231 100 68)" }}>B2C</div>
                <div style={{ position: "fixed", top: "434px", left: "1070px" }}>
                  <div className='Reserchmain' style={{ display: showThird === 112 ? "flex" : "none" }}>
                    <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                    <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                    <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                    <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>Online</div>

                    <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>Interview</div>

                    <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                    <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>Public Data</div>

                    <div style={{ position: "fixed", top: "438px", left: "1145px" }}>
                      <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                      <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                      <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                      <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(231 100 68)" }}>Health</div>
                    </div>

                    <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                    <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                    <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                      <h4>Positive Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                      <h4>Total Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                      <h4>Negative Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                      <h4>Comments</h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='horizontalline5' style={{ position: "fixed", top: "427px", left: "403px" }}></div>
          <div className='horizontalline3' style={{ position: "fixed", top: "450px", left: "475px" }}></div>
          <div className='arrow1' style={{ position: "fixed", top: "436px", left: "554px" }}><MdArrowRight size={30} /></div>
          <div className='reserch' onMouseOver={() => handleShowSecond(12)} style={{ position: "fixed", top: "430px", left: "557px", backgroundColor: "rgb(231 100 68)" }}>Software</div>
          <div style={{ position: "fixed", top: "472px", left: "699px" }} >
            <div className='Reserchmain' style={{ display: showSecond === 12 ? "flex" : "none" }}>
              <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
              <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
              <div className='horizontalline4' style={{ marginTop: "-6px", marginLeft: "-17px" }}></div>
              <div className='horizontalline3' style={{ marginTop: "-26px", marginLeft: "-7px" }}></div>
              <div className='arrow1' style={{ marginTop: "-40px" }}><MdArrowRight size={30} /></div>
              <div className='reserch' onMouseOver={() => handleShowThird(111)} style={{ marginTop: "-48px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>B2C</div>
              <div style={{ position: "fixed", top: "431px", left: "1071px" }}>
                <div className='Reserchmain' style={{ display: showThird === 111 ? "flex" : "none" }}>
                  <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                  <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                  <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                  <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>Online</div>


                  <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>Interview</div>

                  <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                  <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>Public Data</div>

                  <div style={{ position: "fixed", top: "435px", left: "1146px" }}>
                    <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                    <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(231 100 68)" }}>Health</div>
                  </div>

                  <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                  <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                  <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                    <h4>Positive Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                    <h4>Total Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                    <h4>Negative Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                    <h4>Comments</h4>
                  </div>

                </div>
              </div>
              <div style={{ position: "fixed", top: "475px", left: "774px" }}>
                <div className='horizontalline5'></div>
                <div className='horizontalline3' style={{ marginLeft: "72px", marginTop: "22px" }}></div>
                <div className='arrow1' style={{ marginLeft: "7px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                <div className='reserch' onMouseOver={() => handleShowThird(112)} style={{ marginLeft: "155px", marginTop: "-40px", backgroundColor: "rgb(231 100 68)" }}>B2C</div>
                <div style={{ position: "fixed", top: "517px", left: "1070px" }}>
                  <div className='Reserchmain' style={{ display: showThird === 112 ? "flex" : "none" }}>
                    <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                    <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                    <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                    <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>Online</div>

                    <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>Interview</div>

                    <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                    <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(231 100 68)" }}>Public Data</div>

                    <div style={{ position: "fixed", top: "521px", left: "1145px" }}>
                      <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                      <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                      <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                      <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(231 100 68)" }}>Health</div>
                    </div>

                    <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                    <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                    <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                      <h4>Positive Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                      <h4>Total Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                      <h4>Negative Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                      <h4>Comments</h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div style={{ position: "fixed", top: "503px", left: "185px" }}>
        <div className='reserch' onMouseOver={() => handleShow(4)} style={{ backgroundColor: "rgb(255 132 156 / 85%)" }}>Manufacturing</div>
        <div className='Reserchmain' style={{ display: show === 4 ? "flex" : "none" }}>
          <div className='horizontalline3' style={{ marginTop: "18px" }}></div>
          <div className='arrow1' style={{ marginTop: "4px" }}><MdArrowRight size={30} /></div>
          <div className='horizontalline4' style={{ marginTop: "-3px", marginLeft: "-17px" }}></div>
          <div className='horizontalline3' style={{ marginTop: "-23px", marginLeft: "-7px" }}></div>
          <div className='arrow1' style={{ marginTop: "-36px" }}><MdArrowRight size={30} /></div>
          <div className='reserch' onMouseOver={() => handleShowSecond(11)} style={{ marginTop: "-45px", marginLeft: "-11px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Material</div>
          <div>
            <div className='Reserchmain' style={{ display: showSecond === 11 ? "flex" : "none" }}>
              <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
              <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
              <div className='horizontalline4' style={{ marginTop: "-6px", marginLeft: "-17px" }}></div>
              <div className='horizontalline3' style={{ marginTop: "-26px", marginLeft: "-7px" }}></div>
              <div className='arrow1' style={{ marginTop: "-40px" }}><MdArrowRight size={30} /></div>
              <div className='reserch' onMouseOver={() => handleShowThird(111)} style={{ marginTop: "-48px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>B2C</div>
              <div style={{ position: "fixed", top: "469px", left: "1071px" }}>
                <div className='Reserchmain' style={{ display: showThird === 111 ? "flex" : "none" }}>
                  <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                  <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                  <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                  <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Online</div>


                  <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Interview</div>

                  <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                  <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Public Data</div>

                  <div style={{ position: "fixed", top: "473px", left: "1146px" }}>
                    <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                    <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Health</div>
                  </div>

                  <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                  <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                  <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                    <h4>Positive Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                    <h4>Total Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                    <h4>Negative Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                    <h4>Comments</h4>
                  </div>

                </div>
              </div>
              <div style={{ position: "fixed", top: "511px", left: "774px" }}>
                <div className='horizontalline5'></div>
                <div className='horizontalline3' style={{ marginLeft: "72px", marginTop: "22px" }}></div>
                <div className='arrow1' style={{ marginLeft: "7px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                <div className='reserch' onMouseOver={() => handleShowThird(112)} style={{ marginLeft: "155px", marginTop: "-40px", backgroundColor: "rgb(255 132 156 / 85%)" }}>B2C</div>
                <div style={{ position: "fixed", top: "554px", left: "1070px" }}>
                  <div className='Reserchmain' style={{ display: showThird === 112 ? "flex" : "none" }}>
                    <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                    <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                    <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                    <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Online</div>

                    <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Interview</div>

                    <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                    <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Public Data</div>

                    <div style={{ position: "fixed", top: "559px", left: "1145px" }}>
                      <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                      <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                      <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                      <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Health</div>
                    </div>

                    <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                    <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                    <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                      <h4>Positive Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                      <h4>Total Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                      <h4>Negative Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                      <h4>Comments</h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='horizontalline5' style={{ position: "fixed", top: "549px", left: "403px" }}></div>
          <div className='horizontalline3' style={{ position: "fixed", top: "572px", left: "475px" }}></div>
          <div className='arrow1' style={{ position: "fixed", top: "558px", left: "554px" }}><MdArrowRight size={30} /></div>
          <div className='reserch' onMouseOver={() => handleShowSecond(12)} style={{ position: "fixed", top: "552px", left: "557px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Production</div>
          <div style={{ position: "fixed", top: "593px", left: "699px" }}>
            <div className='Reserchmain' style={{ display: showSecond === 12 ? "flex" : "none" }}>
              <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
              <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
              <div className='horizontalline4' style={{ marginTop: "-6px", marginLeft: "-17px" }}></div>
              <div className='horizontalline3' style={{ marginTop: "-26px", marginLeft: "-7px" }}></div>
              <div className='arrow1' style={{ marginTop: "-40px" }}><MdArrowRight size={30} /></div>
              <div className='reserch' onMouseOver={() => handleShowThird(111)} style={{ marginTop: "-48px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>B2C</div>
              <div style={{ position: "fixed", top: "552px", left: "1071px" }}>
                <div className='Reserchmain' style={{ display: showThird === 111 ? "flex" : "none" }}>
                  <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                  <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                  <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                  <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Online</div>


                  <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Interview</div>

                  <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                  <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Public Data</div>

                  <div style={{ position: "fixed", top: "556px", left: "1146px" }}>
                    <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                    <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Health</div>
                  </div>

                  <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                  <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                  <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                    <h4>Positive Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                    <h4>Total Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                    <h4>Negative Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                    <h4>Comments</h4>
                  </div>

                </div>
              </div>
              <div style={{ position: "fixed", top: "596px", left: "774px" }}>
                <div className='horizontalline5'></div>
                <div className='horizontalline3' style={{ marginLeft: "72px", marginTop: "22px" }}></div>
                <div className='arrow1' style={{ marginLeft: "7px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                <div className='reserch' onMouseOver={() => handleShowThird(112)} style={{ marginLeft: "155px", marginTop: "-40px", backgroundColor: "rgb(255 132 156 / 85%)" }}>B2C</div>
                <div style={{ position: "fixed", top: "639px", left: "1070px" }}>
                  <div className='Reserchmain' style={{ display: showThird === 112 ? "flex" : "none" }}>
                    <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                    <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                    <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                    <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Online</div>

                    <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Interview</div>

                    <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                    <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Public Data</div>

                    <div style={{ position: "fixed", top: "643px", left: "1145px" }}>
                      <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                      <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                      <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                      <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(255 132 156 / 85%)" }}>Health</div>
                    </div>

                    <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                    <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                    <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                      <h4>Positive Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                      <h4>Total Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                      <h4>Negative Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                      <h4>Comments</h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div style={{ position: "fixed", top: "636px", left: "185px" }}>
        <div className='reserch' onMouseOver={() => handleShow(5)} style={{ backgroundColor: "rgb(176 138 241)", fontSize: "19px" }}>Sales/Marketing</div>
        <div className='Reserchmain' style={{ display: show === 5 ? "flex" : "none" }}>
          <div className='horizontalline3' style={{ marginTop: "18px" }}></div>
          <div className='arrow1' style={{ marginTop: "4px" }}><MdArrowRight size={30} /></div>
          <div className='horizontalline4' style={{ marginTop: "-3px", marginLeft: "-17px" }}></div>
          <div className='horizontalline3' style={{ marginTop: "-23px", marginLeft: "-7px" }}></div>
          <div className='arrow1' style={{ marginTop: "-36px" }}><MdArrowRight size={30} /></div>
          <div className='reserch' onMouseOver={() => handleShowSecond(11)} style={{ marginTop: "-45px", marginLeft: "-11px", backgroundColor: "rgb(176 138 241)" }}>Online</div>
          <div>
            <div className='Reserchmain' style={{ display: showSecond === 11 ? "flex" : "none" }}>
              <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
              <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
              <div className='horizontalline4' style={{ marginTop: "-6px", marginLeft: "-17px" }}></div>
              <div className='horizontalline3' style={{ marginTop: "-26px", marginLeft: "-7px" }}></div>
              <div className='arrow1' style={{ marginTop: "-40px" }}><MdArrowRight size={30} /></div>
              <div className='reserch' onMouseOver={() => handleShowThird(111)} style={{ marginTop: "-48px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>B2C</div>
              <div style={{ position: "fixed", top: "600px", left: "1071px" }}>
                <div className='Reserchmain' style={{ display: showThird === 111 ? "flex" : "none" }}>
                  <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                  <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                  <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                  <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>Online</div>


                  <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>Interview</div>

                  <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                  <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>Public Data</div>

                  <div style={{ position: "fixed", top: "604px", left: "1146px" }}>
                    <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                    <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(176 138 241)" }}>Health</div>
                  </div>

                  <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                  <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                  <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                    <h4>Positive Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                    <h4>Total Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                    <h4>Negative Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                    <h4>Comments</h4>
                  </div>

                </div>
              </div>
              <div style={{ position: "fixed", top: "644px", left: "774px" }}>
                <div className='horizontalline5'></div>
                <div className='horizontalline3' style={{ marginLeft: "72px", marginTop: "22px" }}></div>
                <div className='arrow1' style={{ marginLeft: "7px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                <div className='reserch' onMouseOver={() => handleShowThird(112)} style={{ marginLeft: "155px", marginTop: "-40px", backgroundColor: "rgb(176 138 241)" }}>B2C</div>
                <div style={{ position: "fixed", top: "688px", left: "1070px" }}>
                  <div className='Reserchmain' style={{ display: showThird === 112 ? "flex" : "none" }}>
                    <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                    <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                    <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                    <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>Online</div>

                    <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>Interview</div>

                    <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                    <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>Public Data</div>

                    <div style={{ position: "fixed", top: "692px", left: "1145px" }}>
                      <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                      <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                      <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                      <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(176 138 241)" }}>Health</div>
                    </div>

                    <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                    <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                    <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                      <h4>Positive Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                      <h4>Total Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                      <h4>Negative Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                      <h4>Comments</h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='horizontalline5' style={{ position: "fixed", top: "683px", left: "403px" }}></div>
          <div className='horizontalline3' style={{ position: "fixed", top: "705px", left: "475px" }}></div>
          <div className='arrow1' style={{ position: "fixed", top: "690px", left: "554px" }}><MdArrowRight size={30} /></div>
          <div className='reserch' onMouseOver={() => handleShowSecond(12)} style={{ position: "fixed", top: "683px", left: "557px", backgroundColor: "rgb(176 138 241)" }}>Delership</div>
          <div style={{ position: "fixed", top: "723px", left: "699px" }}>
            <div className='Reserchmain' style={{ display: showSecond === 12 ? "flex" : "none" }}>
              <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
              <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
              <div className='horizontalline4' style={{ marginTop: "-6px", marginLeft: "-17px" }}></div>
              <div className='horizontalline3' style={{ marginTop: "-26px", marginLeft: "-7px" }}></div>
              <div className='arrow1' style={{ marginTop: "-40px" }}><MdArrowRight size={30} /></div>
              <div className='reserch' onMouseOver={() => handleShowThird(111)} style={{ marginTop: "-48px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>B2C</div>
              <div style={{ position: "fixed", top: "681px", left: "1071px" }}>
                <div className='Reserchmain' style={{ display: showThird === 111 ? "flex" : "none" }}>
                  <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                  <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                  <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                  <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>Online</div>


                  <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                  <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>Interview</div>

                  <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                  <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                  <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                  <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>Public Data</div>

                  <div style={{ position: "fixed", top: "684px", left: "1146px" }}>
                    <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                    <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(176 138 241)" }}>Health</div>
                  </div>

                  <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                  <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                  <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                  <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                  <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                    <h4>Positive Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                    <h4>Total Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                    <h4>Negative Reviews</h4>
                  </div>

                  <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                    <h4>Comments</h4>
                  </div>

                </div>
              </div>
              <div style={{ position: "fixed", top: "725px", left: "774px" }}>
                <div className='horizontalline5'></div>
                <div className='horizontalline3' style={{ marginLeft: "72px", marginTop: "22px" }}></div>
                <div className='arrow1' style={{ marginLeft: "7px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                <div className='reserch' onMouseOver={() => handleShowThird(112)} style={{ marginLeft: "155px", marginTop: "-40px", backgroundColor: "rgb(176 138 241)" }}>B2C</div>
                <div style={{ position: "fixed", top: "766px", left: "1070px" }}>
                  <div className='Reserchmain' style={{ display: showThird === 112 ? "flex" : "none" }}>
                    <div className='horizontalline3' style={{ marginTop: "15px", marginLeft: "-142px" }}></div>
                    <div className='arrow1' style={{ marginTop: "0px" }}><MdArrowRight size={30} /></div>
                    <div className='horizontalline4' style={{ marginTop: "-18px", marginLeft: "-23px", transform: "rotate(141deg)", width: "100px" }}></div>

                    <div className='horizontalline3' style={{ marginTop: "-50px", marginLeft: "-11px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-64px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1111)} style={{ marginTop: "-63px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>Online</div>

                    <div className='horizontalline4' style={{ marginTop: "5px", marginLeft: "-289px", transform: "rotate(166deg)" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "-5px", marginLeft: "-1px" }}></div>
                    <div className='arrow1' style={{ marginTop: "-19px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1112)} style={{ marginTop: "-24px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>Interview</div>

                    <div className='horizontalline4' style={{ marginTop: "45px", marginLeft: "-301px", transform: "rotate(216deg)", width: "100px" }}></div>
                    <div className='horizontalline3' style={{ marginTop: "75px", marginLeft: "-9px" }}></div>
                    <div className='arrow1' style={{ marginTop: "62px" }}><MdArrowRight size={30} /></div>
                    <div className='reserchlast' onMouseOver={() => handleShowFourth(1114)} style={{ marginTop: "60px", marginLeft: "-12px", backgroundColor: "rgb(176 138 241)" }}>Public Data</div>

                    <div style={{ position: "fixed", top: "769px", left: "1145px" }}>
                      <div className='horizontalline5' style={{ marginLeft: "6px", marginTop: "-16px", transform: "rotate(11deg)" }}></div>
                      <div className='horizontalline3' style={{ marginLeft: "85px", marginTop: "6px" }}></div>
                      <div className='arrow1' style={{ marginLeft: "29px", marginTop: "-16px" }}><MdArrowRight size={30} /></div>
                      <div className='reserchlast' onMouseOver={() => handleShowFourth(1113)} style={{ marginLeft: "166px", marginTop: "-37px", backgroundColor: "rgb(176 138 241)" }}>Health</div>
                    </div>

                    <div className='horizontalline3' style={{ marginLeft: "-2px", marginTop: "-45px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-77px", marginTop: "78px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "-16px", marginLeft: "-13px", transform: "rotate(226deg)", width: "84px" }}></div>
                    <div className='horizontalline4' style={{ marginTop: "47px", marginLeft: "-84px", transform: "rotate(134deg)", width: "84px" }}></div>
                    <div className='horizontalline3' style={{ marginLeft: "-14px", marginTop: "15px", width: "60px" }}></div>
                    <div className='arrow1' style={{ marginTop: "1px" }}><MdArrowRight size={30} /></div>

                    <div className='ShowMouseover' style={{ marginLeft: "-194px", marginTop: "-59px", display: showFourth === 1111 ? "flex" : "none" }}>
                      <h4>Positive Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-195px", marginTop: "-19px", display: showFourth === 1112 ? "flex" : "none" }}>
                      <h4>Total Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "19px", display: showFourth === 1113 ? "flex" : "none" }}>
                      <h4>Negative Reviews</h4>
                    </div>

                    <div className='ShowMouseover' style={{ marginLeft: "-200px", marginTop: "69px", display: showFourth === 1114 ? "flex" : "none" }}>
                      <h4>Comments</h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  );
}

export default App;

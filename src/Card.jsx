import React from 'react';
import './Mobile.css';
function Card(props) {
  return (
<div class="margin-auto" >
        <div class="cardmobile" style={{width:"400px"}}>
            <a href="#" class="btn btn-primary" style={{width:"80%", marginTop:"10px",marginBottom:"10px",borderTopRightRadius: "20px",borderBottomRightRadius: "20px",backgroundColor: props.color}}>Editorial Review</a>
            <div class="jobrowmobile">
                <div class="category1">
                    <div class="b">How to Build E-commerece Platform step by step</div>
                    <div class="category2">
                    </div>
                </div>
                <div class="category3 margin-auto">
                    <div class="margin-auto">$300</div>
                </div>

            </div>
            <div class="jobrowmobile">
                <div class="category2 margin-auto">
                    <div>e-book</div>|
                    <div>Travel and Tourism</div>|
                    <div>400 words</div>
                </div>
            </div>
            <hr class="margin-auto"/>
            <div class="category4">
                <div class="category5">
                    <div style={{marginRight:"10px"}}><svg width="13px" height="15px" viewBox="0 0 13 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Card-/-Writer-/-Your-Job-/-Mobile-/-Editorial-Review" transform="translate(-16.000000, -156.000000)" fill-rule="nonzero">
                                                <g id="Group-10-Copy">
                                                    <g id="Group" transform="translate(16.000000, 156.000000)">
                                                        <path d="M12.2320484,4.46484375 L11.7399195,4.00344513 L10.6551471,5.02048038 L10.2296222,4.69276856 C9.42485804,4.07299104 8.45375003,3.66229428 7.40891283,3.51078378 L6.86797036,3.43234241 L6.86797036,1.24342105 L8.11789524,1.24342105 L8.11789524,0.631578947 L4.88132355,0.631578947 L4.88132355,1.24342105 L6.13124844,1.24342105 L6.13124844,3.43295459 L5.58961346,3.51088381 C2.74566353,3.92006494 0.631578947,6.21166546 0.631578947,8.90625 C0.631578947,11.914222 3.24923397,14.3684211 6.4996094,14.3684211 C9.74998483,14.3684211 12.3676398,11.914222 12.3676398,8.90625 C12.3676398,7.84047438 12.0405014,6.82256969 11.4344867,5.95423002 L11.12162,5.50593296 L12.2320484,4.46484375 Z" id="Path" stroke="#1D2330" stroke-width="1.26315789"></path>
                                                        <g id="stopwatch-solid" transform="translate(5.770318, 4.000000)" fill="#1D2330">
                                                            <path d="M1.6344086,5.20061384 L1.6344086,0.381696429 C1.6344086,0.171763393 1.49650538,0 1.32795699,0 L0.306451613,0 C0.137903226,0 0,0.171763393 0,0.381696429 L0,5.20061384 C0,5.41054687 0.137903226,5.58231027 0.306451613,5.58231027 L1.32795699,5.58231027 C1.49650538,5.58231027 1.6344086,5.41054687 1.6344086,5.20061384 Z" id="Shape"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg></div>
                    12h 13m Left</div>
                    <div class="category6"><a href="#" class="btn"  style={{backgroundColor:"#ffffff",marginLeft:"60px",border: "1px solid #3EBCB3"}}>See Profile</a></div>
            </div>
        </div>
    </div>
  );
}

export default Card;
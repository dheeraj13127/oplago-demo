import React from 'react'
import './css/Card2.css'
import teaching from '../../images/ok.png'
import {GoClock} from 'react-icons/go'
import {AiOutlineYoutube} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'
import {SiAdobeacrobatreader} from 'react-icons/si'
function Card2({auth}) {
    return (
        <div >
<div className="row p-3 card2Row">
            <div className="col-12 col-sm-12 col-lg-4 col-md-4 mt-5">
                <div className="card1Column">
                <img src={teaching} alt="img" className="img-fluid card1Image" />
                <p className="card2Header"><span className="text-light"><GoClock className="clockIcon"/></span>5 days left to enroll</p>
                <div className="cardDetails p-3">
                <h5 className="cardTitle text-start">IBPS PO and SBI PO Live<br/> Coaching Batch 1</h5>
                <p className="youtubeText mt-5"><AiOutlineYoutube className="youtubeIcon"/>240+ Live Classes</p>
                <div className="iconsBox">
                <p className="bookmarkText mt-2"><BsBookmark className="bookmarkIcon"/>9000+ Questions</p>
                <p className="acrobatText mt-2"><SiAdobeacrobatreader className="acrobatIcon"/>120+ Notes</p>
                </div>
                </div>
               
                </div>
            
            </div>
            <div className="col-12 col-sm-12 col-lg-4 col-md-4 mt-5">
                <div className="card1Column">
                <img src={teaching} alt="" className="img-fluid card1Image" />
                <p className="card2Header"><span className="text-light"><GoClock className="clockIcon"/></span>Starts in 15 days</p>
                <div className="cardDetails p-3">
                <h5 className="cardTitle text-start">Civil Junior Engineer  Live<br/> Coaching Batch 2</h5>
                <p className="youtubeText mt-5"><AiOutlineYoutube className="youtubeIcon"/>240+ Live Classes</p>
                <div className="iconsBox">
                <p className="bookmarkText mt-2"><BsBookmark className="bookmarkIcon"/>9000+ Questions</p>
                <p className="acrobatText mt-2"><SiAdobeacrobatreader className="acrobatIcon"/>120+ Notes</p>
                </div>
                </div>
                </div>
            
            </div>
            <div className="col-12 col-sm-12 col-lg-4 col-md-4 mt-5">
                <div className="card1Column">
                <img src={teaching} alt="" className="img-fluid card1Image" />
                <p className="card2Header"><span className="text-light"><GoClock className="clockIcon"/></span>Batch Closes in 2 days</p>
                <div className="cardDetails p-3">
                <h5 className="cardTitle text-start">UPSC CDS -2 2021 Live<br/> Coaching Batch 3</h5>
                <p className="youtubeText mt-5"><AiOutlineYoutube className="youtubeIcon"/>240+ Live Classes</p>
                <div className="iconsBox">
                <p className="bookmarkText mt-2"><BsBookmark className="bookmarkIcon"/>9000+ Questions</p>
                <p className="acrobatText mt-2"><SiAdobeacrobatreader className="acrobatIcon"/>120+ Notes</p>
                </div>
                </div>
                </div>
            
            </div>
        </div>
        </div>
        
    )
}

export default Card2

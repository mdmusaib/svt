import React, { useEffect, useRef, useState } from 'react';
import "./invoiceStyle.css";
import useApi from 'src/core/useApi';
const Invoice=props=>{
let api=useApi();
const [invoiceData,setInvoiceData]=useState([]);
const [bookingData,setBookingData]=useState([]);
const [totalAmount,setTotalAmount]=useState(0);
useEffect(() => {
    if(props?.location?.type === "view"){
     generateInvoice();
    }
  }, [props?.location?.type]);

    const generateInvoice=async ()=>{
        let response=await api.invoke({endPoint:`http://localhost:8000/api/getBooking/${props.location.record.id}`,method:"get"});
        let total=0;
        console.log(response.data)
        setInvoiceData(response.data);
        setBookingData(response.data);
        console.log('totlal',parseInt(response.data.total_amount)+parseFloat(response.data.total_amount*response.data.tax/100));
        response?.data?.vehicle_details.map(data=>{
         total=parseInt(total)+parseInt(data.total_amount);   
        });
        console.log(total)
    }
return(
    <>
    {props.location.type==="view"?<div  class="container d-flex justify-content-center mt-50 mb-50">
    <div class="row">
        <div class="col-md-12">
            <img src="https://svtinfra.com/images/svt%20infra.png" alt="Smiley face" height="100" width="100" />
            <div class="card">
                <div class="card-header bg-transparent header-elements-inline">
                    <h6 class="card-title">Tax invoice</h6>
                    <div class="header-elements"> <button type="button" class="btn btn-light btn-sm"><i class="fa fa-file mr-2"></i> Save</button> <button type="button" class="btn btn-light btn-sm ml-3"><i class="fa fa-print mr-2"></i> Print</button> </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="mb-4 pull-left">
                               {/* <!--  <h4>SVT Infra</h4> --> */}
                                <ul class="list list-unstyled mb-0 text-left">
                                    <li><b>Address: #1/168, Main Road, Puttuuthakku,Walaja TK, Ranipet</b></li>
                                    <li><b>Mobile No: 9944891281 </b></li>
                                    <li><b>Email: pradeep@svtinfra.com</b></li>
                                    <li><b>GSTIN No: 33CWMPP5005Q2ZZ </b></li>
                                    <li><b>Website: www.svtinfra.com </b></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mb-4 ">
                                <div class="text-sm-right">
                                    <h4 class="invoice-color mb-2 mt-md-2">Invoice No: 59</h4>
                                    <ul class="list list-unstyled mb-0">
                                        <li>Date: <span class="font-weight-semibold">March 15, 2020</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-md-flex flex-md-wrap">
                        <div class="mb-4 mb-md-2 text-left"> <h5 class="text-muted">Invoice To:</h5>
                            <ul class="list list-unstyled mb-0">
                                <li>
                                    <h6 class="my-2">KUNAL METAL</h6>
                                </li>
                                <li><span class="font-weight-bold">CHENNAI</span></li>
                                <li><span span class="font-weight-bold">GSTIN: 8879HDJ6399 </span></li>
                                <li><a href="#" data-abc="true" class="font-weight-bold">kunalmetal@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-lg">
                        <thead>
                            <tr>
                                <th>S No</th>
                                <th>TRUCK R.NO</th>
                                <th>DC.NO</th>
                                <th>MATERIAL</th>
                                <th>Qty/CFT</th>
                                <th>Rate</th>
                                <th>Amount</th>
                                <th>GST AMT</th>
                                <th>T Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoiceData?.vehicle_details?.map(data=>
                                (<tr>
                                <td>{bookingData.id}</td>
                                <td>{data.vehicle_no}</td>
                                <td>{data.dc_no}</td>
                                <td>{data.material}</td>
                                <td>{bookingData.total_weight}</td>
                                <td>{bookingData.rate}</td>
                                <td>{bookingData.total_amount}</td>
                                <td>{parseFloat(bookingData.total_amount*bookingData.tax/100)}</td>
                                <td>{bookingData.total_amount+parseFloat(bookingData.total_amount*bookingData.tax/100)}</td>
                            </tr>))}
                            
                        </tbody>
                    </table>
                </div>
                <div class="card-body">
                    <div class="d-md-flex flex-md-wrap">
                        <div class="pt-2 mb-3 wmin-md-400 ml-auto">
                            <h6 class="mb-3 text-left">Total</h6>
                            <div class="table-responsive">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th class="text-left">Total Amount:</th>
                                            <td class="text-right">80220</td>
                                        </tr>
                                        <tr>
                                            <th class="text-left">GST Amount:</th>
                                            <td class="text-right">4011</td>
                                        </tr>
                                        <tr>
                                            <th class="text-left">CGST: <span class="font-weight-normal">2.5%</span></th>
                                            <td class="text-right">2105.78</td>
                                        </tr>
                                        <tr>
                                            <th class="text-left">SGST: <span class="font-weight-normal">2.5%</span></th>
                                            <td class="text-right">2105.78</td>
                                        </tr>
                                        <tr>
                                            <th class="text-left">Grand Total:</th>
                                            <td class="text-right text-primary">
                                                <h5 class="font-weight-semibold">84231</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="text-right mt-3"> <button type="button" class="btn btn-primary"><b><i class="fa fa-paper-plane-o mr-1"></i></b> Send invoice</button> </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer"> <span class="text-muted">Seller shall have the continuing right to approve Buyer’s credit. Seller may at any time demand advance payment, additional security or guarantee of prompt payment. If Buyer refuses to give the payment, security or guarantee demanded, Seller may terminate the Agreement, refuse to deliver any undelivered goods and Buyer shall immediately become liable to Seller for the unpaid price of all goods delivered & for damages as provided in Paragraph V below. Buyer agrees to pay Seller cost of collection of overdue invoices, including reasonable attorney’s fees incurred by Seller in collecting said sums. F.O.B. point shall be point of SHIP TO on face hereof.</span> </div>
            </div>
        </div>
    </div>
    </div>:''}
    
    </>
)
}
export default Invoice;
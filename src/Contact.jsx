import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Contact = () => {
    const [data, setData] = useState({
        fullname:"",
        phone: "",
        email: "",
        msg: "",
    });
    const InputEvent = (event)=>{
        const {name, value}= event.target;

        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            };
        });

    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`my name is ${data.fullname}. mobile number is ${data.phone}. and email is ${data.email} ,here is i want to say ${data.msg}`);
       
    };
    return (
        <>
            <div className='my-5'>
                <h1 className="text-center"> Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1"
                                    className="form-label">
                                    FullName</label>
                                <input type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter Your name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1"
                                    className="form-label">
                                    Mobile</label>
                                <input type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter your Phone no" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1"
                                    className="form-label">
                                    Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com" />
                            </div>


                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1"
                                    className="form-label">Message</label>
                                <textarea className="form-control"
                                    id="exampleFormControlTextarea1" rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}>
                                   
                                    </textarea>
                            </div>
                            <div class="col-12">
                                <Button class="btn btn-outline-primary" type="submit">Submit form</Button>
                            </div>
                            

                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Contact;
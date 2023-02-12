import React from "react";

const Contact=()=>{

    const submit=(e)=>
    {
        e.preventDefault();
        alert("your Form submitted !");
    }

    return(
        <>

        <div className="my-5 ">
        <h2 className="text-center">Contact Us</h2>

        </div>

    <div className="container contact_div my-4">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <form action="" onSubmit={submit}>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name"/>
                </div>
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Phone"/>
                </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
                <button className="btn btn-outline-primary ">Submit Form</button>
            </form>
            </div>
        </div>
    </div>
        </>
    )
}
export default Contact;
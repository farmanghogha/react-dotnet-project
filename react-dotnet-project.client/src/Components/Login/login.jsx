import React, { useState } from "react";
function Login() {
    return (
        <div className="modal fade" id="staticBackdrop3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
            <div className="modal-dialog d-flex justify-content-center">
                <div className="modal-content w-75">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel3">Subscribe</h5>
                        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-4">
                        <form>
                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="text" id="name3" className="form-control" />
                                <label className="form-label" for="name3">Name</label>
                            </div>
                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="email" id="email3" className="form-control" />
                                <label className="form-label" for="email3">Email address</label>
                            </div>
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
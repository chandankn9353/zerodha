import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            Thats's why 1.3+ crore customers trust with ₹3.5 lakh crores worth
            of equality investments
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, span, "gammification", or annoying push
            notifications.High quality apps that you use at your pace,the way
            you like.
          </p>
          <h2 className="fs-4">The Zerodha Universe</h2>
          <p className="text-muted">
            Just not an app,but a whole ecosystem Our investments in 30+
            finetech startups offer you tailored services specific to your
            needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, WE don't just
            facilitate transactions, but actively help you to better with your
            money
          </p>
        </div>
        <div className="col-6">
          <img src="media/images/ecosystem.png" style={{ width: "90%" }} />
          <div className="text-center">
            <a href="" className="mx-5" style={{textDecoration:"none"}}> explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
            <a href=""style={{textDecoration:"none"}}> Try kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

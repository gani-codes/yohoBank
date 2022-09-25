import React from "react";
import { apple, google, paypal } from "../../assets";
import { transactions } from "../../constants";
import "./billing.css";
const Billing = () => {
  return (
    <section id="billing">
      <div className="container billing__container">
        <div className="billing__right">
          <div className="latest__transactions">
            <h5>Latest Transactions</h5>
            {transactions.map((transaction) => (
              <article key={transaction.id} className="transaction">
                <div className="transaction__details">
                  <img src={transaction.icon} alt={transaction.party} />
                  <div>
                    <p> {transaction.party} </p>
                    <span className="text-light">{transaction.txnDate}</span>
                  </div>
                </div>
                <p>{transaction.txnAmount}</p>
              </article>
            ))}
          </div>
          <div className="make__transfer">
            <div className="make__transfer-party">
              <img src={paypal} alt="paypal" />
              <div>
                <h6>Paypal</h6>
                <span className="text-light">Checkout</span>
              </div>
            </div>
            <div className="make__transfer-amount">
              <div>
                <span className="text-light">Total</span>
                <p>$299</p>
              </div>
              <div>
                <a href="/" className="btn">
                  Change
                </a>
              </div>
            </div>

            <a href="/" className="btn btn-primary">
              Make Payment
            </a>
          </div>
        </div>

        <div className="billing__left">
          <h4>Easily control your billing & invoicing.</h4>
          <p className="text-light">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="">
            <img src={apple} alt="app store" />
            <img src={google} alt="play store" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;

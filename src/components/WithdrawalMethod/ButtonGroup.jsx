import React from "react";

export default function ButtonGroup() {
  return (
    <>
      <section className="btn-wrapper">
        <div className="btn-primary">
          <p className="btn-continue">CONTINUE</p>
        </div>
      </section>

      <section className="btn-secondary">
        <p className="btn-cancel">CANCEL</p>
      </section>
    </>
  );
}

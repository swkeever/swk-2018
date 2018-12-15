import React from "react";
import ScrollableAnchor from "react-scrollable-anchor/lib/ScrollableAnchor";

const CalloutSection = () => (
  <ScrollableAnchor id="contact">
    <section className="contact">
      <div className="container text-center">
        <h2 className="mx-auto mb-5">
          Let's build something amazing.
        </h2>
        <a
          className="btn btn-primary btn-xl"
          href="https://github.com/swkeever/resume/blob/master/pdf/sean-keever-resume.pdf"
          target="_blank"
        >
          View CV
        </a>
      </div>
    </section>
  </ScrollableAnchor>
);
export default CalloutSection;

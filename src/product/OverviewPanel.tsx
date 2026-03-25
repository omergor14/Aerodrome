const p = "/assets/product";

export function OverviewPanel() {
  return (
    <div className="product-overview">
      <section className="ov-block ov-block--tall" aria-labelledby="ov-strategic">
        <div className="ov-block__bg" aria-hidden="true">
          <img src={`${p}/ov-strategic.jpg`} alt="" />
        </div>
        <div className="ov-block__inner">
          <hr className="ov-block__rule ov-block__rule--on-dark" />
          <h2 id="ov-strategic" className="ov-block__title">
            Ultimate Strategic Game-Changing System
          </h2>
          <p className="ov-block__body">
            Cruise-missile level performance delivered affordably — extended
            operational reach up to 2,000 km with robust performance in
            dynamic, contested, and degraded environments.
          </p>
        </div>
      </section>

      <section className="ov-block ov-block--tall" aria-labelledby="ov-ready">
        <div className="ov-block__bg" aria-hidden="true">
          <img src={`${p}/ov-mission-ready.jpg`} alt="" />
        </div>
        <div className="ov-block__inner">
          <hr className="ov-block__rule ov-block__rule--on-dark" />
          <h2 id="ov-ready" className="ov-block__title">
            Intelligent, Rugged, and Mission-Ready.
          </h2>
          <p className="ov-block__body">
            A dependable heavy-duty loitering munition system that combines
            advanced AI autonomy with hardened reliability for persistent,
            precision engagement
          </p>
        </div>
      </section>

      <div className="ov-split">
        <div className="ov-split__copy ov-split__copy--cream">
          <hr className="ov-block__rule ov-block__rule--on-light" />
          <h2 className="ov-block__title">Unmatched Production and Delivery Capacity</h2>
          <p className="ov-block__body">
            Supported by a robust worldwide logistics network and trusted
            suppliers across Europe, the United States, and Asia, our
            high-volume production capabilities enable rapid delivery and
            uncompromising quality—at any scale.
          </p>
        </div>
        <div className="ov-split__media">
          <img src={`${p}/ov-production.jpg`} alt="" />
        </div>
      </div>

      <section className="ov-block ov-block--tall" aria-labelledby="ov-eco">
        <div className="ov-block__bg" aria-hidden="true">
          <img src={`${p}/ov-ecosystem.jpg`} alt="" />
        </div>
        <div className="ov-block__inner">
          <hr className="ov-block__rule ov-block__rule--on-dark" />
          <h2 id="ov-eco" className="ov-block__title">
            A Complete Operational Eco-System
          </h2>
          <p className="ov-block__body">
            The Phoenix LT’s semi-open architecture provides unparalleled
            flexibility—enabling users to integrate and evolve AI-driven
            functionalities on their own terms, seamlessly and securely, with
            no reliance on third parties or hardware changes
          </p>
        </div>
      </section>

      <div className="ov-split ov-split--reverse">
        <div className="ov-split__media ov-split__media--layered">
          <img src={`${p}/ov-wolfpack-a.jpg`} alt="" />
          <img src={`${p}/ov-wolfpack-b.jpg`} alt="" className="ov-split__media-front" />
        </div>
        <div className="ov-split__copy ov-split__copy--darkgrey">
          <hr className="ov-block__rule ov-block__rule--on-dark" />
          <h2 className="ov-block__title">Ground Operation as Main Focus</h2>
          <p className="ov-block__body">
            Unlike conventional UAV platforms, the true strength of the Phoenix
            LT emerges when operating in coordinated wolfpack formations. This
            doctrine was embedded as a core engineering principle from day
            one—driving the development of our unique, patented launch-system
            mechanisms in both software and hardware.
          </p>
        </div>
      </div>

      <section className="ov-block ov-block--tall" aria-labelledby="ov-track">
        <div className="ov-block__bg" aria-hidden="true">
          <img src={`${p}/ov-track-record.jpg`} alt="" />
        </div>
        <div className="ov-block__inner">
          <hr className="ov-block__rule ov-block__rule--on-dark" />
          <h2 id="ov-track" className="ov-block__title">
            Operational Track-Record
          </h2>
          <p className="ov-block__body">
            We offer a rigorously tested UAS platform with a global operational
            footprint and a proven track record in live operational environments.
            Backed by extensive trials, experiments, and real-world deployments,
            the system delivers dependable performance under combat
            conditions—giving operators confidence in durability, mission
            effectiveness, and repeatable results.
          </p>
        </div>
      </section>

      <div className="ov-split">
        <div className="ov-split__copy ov-split__copy--cream">
          <hr className="ov-block__rule ov-block__rule--on-light" />
          <h2 className="ov-block__title">Training. Simplified</h2>
          <div className="ov-block__body">
            <p>
              Built for true autonomy, the Phoenix LT dramatically simplifies
              operator training and mission preparation. The system handles all
              pre-flight and ground operations automatically, then continues to
              make mission-critical decisions en route to the target area. Upon
              arrival, its AI-driven ATMS activates to analyze, decide, and act
              in real time—drawing on predefined mission profiles and
              continuously evolving machine-learning intelligence
            </p>
          </div>
        </div>
        <div className="ov-split__media">
          <img src={`${p}/ov-training.jpg`} alt="" />
        </div>
      </div>

      <div className="ov-split ov-split--reverse">
        <div className="ov-split__media ov-split__media--dim">
          <img src={`${p}/ov-wolfpack-a.jpg`} alt="" />
        </div>
        <div className="ov-split__copy ov-split__copy--beige">
          <hr className="ov-block__rule ov-block__rule--on-light" />
          <h2 className="ov-block__title">Digitized Maintenance Concept</h2>
          <p className="ov-block__body">
            Through the advanced Maintenance Track Interface (MTI), all
            troubleshooting and maintenance tasks can be performed with full
            accessibility. The MTI equips technical crews with real-time
            diagnostics and intuitive control, enabling rapid fault isolation
            and resolution with minimal effort and turnaround time.
          </p>
        </div>
      </div>

      <section className="ov-block ov-block--tall" aria-labelledby="ov-cloud">
        <div className="ov-block__bg" aria-hidden="true">
          <img src={`${p}/ov-maintenance.jpg`} alt="" />
        </div>
        <div className="ov-block__inner">
          <hr className="ov-block__rule ov-block__rule--on-dark" />
          <h2 id="ov-cloud" className="ov-block__title">
            Optional Private Cloud Connectivity
          </h2>
          <p className="ov-block__body">
            Phoenix LT redefines operational autonomy with a built-in, open AI
            framework that enables users or third-party integrators to create and
            implement mission-specific applications in-house. This capability
            reduces dependency, accelerates innovation cycles, and supports rapid
            adaptation to evolving battlefield needs.
          </p>
        </div>
      </section>
    </div>
  );
}

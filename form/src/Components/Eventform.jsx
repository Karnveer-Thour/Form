import Custombev from "./event_overview_components/Custombev";
import Exhibitioncomponent from "./event_overview_components/Exhibition_component";
import Otherinput from "./event_overview_components/Otherinput";
import Phootoshoot from "./event_overview_components/Photoshoot";
function Eventform({ handleInvalidinput, data, setData }) {
  return (
    // Heading of event overview
    <div className="mb-3">
      <div className="mt-4 mx-3 d-flex flex-column justify-content-start align-items-start">
        <p
          style={{
            fontSize: "1rem",
            borderBottom: "1px solid black",
            width: "100%",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          Event Overview
        </p>
      </div>
      {/* event dates and other time component */}
      <div className="mb-3 d-flex justify-content-between flex-row align-items-start flex-wrap">
        <div className="ms-5" style={{ width: "40%" }}>
          <label htmlFor="E-Date" className="form-label text-start w-100 mx-3">
            Date of use*
          </label>
          <input
            type="Date"
            className="form-control"
            id="E-Date"
            name="Date of use"
            aria-describedby="emailHelp"
            pattern="\d{4}-\d{2}-\d{2}"
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  date_of_use: e.target.value,
                },
              }));
            }}
            value={data.eventOverview.date_of_use}
            required
          />
        </div>
      </div>
      <div className="mb-3 d-flex justify-content-between flex-row align-items-start flex-wrap">
        <div className="ms-5" style={{ width: "40%" }}>
          <label htmlFor="Start-t" className="form-label text-start w-100 mx-3">
            Start Time*
          </label>
          <input
            type="time"
            className="form-control"
            name="Start time"
            id="Start-t"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  start_time: e.target.value,
                },
              }));
            }}
            value={data.eventOverview.start_time}
            required
          />
        </div>
        <div className="me-5" style={{ width: "40%" }}>
          <label htmlFor="E-Time" className="form-label text-start w-100 mx-3">
            End Time*
          </label>
          <input
            type="time"
            className="form-control"
            name="End time"
            id="E-Time"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  end_time: e.target.value,
                },
              }));
            }}
            value={data.eventOverview.end_time}
            required
          />
        </div>
        <div className="ms-5 mt-2" style={{ width: "40%" }}>
          <label htmlFor="En-Time" className="form-label text-start w-100 mx-3">
            Entry Time*
          </label>
          <input
            type="time"
            className="form-control"
            name="Entry time"
            id="En-Time"
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  entry_time: e.target.value,
                },
              }));
            }}
            value={data.eventOverview.entry_time}
            required
          />
        </div>
        <div className="me-5 mt-2" style={{ width: "40%" }}>
          <label htmlFor="Ex-Time" className="form-label text-start w-100 mx-3">
            Exit Time*
          </label>
          <input
            type="time"
            className="form-control"
            name="Exit time"
            id="Ex-Time"
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  exit_time: e.target.value,
                },
              }));
            }}
            value={data.eventOverview.exit_time}
            required
          />
        </div>
      </div>
      <ul className="mt-4" style={{ fontSize: "1rem", textAlign: "left" }}>
        <li>
          Please have attendees leave, remove any equipment brought in, and
          restore the layout by the time you leave.
        </li>
        <li>
          Fees will be charged from the time you enter the venue until the time
          you leave. For use outside of business hours (weekdays 10:00-18:00), a
          separate after-hours fee (staff attendance fee) will be charged.
        </li>
        <li>
          If extra time is required on the day of the event, an additional fee
          will be charged. Please understand this in advance.
        </li>
      </ul>

      {/* Event details component */}

      <div className="mb-3 d-flex justify-content-between flex-row align-items-start flex-wrap">
        <div className="ms-5" style={{ width: "40%" }}>
          <label htmlFor="Start-t" className="form-label text-start w-100 mx-3">
            Event Name*
          </label>
          <input
            type="Text"
            className="form-control"
            id="Start-t"
            name="Event Name"
            aria-describedby="emailHelp"
            onChange={(e) => {
              handleInvalidinput(e);
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  event_name: e.target.value,
                },
              }));
            }}
            value={data.eventOverview.event_name}
            required
          />
        </div>
        <div className="me-5" style={{ width: "40%" }}>
          <label htmlFor="E-Name" className="form-label text-start w-100 mx-3">
            Name of Event Organizer*
          </label>
          <input
            type="Text"
            className="form-control"
            id="E-Name"
            name="Name of Event Organizer"
            aria-describedby="emailHelp"
            onChange={(e) => {
              handleInvalidinput(e);
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  name_of_event_organizer: e.target.value,
                },
              }));
            }}
            value={data.eventOverview.name_of_event_organizer}
            required
          />
        </div>
        <div className="ms-5 mt-2" style={{ width: "40%" }}>
          <label
            htmlFor="No-peoples"
            className="form-label text-start w-100 mx-3"
          >
            Number of people expected to attend*
          </label>
          <input
            type="number"
            className="form-control"
            name="Number of people expected to attend"
            id="No-peoples"
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  number_of_attendees: e.target.value,
                },
              }));
            }}
            value={data.eventOverview.number_of_attendees}
            required
          />
        </div>
        <div className="me-5 mt-2" style={{ width: "40%" }}>
          <label
            htmlFor="E-Details"
            className="form-label text-start w-100 mx-3"
          >
            Event Details
          </label>
          <input
            type="file"
            className="form-control"
            id="E-Details"
            name="Event Details"
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  event_details_file: e.target.value,
                },
              }));
            }}
            value={data.eventOverview.event_details_file}
          />
          <div id="emailHelp" className="form-text text-start w-100 mx-3">
            lf you have a proposal, upload here
          </div>
        </div>
      </div>

      {/* type of event */}

      <div className="mb-3 mx-5 d-flex justify-content-between flex-column align-items-start flex-wrap">
        <p className="form-label" style={{ fontWeight: "bold" }}>
          Form of Event*
        </p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Form of event"
            id="Pitch"
            value="Pitch Event"
            onChange={(e) => {
              setData((prev) => {
                let { other_form_of_event, ...rest } = prev.eventOverview;
                rest.form_of_event = e.target.value;
                return {
                  ...prev,
                  eventOverview: rest,
                };
              });
            }}
            required
            defaultChecked
          />
          <label className="form-check-label form-label" htmlFor="Pitch">
            Pitch Event
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Form of event"
            id="Workshop"
            value="Workshop"
            required
            onChange={(e) => {
              setData((prev) => {
                let { other_form_of_event, ...rest } = prev.eventOverview;
                rest.form_of_event = e.target.value;
                return {
                  ...prev,
                  eventOverview: rest,
                };
              });
            }}
          />
          <label className="form-check-label form-label" htmlFor="Workshop">
            Workshop
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Form of event"
            id="Seminar"
            value="Seminar"
            required
            onChange={(e) => {
              setData((prev) => {
                let { other_form_of_event, ...rest } = prev.eventOverview;
                rest.form_of_event = e.target.value;
                return {
                  ...prev,
                  eventOverview: rest,
                };
              });
            }}
          />
          <label className="form-check-label form-label" htmlFor="Seminar">
            Seminar
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Form of event"
            id="Other"
            value="Other"
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  other_form_of_event: "",
                  form_of_event: e.target.value,
                },
              }));
            }}
            required
          />
          <label className="form-check-label form-label" htmlFor="Other">
            Other
          </label>
        </div>

        {/* other form of event appear when user choose other option */}

        {data.eventOverview.form_of_event === "Other" && (
          <Otherinput
            handleInvalidinput={handleInvalidinput}
            data={data}
            setData={setData}
          />
        )}
        <div className="mb-3 d-flex flex-column justify-content-start align-items-start w-100 mt-3">
          {/* Co-organizer/support */}

          <label
            htmlFor="Co-Organizer/Support"
            className="form-label mx-3"
            style={{ fontSize: "1rem" }}
          >
            Co-Organizer/Support*
          </label>
          <input
            type="text"
            className="form-control mx-1"
            id="Co-Organizer/Support"
            name="Co-Organizer Support"
            aria-describedby="emailHelp"
            onChange={(e) => {
              handleInvalidinput(e);
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  co_organizer_support: e.target.value,
                },
              }));
            }}
            value={data.eventOverview.co_organizer_support}
            required
          />

          {/* Availabilities of interviews */}
        </div>
        <div className="mb-2 mt-4 d-flex justify-content-between flex-column align-items-start flex-wrap">
          <p className="form-label" style={{ fontWeight: "bold" }}>
            Availabilities of Interviews*
          </p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="Availabilities of Interviews"
              id="E-yes"
              value="Yes"
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  eventOverview: {
                    ...prev.eventOverview,
                    Photoshoot: "",
                    Availability_of_interviews: e.target.value,
                  },
                }))
              }
              required
            />
            <label className="form-check-label form-label" htmlFor="E-yes">
              Yes
            </label>
          </div>

          {/* Options for photoshoot appear when user select yes */}

          {data.eventOverview.Availability_of_interviews === "Yes" && (
            <Phootoshoot setData={setData} />
          )}
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="Availabilities of Interviews"
              id="E-No"
              value="No"
              onChange={(e) =>
                setData((prev) => {
                  let { photoshoot, ...rest } = prev.eventOverview;
                  rest.Availability_of_interviews = e.target.value;
                  return {
                    ...prev,
                    eventOverview: rest,
                  };
                })
              }
              required
              defaultChecked
            />
            <label className="form-check-label form-label" htmlFor="E-No">
              No
            </label>
          </div>
        </div>

        {/* food and beverage options */}

        <div className="form-check ms-0">
          <div className="mb-1 mt-3 ms-0 d-flex justify-content-between flex-column align-items-start flex-wrap">
            <p className="form-label" style={{ fontWeight: "bold" }}>
              Food and beverage availability*
            </p>
          </div>
          <input
            className="form-check-input"
            type="radio"
            name="Food and beverage availability"
            id="bev-custom"
            value="Catering order to be placed in the work lounge"
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  // create a new object in eventOverview if user select custom beverage option
                  beverage_order_in_work_lounge: {
                    number_of_people: "",
                    beverage_start_time: "",
                  },
                  food_beverage_availibilty: e.target.value,
                },
              }));
            }}
            required
          />
          <label className="form-check-label" htmlFor="bev-custom">
            Catering order to be placed in the work lounge
          </label>
        </div>

        {/* Custom bev component render if user select custom bev option */}

        {data.eventOverview.beverage_order_in_work_lounge && (
          <Custombev setData={setData} data={data} />
        )}
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Food and beverage availability"
            id="yes-bev"
            value="Soft drinks in plastic bottles"
            onChange={(e) => {
              setData((prev) => {
                let { beverage_order_in_work_lounge, ...rest } =
                  prev.eventOverview;
                rest.food_beverage_availibilty = e.target.value;
                return {
                  ...prev,
                  eventOverview: rest,
                };
              });
            }}
            required
          />
          <label className="form-check-label" htmlFor="yes-bev">
            Soft drinks in plastic bottles
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Food and beverage availability"
            id="No-bev"
            onChange={(e) => {
              setData((prev) => {
                let { beverage_order_in_work_lounge, ...rest } =
                  prev.eventOverview;
                rest.food_beverage_availibilty = e.target.value;
                return {
                  ...prev,
                  eventOverview: rest,
                };
              });
            }}
            required
            defaultChecked
            value="No food or drink"
          />
          <label className="form-check-label" htmlFor="No-bev">
            No food or drink
          </label>
        </div>
        <ul className="mt-3" style={{ textAlign: "left" }}>
          <li>
            Please note that catering may not be available if you apply
            immediately before the event date.
          </li>
          <li>Catering wil be provided by an adjacent restaurant.</li>
          <li>
            If you select "Catering order to be placed in the work lounge", the
            adjacent restaurant will contact you. Please communicate directly
            with the restaurant to place the order, as the order has not been
            completed at this time.
          </li>
          <li>Please note that food cannot be brought in from outside.</li>
          <li>
            Only soft drinks in plastic bottles are allowed to be brought to the
            event (no pots, pitchers, etc. provided).
          </li>
        </ul>

        {/* Availability of product demonstrations, exhibition component */}

        <div className="mb-1 mt-3 ms-4 d-flex justify-content-between flex-column align-items-start flex-wrap">
          <p className="form-label" style={{ fontWeight: "bold" }}>
            Availability of product demonstrations, exhibitions, etc.
          </p>
        </div>

        <div className="form-check w-100">
          <input
            className="form-check-input"
            type="radio"
            name="Availability of product demonstrations, exhibitions, etc"
            id="exhibitionsYes"
            value="Yes"
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  about_product: {
                    product_detail: "",
                    product_file: "",
                  },
                  Availibilty_of_productDemonstrations_exhibition_etc:
                    e.target.value,
                },
              }));
            }}
            required
          />
          <label className="form-check-label d-flex" htmlFor="exhibitionsYes">
            Yes
          </label>

          {/* Exhibition component appear if user selects yes option */}

          {data.eventOverview.about_product && (
            <Exhibitioncomponent
              handleInvalidinput={handleInvalidinput}
              data={data}
              setData={setData}
            />
          )}
        </div>
        <div className="form-check my-2">
          <input
            className="form-check-input"
            type="radio"
            name="Availability of product demonstrations, exhibitions, etc"
            id="exhibitionsNo"
            value="No"
            onChange={(e) => {
              setData((prev) => {
                let { about_product, ...rest } = prev.eventOverview;
                rest.Availibilty_of_productDemonstrations_exhibition_etc =
                  e.target.value;
                return {
                  ...prev,
                  eventOverview: rest,
                };
              });
            }}
            required
            defaultChecked
          />
          <label className="form-check-label" htmlFor="exhibitionsNo">
            No
          </label>
        </div>

        {/* like to be listing last question */}

        <div className="mb-1 mt-3 ms-4 d-flex justify-content-between flex-column align-items-start flex-wrap">
          <p className="form-label" style={{ fontWeight: "bold" }}>
            Would you like to be listed on TECH HUB YOKOHAMA HP?
          </p>
        </div>
        <div className="form-check my-2">
          <input
            className="form-check-input"
            type="radio"
            name="Would you like to be listed on TECH HUB YOKOHAMA HP"
            id="listed-yes"
            value="yes"
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  like_to_be_listed: e.target.value,
                },
              }));
            }}
            required
          />
          <label className="form-check-label" htmlFor="listed-yes">
            Yes
          </label>
        </div>
        <div className="form-check ">
          <input
            className="form-check-input"
            type="radio"
            name="Would you like to be listed on TECH HUB YOKOHAMA HP"
            id="listed-no"
            value="No"
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                eventOverview: {
                  ...prev.eventOverview,
                  like_to_be_listed: e.target.value,
                },
              }));
            }}
            required
            defaultChecked
          />
          <label className="form-check-label" htmlFor="listed-no">
            No
          </label>
        </div>

            {/* Rest some points with checks */}

        <ul className="me-5 mt-1 ms-0" style={{ textAlign: "left" }}>
          <li>
            If you wish, we will post your event in the "EVENT" section of the
            TECH HUB YOKOHAMA HP. Please prepare a draft of the announcement
            text and send it to event_thy@mec.co.jp.
          </li>
        </ul>
        <ul>
          <li
            className="fs-3"
            style={{ listStyle: "square", textAlign: "left" }}
          >
            Precautions
          </li>
          <ul style={{ listStyle: "disc", textAlign: "left" }}>
            <li>
              We do not permit the use of the space for profit-making purposes,
              such as profit-making events, sales of goods, parties for
              excessive profit, etc. (Food, beverages, etc. may be charged
              separately.
            </li>
            <li>
              We do not accept luggage (including items brought in or mailed) in
              advance due to security reasons and the lack of a safe place to
              store it. We appreciate your understanding and cooperation.
            </li>
            <li>
              This base is a support base for TECH startups to help them grow.
              During business hours (10:00-12:00 on weekdays), this space is
              available for use by members of TECH HUB YOKOHAMA. If you wish to
              hold an event during business hours, we ask for your cooperation
              in securing a space that is available for use by our members.
            </li>
            <li>
              The event organizer is responsible for event set-up and
              restoration.
            </li>
            <li>
              After the event, please clean up the equipment, fixtures, etc. in
              the space to be used according to the Restoration Check Sheet.
              Please fill out the sheet and submit it. Please note that the
              operator may store, remove, or dispose of any remaining items
              after the event, and any costs incurred for disposal, etc. will be
              borne by the applicant.
            </li>
            <li>
              Please note that the event organizer may be requested to pay
              compensation for any damage, defacement, or loss of buildings,
              equipment, fixtures, or other items in the event space.
            </li>
            <li>
              In principle, TECH HUB YOKOHAMA is not available for use by event
              participants before or after the event (e.g., working in the work
              lounge). Event organizers are requested to inform event
              participants of the start and end times of the event reception.
            </li>
            <li>
              Applicants may display their products in the facility at the time
              of the event. However, the applicant is responsible for and bears
              the burden of carrying in/out and displaying the subject products
              (in particular, please take sufficient safety measures to prevent
              damage to the operator, third parties, and buildings, facilities,
              and equipment of the base). In addition, please follow the
              instructions and guidance given by the operator in the operation
              and management of the facility. Please note that the Operator will
              not be held responsible for any damage incurred to the subject
              products or the applicant in connection with the carrying in/out
              or exhibition of the subject products.
            </li>
            <li>
              Please refer to separate document "TECH HUB YOKOHAMA Event Usage
              Guide" for other precautions regarding the use of this facility
              for events.
            </li>
            <li>
              Reservation will be confirmed upon approval by Mitsubishi Estate
              Co. Cancellations made after that date will be charged 50% of the
              total amount of the reservation up to 7 days prior to the date of
              the reservation, and 100% of the total amount of the reservation 6
              days prior to the date of the reservation. Please note that a
              cancellation fee will be charged even if the reservation time is
              shortened (e.g., if the reservation time is changed from
              9:00-12:00 to 10:00-12:00, a cancellation fee of one hour will be
              charged).
            </li>
          </ul>
        </ul>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="Precautions"
            id="prec"
            required
          />
          <label className="form-check-label" htmlFor="prec">
            I have reviewed the above notes
          </label>
        </div>

        <ul className="mt-3" style={{ listStyle: "square", textAlign: "left" }}>
          <li className="fs-3">Pledge</li>
          <ol style={{ listStyle: "numbers", textAlign: "left" }}>
            <li>
              Not be a member of organized crime groups, companies or
              organizations related to organized crime groups or their
              affiliates (including past members), general assemblymen, social
              activists, political activists, special intelligence groups, or
              other anti-social forces (hereinafter referred to as "anti-social
              forces"). The applicant must not have any socially reprehensible
              relationship with antisocial forces.
            </li>
            <li>
              The organization to which the applicant belongs is not engaged in
              direct or indirect transactions with antisocial forces as
              described in the preceding paragraph.
            </li>
          </ol>
        </ul>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="Pledge"
            id="pled"
            required
          />
          <label className="form-check-label" htmlFor="pled">
            Constrain the above contents.
          </label>
        </div>
        <ul className="mt-3" style={{ listStyle: "square", textAlign: "left" }}>
          <li className="fs-3">Consent to handling of personal information</li>
          <ol style={{ listStyle: "numbers", textAlign: "left" }}>
            <li>
              Purpose of Use
              <ul style={{ listStyle: "none" }}>
                <li>
                  The personal information entered in this form will be used by
                  the City of Yokohama, Mitsubishi Estate and Yokohama Future
                  Organization Joint Venture(hereinafter referred to as the
                  "Joint Venture"), which operates TECH HUB YOKOHAMA, and
                  General Incorporated Association Venture Café Tokyo
                  (hereinafter referred to as the "Venture Café". The City of
                  Yokohama, the Joint Venture, and the Venture Café are
                  collectively referred to as the "Operator"), and Stockholm
                  Roast Corporation, which operates the adjacent restaurant Tomt
                  café bistro bar, will collect, use, and manage the information
                  for the following purposes, after taking the necessary
                  protective measures.
                </li>
              </ul>
            </li>
            <li>
              Provision to third parties
              <p className="mb-0">
                The Operator will not provide or disclose the entered personal
                information to any third party, except to third parties to whom
                the Operator has entrusted its operations or in any of the
                following cases
              </p>
              <ol>
                <li>
                  With the consent of the applicant. The Operator plans to
                  provide the applicant's information to other companies
                  registered as TECH HUB YOKOHAMA Work Lounge members (startup
                  members, partner members, and mentor companies) after
                  obtaining the applicant's consent.
                </li>
                <li>
                  When it is necessary for the protection of a person's life,
                  body, or property and it is difficult to obtain the
                  applicant's consent
                </li>
                <li>
                  When disclosure or provision is required by other laws and
                  regulations
                </li>
              </ol>
            </li>
            <li>
              The Operator shall strictly manage the entered personal
              information, pay sufficient attention to the protection of
              privacy, and shall not use it for any purposes other than those
              stipulated in the preceding paragraph. However, the Operator may
              disclose such personal information to government agencies, etc.,
              in accordance with laws, ordinances, etc. (including the Yokohama
              City Ordinance on Civic Collaboration), and such personal
              information may be used by the City of Yokohama in accordance with
              the preceding paragraph (1).
            </li>
            <li>
              This privacy policy is subject to change without notice to the
              applicant, except for changes that may materially affect the
              applicant.
            </li>
          </ol>
        </ul>
        <div className="form-check">
          <input
            type="checkbox"
            name="I agree to the above"
            className="form-check-input"
            id="agree"
            required
          />
          <label className="form-check-label" htmlFor="agree">
            I agree to the above
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="confirm the above information and apply for use"
            className="form-check-input"
            id="confirm"
            required
          />
          <label className="form-check-label" htmlFor="confirm">
            | confirm the above information and apply for use.
          </label>
        </div>
      </div>
    </div>
  );
}

export default Eventform;

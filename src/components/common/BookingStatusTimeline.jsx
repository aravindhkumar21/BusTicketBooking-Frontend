import { Check } from "lucide-react";

const BookingStatusTimeline = ({
  currentStatus = "BOOKED",
}) => {
  const steps = [
    "BOOKED",
    "COMPLETED",
  ];

  const currentIndex = steps.indexOf(
    currentStatus?.toUpperCase()
  );

  return (
    <div className="booking-status-timeline">
      {steps.map((step, index) => {
        const completed = index <= currentIndex;
        const active = index === currentIndex;

        return (
          <div
            key={step}
            className={`timeline-step ${
              completed ? "completed" : ""
            } ${active ? "active" : ""}`}
          >
            <div className="timeline-icon">
              {completed ? <Check size={16} /> : index + 1}
            </div>

            <span>{step}</span>

            {index < steps.length - 1 && (
              <div className="timeline-line" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BookingStatusTimeline;
import { Check } from "lucide-react";

const StepIndicator = ({ steps = [], currentStep = 1 }) => {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <div
            key={stepNumber}
            className={`step-item ${
              isActive ? "active" : ""
            } ${isCompleted ? "completed" : ""}`}
          >
            <div className="step-circle">
              {isCompleted ? (
                <Check size={16} />
              ) : (
                stepNumber
              )}
            </div>

            <span>{step}</span>

            {index < steps.length - 1 && (
              <div className="step-line" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
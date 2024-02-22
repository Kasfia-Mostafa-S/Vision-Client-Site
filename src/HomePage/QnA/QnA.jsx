const QnA = () => {
  return (
    <div className="max-w-5xl mx-auto py-14">
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Is there a warranty or support policy available for devices?
        </div>
        <div className="collapse-content">
          <p>
            This question would clarify the post-purchase support options
            provided by the company, including warranties, technical support,
            and repair services.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        What are the technical specifications of the device?
        </div>
        <div className="collapse-content">
          <p>Technical specifications provide detailed information about the device's hardware, such as its processor, RAM, storage capacity, camera quality, display resolution, etc. Users interested in the device's performance and capabilities would ask this question.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Are there any upcoming releases or updates planned for any device?
        </div>
        <div className="collapse-content">
          <p>
            This question would help you stay informed about any future
            developments or improvements for the device, allowing you to make a
            more informed purchasing decision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QnA;

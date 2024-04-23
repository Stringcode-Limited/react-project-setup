import "./OTP.css";

interface IOTP {
  label: string;
  aria?: string
  onChange?: any
  value?: string
  onClick?: any
}

function OTP({ label, aria, onChange, value, onClick }: IOTP) {
  return (
    <>
      <div className="otp">
        <label htmlFor={label}>{label}</label>
        <div className="container">
          <input type="number" name={aria} value={value} onChange={onChange} id={aria} aria-describedby={aria}/>
          <p className="resend" onClick={onClick}>Resend</p>
        </div>
      </div>
    </>
  );
}

export default OTP;

import './styles.scss';

const EmailAlert = () => {
  return (
    <div className="emailalert">
      <h3 className="emailalert__heading">
        E-Mail Alert
      </h3>
      <p className="emailalert__text">
        Add your e-mail to receive forthcoming issues of this journal:
      </p>
      <form className="emailalert__form">
        <input placeholder="Enter email" className="emailalert__form--input" type="email" />
        <input type="submit" value={"SUBSCRIBE"} className="emailalert__form--button" />
      </form>
    </div>
  )
}

export default EmailAlert;
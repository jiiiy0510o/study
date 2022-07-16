import { useState } from "react";

const EventPractice = () => {
  let [form, setForm] = useState({
    username: "",
    message: "",
  });

  let { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="닉네임"
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        value={message}
        placeholder="내용을 입력하세요."
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>입력</button>
    </div>
  );
};

export default EventPractice;

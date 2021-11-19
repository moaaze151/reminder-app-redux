import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react"; //useEffect
// import { adding } from "./store/actions/action";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  // const [hours, setHours] = useState();
  // const [minutes, setMinutes] = useState(); (setHours(setMinutes(new Date(), 30), 16))
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("");
  const reminder = useSelector((state) => state.reminder.reminder);
  const dispatch = useDispatch();

  function send() {
    if (text === "") {
      return;
    }
    dispatch({
      type: "ADD",
      payload: { text: text, date: date, id: Math.random() },
    });
    setText("");
    setDate(new Date());
  }
  function remove(id) {
    dispatch({
      type: "DEL",
      payload: id,
    });
  }
  function clear() {
    dispatch({ type: "CLR" });
  }
  const content =
    reminder.length >= 1
      ? reminder.map((e) => {
          return (
            <li className="list-group-item row position-relative" key={e.id}>
              <div className="col-6 d-inline-block">{e.text}</div>
              <div className="col-6 d-inline-block">
                {moment(new Date(e.date)).fromNow()}
              </div>
              <button
                onClick={() => remove(e.id)}
                className="remove-bttn bg-danger text-light position-absolute"
              >
                x
              </button>
            </li>
          );
        })
      : "";
  return (
    <div className="App bg-danger bg-gradient">
      <div className="contain mt-3 mx-auto text-center p-3">
        <img src="./img/note.png" alt="...." />
        <div className="reminder-title text-light my-2">
          <h2>What Should You Do?</h2>
        </div>
        <input
          type="text"
          placeholder="Enter What You Think"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        {/* <input
          className="my-2"
          type="datetime-local"
          defaultValue="2021-11-18T19:30"
          onChange={(e) => setDate(e.target.value)}
        /> */}
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          className="mt-2"
          dateFormat="MMMM d, yyyy h:mm aa"
          // showTimeSelect
        />
        <div className="d-grid gap-2 mt-3">
          <button
            className="btn bg-primary  text-light"
            onClick={() => send()}
          >
            Add Reminder
          </button>
          <ul className="list-group p-3">{content}</ul>
          <button onClick={() => clear()} className="btn bg-danger text-light">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

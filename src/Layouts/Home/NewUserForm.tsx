import React, { useState } from "react";

// Import React Icons
import { FaPlayCircle } from "react-icons/fa";
import { GiPokerHand } from "react-icons/gi";

type Props = {
  onSubmit?: () => void;
};

type FormItem = {
  title: string;
  icon: any;
  iconSize: number;
};

// Form Item for multi selection.
const FormItem = (props: FormItem) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`form__item ${isActive ? "form__item--active" : ""}`} onClick={() => setIsActive(!isActive)}>
      <props.icon size={props.iconSize} />
      <span className="form__item-title">{props.title}</span>
    </div>
  );
};

// Global New User Form.
const NewUserForm = (props: Props) => {
    const [userInfos, setUsersInfos] = useState({
        type: "",
        name: ""
    });
    

    // // Handling when user change the value of the input
    // function handleInputChange = (event) => {
    //     event.preventDefault();
    //     setUsersInfos({[event.target.name]: event.target.value});
        
    // }
  return (
    <form className="form form--home" action={props.onSubmit}>
      <input name="" type="text" placeholder="Your name" />
      <div className="form__items">
        <FormItem title="Player" icon={GiPokerHand} iconSize={35}/>
        <FormItem title="Spectator" icon={FaPlayCircle} iconSize={25}/>
      </div>
    </form>
  );
};

export default NewUserForm;

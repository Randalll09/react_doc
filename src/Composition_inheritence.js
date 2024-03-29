import React from 'react';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return <Dialog title="Welcome" message="Thank you for visiting" />;
}

function Contacts() {
  return (
    <div className="Contacts">
      <p>Contacts</p>
    </div>
  );
}

function Chat() {
  return (
    <div className="Chat">
      <p>ChatBox</p>
    </div>
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

const ComponentInheritence = () => {
  return (
    <div>
      <WelcomeDialog />
      <SplitPane left={<Contacts />} right={<Chat />} />
    </div>
  );
};

export default ComponentInheritence;

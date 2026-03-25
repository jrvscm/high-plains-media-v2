export const SmsProgramNotice = () => {
  return (
    <div className="space-y-2">
      <p>
        Message frequency varies. Message and data rates may apply.
      </p>
      <p>
        You may opt out at any time by following the instructions in the message (such as
        replying STOP for SMS or unsubscribing from email) or contacting us at{" "}
        <a
          href="mailto:jarvis@highplainsmedia.com"
          className="text-primary font-medium hover:underline"
        >
          jarvis@highplainsmedia.com
        </a>
        .
      </p>
      <p>
        For help, reply HELP or contact us at{" "}
        <a
          href="mailto:jarvis@highplainsmedia.com"
          className="text-primary font-medium hover:underline"
        >
          jarvis@highplainsmedia.com
        </a>
        .
      </p>
    </div>
  );
};

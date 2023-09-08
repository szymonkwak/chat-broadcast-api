interface OpenChatWindowIconProps {
  onClick: () => void;
}

const OpenChatWindowIcon = (props: OpenChatWindowIconProps) => {
  const { onClick } = props;

  return (
    <div className="group absolute right-4 top-4">
      <button className="hover:brightness-90 active:scale-90" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </button>
      <span className="pointer-events-none absolute -bottom-7 right-0 w-max opacity-0 transition-opacity group-hover:opacity-100">
        Open chat in new window
      </span>
    </div>
  );
};

export default OpenChatWindowIcon;

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function EmailCard({}) {
  const [selectedEmail, setSelectedEmail] = useState(false);
  const emails = [
    { header: "Test Email 8", text: "Some Content Goes Here" },
    { header: "Test Email 7", text: "Some Content Goes Here" },
    { header: "Test Email 6", text: "Some Content Goes Here" },
    { header: "Test Email 5", text: "Some Content Goes Here" },
    { header: "Test Email 4", text: "Some Content Goes Here" },
    { header: "Test Email 3", text: "Some Content Goes Here" },
    { header: "Test Email 2", text: "Some Content Goes Here" },
    { header: "Test Email 1", text: "Some Content Goes Here" },
  ];

  const [shownEmails, setShownEmails] = useState(emails.slice(0, 3));

  function handleAdd() {
    let oldShown = shownEmails;
    let newEmail = emails[shownEmails.length];
    oldShown.unshift(newEmail);
    setShownEmails([...oldShown]);
  }

  function handleDelete() {
    let oldShown = shownEmails.filter(
      (el) => el.header != selectedEmail.header
    );
    setShownEmails(oldShown);
  }

  return (
    <div className="w-full max-w-3xl bg-white rounded-md grid grid-cols-6 h-[500px]">
      <div className="bg-gray-100 rounded-tl-md rounded-bl-md flex flex-col h-full overflow-y-auto col-span-2">
        <div className="flex justify-between shadow-sm p-2">
          <motion.div
            onClick={handleAdd}
            className="bg-transparent flex flex-nowrap w-auto gap-2 items-center justify-center rounded-lg cursor-pointer h-10  group transition-all flex-grow-0"
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <div className="p-2 flex flex-nowrap items-center gap-2">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </motion.svg>
              <AnimatePresence>
                <motion.p
                  variants={{
                    hover: {
                      opacity: 1,
                    },
                    rest: {
                      opacity: 0,
                      width: 0,
                    },
                  }}
                  className="text-sm whitespace-nowrap"
                  transition={{ delay: 0.2 }}
                >
                  New Messages
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div
            onClick={handleDelete}
            className="bg-transparent w-auto flex flex-nowrap gap-2 items-center justify-center rounded-lg cursor-pointer h-10  group transition-all flex-grow-0"
            initial="rest2"
            animate="rest2"
            whileHover="hover2"
          >
            <div className="p-2 flex flex-nowrap  items-center gap-2">
              <AnimatePresence>
                <motion.p
                  variants={{
                    hover2: {
                      opacity: 1,
                    },
                    rest2: {
                      opacity: 0,
                    },
                  }}
                  transition={{ delay: 0.2 }}
                  className="text-sm whitespace-nowrap"
                >
                  Delete Message
                </motion.p>
              </AnimatePresence>
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col mt-4 gap-2 mb-2">
          <AnimatePresence initial={false}>
            {shownEmails.reverse().map((email) => (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                key={email.header}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                }}
                onClick={() => setSelectedEmail(email)}
                className={`${
                  selectedEmail === email
                    ? "border-blue-400"
                    : "border-transparent"
                } flex flex-col rounded-md shadow-sm hover:text-white hover:bg-blue-500 cursor-pointer group border mx-4`}
              >
                <div className="p-4">
                  <p className="text-lg font-semibold">{email.header}</p>
                  <p className="text-gray-400 group-hover:text-white">
                    {email.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="col-span-4 bg-white overflow-y-auto p-8 shadow-md">
        <h1 className="text-xl font-semibold mb-2">{selectedEmail.header}</h1>
        <p>{selectedEmail.text}</p>
      </div>
    </div>
  );
}

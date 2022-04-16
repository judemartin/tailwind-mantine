import { Button, Table, Modal, Group, TextInput } from "@mantine/core";
import { useState } from "react";
import Users from "./Users";
const Transactions = () => {
  const [value, setValue] = useState("");
  const [opened, setOpened] = useState(false);
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="space-x-10">
        <button className="bg-indigo-500 text-white p-3 w-40 h-15 dark:bg-pink-500 rounded-full">
          Settings
        </button>
        <button
          onClick={() => setOpened(true)}
          className="bg-indigo-500 text-white p-3 w-40 h-15 dark:bg-pink-500 rounded-full"
        >
          + Transaction
        </button>
      </div>
      <Users />
      <>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Introduce yourself!"
        >
          <div className="flex space-x-20 items-center">
            <div className="text-xl">Name</div>
            <input
              type="text"
              className="dark:bg-black dark:text-green-500 p-2 rounded-md focus:outline-none"
              placeholder="Name"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
          </div>
          <div className="flex space-x-20 items-center mt-5">
            <div className="text-xl">Name</div>
            <input
              type="text"
              className="dark:bg-black dark:text-green-500 p-2 rounded-md focus:outline-none"
              placeholder="Name"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
          </div>
          <div className="flex space-x-20 items-center mt-5">
            <div className="text-xl">Name</div>
            <input
              type="text"
              className="dark:bg-black dark:text-green-500 p-2 rounded-md focus:outline-none"
              placeholder="Name"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
          </div>
          <button
            onClick={() => setOpened(true)}
            className="bg-indigo-500 text-white  w-40 h-10 text-center mb-10 text-lg dark:bg-pink-500 rounded-full mt-5"
          >
            Save
          </button>
        </Modal>
      </>
    </div>
  );
};

export default Transactions;

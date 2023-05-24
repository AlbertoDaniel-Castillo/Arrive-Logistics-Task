import MUIDataTable from "mui-datatables";

const MessagesTable = ({ objectMessages }) => {
  objectMessages = JSON.parse(objectMessages);
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "numOfWords",
      label: "Number of Words",
      options: {
        filter: false,
        sort: true,
        sortDirection: "desc",
      },
    },
  ];
  return (
    <MUIDataTable
      title={"Chat Message Count"}
      data={objectMessages}
      columns={columns}
      options={{
        selectableRows: false,
      }}
    />
  );
};

export default MessagesTable;

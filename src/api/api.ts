// api.ts
export const getTableDataApi = () => {
  const data = [
    {
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-04",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-01",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 100);
  });
};

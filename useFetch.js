const BASE_URL = "https://jsonplaceholder.typicode.com";

// fetch(`${BASE_URL}///posts`)
//   .then((response) => response.json())
//   .then((data) => console.log("Data",data))
//   .catch((err) => console.log("Error",err));

const fetchData = async (endPoint) => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  try {
    const response = await fetch(`${BASE_URL}${endPoint}`, options);

    const data = await response.json();

    console.log("Status", response.status);
    console.log("StatusText", response.statusText);
    console.log("Data", data);
  } catch (error) {
    console.log(error);
  }
};

const createData = async (endPoint, data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${BASE_URL}${endPoint}`, options);

    const data = await response.json();

    console.log("Status", response.status);
    console.log("StatusText", response.statusText);
    console.log("Data", data);
  } catch (error) {
    console.log(error);
  }
};

const upsertData = async (endPoint, dataToUpdate) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(dataToUpdate),
  };

  try {
    const response = await fetch(`${BASE_URL}${endPoint}`, options);

    const data = await response.json();

    console.log("Status", response.status);
    console.log("StatusText", response.statusText);
    console.log("Data", data);
  } catch (error) {
    console.log(error);
  }
};

const updateData = async (endPoint, dataToPatch) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(dataToPatch),
  };

  try {
    const response = await fetch(`${BASE_URL}${endPoint}`, options);

    const data = await response.json();

    console.log("Status", response.status);
    console.log("StatusText", response.statusText);
    console.log("Data", data);
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (endPoint) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  try {
    const response = await fetch(`${BASE_URL}${endPoint}`, options);

    const data = await response.json();

    console.log("Status", response.status);
    console.log("StatusText", response.statusText);
    console.log("Data", data);
  } catch (error) {
    console.log(error);
  }
};

// 1 GET Request
// fetchData("/posts");

// 2 POST Request
// createData("/posts", {
//   title: "Teachers Day",
//   body: "Happy Teachers Day",
//   userId: 5,
// });

// 3 PUT Request
// upsertData("/posts/1", {
//   id: 1,
//   title: "foo",
//   body: "bar",
//   userId: 1,
// });

//4 PATCH Request
// updateData("/posts/1", {
//   title: 'foo',
// });

// 5 DELETE Request
deleteData("/posts/1");

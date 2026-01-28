// 🔹 GET
export const fetchUsers = async (setRowData, setLoading, gridRef) => {
  try {
    gridRef.current?.showLoadingOverlay();
    const res = await fetch("http://localhost:5000/users/getUser");
    const data = await res.json();

    setRowData(
      data.data.map((u) => ({
        id: u.id,
        name: u.name,
        address: u.address
      }))
    );
  } catch (e) {
    console.error("Fetch failed", e);
  } finally {
    setLoading(false);
  }
};

// 🔹 POST
export const postUsers = async ({ name, address }, setLoading, fetchUsersCallback) => {
  try {
    setLoading(true);
    await fetch("http://localhost:5000/users/createUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, address })
    });
    await fetchUsersCallback();
  } catch (e) {
    console.error("Create failed", e);
  } finally {
    setLoading(false);
  }
};

// 🔹 UPDATE (ONLY CHANGED FIELDS)
export const updateUsers = async ({ id, name, address }) => {
  await fetch("http://localhost:5000/users/updateUser", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, name, address })
  });
};

// 🔹 DELETE
export const handleDelete = async (id, fetchUsersCallback) => {
  try {
    await fetch("http://localhost:5000/users/deleteUser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    });
    fetchUsersCallback();
  } catch (e) {
    console.log(e);
  }
};

// 🔹 AG GRID EDIT HANDLER
export const onCellValueChanged = async (params, setRowData, updateUsersCallback) => {
  const updatedrows = params.data;

  // optimistic UI update
  setRowData((prev) =>
    prev.map((row) =>
      row.id === updatedrows.id ? updatedrows : row
    )
  );

  try {
    await updateUsersCallback(updatedrows);
  } catch (e) {
    console.error("Update failed", e);

    // rollback safely
    params.node.setData(params.oldData);
  }
};


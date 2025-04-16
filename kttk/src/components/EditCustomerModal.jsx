import React from "react";
import { Modal, Box, TextField, Button, MenuItem, Grid } from "@mui/material";

function EditCustomerModal({ open, onClose, customer, setCustomer, onSave }) {
  const handleChange = (field) => (event) => {
    setCustomer({ ...customer, [field]: event.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCustomer({ ...customer, avatar: URL.createObjectURL(file) });
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="bg-white p-6  rounded shadow-lg w-[600px] mx-auto mt-[12%]">
        <h2 className="text-xl font-bold mb-4">Edit Customer</h2>

        {/* Avatar section */}
        <Box className="mb-4 flex items-center gap-4">
          {customer?.avatar && (
            <img
              src={customer.avatar}
              alt="Avatar"
              className="w-20 h-20 rounded-full border object-cover"
            />
          )}
          <div>
            <label className="block mb-1 text-sm font-medium">Avatar Image</label>
            <input
              type="file"
              accept="img/*"
              onChange={handleImageChange}
              className="block w-full max-w-xs text-sm text-gray-900 border border-gray-300
               rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 
                hover:file:bg-blue-100"
            />
          </div>
        </Box>

        {/* Grid fields: 3 hàng, 2 cột mỗi hàng */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Customer Name"
              variant="outlined"
              value={customer?.customerName || ""}
              onChange={handleChange("customerName")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Company Name"
              variant="outlined"
              value={customer?.companyName || ""}
              onChange={handleChange("companyName")}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Order Value"
              variant="outlined"
              value={customer?.orderValue || ""}
              onChange={handleChange("orderValue")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              label="Order Date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              value={customer?.orderDate?.slice(0, 10) || ""}
              onChange={handleChange("orderDate")}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Status"
              variant="outlined"
              value={customer?.status || ""}
              onChange={handleChange("status")}
              sx={{ minWidth: 100 }} // 👈 chỉnh chiều ngang tối thiểu tại đây
            >

              <MenuItem value="New">New</MenuItem>
              <MenuItem value="In-Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-6">
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" onClick={onSave}>
            Save
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default EditCustomerModal;

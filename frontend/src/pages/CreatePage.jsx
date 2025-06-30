import { useState } from "react";
import { useProductStore } from "../store/product";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Snackbar,
  Paper,
  Stack,
} from "@mui/material";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    setSnackbar({
      open: true,
      message: message,
      severity: success ? "success" : "error",
    });

    if (success) {
      setNewProduct({ name: "", price: "", image: "" });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Stack spacing={4} alignItems="center">
        <Typography variant="h3" component="h1" gutterBottom>
          Create New Product
        </Typography>

        <Paper elevation={3} sx={{ p: 4, width: "100%" }}>
          <Stack spacing={2}>
            <TextField
              label="Product Name"
              variant="outlined"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              fullWidth
            />

            <TextField
              label="Price"
              type="number"
              variant="outlined"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              fullWidth
            />

            <TextField
              label="Image URL"
              variant="outlined"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              fullWidth
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleAddProduct}
              fullWidth
            >
              Add Product
            </Button>
          </Stack>
        </Paper>
      </Stack>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Container>
  );
};

export default CreatePage;

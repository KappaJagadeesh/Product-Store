import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

import {
  Container,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
          background: "linear-gradient(to right, #06b6d4, #3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Current Products 🚀
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
      >
        {products.map((product) => (
          <Grid item xs={12} md={6} lg={4} key={product._id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {products.length === 0 && (
        <Typography
          variant="h6"
          align="center"
          fontWeight="bold"
          color="text.secondary"
          sx={{ mt: 4 }}
        >
          No products found 😢{" "}
          <Link to="/create" style={{ color: "#3b82f6", textDecoration: "underline" }}>
            Create a product
          </Link>
        </Typography>
      )}
    </Container>
  );
};

export default HomePage;
